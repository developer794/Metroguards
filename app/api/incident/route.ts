// app/api/incident/route.ts
import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { formLimiter, getClientIp, checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

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
    // Apply rate limiting (10 requests per minute)
    const ip = getClientIp(req);
    const rateLimitError = checkRateLimit(formLimiter, ip);
    
    if (rateLimitError) {
      return NextResponse.json(
        { error: rateLimitError.error, success: false },
        { 
          status: 429,
          headers: {
            'Retry-After': String(rateLimitError.retryAfter),
            'X-RateLimit-Limit': String(rateLimitError.limit),
            'X-RateLimit-Remaining': String(rateLimitError.remaining),
            'X-RateLimit-Reset': String(rateLimitError.reset),
          }
        }
      );
    }

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

    // Create elegant admin email template
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
        <title>New Incident Report - Admin Notification</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Lato', Arial, sans-serif; background: #f5f5f5;">
        
        <table width="100%" cellpadding="0" cellspacing="0" style="background: #f5f5f5; padding: 50px 20px;">
          <tr>
            <td align="center">
              
              <table width="650" cellpadding="0" cellspacing="0" style="background-color: #ffffff; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12); border: 3px solid #1e2247;">
                
                <tr>
                  <td style="background: #1e2247; padding: 30px 45px; text-align: center; border-bottom: 6px solid #fdc51a;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <h1 style="color: #fdc51a; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; letter-spacing: 2px; font-family: 'Merriweather', Georgia, serif; line-height: 1.3; text-transform: uppercase;">
                            Metropolitan Guard Services
                          </h1>
                          <div style="height: 2px; background: #fdc51a; width: 80px; margin: 0 auto 12px;"></div>
                          <p style="color: rgba(253, 197, 26, 0.9); margin: 0; font-size: 14px; letter-spacing: 1.5px; font-weight: 400; text-transform: uppercase;">
                            Admin Notification System
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="background: #dc3545; padding: 28px 45px; text-align: center;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <h2 style="color: #ffffff; margin: 0 0 8px 0; font-size: 26px; font-weight: 700; letter-spacing: 1px; font-family: 'Merriweather', Georgia, serif;">
                            🚨 New Incident Report
                          </h2>
                          <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 1px;">
                            ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 45px 50px;">
                    
                    <p style="color: #6b7280; margin: 0 0 25px 0; font-size: 13px; text-align: right; font-family: 'Lato', Arial, sans-serif;">
                      ${new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' })}
                    </p>

                    <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(220, 53, 69, 0.08); border-left: 4px solid #dc3545; margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px 25px;">
                          <p style="color: #dc3545; margin: 0; font-size: 15px; font-weight: 600; font-family: 'Lato', Arial, sans-serif;">
                            ⚡ An incident report has been submitted and requires immediate attention from the security management team.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px; border: 2px solid #1e2247;">
                      <tr>
                        <td colspan="2" style="background: #1e2247; padding: 15px 20px;">
                          <h3 style="color: #fdc51a; margin: 0; font-size: 17px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-family: 'Merriweather', Georgia, serif;">
                            Event Information
                          </h3>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; width: 35%;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Event Types:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${esc(events)}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">ROASTER Scanned:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${esc(roasterScanned || "—")}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Incident Date/Time:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${esc(windowStr)}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; ">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Client Site:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px;">
                          <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${esc(clientSite || "—")}</span>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px; border: 2px solid #1e2247;">
                      <tr>
                        <td colspan="2" style="background: #1e2247; padding: 15px 20px;">
                          <h3 style="color: #fdc51a; margin: 0; font-size: 17px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-family: 'Merriweather', Georgia, serif;">
                            Officer Details
                          </h3>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; width: 35%;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Officer Name:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #374151; font-size: 14px; font-weight: 600; font-family: 'Lato', Arial, sans-serif;">${esc(firstName)} ${esc(lastName)}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Email Address:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <a href="mailto:${email}" style="color: #3b82f6; font-size: 14px; font-family: 'Lato', Arial, sans-serif; text-decoration: none;">${esc(email)}</a>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Phone Number:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <a href="tel:${phone}" style="color: #3b82f6; font-size: 14px; font-family: 'Lato', Arial, sans-serif; text-decoration: none;">${esc(phone)}</a>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">License Number:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${esc(licenseNo)} (${esc(licenseState)})</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; vertical-align: top;">
                          <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Incident Report:</strong>
                        </td>
                        <td style="background: #ffffff; padding: 15px 20px;">
                          <span style="color: #374151; font-size: 14px; line-height: 1.7; font-family: 'Lato', Arial, sans-serif;">${esc(incidentReport).replace(/\n/g, '<br/>')}</span>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 193, 7, 0.1); border: 2px solid #ffc107; padding: 15px; margin-bottom: 30px;">
                      <tr>
                        <td>
                          <p style="color: #1e2247; margin: 0; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">
                            <strong>📎 Attachments:</strong> ${attachmentsList}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td align="center">
                          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/incidents" style="display: inline-block; background: #1e2247; color: #fdc51a; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 15px; letter-spacing: 0.5px; font-family: 'Lato', Arial, sans-serif; box-shadow: 0 4px 12px rgba(30, 34, 71, 0.3);">
                            📊 View in Dashboard
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #6b7280; margin: 0; font-size: 13px; line-height: 1.7; text-align: center; font-family: 'Lato', Arial, sans-serif; font-style: italic;">
                      Note: The officer has received a confirmation email. Complete incident report details and attachments are included.
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="background: #1e2247; padding: 25px 45px; text-align: center; border-top: 4px solid #fdc51a;">
                    <p style="color: rgba(253, 197, 26, 0.8); margin: 0 0 8px 0; font-size: 11px; font-family: 'Lato', Arial, sans-serif;">
                      This is an automated admin notification from the Metropolitan Guard Services website.
                    </p>
                    <p style="color: #fdc51a; margin: 0; font-size: 13px; font-weight: 700; font-family: 'Merriweather', Georgia, serif;">
                      © 2025 Metropolitan Guard Services
                    </p>
                    <p style="color: rgba(253, 197, 26, 0.8); margin: 8px 0 0 0; font-size: 12px; font-family: 'Lato', Arial, sans-serif;">
                      Admin Dashboard • Internal Use Only
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
      content: Buffer.from(pdfBuffer),
    });

    // Send admin email
    console.log("Sending admin notification email to:", to);
    const adminResult = await getResend().emails.send({
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
    const clientResult = await getResend().emails.send({
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
