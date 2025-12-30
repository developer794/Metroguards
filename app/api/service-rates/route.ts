import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SERVICE_RATES, GST_RATE, OVERTIME } from "@/lib/services/rateCalculator";

/**
 * GET /api/service-rates
 * Get all active service rates
 */
export async function GET() {
  try {
    // Try to get rates from database first
    const dbRates = await prisma.serviceRate.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    });

    // If no database rates, return the hardcoded rates
    const rates = dbRates.length > 0
      ? dbRates.map((rate) => ({
          id: rate.id,
          name: rate.name,
          description: rate.description,
          hourlyRate: Number(rate.hourlyRate),
          overtimeMultiplier1: Number(rate.overtimeMultiplier1),
          overtimeMultiplier2: Number(rate.overtimeMultiplier2),
          isActive: rate.isActive,
          effectiveFrom: rate.effectiveFrom,
          effectiveTo: rate.effectiveTo,
        }))
      : Object.entries(SERVICE_RATES).map(([key, value]) => ({
          name: key,
          description: value.description,
          hourlyRate: value.rate,
          overtimeMultiplier1: OVERTIME.FIRST_2_HOURS,
          overtimeMultiplier2: OVERTIME.BEYOND_2_HOURS,
          isActive: true,
        }));

    return NextResponse.json({
      success: true,
      rates,
      gstRate: GST_RATE,
      overtimeRules: {
        standardHoursPerDay: OVERTIME.STANDARD_HOURS_PER_DAY,
        first2HoursMultiplier: OVERTIME.FIRST_2_HOURS,
        beyond2HoursMultiplier: OVERTIME.BEYOND_2_HOURS,
      },
      rateCard: [
        { type: "Weekday Day (6am-6pm)", rate: "$40.70/hr" },
        { type: "Weekday Night (6pm-6am)", rate: "$46.00/hr" },
        { type: "Saturday", rate: "$59.50/hr" },
        { type: "Sunday", rate: "$79.50/hr" },
        { type: "Public Holiday", rate: "$95.00/hr" },
        { type: "New Year's Eve", rate: "$110.00/hr" },
      ],
    });
  } catch (error) {
    console.error("Error fetching service rates:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch service rates" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/service-rates
 * Update or create a service rate
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, hourlyRate, description, overtimeMultiplier1, overtimeMultiplier2 } = body;

    if (!name || !hourlyRate) {
      return NextResponse.json(
        { success: false, error: "Name and hourlyRate are required" },
        { status: 400 }
      );
    }

    const rate = await prisma.serviceRate.upsert({
      where: { name },
      update: {
        hourlyRate,
        description,
        overtimeMultiplier1: overtimeMultiplier1 || 1.5,
        overtimeMultiplier2: overtimeMultiplier2 || 2.0,
        updatedAt: new Date(),
      },
      create: {
        name,
        hourlyRate,
        description,
        overtimeMultiplier1: overtimeMultiplier1 || 1.5,
        overtimeMultiplier2: overtimeMultiplier2 || 2.0,
      },
    });

    return NextResponse.json({
      success: true,
      rate,
    });
  } catch (error) {
    console.error("Error updating service rate:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update service rate" },
      { status: 500 }
    );
  }
}

