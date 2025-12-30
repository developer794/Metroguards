import { Resend } from "resend";

// Lazy-initialized Resend client to avoid build-time errors
let resendClient: Resend | null = null;

export function getResend(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not configured");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Export a default instance for convenience (lazy-loaded)
export default getResend;

