import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { authLimiter, getClientIp, checkRateLimit } from "@/lib/rate-limit";

function getSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not configured");
  }
  return new TextEncoder().encode(secret);
}

export async function POST(req) {
  try {
    // Check JWT_SECRET early to fail fast
    if (!process.env.JWT_SECRET) {
      console.error("CRITICAL: JWT_SECRET is not set in environment variables");
      return NextResponse.json(
        { error: "Server configuration error: Authentication not configured" }, 
        { status: 500 }
      );
    }

    // Apply rate limiting (5 requests per minute)
    const ip = getClientIp(req);
    const rateLimitError = checkRateLimit(authLimiter, ip);
    
    if (rateLimitError) {
      return NextResponse.json(
        { error: rateLimitError.error },
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

    const { email, password, remember } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Find user in database
    let user;
    try {
      user = await prisma.user.findUnique({ where: { email } });
    } catch (dbError) {
      console.error("Database error:", dbError.message || dbError);
      return NextResponse.json(
        { error: `Database error: ${dbError.message || 'Connection failed'}` }, 
        { status: 500 }
      );
    }

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create JWT
    const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24; // 30d or 1d
    const token = await new SignJWT({ sub: String(user.id), email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(`${maxAge}s`)
      .sign(getSecretKey());

    const res = NextResponse.json({ message: "Login successful" }, { status: 200 });
    res.cookies.set("auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge,
    });
    return res;
  } catch (err) {
    console.error("Sign-in error:", err.message || err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
