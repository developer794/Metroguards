import { NextResponse } from "next/server";

// Health check endpoint to diagnose configuration issues
export async function GET() {
  const checks = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "not set",
    jwtSecretSet: !!process.env.JWT_SECRET,
    postgresUrlSet: !!process.env.POSTGRES_URL,
    resendApiKeySet: !!process.env.RESEND_API_KEY,
    recaptchaSecretSet: !!process.env.RECAPTCHA_SECRET_KEY,
  };

  const allConfigured = checks.jwtSecretSet && checks.postgresUrlSet;
  
  return NextResponse.json({
    status: allConfigured ? "ok" : "missing_config",
    checks,
    message: allConfigured 
      ? "All required environment variables are configured"
      : "Missing required environment variables. Check Vercel settings."
  }, { status: allConfigured ? 200 : 503 });
}

