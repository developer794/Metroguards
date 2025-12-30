import prisma from "@/lib/prisma";
import BookingsClient from "./BookingsClient";

export default async function BookingsPage() {
  // Fetch all bookings with related data
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      site: true,
      quotation: {
        select: {
          id: true,
          name: true,
          email: true,
          industry: true,
          service: true,
        },
      },
      schedules: {
        orderBy: { shiftDate: "asc" },
        take: 5, // Limit for preview
      },
      approvedByUser: {
        select: { email: true },
      },
    },
  });

  // Serialize dates for client component
  const serializedBookings = bookings.map((booking) => ({
    ...booking,
    startDate: booking.startDate.toISOString(),
    endDate: booking.endDate?.toISOString() || null,
    approvedAt: booking.approvedAt?.toISOString() || null,
    createdAt: booking.createdAt.toISOString(),
    updatedAt: booking.updatedAt.toISOString(),
    hoursPerDay: Number(booking.hoursPerDay),
    estimatedTotalHours: booking.estimatedTotalHours ? Number(booking.estimatedTotalHours) : null,
    estimatedTotalCost: booking.estimatedTotalCost ? Number(booking.estimatedTotalCost) : null,
    gstAmount: booking.gstAmount ? Number(booking.gstAmount) : null,
    grandTotal: booking.grandTotal ? Number(booking.grandTotal) : null,
    schedules: booking.schedules.map((s) => ({
      ...s,
      shiftDate: s.shiftDate.toISOString(),
      startTime: s.startTime.toISOString(),
      endTime: s.endTime.toISOString(),
      hourlyRate: Number(s.hourlyRate),
      regularHours: Number(s.regularHours),
      overtimeHours1: Number(s.overtimeHours1),
      overtimeHours2: Number(s.overtimeHours2),
      totalCost: Number(s.totalCost),
      createdAt: s.createdAt.toISOString(),
      updatedAt: s.updatedAt.toISOString(),
    })),
    site: booking.site
      ? {
          ...booking.site,
          createdAt: booking.site.createdAt.toISOString(),
          updatedAt: booking.site.updatedAt.toISOString(),
        }
      : null,
  }));

  // Calculate stats
  const stats = {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    inProgress: bookings.filter((b) => b.status === "in_progress").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
    totalRevenue: bookings
      .filter((b) => b.status !== "cancelled")
      .reduce((sum, b) => sum + (Number(b.grandTotal) || 0), 0),
  };

  return <BookingsClient initialBookings={serializedBookings} initialStats={stats} />;
}
