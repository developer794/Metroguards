import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, toName, subject, message } = body;

    // Validate required fields
    if (!to || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log('📧 Attempting to send email to:', to);
    console.log('📧 Subject:', subject);
    console.log('📧 From:', process.env.CONTACT_FROM_EMAIL);

    // Send email to the client
    const result = await resend.emails.send({
      from: `Metropolitan Guard Services <${process.env.CONTACT_FROM_EMAIL}>`,
      to: to,
      replyTo: process.env.ADMIN_EMAIL || "admin@metroguard.com.au",
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #1e2247 0%, #252958 100%); padding: 32px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
                          Metropolitan Guard Services
                        </h1>
                        <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 14px;">
                          Security Solutions You Can Trust
                        </p>
                      </td>
                    </tr>

                    <!-- Yellow Border -->
                    <tr>
                      <td style="height: 4px; background: linear-gradient(to right, #fdc51a, #e7b80f);"></td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 32px;">
                        <p style="color: #1e2247; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
                          Dear ${toName},
                        </p>
                        <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px 0; white-space: pre-wrap;">
                          ${message}
                        </p>
                        <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0;">
                          Best regards,<br>
                          <strong style="color: #1e2247;">Metropolitan Guard Services Team</strong>
                        </p>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8f9fa; padding: 24px; text-align: center; border-top: 1px solid #e8eaf0;">
                        <p style="color: #6c757d; font-size: 13px; margin: 0 0 8px 0;">
                          📧 Email: admin@metroguard.com.au
                        </p>
                        <p style="color: #6c757d; font-size: 13px; margin: 0 0 12px 0;">
                          🌐 Website: www.metroguard.com.au
                        </p>
                        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                          © ${new Date().getFullYear()} Metropolitan Guard Services. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Check if email was sent successfully
    if (result.error) {
      console.error('❌ Resend API Error:', result.error);
      return NextResponse.json(
        { success: false, error: result.error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully! ID:', result.data?.id);
    return NextResponse.json({ 
      success: true,
      emailId: result.data?.id 
    });

  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error?.message || "Failed to send email",
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

