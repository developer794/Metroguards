// app/api/contractor/route.ts
import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { formLimiter, getClientIp, checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

// 24 Compliance Questions
const QUESTIONS = [
  "Company Registration is current (ACN/ABN)?",
  "Has there been any changes to the directors or close associates of the Company?",
  "Is the Director of the Company the actual beneficial owner and does not operate on behalf of another?",
  "Is the Company financially sound and there have been no adverse findings against the Company or its Officers?",
  "Is the Company Security Licence current?",
  "Has the Master Licence authority level been exceeded (Number of persons – NSW only)?",
  "Is your membership to an approved Security Association current?",
  "Are all required Insurance Policies current?",
  "Are all security personnel supplied by the Company paid in accordance with the relevant Award / Agreement?",
  "Are all employee Superannuation contributions paid to date?",
  "Has there been any change in your Payroll Tax obligations?",
  "Are your Payroll Tax payment obligations up to date and paid?",
  "Have you ever been investigated by the Fair Work Ombudsman?",
  "Are all security personnel employed and supplied by the Company and who have performed work for Metropolitan Guard Services have the relevant Right to Work in Australia entitlements? (Visa restrictions have not been breached)",
  "Are all security personnel employed and supplied by the Company and who have performed work for Metropolitan Guard Services have a current and applicable state security licence?",
  "Have all Services been provided in accordance with the Client's Service / Site Brief?",
  "Has any Director, Close Associate or employee of the Company been or is currently charged with a criminal offence?",
  "Has any Director, Close Associate or employee of the Company breached or contravened any provisions of the Trade Practices Act?",
  "Are there any pending legal or insurance claims against the Company that may affect MGS?",
  "Has any Director, Close Associate employee or a relation of a Director or employee of the Company paid any monies or given gifts to a MGS employee or relation of an employee?",
  "Does your Company employ, engage work for or work with any employee of Metropolitan Guard Services?",
  "Does your Company have any related parties or undisclosed transactions with MGS or relations of Metropolitan Guard Services employees?",
  "Has your Company provided a safe and hygienic working environment in accordance with OHS Laws?",
  "Has your Company conducted its business in a manner that is compliant with Modern Slavery Laws and has done all things required or necessary to mitigate or reduce modern slavery risks in your operations or supply chains?"
];

// escape for HTML email content
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

// Generate PDF with all questions and answers
async function generateContractorPDF(data: any): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595, 842]); // A4 size
  const { width, height } = page.getSize();
  
  // Load fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  // Colors
  const primaryColor = rgb(0.118, 0.133, 0.278); // #1e2247
  const accentColor = rgb(0.992, 0.773, 0.102); // #fdc51a
  const textColor = rgb(0.2, 0.2, 0.2);
  const lightGray = rgb(0.6, 0.6, 0.6);
  const yesColor = rgb(0.133, 0.545, 0.133); // Green for Yes
  const noColor = rgb(0.698, 0.133, 0.133); // Red for No
  
  let y = height - 50;
  
  // Header
  page.drawText("Contractor Compliance Declaration", {
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
  
  // Company Information Section
  page.drawText("Company Information", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(`Company Name: ${data.companyName}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`ABN/ACN Number: ${data.abnAcn}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 25;
  
  // Declarant Information
  page.drawText("Declarant Information", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(`Name: ${data.declarantName}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Position: ${data.position}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Email: ${data.declarantEmail || "—"}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Declaration Date: ${data.declarationDate}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 25;
  
  // Compliance Answers Section
  page.drawText("Compliance Questions & Answers (Last 30 Days)", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  // Add all 24 questions with answers
  for (let i = 0; i < QUESTIONS.length; i++) {
    const questionNum = i + 1;
    const question = QUESTIONS[i];
    const answer = data.questions[`question${questionNum}`];
    
    // Check if we need a new page
    if (y < 100) {
      page = pdfDoc.addPage([595, 842]);
      y = page.getSize().height - 50;
    }
    
    // Question number and answer in colored box
    const answerColor = answer === "yes" ? yesColor : noColor;
    const answerText = answer === "yes" ? "YES" : "NO";
    
    page.drawText(sanitizeForPDF(`Q${questionNum}.`), {
      x: 60,
      y,
      size: 9,
      font: helveticaBold,
      color: primaryColor,
    });
    
    page.drawText(sanitizeForPDF(answerText), {
      x: 90,
      y,
      size: 9,
      font: helveticaBold,
      color: answerColor,
    });
    
    y -= 15;
    
    // Question text (wrap if needed)
    const maxWidth = width - 140;
    const words = sanitizeForPDF(question).split(' ');
    let line = '';
    
    for (const word of words) {
      const testLine = line + word + ' ';
      const testWidth = helvetica.widthOfTextAtSize(testLine, 9);
      
      if (testWidth > maxWidth && line.length > 0) {
        page.drawText(line.trim(), {
          x: 70,
          y,
          size: 9,
          font: helvetica,
          color: textColor,
        });
        line = word + ' ';
        y -= 12;
        
        // Check if we need a new page
        if (y < 80) {
          page = pdfDoc.addPage([595, 842]);
          y = page.getSize().height - 50;
        }
      } else {
        line = testLine;
      }
    }
    
    // Draw remaining text
    if (line.length > 0) {
      page.drawText(line.trim(), {
        x: 70,
        y,
        size: 9,
        font: helvetica,
        color: textColor,
      });
    }
    
    y -= 18; // Space between questions
  }
  
  // Add new page if needed for signature
  if (y < 150) {
    page = pdfDoc.addPage([595, 842]);
    y = page.getSize().height - 50;
  }
  
  y -= 10;
  
  // Declaration Section
  page.drawText("Declaration", {
    x: 50,
    y,
    size: 14,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 20;
  
  page.drawText(sanitizeForPDF(`Signature: ${data.signature}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  y -= 15;
  
  page.drawText(sanitizeForPDF(`Date: ${data.signatureDate}`), {
    x: 60,
    y,
    size: 10,
    font: helvetica,
    color: textColor,
  });
  
  // Footer (on last page)
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

    // Company / declarant / signature
    const companyName     = String(form.get("companyName") || "").trim();
    const abnAcn          = String(form.get("abnAcn") || "").trim();
    const declarantName   = String(form.get("declarantName") || "").trim();
    const position        = String(form.get("position") || "").trim(); // Director | Company Secretary
    const declarantEmail  = String(form.get("declarantEmail") || "").trim(); // Client email for confirmation
    const declarationDate = String(form.get("declarationDate") || "").trim();

    const signature       = String(form.get("signature") || "").trim();
    const signatureDate   = String(form.get("signatureDate") || "").trim();

    // Collect 24 yes/no answers
    const questions: Record<string, "yes" | "no"> = {};
    for (let i = 1; i <= 24; i++) {
      const val = String(form.get(`question${i}`) || "").toLowerCase() as "yes" | "no";
      if (val !== "yes" && val !== "no") {
        return NextResponse.json(
          { success: false, error: `Question ${i} must be answered (yes/no)` },
          { status: 400 }
        );
      }
      questions[`question${i}`] = val;
    }

    // Basic validation
    if (!companyName || !abnAcn || !declarantName || !position || !declarantEmail || !declarationDate || !signature || !signatureDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTRACTOR_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "ummehani3737@gmail.com";

    // Prepare data for PDF
    const pdfData = {
      companyName,
      abnAcn,
      declarantName,
      position,
      declarantEmail,
      signature,
      signatureDate,
      declarationDate,
      questions
    };

    // Generate PDF
    console.log("Generating contractor declaration PDF...");
    const pdfBuffer = await generateContractorPDF(pdfData);
    const pdfBase64 = pdfBuffer.toString("base64");
    console.log("PDF generated successfully, size:", pdfBuffer.length, "bytes");

    // Build admin email HTML with questions and answers
    const questionsHtml = Array.from({ length: 24 }, (_, idx) => {
      const i = idx + 1;
      const ans = questions[`question${i}`];
      const answerClass = ans === "yes" ? "answer-yes" : "answer-no";
      return `
        <div class="question">
          <span class="question-num">Q${i}:</span> ${esc(QUESTIONS[idx])}
          <br/>
          <span class="${answerClass}">${ans.toUpperCase()}</span>
        </div>
      `;
    }).join("");

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
          .question { padding: 10px; margin: 5px 0; background: white; border-radius: 5px; }
          .question-num { font-weight: bold; color: #1e2247; }
          .answer-yes { color: #28a745; font-weight: bold; }
          .answer-no { color: #dc3545; font-weight: bold; }
          .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🔔 New Contractor Declaration</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">A new compliance declaration has been submitted</p>
          </div>
          <div class="content">
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Company Information</h3>
              <div class="info-row">
                <span class="label">Company Name:</span>
                <span class="value">${esc(companyName)}</span>
              </div>
              <div class="info-row">
                <span class="label">ABN/ACN:</span>
                <span class="value">${esc(abnAcn)}</span>
              </div>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Declarant Information</h3>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${esc(declarantName)}</span>
              </div>
              <div class="info-row">
                <span class="label">Position:</span>
                <span class="value">${esc(position)}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${esc(declarantEmail)}</span>
              </div>
              <div class="info-row">
                <span class="label">Declaration Date:</span>
                <span class="value">${esc(declarationDate)}</span>
              </div>
              <div class="info-row">
                <span class="label">Signature:</span>
                <span class="value">${esc(signature)}</span>
              </div>
              <div class="info-row">
                <span class="label">Signature Date:</span>
                <span class="value">${esc(signatureDate)}</span>
              </div>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Compliance Answers Summary</h3>
              ${questionsHtml}
            </div>
            
            <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
              <strong>📎 Attachment:</strong> The complete contractor declaration form is attached as a PDF.
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

    // Client confirmation email HTML
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
            <h1 style="margin: 0; font-size: 24px;">✅ Declaration Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for your submission</p>
          </div>
          <div class="content">
            <div class="success-box">
              <h3 style="color: #155724; margin-top: 0;">Submission Confirmed!</h3>
              <p style="margin: 0;">
                Dear ${esc(declarantName)}, your contractor compliance declaration has been successfully received and will be reviewed by our team.
              </p>
            </div>
            
            <div class="info-box">
              <h3 style="color: #1e2247; margin-top: 0;">Submission Details</h3>
              <p><strong>Company:</strong> ${esc(companyName)}</p>
              <p><strong>ABN/ACN:</strong> ${esc(abnAcn)}</p>
              <p><strong>Submitted By:</strong> ${esc(declarantName)} (${esc(position)})</p>
              <p><strong>Date:</strong> ${esc(declarationDate)}</p>
            </div>
            
            <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
              <strong>📎 Attachment:</strong> A copy of your completed declaration form is attached for your records.
            </p>
            
            <p style="margin-top: 20px; padding: 15px; background: #cce5ff; border-left: 4px solid #004085; border-radius: 5px;">
              <strong>What's Next?</strong><br/>
              Our compliance team will review your declaration. If any additional information is required, we will contact you at ${esc(declarantEmail)}.
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

    // Send admin email with PDF
    console.log("Sending admin notification email to:", to);
    const adminResult = await getResend().emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to,
      subject: `🔔 New Contractor Compliance Declaration — ${companyName}`,
      html: adminEmailHtml,
      attachments: [
        {
          filename: `contractor-declaration-${companyName.replace(/\s+/g, "-")}-${Date.now()}.pdf`,
          content: pdfBase64,
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

    // Send client confirmation email with PDF
    console.log("Sending client confirmation email to:", declarantEmail);
    const clientResult = await getResend().emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to: declarantEmail,
      subject: "✅ Contractor Declaration Received - Metro Guards",
      html: clientEmailHtml,
      attachments: [
        {
          filename: `contractor-declaration-${companyName.replace(/\s+/g, "-")}.pdf`,
          content: pdfBase64,
        },
      ],
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
      message: "Contractor declaration submitted successfully! Confirmation emails sent.",
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult.data?.id
    });
  } catch (err) {
    console.error("contractor route error:", err);
    return NextResponse.json({ 
      success: false, 
      error: "Submission failed: " + (err instanceof Error ? err.message : "Unknown error")
    }, { status: 500 });
  }
}
