// /app/api/signout/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  // Build an absolute URL from the incoming request (works on localhost & prod)
  const url = new URL("/", req.url);

  const res = NextResponse.redirect(url, 303); // 303 => POST -> GET redirect
  res.cookies.set("auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // important for localhost
    sameSite: "lax",
    path: "/",
    expires: new Date(0), // reliably delete
  });
  return res;
}
