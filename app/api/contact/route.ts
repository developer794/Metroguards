import { NextResponse } from "next/server";
import { Resend } from "resend";
//import ContactEmail from "../../../components/emails/ContactEmail"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // honeypot (spam trap)
    const botField = String(form.get("companyWebsite") || "");
    if (botField) {
      return NextResponse.json({ success: true }); // silently ignore bots
    }

    const name        = String(form.get("name") || "");
    const email       = String(form.get("email") || "");
    const phone       = String(form.get("phone") || "");
    const serviceType = String(form.get("serviceType") || "");
    const location    = String(form.get("location") || "");
    const message     = String(form.get("message") || "");

    // Basic guard
    if (!name || !email || !serviceType || !location || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }
    
    const emailResult = await resend.emails.send({
      // test-safe sender; switch to your domain once verified
      from: "Metro Guards <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,            // e.g. ummehabiba989@gmail.com
      replyTo: email,                                // <- correct key
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Service Type:</strong> ${serviceType || "—"}</p>
        <p><strong>Property Location:</strong> ${location || "—"}</p>
        <p><strong>Message:</strong><br/>${message || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error);
    }
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
