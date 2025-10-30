import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node runtime on Vercel (not Edge)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // honeypot
    const botField = String(form.get("companyWebsite") || "");
    if (botField) {
      return NextResponse.json({ success: true }); // silently ignore bots
    }

    const firstName  = String(form.get("name") || "");
    const email      = String(form.get("email") || "");
    const phone      = String(form.get("phone") || "");
    const location   = String(form.get("location") || "");
    const message    = String(form.get("message") || "");

    // arrays from checkboxes/selects
    const services   = form.getAll("service[]").map(v => String(v));
    const industries = form.getAll("industry[]").map(v => String(v));

    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build HTML lists exactly like your Resend version
    const servicesList   = services.length
      ? `<ul>${services.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`
      : "—";
    const industriesList = industries.length
      ? `<ul>${industries.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`
      : "—";

    const subject = `New Contact Form Submission from ${firstName}`;

    const textBody = [
      `New Quotation Request`,
      `Name: ${firstName}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Service Site Address: ${location || "—"}`,
      `Industry: ${industries.join(", ") || "—"}`,
      `Service Type: ${services.join(", ") || "—"}`,
      `Message:`,
      message || "—",
    ].join("\n");

    const htmlBody = `
      <h2>New Quotation Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Service Site Address:</strong> ${escapeHtml(location || "—")}</p>
      <p><strong>Industry:</strong> ${industriesList}</p>
      <p><strong>Service Type:</strong> ${servicesList}</p>
      <p><strong>Message:</strong><br/>${
        message ? escapeHtml(message).replace(/\n/g, "<br/>") : "—"
      }</p>
    `;

    // --- Nodemailer transporter (Google Workspace SMTP) ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,               // smtp.gmail.com
      port: Number(process.env.SMTP_PORT || 465),// 465
      secure: String(process.env.SMTP_SECURE || "true").toLowerCase() === "true",
      auth: {
        user: process.env.SMTP_USER,             // admin@metroguards.com.au
        pass: process.env.SMTP_PASS,             // 16-char App Password
      },
    });

    await transporter.sendMail({
      from: `Metro Guards <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,  // your admin inbox
      replyTo: email,                                             // reply goes to requester
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Quotation form error:", error);
    }
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}

// Small HTML escaper to avoid breaking markup
function escapeHtml(s: string) {
  return s.replace(/[<>&"]/g, (c) => (
    c === "<" ? "&lt;" :
    c === ">" ? "&gt;" :
    c === "&" ? "&amp;" :
    "&quot;"
  ));
}
