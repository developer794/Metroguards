// app/api/incident/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s = "") =>
  s.replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#39;");

// Sanitize text for PDF (remove characters not supported by WinAnsi encoding)
const sanitizeForPDF = (text: string): string => {
  return text
    .normalize('NFD') // Decompose combined characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\x00-\xFF]/g, '') // Remove non-Latin characters
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '?'); // Replace unsupported chars with ?
};

// Generate PDF for Incident Report
async function generateIncidentPDF(data: any): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595, 842]); // A4 size
  const { width, height } = page.getSize();
  
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  const primaryColor = rgb(0.118, 0.133, 0.278); // #1e2247
  const accentColor = rgb(0.992, 0.773, 0.102); // #fdc51a
  const textColor = rgb(0.2, 0.2, 0.2);
  const lightGray = rgb(0.6, 0.6, 0.6);
  
  let y = height - 50;
  
  // Header
  page.drawText("Security Incident Report", {
    x: 50,
    y,
    size: 22,
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
  
  page.drawText(`Generated on: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}`, {
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
  y -= 30;
  
  // Event Types Section
  page.drawText("Event Types", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(data.eventTypes || "—"), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 18;
  
  page.drawText(sanitizeForPDF(`Smart ROASTER scanned: ${data.roasterScanned || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 30;
  
  // Officer Details
  page.drawText("Officer Details", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(`Name: ${data.firstName} ${data.lastName}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Email: ${data.email}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Phone: ${data.phone}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Gender: ${data.gender || "—"}  |  Position: ${data.officerPosition || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`License: ${data.licenseNo} (${data.licenseState})`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Callsign: ${data.callsign || "—"}  |  Notified By: ${data.notifiedBy || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 30;
  
  // Incident Date/Location
  page.drawText("Incident Date / Location", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  const windowStr = (data.toDate || data.toTime)
    ? `${data.incidentDate || "—"} ${data.incidentTime || ""} → ${data.toDate || "—"} ${data.toTime || ""}`.trim()
    : `${data.incidentDate || "—"} ${data.incidentTime || ""}`.trim();
  
  page.drawText(sanitizeForPDF(`When: ${windowStr}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`JOB No.: ${data.jobNo || "—"}  |  JOB Time: ${data.jobTime || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Patrol: ${data.patrol || "—"}  |  State: ${data.incidentLicenseState || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Client Type: ${data.clientType || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Client Site: ${data.clientSite || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Supervisor: ${data.supervisor || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 30;
  
  // Check if we need a new page
  if (y < 150) {
    page = pdfDoc.addPage([595, 842]);
    y = page.getSize().height - 50;
  }
  
  // Incident Report
  page.drawText("Incident Report / Details", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 25;
  
  // Wrap message text
  const maxWidth = width - 140;
  const words = sanitizeForPDF(data.incidentReport).split(' ');
  let line = '';
  
  for (const word of words) {
    const testLine = line + word + ' ';
    const testWidth = helvetica.widthOfTextAtSize(testLine, 10);
    
    if (testWidth > maxWidth && line.length > 0) {
      page.drawText(line.trim(), {
        x: 60,
        y,
        size: 10,
        font: helvetica,
        color: textColor,
      });
      line = word + ' ';
      y -= 15;
      
      if (y < 100) {
        page = pdfDoc.addPage([595, 842]);
        y = page.getSize().height - 50;
      }
    } else {
      line = testLine;
    }
  }
  
  if (line.length > 0) {
    page.drawText(line.trim(), {
      x: 60,
      y,
      size: 10,
      font: helvetica,
      color: textColor,
    });
    y -= 25;
  }
  
  // Attachments note
  if (data.attachmentsList && data.attachmentsList !== "None") {
    page.drawText(sanitizeForPDF(`Attachments: ${data.attachmentsList}`), {
      x: 60,
      y,
      size: 9,
      font: helvetica,
      color: lightGray,
    });
  }
  
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

    // Event types (multi-checkbox)
    const eventTypes = form.getAll("eventTypes").map(String);

    // Roaster
    const roasterScanned = String(form.get("roasterScanned") || "");

    // Officer details
    const firstName       = String(form.get("firstName") || "").trim();
    const lastName        = String(form.get("lastName") || "").trim();
    const phone           = String(form.get("phone") || "").trim();
    const gender          = String(form.get("gender") || "");
    const officerPosition = String(form.get("officerPosition") || "");
    const email           = String(form.get("email") || "").trim();
    const licenseNo       = String(form.get("licenseNo") || "").trim();
    const licenseState    = String(form.get("licenseState") || "");
    const callsign        = String(form.get("callsign") || "");
    const notifiedBy      = String(form.get("notifiedBy") || "");
    const billing         = String(form.get("billing") || "");

    // Incident date / location
    const incidentDate          = String(form.get("incidentDate") || "");
    const incidentTime          = String(form.get("incidentTime") || "");
    const toDate                = String(form.get("toDate") || "");
    const toTime                = String(form.get("toTime") || "");
    const jobNo                 = String(form.get("jobNo") || "");
    const jobTime               = String(form.get("jobTime") || "");
    const patrol                = String(form.get("patrol") || "");
    const incidentLicenseState  = String(form.get("incidentLicenseState") || "N/A");
    const clientType            = String(form.get("clientType") || "");
    const clientSite            = String(form.get("clientSite") || "");
    const supervisor            = String(form.get("supervisor") || "");
    const incidentReport        = String(form.get("incidentReport") || "").trim();

    // Attachments (multiple)
    const attachmentsFiles = form
      .getAll("attachments")
      .filter((x): x is File => x instanceof File && x.size > 0);

    // Required validations
    if (!firstName || !lastName || !phone || !email || !licenseNo || !licenseState || !incidentDate || !incidentTime || !incidentReport) {
      return NextResponse.json({ success:false, error:"Missing required fields" }, { status:400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ success:false, error:"Invalid email address" }, { status:400 });
    }

    // Attachment checks
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    const MAX_FILES = 10;
    const ALLOWED = new Set([
      "image/jpeg","image/png","image/webp","image/gif",
      "application/pdf","text/plain","text/csv",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/zip"
    ]);

    if (attachmentsFiles.length > MAX_FILES) {
      return NextResponse.json({ success:false, error:`Too many files (max ${MAX_FILES})` }, { status:400 });
    }
    for (const f of attachmentsFiles) {
      if (f.size > MAX_FILE_SIZE) {
        return NextResponse.json({ success:false, error:`${f.name} exceeds 10MB` }, { status:400 });
      }
      if (f.type && !ALLOWED.has(f.type)) {
        return NextResponse.json({ success:false, error:`${f.name}: unsupported file type` }, { status:400 });
      }
    }

    const to = process.env.INCIDENT_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "admin@metroguards.com.au";

    // Prepare data for PDF
    const events = eventTypes.length ? eventTypes.join(", ") : "—";
    const windowStr = (toDate || toTime)
      ? `${incidentDate || "—"} ${incidentTime || ""} → ${toDate || "—"} ${toTime || ""}`.trim()
      : `${incidentDate || "—"} ${incidentTime || ""}`.trim();
    const attachmentsList = attachmentsFiles.map(f => f.name).join(", ") || "None";

    const pdfData = {
      eventTypes: events,
      roasterScanned,
      firstName,
      lastName,
      email,
      phone,
      gender,
      officerPosition,
      licenseNo,
      licenseState,
      callsign,
      notifiedBy,
      billing,
      incidentDate,
      incidentTime,
      toDate,
      toTime,
      jobNo,
      jobTime,
      patrol,
      incidentLicenseState,
      clientType,
      clientSite,
      supervisor,
      incidentReport,
      attachmentsList
    };

    // Generate PDF
    console.log("Generating incident report PDF...");
    const pdfBuffer = await generateIncidentPDF(pdfData);
    console.log("PDF generated successfully, size:", pdfBuffer.length, "bytes");

    // Build admin email HTML
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; border-left: 4px solid #dc3545; padding: 15px; margin: 15px 0; border-radius: 5px; }
          .info-row { padding: 8px 0; border-bottom: 1px solid #e9ecef; }
          .info-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #1e2247; display: inline-block; min-width: 120px; }
          .value { color: #495057; }
          .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🚨 New Incident Report</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">A new incident report has been submitted</p>
          </div>
          <div class="content">
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Event Types</h3>
              <p style="margin: 0; color: #495057;">${esc(events)}</p>
              <p style="margin: 10px 0 0 0; color: #495057;"><strong>Smart ROASTER scanned:</strong> ${esc(roasterScanned || "—")}</p>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Officer Details</h3>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${esc(firstName)} ${esc(lastName)}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${esc(email)}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value">${esc(phone)}</span>
              </div>
              <div class="info-row">
                <span class="label">Position:</span>
                <span class="value">${esc(officerPosition || "—")}</span>
              </div>
              <div class="info-row">
                <span class="label">License:</span>
                <span class="value">${esc(licenseNo)} (${esc(licenseState)})</span>
              </div>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Incident Details</h3>
              <div class="info-row">
                <span class="label">When:</span>
                <span class="value">${esc(windowStr)}</span>
              </div>
              <div class="info-row">
                <span class="label">Client Site:</span>
                <span class="value">${esc(clientSite || "—")}</span>
              </div>
              <div class="info-row">
                <span class="label">Client Type:</span>
                <span class="value">${esc(clientType || "—")}</span>
              </div>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Incident Report</h3>
              <p style="margin: 0; color: #495057;">${esc(incidentReport).replace(/\n/g, "<br/>")}</p>
            </div>
            
            <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
              <strong>📎 Attachments:</strong> ${attachmentsList}
            </p>
          </div>
          <div class="footer">
            <p>This is an automated notification from Metro Guards Security Services Australia</p>
            <p>📧 <a href="mailto:info@metroguard.com.au" style="color: #fdc51a;">info@metroguard.com.au</a> | 📞 1300 661 378</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Client Confirmation Email
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e2247 0%, #252958 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .success-box { background: #d4edda; border-left: 4px solid #28a745; padding: 20px; margin: 20px 0; border-radius: 5px; }
          .info-box { background: white; border-left: 4px solid #fdc51a; padding: 15px; margin: 15px 0; border-radius: 5px; }
          .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">✅ Incident Report Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your report has been submitted successfully</p>
          </div>
          <div class="content">
            <div class="success-box">
              <h3 style="color: #155724; margin-top: 0;">Report Confirmed!</h3>
              <p style="margin: 0;">
                Dear ${esc(firstName)} ${esc(lastName)}, your incident report has been successfully received and will be reviewed by our security management team immediately.
              </p>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Your Report Details</h3>
              <p><strong>Incident Date:</strong> ${esc(windowStr)}</p>
              <p><strong>Client Site:</strong> ${esc(clientSite || "—")}</p>
              <p><strong>Officer:</strong> ${esc(firstName)} ${esc(lastName)}</p>
            </div>
            
            <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
              <strong>📎 Attachment:</strong> A copy of your incident report is attached for your records.
            </p>
            
            <p style="margin-top: 20px; padding: 15px; background: #cce5ff; border-left: 4px solid #004085; border-radius: 5px;">
              <strong>What's Next?</strong><br/>
              • Your report will be reviewed by the security management team<br/>
              • An investigation will be initiated if required<br/>
              • You will be contacted if additional information is needed
            </p>
          </div>
          <div class="footer">
            <p><strong>Metropolitan Guard Services Australia</strong></p>
            <p>📧 <a href="mailto:info@metroguard.com.au" style="color: #fdc51a;">info@metroguard.com.au</a> | 📞 1300 661 378</p>
            <p>🌐 <a href="https://www.metroguard.com.au" style="color: #fdc51a;">www.metroguard.com.au</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Build attachments for Resend (original form attachments + generated PDF)
    const emailAttachments = await Promise.all(attachmentsFiles.map(async (f) => ({
      filename: f.name || "attachment",
      content: Buffer.from(await f.arrayBuffer()),
    })));

    // Add PDF to attachments
    emailAttachments.push({
      filename: `incident-report-${firstName}-${lastName}-${Date.now()}.pdf`,
      content: pdfBuffer,
    });

    // Send admin email
    console.log("Sending admin notification email to:", to);
    const adminResult = await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to,
      subject: `🚨 Incident Report — ${firstName} ${lastName} — ${incidentDate} ${incidentTime}`,
      html: adminEmailHtml,
      replyTo: email || undefined,
      attachments: emailAttachments,
    });

    if (adminResult.error) {
      console.error("Admin email error:", adminResult.error);
      return NextResponse.json({ 
        success: false, 
        error: "Failed to send admin notification email" 
      }, { status: 500 });
    }
    console.log("Admin email sent successfully:", adminResult.data?.id);

    // Send client confirmation email (only PDF, not the form attachments)
    console.log("Sending client confirmation email to:", email);
    const clientResult = await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: "✅ Incident Report Received - Metro Guards",
      html: clientEmailHtml,
      attachments: [
        {
          filename: `incident-report-${firstName}-${lastName}.pdf`,
          content: pdfBuffer,
        },
      ],
      replyTo: to,
    });

    if (clientResult.error) {
      console.error("Client email error:", clientResult.error);
      return NextResponse.json({ 
        success: false, 
        error: "Failed to send client confirmation email" 
      }, { status: 500 });
    }
    console.log("Client email sent successfully:", clientResult.data?.id);

    return NextResponse.json({ 
      success: true,
      message: "Incident report submitted successfully! Confirmation emails sent.",
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult.data?.id
    });
  } catch (err) {
    console.error("incident route error:", err);
    return NextResponse.json({ 
      success:false, 
      error:"Submission failed: " + (err instanceof Error ? err.message : "Unknown error")
    }, { status:500 });
  }
}
