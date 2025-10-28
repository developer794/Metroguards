// app/api/contact-us/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime for Resend

const resend = new Resend(process.env.RESEND_API_KEY);

// basic HTML escape to keep your email markup safe
const esc = (s = "") =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const purpose  = String(form.get("purpose") || "");
    const service  = String(form.get("service") || "");
    const name     = String(form.get("name") || "").trim();
    const email    = String(form.get("email") || "").trim();
    const phone    = String(form.get("phone") || "");
    const location = String(form.get("location") || "");
    const message  = String(form.get("message") || "");

    // required fields (align with your form UX)
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // quick email sanity check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { success: false, error: "CONTACT_TO_EMAIL not configured" },
        { status: 500 }
      );
    }

    const from =
      "Metro Guards <${process.env.CONTACT_FROM_EMAIL}>";

    const subject = `New Contact — ${service || purpose || "General"} — ${name}`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Purpose:</strong> ${esc(purpose || "—")}</p>
      <p><strong>Service:</strong> ${esc(service || "—")}</p>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone || "—")}</p>
      <p><strong>Location:</strong> ${esc(location || "—")}</p>
      <p><strong>Message:</strong><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
    `;

    const text =
`New Contact Form Submission

Purpose:  ${purpose || "—"}
Service:  ${service || "—"}
Name:     ${name}
Email:    ${email}
Phone:    ${phone || "—"}
Location: ${location || "—"}

Message:
${message}
`;

    await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      // Resend uses snake_case for reply-to
      replyTo: email, // <— this is the field Resend expects
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact-us route error:", err);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
