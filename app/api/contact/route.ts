import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to create elegant client confirmation email
function createClientConfirmationEmail(
  name: string,
  email: string,
  phone: string,
  serviceType: string,
  location: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
      <title>Contact Request Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Lato', Arial, sans-serif; background: #f5f5f5;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="background: #f5f5f5; padding: 50px 20px;">
        <tr>
          <td align="center">
            
            <!-- Main Email Container -->
            <table width="650" cellpadding="0" cellspacing="0" style="background-color: #ffffff; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12); border: 3px solid #1e2247;">
              
              <!-- Compact Letterhead Header -->
              <tr>
                <td style="background: #1e2247; padding: 30px 45px; text-align: center; border-bottom: 6px solid #fdc51a;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <!-- Company Name -->
                        <h1 style="color: #fdc51a; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; letter-spacing: 2px; font-family: 'Merriweather', Georgia, serif; line-height: 1.3; text-transform: uppercase;">
                          Metropolitan Guard Services
                        </h1>
                        <!-- Divider Line -->
                        <div style="height: 2px; background: #fdc51a; width: 80px; margin: 0 auto 12px;"></div>
                        <!-- Tagline -->
                        <p style="color: rgba(253, 197, 26, 0.9); margin: 0; font-size: 14px; letter-spacing: 1.5px; font-weight: 400; text-transform: uppercase;">
                          Professional Security Solutions
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Confirmation Banner -->
              <tr>
                <td style="background: #fdc51a; padding: 28px 45px; text-align: center;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <h2 style="color: #1e2247; margin: 0 0 8px 0; font-size: 26px; font-weight: 700; letter-spacing: 1px; font-family: 'Merriweather', Georgia, serif;">
                          Message Received
                        </h2>
                        <p style="color: #1e2247; margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 1px;">
                          CONFIRMATION #${Date.now().toString(36).toUpperCase()}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Letter Content -->
              <tr>
                <td style="padding: 45px 50px;">
                  
                  <!-- Date -->
                  <p style="color: #6b7280; margin: 0 0 25px 0; font-size: 13px; text-align: right; font-family: 'Lato', Arial, sans-serif;">
                    ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>

                  <!-- Greeting -->
                  <p style="color: #1e2247; margin: 0 0 20px 0; font-size: 16px; font-weight: 700; font-family: 'Merriweather', Georgia, serif;">
                    Dear ${name},
                  </p>

                  <!-- Letter Body -->
                  <p style="color: #374151; margin: 0 0 20px 0; font-size: 15px; line-height: 1.8; font-family: 'Lato', Arial, sans-serif;">
                    Thank you for contacting Metropolitan Guard Services. We are pleased to confirm that we have received your message. Your inquiry is important to us, and our team is currently reviewing your request in detail.
                  </p>

                  <p style="color: #374151; margin: 0 0 30px 0; font-size: 15px; line-height: 1.8; font-family: 'Lato', Arial, sans-serif;">
                    A member of our team will contact you within 24 hours to discuss your specific needs and provide you with the information you require.
                  </p>

                  <!-- Request Details Table -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px; border: 2px solid #1e2247;">
                    <!-- Table Header -->
                    <tr>
                      <td colspan="2" style="background: #1e2247; padding: 15px 20px;">
                        <h3 style="color: #fdc51a; margin: 0; font-size: 17px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-family: 'Merriweather', Georgia, serif;">
                          Your Message Details
                        </h3>
                      </td>
                    </tr>

                    <!-- Table Rows -->
                    <tr>
                      <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; width: 35%;">
                        <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Contact Name:</strong>
                      </td>
                      <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${name}</span>
                      </td>
                    </tr>

                    <tr>
                      <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                        <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Email Address:</strong>
                      </td>
                      <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${email}</span>
                      </td>
                    </tr>

                    <tr>
                      <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                        <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Phone Number:</strong>
                      </td>
                      <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${phone || 'Not provided'}</span>
                      </td>
                    </tr>

                    <tr>
                      <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                        <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Service Type:</strong>
                      </td>
                      <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${serviceType}</span>
                      </td>
                    </tr>

                    <tr>
                      <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                        <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Property Location:</strong>
                      </td>
                      <td style="background: #ffffff; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #374151; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">${location}</span>
                      </td>
                    </tr>

                    <tr>
                      <td style="background: #f9fafb; padding: 15px 20px; border-right: 1px solid #e5e7eb; vertical-align: top;">
                        <strong style="color: #1e2247; font-size: 13px; font-weight: 700; font-family: 'Lato', Arial, sans-serif;">Your Message:</strong>
                      </td>
                      <td style="background: #ffffff; padding: 15px 20px;">
                        <span style="color: #374151; font-size: 14px; line-height: 1.7; font-family: 'Lato', Arial, sans-serif;">${message}</span>
                      </td>
                    </tr>
                  </table>

                  <!-- What Happens Next -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(253, 197, 26, 0.08); border: 2px solid #fdc51a; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 20px 25px;">
                        <h3 style="color: #1e2247; margin: 0 0 18px 0; font-size: 17px; font-weight: 700; letter-spacing: 1px; font-family: 'Merriweather', Georgia, serif;">
                          What Happens Next?
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 25px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top; width: 25px;">
                              <strong style="color: #fdc51a; font-size: 18px; font-family: 'Merriweather', Georgia, serif;">1.</strong>
                            </td>
                            <td style="padding: 10px 0 10px 10px;">
                              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7; font-family: 'Lato', Arial, sans-serif;">
                                Our team will review your message in detail
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <strong style="color: #fdc51a; font-size: 18px; font-family: 'Merriweather', Georgia, serif;">2.</strong>
                            </td>
                            <td style="padding: 10px 0 10px 10px;">
                              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7; font-family: 'Lato', Arial, sans-serif;">
                                We will contact you within <strong style="color: #1e2247;">24 hours</strong> to discuss your specific needs
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <strong style="color: #fdc51a; font-size: 18px; font-family: 'Merriweather', Georgia, serif;">3.</strong>
                            </td>
                            <td style="padding: 10px 0 10px 10px;">
                              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7; font-family: 'Lato', Arial, sans-serif;">
                                You will receive the information and assistance you need
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Closing -->
                  <p style="color: #374151; margin: 0 0 5px 0; font-size: 15px; line-height: 1.8; font-family: 'Lato', Arial, sans-serif;">
                    We appreciate your interest in Metropolitan Guard Services and look forward to serving you.
                  </p>

                  <p style="color: #374151; margin: 20px 0 30px 0; font-size: 15px; font-family: 'Merriweather', Georgia, serif;">
                    Sincerely,<br/>
                    <strong style="color: #1e2247;">Metropolitan Guard Services Team</strong>
                  </p>

                  <!-- Contact Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background: #fdc51a; border: 2px solid #1e2247;">
                    <tr>
                      <td style="padding: 20px 25px; text-align: center;">
                        <p style="color: #1e2247; margin: 0 0 12px 0; font-size: 14px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; font-family: 'Merriweather', Georgia, serif;">
                          For Immediate Assistance
                        </p>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 4px 0; text-align: center;">
                              <p style="margin: 0; color: #1e2247; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">
                                <strong>Phone:</strong> 1300 132 660
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 4px 0; text-align: center;">
                              <p style="margin: 0; color: #1e2247; font-size: 14px; font-family: 'Lato', Arial, sans-serif;">
                                <strong>Email:</strong> admin@metroguard.com.au
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Classic Footer -->
              <tr>
                <td style="background: #1e2247; padding: 25px 45px; text-align: center; border-top: 4px solid #fdc51a;">
                  <p style="color: rgba(253, 197, 26, 0.8); margin: 0 0 8px 0; font-size: 11px; font-family: 'Lato', Arial, sans-serif;">
                    This is an automated confirmation email. Please do not reply.
                  </p>
                  <p style="color: #fdc51a; margin: 0; font-size: 13px; font-weight: 700; font-family: 'Merriweather', Georgia, serif;">
                    © 2025 Metropolitan Guard Services
                  </p>
                  <p style="color: rgba(253, 197, 26, 0.8); margin: 8px 0 0 0; font-size: 12px; font-family: 'Lato', Arial, sans-serif;">
                    Professional Security Solutions • Victoria, Australia
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

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // honeypot (spam trap)
    const botField = String(form.get("companyWebsite") || "");
    if (botField) {
      return NextResponse.json({ success: true }); // silently ignore bots
    }

    // Verify reCAPTCHA
    const recaptchaToken = String(form.get("recaptchaToken") || "");
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification required" },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

    const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
      method: "POST",
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
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
    
    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to: "admin@metroguard.com.au",
      replyTo: email,
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

    // Send elegant confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: `Metro Guards <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: "Thank You for Contacting Metropolitan Guard Services",
      html: createClientConfirmationEmail(name, email, phone, serviceType, location, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error);
    }
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
