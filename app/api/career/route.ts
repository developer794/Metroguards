// app/api/career/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s = "") =>
  s
    .replace(/&/g, "&amp;")
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

// Generate PDF for Career Application
async function generateCareerPDF(data: any): Promise<Buffer> {
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
  page.drawText("Career Application", {
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
  
  // Personal Information
  page.drawText("Personal Information", {
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
  
  page.drawText(sanitizeForPDF(`Address: ${data.fullAddress}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 30;
  
  // Applying For
  page.drawText("Applying For Positions", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(data.rolesText), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 30;
  
  // Additional Information
  page.drawText("Additional Information", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(`Newsletter Opt-in: ${data.newsletter ? "Yes" : "No"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 25;
  
  // Comments
  if (data.comments) {
    page.drawText("Comments:", {
      x: 50,
      y,
      size: 14,
      font: helveticaBold,
      color: primaryColor,
    });
    y -= 20;
    
    // Wrap comments text
    const maxWidth = width - 140;
    const words = sanitizeForPDF(data.comments).split(' ');
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
    }
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

    // Read fields
    const firstName  = String(form.get("firstName") || "").trim();
    const lastName   = String(form.get("lastName") || "").trim();
    const address    = String(form.get("address") || "").trim();
    const suburb     = String(form.get("suburb") || "").trim();
    const state      = String(form.get("state") || "").trim();
    const postCode   = String(form.get("postCode") || "").trim();
    const phone      = String(form.get("phone") || "").trim();
    const email      = String(form.get("email") || "").trim();
    const comments   = String(form.get("comments") || "").trim();
    const terms      = !!form.get("terms");
    const newsletter = !!form.get("newsletter");
    const roles      = form.getAll("roles[]").map(String);
    const resume     = form.get("resume") as File | null;

    // Validate required fields
    if (
      !firstName || !lastName || !address || !suburb || !state ||
      !postCode || !phone || !email || !terms || !resume
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate file (<= 5MB, PDF/DOC/DOCX)
    const MAX_SIZE = 5 * 1024 * 1024;
    const allowedTypes = new Set([
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]);
    if (resume.size > MAX_SIZE) {
      return NextResponse.json(
        { success: false, error: "Resume exceeds 5MB limit" },
        { status: 400 }
      );
    }
    if (!allowedTypes.has(resume.type)) {
      return NextResponse.json(
        { success: false, error: "Resume must be PDF, DOC, or DOCX" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "admin@metroguards.com.au";

    const fullAddress = `${address}, ${suburb}, ${state} ${postCode}`;
    const rolesText = roles.length ? roles.join(", ") : "—";

    // Prepare data for PDF
    const pdfData = {
      firstName,
      lastName,
      email,
      phone,
      fullAddress,
      rolesText,
      newsletter,
      comments: comments || "—"
    };

    // Generate PDF
    console.log("Generating career application PDF...");
    const pdfBuffer = await generateCareerPDF(pdfData);
    console.log("PDF generated successfully, size:", pdfBuffer.length, "bytes");

    // Prepare resume attachment
    const resumeBuf = Buffer.from(await resume.arrayBuffer());

    // Admin Email HTML
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e2247 0%, #252958 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; border-left: 4px solid #fdc51a; padding: 15px; margin: 15px 0; border-radius: 5px; }
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
            <h1 style="margin: 0; font-size: 24px;">🔔 New Career Application</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">A new job application has been submitted</p>
          </div>
          <div class="content">
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Applicant Details</h3>
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
                <span class="label">Address:</span>
                <span class="value">${esc(fullAddress)}</span>
              </div>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Application Details</h3>
              <div class="info-row">
                <span class="label">Applying For:</span>
                <span class="value">${esc(rolesText)}</span>
              </div>
              <div class="info-row">
                <span class="label">Newsletter:</span>
                <span class="value">${newsletter ? "Yes" : "No"}</span>
              </div>
            </div>
            
            ${comments ? `
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Comments</h3>
              <p style="margin: 0; color: #495057;">${esc(comments).replace(/\n/g, "<br/>")}</p>
            </div>
            ` : ''}
            
            <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
              <strong>📎 Attachments:</strong> Resume and application summary PDF are attached.
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
            <h1 style="margin: 0; font-size: 24px;">✅ Application Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for applying</p>
          </div>
          <div class="content">
            <div class="success-box">
              <h3 style="color: #155724; margin-top: 0;">Application Confirmed!</h3>
              <p style="margin: 0;">
                Dear ${esc(firstName)} ${esc(lastName)}, we've received your career application and our HR team will review it within 3-5 business days.
              </p>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Your Application Details</h3>
              <p><strong>Positions Applied For:</strong> ${esc(rolesText)}</p>
              <p><strong>Contact Email:</strong> ${esc(email)}</p>
              <p><strong>Contact Phone:</strong> ${esc(phone)}</p>
            </div>
            
            <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
              <strong>📎 Attachment:</strong> A copy of your application summary is attached for your records.
            </p>
            
            <p style="margin-top: 20px; padding: 15px; background: #cce5ff; border-left: 4px solid #004085; border-radius: 5px;">
              <strong>What's Next?</strong><br/>
              • Our HR team will review your application within 3-5 business days<br/>
              • If your qualifications match our requirements, we'll contact you for an interview<br/>
              • We'll keep your application on file for future opportunities
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

    // Send admin email (with resume + PDF)
    console.log("Sending admin notification email to:", to);
    const adminResult = await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to,
      subject: `🔔 New Career Application — ${firstName} ${lastName}`,
      html: adminEmailHtml,
      replyTo: email,
      attachments: [
        {
          filename: resume.name || "resume",
          content: resumeBuf,
        },
        {
          filename: `application-${firstName}-${lastName}-${Date.now()}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    if (adminResult.error) {
      console.error("Admin email error:", adminResult.error);
      return NextResponse.json({ 
        success: false, 
        error: "Failed to send admin notification email" 
      }, { status: 500 });
    }
    console.log("Admin email sent successfully:", adminResult.data?.id);

    // Send client confirmation email (only PDF, not resume)
    console.log("Sending client confirmation email to:", email);
    const clientResult = await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: "✅ Application Received - Metro Guards",
      html: clientEmailHtml,
      attachments: [
        {
          filename: `application-${firstName}-${lastName}.pdf`,
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
      message: "Application submitted successfully! Confirmation emails sent.",
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult.data?.id
    });
  } catch (err) {
    console.error("career route error:", err);
    return NextResponse.json(
      { success: false, error: "Submission failed: " + (err instanceof Error ? err.message : "Unknown error") },
      { status: 500 }
    );
  }
}
