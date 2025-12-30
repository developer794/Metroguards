import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/**
 * GET /api/bookings
 * Get all bookings with optional filters
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = searchParams.get("limit");

    const where: any = {};
    if (status) {
      where.status = status;
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        site: true,
        quotation: true,
        schedules: {
          orderBy: { shiftDate: "asc" },
        },
        approvedByUser: {
          select: { email: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: limit ? parseInt(limit) : undefined,
    });

    // Calculate stats
    const stats = {
      total: bookings.length,
      confirmed: bookings.filter((b) => b.status === "confirmed").length,
      inProgress: bookings.filter((b) => b.status === "in_progress").length,
      completed: bookings.filter((b) => b.status === "completed").length,
      cancelled: bookings.filter((b) => b.status === "cancelled").length,
    };

    return NextResponse.json({
      success: true,
      bookings,
      stats,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/bookings
 * Create a new booking directly (without quotation)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      clientName,
      clientEmail,
      clientPhone,
      companyName,
      industry,
      serviceType,
      startDate,
      endDate,
      numberOfGuards,
      hoursPerDay,
      siteId,
      notes,
    } = body;

    // Validate required fields
    if (!clientName || !clientEmail || !serviceType || !startDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        clientName,
        clientEmail,
        clientPhone,
        companyName,
        industry,
        serviceType,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        numberOfGuards: numberOfGuards || 1,
        hoursPerDay: hoursPerDay || 8,
        siteId,
        status: "confirmed",
        notes,
        approvedAt: new Date(),
      },
      include: {
        site: true,
      },
    });

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create booking" },
      { status: 500 }
    );
  }
}


