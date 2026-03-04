import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Add to Resend Audience
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
  }

  // Send a quick confirmation email to the user
  await resend.emails.send({
    from: "InfraReady <hello@infraready.io>",
    to: email,
    subject: "You're on the InfraReady waitlist 🚀",
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;color:#1e293b">
        <div style="margin-bottom:24px">
          <span style="background:#0ea5e9;color:white;padding:6px 12px;border-radius:8px;font-weight:700;font-size:14px">InfraReady</span>
        </div>
        <h1 style="font-size:24px;font-weight:700;margin:0 0 16px">You're on the list.</h1>
        <p style="color:#475569;line-height:1.6;margin:0 0 16px">
          Thanks for joining the InfraReady waitlist. We're onboarding founders one by one to make sure every deployment goes smoothly.
        </p>
        <p style="color:#475569;line-height:1.6;margin:0 0 24px">
          The first 50 people get <strong>Starter free for 3 months</strong>. We'll be in touch soon.
        </p>
        <p style="color:#94a3b8;font-size:13px">— Kay, founder of InfraReady</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
