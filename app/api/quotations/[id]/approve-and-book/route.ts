import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  calculateBookingCost,
  calculateShiftCost,
  getDayType,
  getApplicableRate,
  GST_RATE,
} from "@/lib/services/rateCalculator";

/**
 * POST /api/quotations/[id]/approve-and-book
 * Approve a quotation and create a booking with schedules
 */
export async function POST(request: Request, { params }: { params: { id: string } }) {
  const quotationId = Number(params.id);

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
    } = body;

    // 1. Get the quotation
    const quotation = await prisma.quotation.findUnique({
      where: { id: quotationId },
    });

    if (!quotation) {
      return NextResponse.json(
        { success: false, error: "Quotation not found" },
        { status: 404 }
      );
    }

    if (quotation.isApproved) {
      return NextResponse.json(
        { success: false, error: "Quotation already approved" },
        { status: 400 }
      );
    }

    // 2. Calculate the booking cost
    const costCalculation = calculateBookingCost({
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      hoursPerDay,
      guards: numberOfGuards,
      workDays,
    });

    // 3. Create or get site
    let siteId = null;
    if (siteDetails) {
      const site = await prisma.site.create({
        data: {
          name: siteDetails.name || `${quotation.companyName || quotation.name} Site`,
          address: siteDetails.address || quotation.location || 'TBD',
          suburb: siteDetails.suburb,
          postcode: siteDetails.postcode,
          state: siteDetails.state || 'VIC',
          contactName: quotation.name,
          contactPhone: quotation.phone,
          contactEmail: quotation.email,
          industry: quotation.industry,
          specialInstructions: siteDetails.specialInstructions,
        },
      });
      siteId = site.id;
    }

    // 4. Create the booking
    const booking = await prisma.booking.create({
      data: {
        quotationId,
        siteId,
        clientName: quotation.name,
        clientEmail: quotation.email,
        clientPhone: quotation.phone,
        companyName: quotation.companyName,
        industry: quotation.industry,
        serviceType: quotation.service,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        numberOfGuards,
        hoursPerDay,
        estimatedTotalHours: costCalculation.summary.totalHours,
        estimatedTotalCost: costCalculation.summary.subtotal,
        gstAmount: costCalculation.summary.gst,
        grandTotal: costCalculation.summary.total,
        status: 'confirmed',
        notes,
        approvedBy,
        approvedAt: new Date(),
      },
    });

    // 5. Create schedule entries for each shift day
    const scheduleEntries = [];
    for (const day of costCalculation.dailyBreakdown) {
      const shiftDate = new Date(day.date);
      const startTime = new Date(`1970-01-01T09:00:00`); // 9 AM default
      const endHour = 9 + hoursPerDay;
      const endTime = new Date(`1970-01-01T${endHour.toString().padStart(2, '0')}:00:00`);

      for (let guard = 1; guard <= numberOfGuards; guard++) {
        scheduleEntries.push({
          bookingId: booking.id,
          guardName: null, // To be assigned later
          shiftDate,
          startTime,
          endTime,
          breakMinutes: hoursPerDay > 6 ? 30 : 0, // 30 min break for shifts > 6 hours
          rateType: day.rateType,
          hourlyRate: day.baseRate,
          regularHours: day.regularHours,
          overtimeHours1: day.overtimeHours1,
          overtimeHours2: day.overtimeHours2,
          totalCost: day.subtotal / numberOfGuards, // Cost per guard
          isPublicHoliday: day.isPublicHoliday,
          holidayName: day.holidayName,
          status: 'scheduled',
        });
      }
    }

    // Batch create schedules
    await prisma.schedule.createMany({
      data: scheduleEntries,
    });

    // 6. Update the quotation as approved
    await prisma.quotation.update({
      where: { id: quotationId },
      data: {
        isApproved: true,
        approvedAt: new Date(),
        approvedBy,
        bookingId: booking.id,
        status: 'approved',
        estimatedCost: costCalculation.summary.subtotal,
        gstAmount: costCalculation.summary.gst,
        grandTotal: costCalculation.summary.total,
        costBreakdown: JSON.stringify(costCalculation),
        guardsRequired: numberOfGuards,
        hoursPerWeek: hoursPerDay * workDays.length,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    // 7. Get the complete booking with schedules
    const completeBooking = await prisma.booking.findUnique({
      where: { id: booking.id },
      include: {
        schedules: true,
        site: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Quotation approved and booking created successfully",
      booking: completeBooking,
      costBreakdown: costCalculation,
      schedulesCreated: scheduleEntries.length,
    });
  } catch (error) {
    console.error("Error approving quotation:", error);
    return NextResponse.json(
      { success: false, error: "Failed to approve quotation and create booking" },
      { status: 500 }
    );
  }
}

