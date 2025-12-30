// app/api/k9/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

// basic HTML escape
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

    // read your form fields
    const name      = String(form.get("name") || "").trim();
    const email     = String(form.get("email") || "").trim();
    const phone     = String(form.get("phone") || "").trim();
    const date      = String(form.get("date") || "").trim();
    const location  = String(form.get("location") || "").trim();
    const attendees = String(form.get("attendees") || "").trim();
    const service   = String(form.get("service") || "").trim();

    // validations
    const missing: string[] = [];
    if (!name) missing.push("name");
    if (!email) missing.push("email");
    if (!phone) missing.push("phone");
    if (!date) missing.push("date");
    if (!location) missing.push("location");
    if (!attendees) missing.push("attendees");
    if (!service) missing.push("service");

    if (missing.length) {
      return NextResponse.json(
        { success: false, error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const attendeesNum = Number(attendees);
    if (!Number.isFinite(attendeesNum) || attendeesNum < 0) {
      return NextResponse.json(
        { success: false, error: "attendees must be a non-negative number" },
        { status: 400 }
      );
    }

    const to = process.env.QUOTE_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { success: false, error: "QUOTE_TO_EMAIL/CONTACT_TO_EMAIL not configured" },
        { status: 500 }
      );
    }

    const subject = `Service Quote Request — ${name} — ${date} — ${location}`;

    // email bodies
    const html = `
      <h2>New K9 Security Services Quote Request</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone)}</p>
      <p><strong>Service Date:</strong> ${esc(date)}</p>
      <p><strong>Location:</strong> ${esc(location)}</p>
      <p><strong>Attendees:</strong> ${esc(String(attendeesNum))}</p>
      <p><strong>Requested Service:</strong> ${esc(service)}</p>
    `;

    const text = `New Service Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Date: ${date}
Location: ${location}
Attendees: ${attendeesNum}
Requested Service: ${service}
`;

    await resend.emails.send({
      from: "Metro Guards <onboarding@resend.dev>", // replace with your verified domain in prod
      to,
      subject,
      html,
      text,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: "Quote submitted" }, { status: 200 });
  } catch (err) {
    console.error("k9/quote route error:", err);
    return NextResponse.json(
      { success: false, error: "Submission failed" },
      { status: 500 }
    );
  }
}

// Optional: block GET
export async function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 });
}
