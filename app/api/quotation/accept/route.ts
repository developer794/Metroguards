import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  calculateBookingCost,
} from "@/lib/services/rateCalculator";

/**
 * Generate unique confirmation number in format MG-XXXXXX
 */
function generateConfirmationNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "MG-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * POST /api/quotation/accept
 * Accept a quotation and create a booking (client-facing endpoint)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token is required" },
        { status: 400 }
      );
    }

    // Extract quotation ID from token
    let quotationId: number | null = null;

    try {
      const decoded = Buffer.from(token, "hex").toString("utf8");
      const parts = decoded.split(":");
      if (parts.length >= 1) {
        quotationId = parseInt(parts[0], 10);
      }
    } catch {
      const numericPart = token.match(/\d+/);
      if (numericPart) {
        quotationId = parseInt(numericPart[0], 10);
      }
    }

    if (!quotationId || isNaN(quotationId)) {
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 400 }
      );
    }

    // Use transaction for atomic operation
    const result = await prisma.$transaction(async (tx) => {
      // Get the quotation
      const quotation = await tx.quotation.findUnique({
        where: { id: quotationId! },
      });

      if (!quotation) {
        throw new Error("Quotation not found");
      }

      if (quotation.isApproved) {
        throw new Error("This quotation has already been accepted");
      }

      // Generate confirmation number
      const confirmationNumber = generateConfirmationNumber();

      // Use stored dates or defaults
      const startDate = quotation.startDate || new Date();
      const endDate = quotation.endDate || new Date();
      const numberOfGuards = quotation.guardsRequired || 1;
      const hoursPerWeek = quotation.hoursPerWeek || 40;
      const hoursPerDay = Math.ceil(Number(hoursPerWeek) / 5);

      // Calculate cost if not already calculated
      let costData = {
        subtotal: quotation.estimatedCost ? Number(quotation.estimatedCost) : 0,
        gst: quotation.gstAmount ? Number(quotation.gstAmount) : 0,
        total: quotation.grandTotal ? Number(quotation.grandTotal) : 0,
        totalHours: hoursPerWeek,
      };

      if (!quotation.grandTotal && startDate && endDate) {
        const costCalculation = calculateBookingCost({
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          hoursPerDay,
          guards: numberOfGuards,
          workDays: [1, 2, 3, 4, 5],
        });

        costData = {
          subtotal: costCalculation.summary.subtotal,
          gst: costCalculation.summary.gst,
          total: costCalculation.summary.total,
          totalHours: costCalculation.summary.totalHours,
        };
      }

      // Create Site record
      const site = await tx.site.create({
        data: {
          name: quotation.companyName 
            ? `${quotation.companyName} Site` 
            : `${quotation.name} Site`,
          address: quotation.location || "TBD",
          state: "VIC",
          contactName: quotation.name,
          contactPhone: quotation.phone || null,
          contactEmail: quotation.email,
          industry: quotation.industry,
          isActive: true,
        },
      });

      // Create the Booking record
      const booking = await tx.booking.create({
        data: {
          quotationId: quotation.id,
          siteId: site.id,
          clientName: quotation.name,
          clientEmail: quotation.email,
          clientPhone: quotation.phone || null,
          companyName: quotation.companyName || null,
          industry: quotation.industry,
          serviceType: quotation.service,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          numberOfGuards,
          hoursPerDay,
          estimatedTotalHours: costData.totalHours,
          estimatedTotalCost: costData.subtotal,
          gstAmount: costData.gst,
          grandTotal: costData.total,
          status: "booking_confirmed",
          approvedAt: new Date(),
        },
      });

      // Create schedule entries
      const scheduleEntries = [];
      const currentDate = new Date(startDate);
      const end = new Date(endDate);

      while (currentDate <= end) {
        const dayOfWeek = currentDate.getDay();
        
        // Only schedule for weekdays by default
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          for (let guard = 1; guard <= numberOfGuards; guard++) {
            scheduleEntries.push({
              bookingId: booking.id,
              guardName: null,
              shiftDate: new Date(currentDate),
              startTime: new Date("1970-01-01T09:00:00"),
              endTime: new Date(`1970-01-01T${(9 + hoursPerDay).toString().padStart(2, "0")}:00:00`),
              breakMinutes: hoursPerDay > 6 ? 30 : 0,
              rateType: "weekday_day",
              hourlyRate: 40.70,
              regularHours: Math.min(hoursPerDay, 8),
              overtimeHours1: Math.min(Math.max(hoursPerDay - 8, 0), 2),
              overtimeHours2: Math.max(hoursPerDay - 10, 0),
              totalCost: hoursPerDay * 40.70,
              isPublicHoliday: false,
              status: "scheduled",
            });
          }
        }
        
        currentDate.setDate(currentDate.getDate() + 1);
      }

      if (scheduleEntries.length > 0) {
        await tx.schedule.createMany({
          data: scheduleEntries,
        });
      }

      // Update quotation as approved
      await tx.quotation.update({
        where: { id: quotation.id },
        data: {
          isApproved: true,
          approvedAt: new Date(),
          bookingId: booking.id,
          status: "booking_confirmed",
        },
      });

      return {
        booking,
        site,
        confirmationNumber,
        schedulesCreated: scheduleEntries.length,
      };
    });

    // Send confirmation emails
    try {
      await sendClientConfirmationEmail(result);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the request for email errors
    }

    return NextResponse.json({
      success: true,
      message: "Quotation accepted successfully",
      confirmationNumber: result.confirmationNumber,
      bookingId: result.booking.id,
    });
  } catch (error: any) {
    console.error("Error accepting quotation:", error);
    
    const message = error.message || "Failed to accept quotation";
    const status = message.includes("not found") ? 404 : 
                   message.includes("already") ? 400 : 500;

    return NextResponse.json(
      { success: false, error: message },
      { status }
    );
  }
}

/**
 * Send confirmation email to client
 */
async function sendClientConfirmationEmail(result: any) {
  const { getResend } = await import("@/lib/resend");
  
  const resend = getResend();
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

  const { booking, confirmationNumber } = result;

  const emailHTML = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.15);">
          <tr>
            <td style="background:linear-gradient(135deg,#10b981,#059669);padding:40px;text-align:center;">
              <div style="width:80px;height:80px;background:#fff;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
                <span style="font-size:40px;">✓</span>
              </div>
              <h1 style="color:#fff;margin:0;font-size:28px;">Booking Confirmed!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;text-align:center;background:#f0fdf4;">
              <p style="color:#166534;font-size:14px;text-transform:uppercase;letter-spacing:2px;margin:0 0 10px;">Confirmation Number</p>
              <p style="color:#166534;font-size:36px;font-weight:700;margin:0;letter-spacing:3px;">${confirmationNumber}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <h2 style="color:#1e2247;margin:0 0 20px;font-size:20px;">Booking Details</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">Service</td>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;color:#1e2247;">${booking.serviceType}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">Start Date</td>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;color:#1e2247;">${formatDate(booking.startDate)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">End Date</td>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;color:#1e2247;">${formatDate(booking.endDate)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">Guards</td>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;color:#1e2247;">${booking.numberOfGuards}</td>
                </tr>
                <tr style="background:#f0fdf4;">
                  <td style="padding:16px 12px;font-weight:600;color:#166534;">Total</td>
                  <td style="padding:16px 12px;text-align:right;font-weight:700;font-size:20px;color:#166534;">${formatCurrency(booking.grandTotal)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 30px 30px;">
              <div style="background:#fdc51a;border-radius:12px;padding:25px;text-align:center;">
                <h3 style="color:#1e2247;margin:0 0 10px;">Need to Make Changes?</h3>
                <p style="color:#1e2247;margin:0 0 15px;">Contact us at least 24 hours before</p>
                <a href="tel:1300731173" style="display:inline-block;background:#1e2247;color:#fdc51a;padding:12px 30px;text-decoration:none;border-radius:8px;font-weight:700;">📞 1300 731 173</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#1e2247;padding:30px;text-align:center;">
              <p style="color:#fdc51a;font-weight:700;margin:0 0 10px;">Metro Guards Security Services</p>
              <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:0;">© ${new Date().getFullYear()} Metro Guards. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // Send to client
  await resend.emails.send({
    from: `Metro Guards Security <${fromEmail}>`,
    to: booking.clientEmail,
    replyTo: adminEmail,
    subject: `Booking Confirmed: ${confirmationNumber} - Metro Guards`,
    html: emailHTML,
  });

  // Notify admin
  await resend.emails.send({
    from: `Metro Guards System <${fromEmail}>`,
    to: adminEmail,
    subject: `New Booking Accepted: ${confirmationNumber}`,
    html: `
      <h2>New Booking via Client Portal</h2>
      <p><strong>Confirmation:</strong> ${confirmationNumber}</p>
      <p><strong>Client:</strong> ${booking.clientName} (${booking.clientEmail})</p>
      <p><strong>Service:</strong> ${booking.serviceType}</p>
      <p><strong>Dates:</strong> ${formatDate(booking.startDate)} - ${formatDate(booking.endDate)}</p>
      <p><strong>Guards:</strong> ${booking.numberOfGuards}</p>
      <p><strong>Total:</strong> ${formatCurrency(booking.grandTotal)}</p>
    `,
  });
}


