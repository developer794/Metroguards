import { NextResponse } from "next/server";
import {
  calculateBookingCost,
  calculateQuickEstimate,
  generateCostSummary,
  SERVICE_RATES,
} from "@/lib/services/rateCalculator";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * POST /api/quotations/[id]/calculate-cost
 * Calculate detailed cost breakdown for a quotation
 */
export async function POST(request: Request, context: RouteContext) {
  try {
    const { id: idStr } = await context.params;
    const body = await request.json();
    const {
      startDate,
      endDate,
      hoursPerDay = 8,
      guards = 1,
      workDays = [1, 2, 3, 4, 5], // Monday to Friday default
      shiftType = 'day',
      useQuickEstimate = false,
      hoursPerWeek,
      weeks,
    } = body;

    let costResult;

    if (useQuickEstimate || (!startDate || !endDate)) {
      // Use quick estimate for preliminary quotes
      costResult = calculateQuickEstimate({
        hoursPerWeek: hoursPerWeek || hoursPerDay * 5,
        guards,
        weeks: weeks || 4,
        shiftType,
      });
    } else {
      // Calculate detailed cost with daily breakdown
      const bookingCost = calculateBookingCost({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        hoursPerDay,
        guards,
        daysPerWeek: workDays.length,
        workDays,
      });

      costResult = {
        ...bookingCost,
        costSummary: generateCostSummary(bookingCost),
      };
    }

    return NextResponse.json({
      success: true,
      quotationId: Number(idStr),
      calculation: costResult,
      rates: SERVICE_RATES,
      gstRate: '10%',
      overtimeRules: {
        first2Hours: '1.5x base rate',
        beyond2Hours: '2x base rate',
        standardHoursPerDay: 8,
      },
    });
  } catch (error) {
    console.error("Error calculating cost:", error);
    return NextResponse.json(
      { success: false, error: "Failed to calculate cost" },
      { status: 500 }
    );
  }
}
