import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getResend } from "@/lib/resend";
import {
  generateQuotationDocument,
  LEGAL_CLAUSES,
} from "@/lib/services/quotationTemplates";
import { calculateBookingCost, generateCostSummary, SERVICE_RATES } from "@/lib/services/rateCalculator";
import crypto from "crypto";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * POST /api/quotations/[id]/send
 * Send quotation email to client with branded template
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
      customMessage,
      includeRateCard = true,
      includeLegalTerms = true,
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

    // 2. Generate a unique token for the quotation link
    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = new Date();
    tokenExpiry.setDate(tokenExpiry.getDate() + 30); // Token valid for 30 days

    // 3. Calculate cost if dates provided
    let costBreakdown = null;
    if (startDate && endDate) {
      const bookingCost = calculateBookingCost({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        hoursPerDay,
        guards: numberOfGuards,
        workDays,
      });
      costBreakdown = generateCostSummary(bookingCost);
    }

    // 4. Generate quote number
    const quoteNumber = `MG-${new Date().getFullYear()}-${quotationId.toString().padStart(5, "0")}`;

    // 5. Map industry to template key
    const industryMap: { [key: string]: string } = {
      "Construction": "construction",
      "Construction & Infrastructure": "construction",
      "Retail": "retail",
      "Retail & Hospitality": "retail",
      "Healthcare": "healthcare",
      "Healthcare & Aged Care": "healthcare",
      "Corporate": "corporate",
      "Corporate & Commercial": "corporate",
      "Events": "events",
      "Events & Entertainment": "events",
      "Education": "education",
      "Education & Government": "education",
    };

    const industryKey = industryMap[quotation.industry] || "corporate";

    // 6. Generate the quotation document
    const quotationDoc = generateQuotationDocument({
      clientName: quotation.name,
      companyName: quotation.companyName || undefined,
      industry: industryKey,
      service: quotation.service,
      costBreakdown,
      startDate,
      endDate,
      quoteNumber,
    });

    // 7. Get environment variables
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://metroguards.com.au";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@metroguards.com.au";
    const adminEmail = process.env.CONTACT_TO_EMAIL || "admin@metroguards.com.au";

    // 8. Create the quotation link
    const quotationLink = `${siteUrl}/quotation/${token}`;

    // 9. Generate HTML email content
    const emailHTML = generateBrandedQuotationEmail({
      quotation,
      quotationDoc,
      quoteNumber,
      quotationLink,
      customMessage,
      costBreakdown,
      includeRateCard,
      includeLegalTerms,
      startDate,
      endDate,
      hoursPerDay,
      numberOfGuards,
    });

    // 10. Send the email
    const resend = getResend();
    const result = await resend.emails.send({
      from: `Metro Guards Security <${fromEmail}>`,
      to: quotation.email,
      replyTo: adminEmail,
      subject: `Your Security Quote ${quoteNumber} - Metro Guards`,
      html: emailHTML,
    });

    if (result.error) {
      console.error("❌ Resend API Error:", result.error);
      return NextResponse.json(
        { success: false, error: result.error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    // 11. Update quotation with token and sent status
    await prisma.quotation.update({
      where: { id: quotationId },
      data: {
        status: "sent",
        // Store additional data if columns exist
        ...(startDate && { startDate: new Date(startDate) }),
        ...(endDate && { endDate: new Date(endDate) }),
        guardsRequired: numberOfGuards,
        hoursPerWeek: hoursPerDay * workDays.length,
        estimatedCost: costBreakdown?.rawCosts?.subtotal || null,
        gstAmount: costBreakdown?.rawCosts?.gst || null,
        grandTotal: costBreakdown?.rawCosts?.total || null,
      },
    });

    console.log("✅ Quotation email sent successfully! ID:", result.data?.id);

    return NextResponse.json({
      success: true,
      message: "Quotation sent successfully",
      emailId: result.data?.id,
      quoteNumber,
      quotationLink,
    });
  } catch (error: any) {
    console.error("❌ Error sending quotation:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send quotation",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * Generate branded quotation email HTML
 */
function generateBrandedQuotationEmail({
  quotation,
  quotationDoc,
  quoteNumber,
  quotationLink,
  customMessage,
  costBreakdown,
  includeRateCard,
  includeLegalTerms,
  startDate,
  endDate,
  hoursPerDay,
  numberOfGuards,
}: {
  quotation: any;
  quotationDoc: any;
  quoteNumber: string;
  quotationLink: string;
  customMessage?: string;
  costBreakdown: any;
  includeRateCard: boolean;
  includeLegalTerms: boolean;
  startDate?: string;
  endDate?: string;
  hoursPerDay: number;
  numberOfGuards: number;
}) {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount);

  const industryContent = quotationDoc.industryContent;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote ${quoteNumber} - Metro Guards</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="650" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.15);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%); padding: 40px 30px; text-align: center;">
              <img src="https://metroguards.com.au/assets/img/logo/metroguards%20logo%202.png" alt="Metro Guards" style="max-width: 200px; height: auto; margin-bottom: 20px;" />
              <h1 style="color: #fdc51a; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: 1px;">
                SECURITY QUOTATION
              </h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">
                Quote Number: <strong style="color: #fdc51a;">${quoteNumber}</strong>
              </p>
            </td>
          </tr>

          <!-- Yellow Accent Bar -->
          <tr>
            <td style="height: 5px; background: linear-gradient(90deg, #fdc51a 0%, #e7b80f 50%, #fdc51a 100%);"></td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 40px 30px 20px 30px;">
              <p style="color: #1e2247; font-size: 18px; margin: 0;">
                Dear <strong>${quotation.name}</strong>,
              </p>
              <p style="color: #4a5568; font-size: 16px; margin: 15px 0 0 0;">
                Thank you for your interest in Metro Guards Security Services. We are pleased to present your customised quotation for <strong style="color: #1e2247;">${quotation.service}</strong>.
              </p>
              ${customMessage ? `<p style="color: #4a5568; font-size: 16px; margin: 15px 0 0 0; padding: 15px; background: #f7fafc; border-left: 4px solid #fdc51a; border-radius: 0 8px 8px 0;">${customMessage}</p>` : ""}
            </td>
          </tr>

          <!-- Industry Value Proposition -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%); border-radius: 12px; padding: 25px; border: 1px solid #e2e8f0;">
                <h3 style="color: #1e2247; margin: 0 0 15px 0; font-size: 18px;">
                  🏢 ${industryContent.introduction ? "Why Metro Guards?" : "Our Commitment"}
                </h3>
                <p style="color: #4a5568; margin: 0; font-size: 15px;">
                  ${industryContent.valueProposition || "We provide professional security services tailored to your specific needs, backed by ISO certifications and industry-leading expertise."}
                </p>
              </div>
            </td>
          </tr>

          ${costBreakdown ? `
          <!-- Price Highlight -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%); border-radius: 16px; padding: 35px; text-align: center; box-shadow: 0 8px 30px rgba(30, 34, 71, 0.3);">
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px 0;">
                  TOTAL INVESTMENT (INC. GST)
                </p>
                <p style="color: #fdc51a; font-size: 48px; font-weight: 700; margin: 0;">
                  ${costBreakdown.costs?.total || "Quote on Request"}
                </p>
                <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin: 15px 0 0 0;">
                  Based on ${costBreakdown.overview?.totalHours || "your specified"} total hours
                </p>
                <div style="display: flex; justify-content: center; gap: 30px; margin-top: 20px; flex-wrap: wrap;">
                  <div style="text-align: center;">
                    <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px; margin: 0;">Subtotal (ex GST)</p>
                    <p style="color: white; font-size: 18px; font-weight: 600; margin: 5px 0 0 0;">${costBreakdown.costs?.subtotal}</p>
                  </div>
                  <div style="text-align: center;">
                    <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px; margin: 0;">GST (10%)</p>
                    <p style="color: white; font-size: 18px; font-weight: 600; margin: 5px 0 0 0;">${costBreakdown.costs?.gst}</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          ` : ""}

          ${includeRateCard ? `
          <!-- Rate Card -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="color: #1e2247; margin: 0 0 20px 0; font-size: 18px; display: flex; align-items: center;">
                💰 Metro Guards Rate Card
              </h3>
              <table style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <thead>
                  <tr style="background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);">
                    <th style="padding: 14px 16px; text-align: left; color: #fdc51a; font-weight: 600; font-size: 14px;">Shift Type</th>
                    <th style="padding: 14px 16px; text-align: right; color: #fdc51a; font-weight: 600; font-size: 14px;">Hourly Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background: #ffffff;">
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">Weekday Day (6am-6pm)</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600; color: #1e2247;">$40.70/hr</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">Weekday Night (6pm-6am)</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600; color: #1e2247;">$46.00/hr</td>
                  </tr>
                  <tr style="background: #ffffff;">
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">Saturday</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600; color: #1e2247;">$59.50/hr</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">Sunday</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600; color: #1e2247;">$79.50/hr</td>
                  </tr>
                  <tr style="background: #ffffff;">
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">Public Holiday</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600; color: #1e2247;">$95.00/hr</td>
                  </tr>
                  <tr style="background: #fef3c7;">
                    <td style="padding: 12px 16px; color: #92400e; font-weight: 500;">New Year's Eve</td>
                    <td style="padding: 12px 16px; text-align: right; font-weight: 700; color: #92400e;">$110.00/hr</td>
                  </tr>
                </tbody>
              </table>
              <p style="color: #718096; font-size: 13px; margin: 15px 0 0 0;">
                <strong>Overtime Rates:</strong> First 2 hours at 1.5x, beyond 2 hours at 2x base rate.<br/>
                All prices exclude GST. 10% GST will be added to all invoices.
              </p>
            </td>
          </tr>
          ` : ""}

          <!-- Call to Action -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: #fdc51a; border-radius: 16px; padding: 35px; text-align: center;">
                <h3 style="color: #1e2247; margin: 0 0 15px 0; font-size: 22px; font-weight: 700;">
                  Ready to Accept This Quote?
                </h3>
                <p style="color: #1e2247; margin: 0 0 25px 0; font-size: 16px; opacity: 0.9;">
                  Click the button below to review full details and confirm your booking.
                </p>
                <a href="${quotationLink}" style="display: inline-block; background: #1e2247; color: #fdc51a; padding: 16px 40px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; box-shadow: 0 6px 20px rgba(30, 34, 71, 0.3);">
                  VIEW & ACCEPT QUOTE →
                </a>
                <p style="color: #1e2247; font-size: 13px; margin: 20px 0 0 0; opacity: 0.7;">
                  Or call us directly at <strong>1300 731 173</strong>
                </p>
              </div>
            </td>
          </tr>

          ${includeLegalTerms ? `
          <!-- Legal Terms -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: #fffbeb; border: 1px solid #fcd34d; border-radius: 12px; padding: 25px;">
                <h4 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px; display: flex; align-items: center;">
                  ⚠️ Important Terms & Conditions
                </h4>
                <p style="color: #78350f; font-size: 13px; margin: 0 0 12px 0;">
                  <strong>Placement Fee:</strong> ${LEGAL_CLAUSES.placementFee.clause}
                </p>
                <p style="color: #78350f; font-size: 13px; margin: 0 0 12px 0;">
                  <strong>Invoice Disputes:</strong> All invoices are due within 14 days. Disputes must be raised within ${LEGAL_CLAUSES.invoiceDispute.days} business days.
                </p>
                <p style="color: #78350f; font-size: 13px; margin: 0;">
                  <strong>Cancellation:</strong> ${LEGAL_CLAUSES.cancellation.notice} hours notice required. Less than 24 hours incurs a 4-hour minimum charge.
                </p>
              </div>
            </td>
          </tr>
          ` : ""}

          <!-- Certifications -->
          <tr>
            <td style="padding: 0 30px 30px 30px; text-align: center;">
              <p style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">
                Our Certifications & Awards
              </p>
              <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="display: inline-block; background: #f0fdf4; color: #166534; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">ISO 9001</span>
                <span style="display: inline-block; background: #ecfdf5; color: #047857; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">ISO 14001</span>
                <span style="display: inline-block; background: #f0f9ff; color: #0369a1; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">ISO 45001</span>
                <span style="display: inline-block; background: #fef3c7; color: #92400e; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">Australian Achiever Award</span>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%); padding: 35px 30px; text-align: center;">
              <p style="color: #fdc51a; font-weight: 700; font-size: 16px; margin: 0 0 15px 0;">
                Metro Guards Security Services
              </p>
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 0 0 5px 0;">
                📞 1300 731 173 | ✉️ admin@metroguards.com.au
              </p>
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 0 0 15px 0;">
                🌐 www.metroguards.com.au
              </p>
              <p style="color: rgba(255, 255, 255, 0.5); font-size: 12px; margin: 0;">
                Licensed Security Provider | ABN: XX XXX XXX XXX<br/>
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
}

