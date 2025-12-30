import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * GET /api/bookings/[id]
 * Get a specific booking with all related data
 */
export async function GET(request: Request, context: RouteContext) {
  const { id: idStr } = await context.params;
  const id = Number(idStr);

  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
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
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, error: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch booking" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/bookings/[id]
 * Update booking status or details
 */
export async function PATCH(request: Request, context: RouteContext) {
  const { id: idStr } = await context.params;
  const id = Number(idStr);

  try {
    const body = await request.json();
    const { status, notes, numberOfGuards, hoursPerDay, endDate } = body;

    const updateData: any = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;
    if (numberOfGuards) updateData.numberOfGuards = numberOfGuards;
    if (hoursPerDay) updateData.hoursPerDay = hoursPerDay;
    if (endDate) updateData.endDate = new Date(endDate);

    const booking = await prisma.booking.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update booking" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/bookings/[id]
 * Cancel/delete a booking
 */
export async function DELETE(request: Request, context: RouteContext) {
  const { id: idStr } = await context.params;
  const id = Number(idStr);

  try {
    // Soft delete by setting status to cancelled
    await prisma.booking.update({
      where: { id },
      data: { status: "cancelled" },
    });

    return NextResponse.json({
      success: true,
      message: "Booking cancelled successfully",
    });
  } catch (error) {
    console.error("Error cancelling booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to cancel booking" },
      { status: 500 }
    );
  }
}
