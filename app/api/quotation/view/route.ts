import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/**
 * GET /api/quotation/view?token=xxx
 * View a quotation by its unique token
 * Also marks the quotation as "viewed" if currently in "sent" status
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token is required" },
        { status: 400 }
      );
    }

    // For now, we'll use the quotation ID encoded in the token
    // In production, you should use a proper token table or JWT
    // The token format could be: base64(quotationId:timestamp:signature)
    
    // Simple implementation: try to extract quotation ID from token
    // In a real implementation, you would have a quotation_tokens table
    let quotationId: number | null = null;

    try {
      // Try to decode if it's a simple base64 encoded ID
      const decoded = Buffer.from(token, "hex").toString("utf8");
      const parts = decoded.split(":");
      if (parts.length >= 1) {
        quotationId = parseInt(parts[0], 10);
      }
    } catch {
      // If decoding fails, try using the last part of the token as ID
      // This is a fallback for demo purposes
      const numericPart = token.match(/\d+/);
      if (numericPart) {
        quotationId = parseInt(numericPart[0], 10);
      }
    }

    // If we still can't get an ID, search by a potential stored token field
    // For demo, we'll just use the most recent sent quotation
    let quotation;

    if (quotationId && !isNaN(quotationId)) {
      quotation = await prisma.quotation.findUnique({
        where: { id: quotationId },
      });
    }

    // Fallback: try to find by matching conditions
    if (!quotation) {
      // In production, you would store tokens properly
      // For now, return an error
      return NextResponse.json(
        { success: false, error: "Invalid or expired quotation link" },
        { status: 404 }
      );
    }

    // Check if quotation exists and is accessible
    if (!quotation) {
      return NextResponse.json(
        { success: false, error: "Quotation not found" },
        { status: 404 }
      );
    }

    // Update status to "viewed" if currently "sent"
    if (quotation.status === "sent") {
      await prisma.quotation.update({
        where: { id: quotation.id },
        data: { status: "viewed" },
      });
      quotation.status = "viewed";
    }

    // Return quotation data (excluding sensitive fields)
    return NextResponse.json({
      success: true,
      quotation: {
        id: quotation.id,
        name: quotation.name,
        email: quotation.email,
        phone: quotation.phone,
        companyName: quotation.companyName,
        industry: quotation.industry,
        service: quotation.service,
        location: quotation.location,
        status: quotation.status,
        isApproved: quotation.isApproved,
        guardsRequired: quotation.guardsRequired,
        hoursPerWeek: quotation.hoursPerWeek,
        startDate: quotation.startDate?.toISOString(),
        endDate: quotation.endDate?.toISOString(),
        estimatedCost: quotation.estimatedCost ? Number(quotation.estimatedCost) : null,
        gstAmount: quotation.gstAmount ? Number(quotation.gstAmount) : null,
        grandTotal: quotation.grandTotal ? Number(quotation.grandTotal) : null,
        costBreakdown: quotation.costBreakdown,
        createdAt: quotation.createdAt.toISOString(),
      },
    });
  } catch (error: any) {
    console.error("Error viewing quotation:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load quotation" },
      { status: 500 }
    );
  }
}


