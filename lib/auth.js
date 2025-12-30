// /lib/auth.js
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function getUserFromCookie() {
  const token = cookies().get("auth")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    // payload.sub contains user id as string
    return { id: Number(payload.sub), email: payload.email };
  } catch {
    return null;
  }
}
