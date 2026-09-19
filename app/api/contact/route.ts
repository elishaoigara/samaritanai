import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
// Best-effort per-instance throttle. Use Vercel Firewall for a shared production limit.
const attempts = new Map<string, { count: number; expires: number }>();
function rateLimited(request: NextRequest) {
  const key =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const now = Date.now();
  for (const [ip, entry] of attempts) {
    if (entry.expires <= now) attempts.delete(ip);
  }
  const entry = attempts.get(key);
  if (entry) {
    entry.count++;
    return entry.count > 5;
  }
  if (attempts.size >= 1000) return true;
  attempts.set(key, { count: 1, expires: now + 600000 });
  return false;
}
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin)
    return NextResponse.json(
      { error: "Please submit your enquiry from this website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 415 },
    );
  let raw: string;
  try {
    const reader = request.body?.getReader();
    if (!reader)
      return NextResponse.json(
        { error: "Your enquiry is empty." },
        { status: 400 },
      );
    let total = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > 16000) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Your enquiry is too long." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    raw = Buffer.concat(chunks).toString("utf8");
  } catch {
    return NextResponse.json(
      { error: "Your enquiry could not be read." },
      { status: 400 },
    );
  }
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body))
      throw new Error();
  } catch {
    return NextResponse.json({ error: "Invalid enquiry." }, { status: 400 });
  }
  if (body.website)
    return NextResponse.json(
      { error: "Your enquiry could not be accepted." },
      { status: 400 },
    );
  const limits: Record<string, number> = {
    name: 100,
    email: 254,
    company: 160,
    interest: 200,
    budget: 100,
    message: 5000,
  };
  const fields: Record<string, string> = {};
  for (const [field, max] of Object.entries(limits)) {
    const value = body[field] ?? "";
    if (typeof value !== "string" || value.length > max)
      return NextResponse.json(
        { error: "Please check the length of your enquiry fields." },
        { status: 400 },
      );
    fields[field] = value.trim();
  }
  if (
    !fields.name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ||
    /[\r\n]/.test(fields.email) ||
    fields.message.length < 20 ||
    body.consent !== "yes"
  )
    return NextResponse.json(
      {
        error:
          "Please enter your name, a valid email, a message of at least 20 characters and your consent.",
      },
      { status: 400 },
    );
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL)
    return NextResponse.json(
      {
        error:
          "Online enquiries are not available yet. Your message has not been sent. You can save a copy below and try again later.",
      },
      { status: 503 },
    );
  if (rateLimited(request))
    return NextResponse.json(
      {
        error:
          "Too many enquiries in a short time. Please wait 10 minutes and try again.",
      },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject: "New Samaritan AI website enquiry",
        text: `Name: ${fields.name}\nEmail: ${fields.email}\nBusiness: ${fields.company}\nInterest: ${fields.interest}\nBudget: ${fields.budget}\n\n${fields.message}\n\nConsent to respond: yes`,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) {
      console.error("Contact email provider rejected request", response.status);
      return NextResponse.json(
        {
          error:
            "We could not deliver your enquiry. Your message has not been confirmed as sent. Please save a copy and try again later.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Email delivery could not be confirmed. Please save a copy and try again later.",
      },
      { status: 502 },
    );
  }
}
