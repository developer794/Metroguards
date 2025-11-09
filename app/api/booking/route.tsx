// app/api/booking/route.tsx
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s = "") =>
  s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

// Sanitize text for PDF (remove characters not supported by WinAnsi encoding)
const sanitizeForPDF = (text: string): string => {
  return text
    .normalize('NFD') // Decompose combined characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\x00-\xFF]/g, '') // Remove non-Latin characters
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '?'); // Replace unsupported chars with ?
};

function maskCard(num: string) {
  const digits = (num || "").replace(/\D/g, "");
  if (!digits) return "—";
  return digits.replace(/.(?=.{4})/g, "•");
}
function last4(num: string) {
  const d = (num || "").replace(/\D/g, "");
  return d.slice(-4) || "";
}

// Generate PDF using pdf-lib
async function generateBookingPDF(data: any): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size
  const { width, height } = page.getSize();
  
  // Load fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  // Colors
  const primaryColor = rgb(0.118, 0.133, 0.278); // #1e2247
  const accentColor = rgb(0.992, 0.773, 0.102); // #fdc51a
  const textColor = rgb(0.2, 0.2, 0.2);
  const lightGray = rgb(0.6, 0.6, 0.6);
  
  let y = height - 50;
  
  // Header
  page.drawText("Security Services Booking", {
    x: 50,
    y,
    size: 24,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 25;
  
  page.drawText("Metropolitan Guard Services Australia", {
    x: 50,
    y,
    size: 12,
    font: helvetica,
    color: lightGray,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Generated on: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}`), {
    x: 50,
    y,
    size: 9,
    font: helvetica,
    color: lightGray,
  });
  y -= 15;
  
  // Yellow line
  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 3,
    color: accentColor,
  });
  y -= 25;
  
  // Helper function to add section
  const addSection = (title: string) => {
    if (y < 100) {
      // Add new page if needed
      const newPage = pdfDoc.addPage([595, 842]);
      y = newPage.getHeight() - 50;
      return newPage;
    }
    page.drawText(title, {
      x: 50,
      y,
      size: 14,
      font: helveticaBold,
      color: primaryColor,
    });
    y -= 20;
    return page;
  };
  
  // Helper function to add field
  const addField = (label: string, value: string) => {
    if (y < 80) {
      const newPage = pdfDoc.addPage([595, 842]);
      y = newPage.getHeight() - 50;
    }
    const text = sanitizeForPDF(`${label} ${value || "—"}`);
    page.drawText(text, {
      x: 60,
      y,
      size: 10,
      font: helvetica,
      color: textColor,
      maxWidth: width - 120,
    });
    y -= 15;
  };
  
  // Client Details
  addSection("Client Details");
  addField("Quote No.:", data.quoteNo || "—");
  addField("Commencement Date:", data.commencementDate || "—");
  addField("Client Name:", data.clientName);
  addField("ABN:", data.abn || "—");
  addField("Site Name:", data.siteName || "—");
  addField("Onsite Contact:", data.onsiteContact || "—");
  addField("Address:", `${data.address}, ${data.suburb}, ${data.state} ${data.postCode}`);
  addField("Phone:", data.premisePhone || "—");
  addField("Email:", data.clientEmail);
  y -= 10;
  
  // Invoicing Details
  addSection("Invoicing Details");
  addField("Client Name:", data.invoiceClientName || "—");
  addField("Accounts Contact:", data.accountsContact || "—");
  addField("ABN:", data.invoiceABN || "—");
  addField("Phone:", data.invoicePhone || "—");
  addField("Address:", `${data.invoiceAddress || "—"}, ${data.invoiceSuburb || "—"}, ${data.invoiceState || "—"} ${data.invoicePostCode || "—"}`);
  addField("Email:", data.invoiceEmail || "—");
  y -= 10;
  
  // Services Required
  addSection("Services Required");
  addField("Service Types:", data.serviceType || "—");
  addField("From Date/Time:", `${data.fromDate || "—"} ${data.fromTime || ""}`);
  addField("To Date/Time:", `${data.toDate || "—"} ${data.toTime || ""}`);
  addField("Guards Required:", data.guardRequired || "—");
  y -= 10;
  
  // Site Brief
  if (data.siteBrief) {
    addSection("Site Brief / Instructions");
    const briefLines = data.siteBrief.split('\n');
    for (const line of briefLines) {
      if (y < 80) break;
      page.drawText(line, {
        x: 60,
        y,
        size: 9,
        font: helvetica,
        color: textColor,
        maxWidth: width - 120,
      });
      y -= 12;
    }
    y -= 10;
  }
  
  // Payment Information
  addSection("Payment Information");
  const paymentMethod = data.paymentMethod === "creditCard" ? "Credit Card" : data.paymentMethod === "eft" ? "EFT" : "—";
  addField("Payment Method:", paymentMethod);
  
  if (data.paymentMethod === "creditCard") {
    addField("Cardholder Name:", data.cardholderName || "—");
    addField("Card Type:", data.cardType || "—");
    addField("Card Number (Last 4):", data.ccLast4 || "—");
    y -= 5;
    page.drawText("Full card details are not stored for security. Authorization confirmed.", {
      x: 60,
      y,
      size: 9,
      font: helvetica,
      color: rgb(0.52, 0.39, 0.02),
      maxWidth: width - 120,
    });
    y -= 15;
  }
  y -= 10;
  
  // Additional Information
  if (data.additionalInfo) {
    addSection("Additional Information");
    const infoLines = data.additionalInfo.split('\n');
    for (const line of infoLines) {
      if (y < 80) break;
      page.drawText(line, {
        x: 60,
        y,
        size: 9,
        font: helvetica,
        color: textColor,
        maxWidth: width - 120,
      });
      y -= 12;
    }
    y -= 10;
  }
  
  // Agreement
  addSection("Agreement & Signature");
  addField("Signature:", data.signature1 || "—");
  addField("Date:", data.date1 || "—");
  
  // Footer
  page.drawLine({
    start: { x: 50, y: 80 },
    end: { x: width - 50, y: 80 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });
  
  page.drawText("Metropolitan Guard Services Australia", {
    x: width / 2 - 100,
    y: 60,
    size: 8,
    font: helvetica,
    color: lightGray,
  });
  
  page.drawText("Phone: 1300 661 378 | Email: info@metroguard.com.au", {
    x: width / 2 - 115,
    y: 48,
    size: 8,
    font: helvetica,
    color: lightGray,
  });
  
  page.drawText("www.metroguard.com.au", {
    x: width / 2 - 55,
    y: 36,
    size: 8,
    font: helvetica,
    color: lightGray,
  });
  
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Client details
    const quoteNo = String(form.get("quoteNo") || "");
    const commencementDate = String(form.get("commencementDate") || "");
    const clientName = String(form.get("clientName") || "").trim();
    const abn = String(form.get("abn") || "");
    const siteName = String(form.get("siteName") || "");
    const onsiteContact = String(form.get("onsiteContact") || "");
    const address = String(form.get("address") || "").trim();
    const suburb = String(form.get("suburb") || "").trim();
    const state = String(form.get("state") || "").trim();
    const postCode = String(form.get("postCode") || "").trim();
    const premisePhone = String(form.get("premisePhone") || "");
    const fax = String(form.get("fax") || "");
    const clientEmail = String(form.get("clientEmail") || "").trim();

    // Invoicing
    const invoiceClientName = String(form.get("invoiceClientName") || "");
    const keys = String(form.get("keys") || "");
    const accountsContact = String(form.get("accountsContact") || "");
    const invoiceABN = String(form.get("invoiceABN") || "");
    const invoicePhone = String(form.get("invoicePhone") || "");
    const invoiceAddress = String(form.get("invoiceAddress") || "");
    const invoiceSuburb = String(form.get("invoiceSuburb") || "");
    const invoiceState = String(form.get("invoiceState") || "");
    const invoicePostCode = String(form.get("invoicePostCode") || "");
    const invoiceEmail = String(form.get("invoiceEmail") || "");

    // Services required
    const serviceType = form.getAll("serviceType").map(String); // multiple checkboxes
    const fromDate = String(form.get("fromDate") || "");
    const fromTime = String(form.get("fromTime") || "");
    const toDate = String(form.get("toDate") || "");
    const toTime = String(form.get("toTime") || "");
    const guardRequired = String(form.get("guardRequired") || "");

    // Site brief + additional info
    const siteBrief = String(form.get("siteBrief") || "");
    const additionalInfo = String(form.get("additionalInfo") || "");

    // Payment
    const paymentMethod = String(form.get("paymentMethod") || ""); // creditCard | eft | ""
    const customerName = String(form.get("customerName") || "");
    const tradingName = String(form.get("tradingName") || "");
    const cardholderName = String(form.get("cardholderName") || "");
    const cardType = String(form.get("cardType") || ""); // MasterCard/Visa/Amex
    const cardNumber = String(form.get("cardNumber") || "");
    const cvv = String(form.get("cvv") || "");
    const expiry = String(form.get("expiry") || "");
    const signature = String(form.get("signature") || "");
    const authorization = !!form.get("authorization");

    // Terms/sign
    const signature1 = String(form.get("signature1") || "");
    const date1 = String(form.get("date1") || "");

    // Basic required checks
    if (!clientName || !address || !suburb || !state || !postCode || !clientEmail) {
      return NextResponse.json({ success:false, error:"Missing required client fields" }, { status:400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clientEmail)) {
      return NextResponse.json({ success:false, error:"Invalid client email" }, { status:400 });
    }

    // If credit card selected, require authorization + minimal details
    if (paymentMethod === "creditCard") {
      if (!authorization) {
        return NextResponse.json({ success:false, error:"Authorization is required for credit card payments" }, { status:400 });
      }
      if (!cardholderName || !cardNumber || !expiry) {
        return NextResponse.json({ success:false, error:"Cardholder name, card number and expiry are required" }, { status:400 });
      }
      // DO NOT email/store full CVV/PAN. We will redact in the email.
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json({ success:false, error:"BOOKING_TO_EMAIL/CONTACT_TO_EMAIL not configured" }, { status:500 });
    }

    const subject = `New Booking — ${clientName}${siteName ? ` @ ${siteName}` : ""}`;
    const services = serviceType.length ? serviceType.join(", ") : "—";
    const schedule =
      (fromDate || fromTime || toDate || toTime)
        ? `${fromDate || "—"} ${fromTime || ""} → ${toDate || "—"} ${toTime || ""}`.trim()
        : "—";

    // Build safe payment summary (redacted)
    const ccLast4 = last4(cardNumber);
    const ccMasked = maskCard(cardNumber);
    const cvvMasked = cvv ? "•••" : "—";

    const paymentSummary = paymentMethod === "creditCard"
      ? `
        <p><strong>Payment Method:</strong> Credit Card</p>
        <p><strong>Cardholder:</strong> ${esc(cardholderName || "—")}</p>
        <p><strong>Card Type:</strong> ${esc(cardType || "—")}</p>
        <p><strong>Card Number:</strong> ${esc(ccMasked)} (Last 4: ${esc(ccLast4)})</p>
        <p><strong>Expiry:</strong> ${esc(expiry || "—")}</p>
        <p><strong>CVV:</strong> ${cvvMasked}</p>
        <p><strong>Authorization:</strong> ${authorization ? "Yes" : "No"}</p>
      `
      : `
        <p><strong>Payment Method:</strong> ${paymentMethod === "eft" ? "EFT" : "—"}</p>
      `;

    // Prepare data for PDF
    const pdfData = {
      quoteNo,
      commencementDate,
      clientName,
      abn,
      siteName,
      onsiteContact,
      address,
      suburb,
      state,
      postCode,
      premisePhone,
      clientEmail,
      invoiceClientName,
      accountsContact,
      invoiceABN,
      invoicePhone,
      invoiceAddress,
      invoiceSuburb,
      invoiceState,
      invoicePostCode,
      invoiceEmail,
      serviceType: services,
      fromDate,
      fromTime,
      toDate,
      toTime,
      guardRequired,
      siteBrief,
      additionalInfo,
      paymentMethod,
      cardholderName,
      cardType,
      ccLast4,
      signature1,
      date1,
    };

    // Generate PDF
    const pdfBuffer = await generateBookingPDF(pdfData);
    const pdfBase64 = pdfBuffer.toString("base64");
    const filename = `Booking-${clientName.replace(/[^a-zA-Z0-9]/g, "_")}-${Date.now()}.pdf`;

    const html = `
      <h2>New Booking</h2>

      <h3>Client Details</h3>
      <p><strong>Quote No.:</strong> ${esc(quoteNo || "—")}</p>
      <p><strong>Commencement Date:</strong> ${esc(commencementDate || "—")}</p>
      <p><strong>Client Name:</strong> ${esc(clientName)}</p>
      <p><strong>ABN:</strong> ${esc(abn || "—")}</p>
      <p><strong>Site Name:</strong> ${esc(siteName || "—")}</p>
      <p><strong>Onsite Contact:</strong> ${esc(onsiteContact || "—")}</p>
      <p><strong>Address:</strong> ${esc(address)}, ${esc(suburb)}, ${esc(state)} ${esc(postCode)}</p>
      <p><strong>Premise Phone:</strong> ${esc(premisePhone || "—")} &nbsp; <strong>Fax:</strong> ${esc(fax || "—")}</p>
      <p><strong>Email:</strong> ${esc(clientEmail)}</p>

      <h3>Invoicing Details</h3>
      <p><strong>Client Name:</strong> ${esc(invoiceClientName || "—")}</p>
      <p><strong>Keys:</strong> ${esc(keys || "—")} &nbsp; <strong>Accounts Contact:</strong> ${esc(accountsContact || "—")}</p>
      <p><strong>ABN:</strong> ${esc(invoiceABN || "—")} &nbsp; <strong>Phone:</strong> ${esc(invoicePhone || "—")}</p>
      <p><strong>Address:</strong> ${esc(invoiceAddress || "—")}, ${esc(invoiceSuburb || "—")}, ${esc(invoiceState || "—")} ${esc(invoicePostCode || "—")}</p>
      <p><strong>Email:</strong> ${esc(invoiceEmail || "—")}</p>

      <h3>Services Required</h3>
      <p><strong>Types:</strong> ${esc(services)}</p>
      <p><strong>Schedule:</strong> ${esc(schedule)}</p>
      <p><strong>Guards Required:</strong> ${esc(guardRequired || "—")}</p>

      <h3>Site Brief / Instructions</h3>
      <p>${esc(siteBrief || "—").replace(/\n/g,"<br/>")}</p>

      <h3>Payment</h3>
      ${paymentSummary}

      <h3>Additional Information</h3>
      <p>${esc(additionalInfo || "—").replace(/\n/g,"<br/>")}</p>

      <h3>Agreement</h3>
      <p><strong>Signature:</strong> ${esc(signature1 || "—")} &nbsp; <strong>Date:</strong> ${esc(date1 || "—")}</p>
    `;

    const text = `New Booking

Client Details
--------------
Quote No.: ${quoteNo || "—"}
Commencement Date: ${commencementDate || "—"}
Client Name: ${clientName}
ABN: ${abn || "—"}
Site Name: ${siteName || "—"}
Onsite Contact: ${onsiteContact || "—"}
Address: ${address}, ${suburb}, ${state} ${postCode}
Premise Phone: ${premisePhone || "—"}  Fax: ${fax || "—"}
Email: ${clientEmail}

Invoicing Details
-----------------
Client Name: ${invoiceClientName || "—"}
Keys: ${keys || "—"}  Accounts Contact: ${accountsContact || "—"}
ABN: ${invoiceABN || "—"}  Phone: ${invoicePhone || "—"}
Address: ${invoiceAddress || "—"}, ${invoiceSuburb || "—"}, ${invoiceState || "—"} ${invoicePostCode || "—"}
Email: ${invoiceEmail || "—"}

Services Required
-----------------
Types: ${services}
Schedule: ${schedule}
Guards Required: ${guardRequired || "—"}

Site Brief / Instructions
-------------------------
${siteBrief || "—"}

Payment
-------
Method: ${paymentMethod || "—"}
Cardholder: ${cardholderName || "—"}
Card Type: ${cardType || "—"}
Card Number: ${maskCard(cardNumber)} (Last 4: ${last4(cardNumber)})
Expiry: ${expiry || "—"}
CVV: ${cvv ? "***" : "—"}
Authorization: ${authorization ? "Yes" : "No"}

Additional Information
----------------------
${additionalInfo || "—"}

Agreement
---------
Signature: ${signature1 || "—"}   Date: ${date1 || "—"}
`;

    // EMAIL 1: Admin notification with PDF
    await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to,
      subject,
      html,
      text,
      replyTo: clientEmail || undefined,
      attachments: [
        {
          filename,
          content: pdfBase64,
        },
      ],
    });

    // EMAIL 2: Client confirmation with PDF
    const clientHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e2247 0%, #2c3e50 100%); color: #fdc51a; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Booking Confirmed!</h1>
          <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px;">Metropolitan Guard Services Australia</p>
        </div>
        
        <div style="background: #ffffff; padding: 30px; border: 3px solid #fdc51a; border-top: none; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; color: #333333; margin-bottom: 20px;">
            Dear <strong>${clientName}</strong>,
          </p>
          
          <p style="font-size: 14px; color: #555555; line-height: 1.6;">
            Thank you for choosing Metropolitan Guard Services! We've successfully received your booking request.
          </p>
          
          <div style="background: #f8f9fa; border-left: 4px solid #fdc51a; padding: 15px; margin: 20px 0;">
            <h3 style="color: #1e2247; font-size: 16px; margin: 0 0 10px 0;">Booking Details:</h3>
            <p style="margin: 5px 0; color: #555555; font-size: 14px;"><strong>Client Name:</strong> ${clientName}</p>
            <p style="margin: 5px 0; color: #555555; font-size: 14px;"><strong>Site:</strong> ${siteName || address}</p>
            <p style="margin: 5px 0; color: #555555; font-size: 14px;"><strong>Services:</strong> ${services}</p>
            <p style="margin: 5px 0; color: #555555; font-size: 14px;"><strong>Schedule:</strong> ${schedule}</p>
          </div>
          
          <p style="font-size: 14px; color: #555555; line-height: 1.6;">
            A complete copy of your booking form is attached as a PDF document for your records.
          </p>
          
          <div style="background: linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 100%); border: 2px solid rgba(253, 197, 26, 0.3); border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h4 style="color: #1e2247; margin: 0 0 10px 0; font-size: 14px;">What Happens Next?</h4>
            <ol style="margin: 0; padding-left: 20px; color: #555555; font-size: 13px; line-height: 1.8;">
              <li>Our operations team will review your booking details</li>
              <li>We'll contact you within 24 hours to confirm service details</li>
              <li>Your professional security team will be assigned</li>
              <li>Service deployment on your requested date</li>
            </ol>
          </div>
          
          <p style="font-size: 14px; color: #555555; line-height: 1.6;">
            If you have any questions or need immediate assistance, please don't hesitate to contact us at 
            <a href="tel:1300661378" style="color: #1e2247; text-decoration: none; font-weight: bold;">1300 661 378</a>.
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #eceff3;">
            <p style="color: #999999; font-size: 12px; margin: 5px 0;">Metropolitan Guard Services Australia</p>
            <p style="color: #999999; font-size: 12px; margin: 5px 0;">Phone: 1300 661 378 | Email: info@metroguard.com.au</p>
            <p style="color: #999999; font-size: 12px; margin: 5px 0;">www.metroguard.com.au</p>
          </div>
        </div>
      </div>
    `;

    const clientText = `
Booking Confirmed!

Dear ${clientName},

Thank you for choosing Metropolitan Guard Services! We've successfully received your booking request.

Booking Details:
- Client Name: ${clientName}
- Site: ${siteName || address}
- Services: ${services}
- Schedule: ${schedule}

A complete copy of your booking form is attached as a PDF document for your records.

What Happens Next?
1. Our operations team will review your booking details
2. We'll contact you within 24 hours to confirm service details
3. Your professional security team will be assigned
4. Service deployment on your requested date

If you have any questions or need immediate assistance, please contact us at 1300 661 378.

Best regards,
Metropolitan Guard Services Australia
Phone: 1300 661 378
Email: info@metroguard.com.au
www.metroguard.com.au
    `;

    await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: clientEmail,
      subject: "Booking Confirmation - Metropolitan Guard Services",
      html: clientHtml,
      text: clientText,
      attachments: [
        {
          filename,
          content: pdfBase64,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("booking route error:", err);
    return NextResponse.json({ success:false, error:"Submission failed" }, { status:500 });
  }
}
