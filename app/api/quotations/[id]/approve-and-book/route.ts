import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  calculateBookingCost,
  checkPublicHoliday,
} from "@/lib/services/rateCalculator";
import crypto from "crypto";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * Generate unique confirmation number in format MG-XXXXXX
 */
function generateConfirmationNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed confusing chars (0, O, 1, I)
  let result = "MG-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Check public holiday from database
 */
async function checkPublicHolidayFromDB(date: Date, state: string = "VIC") {
  const dateStr = date.toISOString().split("T")[0];
  const holiday = await prisma.publicHoliday.findFirst({
    where: {
      date: new Date(dateStr),
      state,
    },
  });

  if (holiday) {
    return {
      isHoliday: true,
      name: holiday.name,
      isNewYearsEve: holiday.isNewYearsEve,
    };
  }

  return { isHoliday: false };
}

/**
 * POST /api/quotations/[id]/approve-and-book
 * Approve a quotation and create a booking with schedules
 * 
 * TRANSACTION SAFETY: This operation uses database transactions.
 * If any part fails, the entire operation rolls back to maintain data integrity.
 */
export async function POST(request: Request, context: RouteContext) {
  const { id: idStr } = await context.params;
  const quotationId = Number(idStr);

  try {
    const body = await request.json();
    const {
      startDate,
      endDate,
      hoursPerDay = 8,
      numberOfGuards = 1,
      workDays = [1, 2, 3, 4, 5],
      notes,
      approvedBy = 1, // Default admin user
      siteDetails,
      sendConfirmationEmail = true,
    } = body;

    // Validate required fields
    if (!startDate) {
      return NextResponse.json(
        { success: false, error: "Start date is required" },
        { status: 400 }
      );
    }

    // Use database transaction for atomic operation
    const result = await prisma.$transaction(async (tx) => {
      // 1. Get and validate the quotation
      const quotation = await tx.quotation.findUnique({
        where: { id: quotationId },
      });

      if (!quotation) {
        throw new Error("Quotation not found");
      }

      if (quotation.isApproved) {
        throw new Error("Quotation already approved");
      }

      // 2. Generate unique confirmation number
      const confirmationNumber = generateConfirmationNumber();

      // 3. Calculate the booking cost
      const costCalculation = calculateBookingCost({
        startDate: new Date(startDate),
        endDate: new Date(endDate || startDate),
        hoursPerDay,
        guards: numberOfGuards,
        daysPerWeek: workDays.length,
        workDays,
        customRates: null,
      });

      // 4. Create Site record if site details provided
      let siteId: number | null = null;
      if (siteDetails?.address || quotation.location) {
        const site = await tx.site.create({
          data: {
            name: siteDetails?.name || `${quotation.companyName || quotation.name} Site`,
            address: siteDetails?.address || quotation.location || "TBD",
            suburb: siteDetails?.suburb || null,
            postcode: siteDetails?.postcode || null,
            state: siteDetails?.state || "VIC",
            contactName: quotation.name,
            contactPhone: quotation.phone || null,
            contactEmail: quotation.email,
            industry: quotation.industry,
            specialInstructions: siteDetails?.specialInstructions || notes || null,
            isActive: true,
          },
        });
        siteId = site.id;
      }

      // 5. Create the Booking record
      const booking = await tx.booking.create({
        data: {
          quotationId,
          siteId,
          clientName: quotation.name,
          clientEmail: quotation.email,
          clientPhone: quotation.phone || null,
          companyName: quotation.companyName || null,
          industry: quotation.industry,
          serviceType: quotation.service,
          startDate: new Date(startDate),
          endDate: new Date(endDate || startDate),
          numberOfGuards,
          hoursPerDay,
          estimatedTotalHours: costCalculation.summary.totalHours,
          estimatedTotalCost: costCalculation.summary.subtotal,
          gstAmount: costCalculation.summary.gst,
          grandTotal: costCalculation.summary.total,
          status: "booking_confirmed",
          notes: notes || null,
          approvedBy,
          approvedAt: new Date(),
        },
      });

      // 6. Create Schedule entries for each shift day
      const scheduleEntries = [];
      for (const day of costCalculation.dailyBreakdown) {
        const shiftDate = new Date(day.date);
        
        // Check for public holidays from database
        const holidayCheck = await checkPublicHolidayFromDB(shiftDate);
        
        // Calculate start and end times
        const startHour = 9; // Default 9 AM
        const endHour = startHour + hoursPerDay;
        
        // Create entry for each guard
        for (let guard = 1; guard <= numberOfGuards; guard++) {
          scheduleEntries.push({
            bookingId: booking.id,
            guardName: null, // To be assigned later
            shiftDate,
            startTime: new Date(`1970-01-01T${startHour.toString().padStart(2, "0")}:00:00`),
            endTime: new Date(`1970-01-01T${Math.min(endHour, 23).toString().padStart(2, "0")}:00:00`),
            breakMinutes: hoursPerDay > 6 ? 30 : 0, // 30 min break for shifts > 6 hours
            rateType: day.rateType,
            hourlyRate: day.baseRate,
            regularHours: day.regularHours,
            overtimeHours1: day.overtimeHours1,
            overtimeHours2: day.overtimeHours2,
            totalCost: day.subtotal / numberOfGuards, // Cost per guard
            isPublicHoliday: holidayCheck.isHoliday || day.isPublicHoliday,
            holidayName: holidayCheck.name || day.holidayName || null,
            status: "scheduled",
          });
        }
      }

      // Batch create all schedules
      await tx.schedule.createMany({
        data: scheduleEntries,
      });

      // 7. Update the Quotation as approved
      const updatedQuotation = await tx.quotation.update({
        where: { id: quotationId },
        data: {
          isApproved: true,
          approvedAt: new Date(),
          approvedBy,
          bookingId: booking.id,
          status: "booking_confirmed",
          estimatedCost: costCalculation.summary.subtotal,
          gstAmount: costCalculation.summary.gst,
          grandTotal: costCalculation.summary.total,
          costBreakdown: JSON.stringify(costCalculation),
          guardsRequired: numberOfGuards,
          hoursPerWeek: hoursPerDay * workDays.length,
          startDate: new Date(startDate),
          endDate: new Date(endDate || startDate),
        },
      });

      return {
        booking,
        quotation: updatedQuotation,
        siteId,
        confirmationNumber,
        costCalculation,
        schedulesCreated: scheduleEntries.length,
      };
    });

    // 8. Get the complete booking with relations (outside transaction)
    const completeBooking = await prisma.booking.findUnique({
      where: { id: result.booking.id },
      include: {
        schedules: true,
        site: true,
      },
    });

    // 9. Send confirmation email if requested
    if (sendConfirmationEmail) {
      try {
        await sendBookingConfirmationEmail({
          booking: completeBooking,
          confirmationNumber: result.confirmationNumber,
          quotation: result.quotation,
          costCalculation: result.costCalculation,
        });
      } catch (emailError) {
        // Log but don't fail the operation for email errors
        console.error("Failed to send confirmation email:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quotation approved and booking created successfully",
      confirmationNumber: result.confirmationNumber,
      booking: {
        ...completeBooking,
        confirmationNumber: result.confirmationNumber,
      },
      costBreakdown: result.costCalculation,
      schedulesCreated: result.schedulesCreated,
      siteCreated: result.siteId !== null,
    });
  } catch (error: any) {
    console.error("Error approving quotation:", error);
    
    // Provide specific error messages
    const errorMessage = error.message || "Failed to approve quotation and create booking";
    const statusCode = errorMessage.includes("not found") ? 404 : 
                       errorMessage.includes("already approved") ? 400 : 500;

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: statusCode }
    );
  }
}

/**
 * Send booking confirmation email
 */
async function sendBookingConfirmationEmail({
  booking,
  confirmationNumber,
  quotation,
  costCalculation,
}: {
  booking: any;
  confirmationNumber: string;
  quotation: any;
  costCalculation: any;
}) {
  const { getResend } = await import("@/lib/resend");
  
  const resend = getResend();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://metroguards.com.au";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@metroguards.com.au";
  const adminEmail = process.env.CONTACT_TO_EMAIL || "admin@metroguards.com.au";

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(amount);

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-AU", { 
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });

  const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.15);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px; text-align: center;">
              <div style="width: 80px; height: 80px; background: white; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 40px;">✓</span>
              </div>
              <h1 style="color: white; margin: 0; font-size: 28px;">Booking Confirmed!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Your security service has been booked successfully
              </p>
            </td>
          </tr>

          <!-- Confirmation Number -->
          <tr>
            <td style="padding: 30px; text-align: center; background: #f0fdf4;">
              <p style="color: #166534; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px 0;">
                Confirmation Number
              </p>
              <p style="color: #166534; font-size: 36px; font-weight: 700; margin: 0; letter-spacing: 3px;">
                ${confirmationNumber}
              </p>
            </td>
          </tr>

          <!-- Booking Details -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #1e2247; margin: 0 0 20px 0; font-size: 20px;">Booking Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Service</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #1e2247;">${booking.serviceType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Start Date</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #1e2247;">${formatDate(booking.startDate)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">End Date</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #1e2247;">${formatDate(booking.endDate)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Guards</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #1e2247;">${booking.numberOfGuards}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Hours/Day</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #1e2247;">${booking.hoursPerDay}</td>
                </tr>
                <tr style="background: #f0fdf4;">
                  <td style="padding: 16px 12px; font-weight: 600; color: #166534;">Total (inc. GST)</td>
                  <td style="padding: 16px 12px; text-align: right; font-weight: 700; font-size: 20px; color: #166534;">${formatCurrency(booking.grandTotal)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: #f8fafc; border-radius: 12px; padding: 25px;">
                <h3 style="color: #1e2247; margin: 0 0 15px 0; font-size: 18px;">📋 What Happens Next?</h3>
                <ol style="color: #4a5568; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 10px;">Our operations team will contact you to confirm site details</li>
                  <li style="margin-bottom: 10px;">Guards will be assigned and you'll receive their details</li>
                  <li style="margin-bottom: 10px;">You'll receive a reminder 24 hours before service starts</li>
                  <li>After service, you'll receive an invoice within 3 business days</li>
                </ol>
              </div>
            </td>
          </tr>

          <!-- Contact -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: #fdc51a; border-radius: 12px; padding: 25px; text-align: center;">
                <h3 style="color: #1e2247; margin: 0 0 10px 0;">Need to Make Changes?</h3>
                <p style="color: #1e2247; margin: 0 0 15px 0; opacity: 0.9;">
                  Contact us at least 24 hours before your service starts
                </p>
                <a href="tel:1300731173" style="display: inline-block; background: #1e2247; color: #fdc51a; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 700;">
                  📞 1300 731 173
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #1e2247; padding: 30px; text-align: center;">
              <p style="color: #fdc51a; font-weight: 700; margin: 0 0 10px 0;">Metro Guards Security Services</p>
              <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 0;">
                ISO 9001 | ISO 14001 | ISO 45001 Certified<br/>
                © ${new Date().getFullYear()} Metro Guards. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  await resend.emails.send({
    from: `Metro Guards Security <${fromEmail}>`,
    to: booking.clientEmail,
    replyTo: adminEmail,
    subject: `Booking Confirmed: ${confirmationNumber} - Metro Guards`,
    html: emailHTML,
  });

  // Also notify admin
  await resend.emails.send({
    from: `Metro Guards System <${fromEmail}>`,
    to: adminEmail,
    subject: `New Booking: ${confirmationNumber} - ${booking.clientName}`,
    html: `
      <h2>New Booking Created</h2>
      <p><strong>Confirmation:</strong> ${confirmationNumber}</p>
      <p><strong>Client:</strong> ${booking.clientName} (${booking.clientEmail})</p>
      <p><strong>Service:</strong> ${booking.serviceType}</p>
      <p><strong>Dates:</strong> ${formatDate(booking.startDate)} - ${formatDate(booking.endDate)}</p>
      <p><strong>Guards:</strong> ${booking.numberOfGuards}</p>
      <p><strong>Total:</strong> ${formatCurrency(booking.grandTotal)}</p>
      <p><strong>Schedules Created:</strong> ${booking.schedules?.length || 0}</p>
    `,
  });
}
