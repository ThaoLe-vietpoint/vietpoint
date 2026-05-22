import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, phone, email, message, source } = body;

    if (!name || !phone) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = await createClient();

    // 1. Save to database
    const { error: dbError } = await supabase.from("leads").insert({
        name,
        phone,
        email: email || null,
        message: message || null,
        source: source || "contact_form",
    });

    if (dbError) {
        console.error("DB insert error:", dbError.message);
        return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    // 2. Load email settings from site_settings (fallback to env vars)
    const { data: emailRows } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["gmail_user", "gmail_app_password", "notify_email", "email"]);

    const sm = Object.fromEntries((emailRows ?? []).map((r) => [r.key, r.value ?? ""]));

    const gmailUser = sm.gmail_user || process.env.GMAIL_USER || "";
    const gmailPass = sm.gmail_app_password || process.env.GMAIL_APP_PASSWORD || "";
    const notifyEmail = sm.notify_email || process.env.NOTIFY_EMAIL || sm.email || "";

    // 3. Send email if configured
    if (notifyEmail && gmailUser && gmailPass) {
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: { user: gmailUser, pass: gmailPass },
            });

            const now = new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
                dateStyle: "full",
                timeStyle: "short",
            });

            const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e4080 0%,#2F5E9E 60%,#4a7fc1 100%);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:50%;width:56px;height:56px;line-height:56px;font-size:26px;margin-bottom:14px;">✉️</div>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">New Contact Request</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">VietPoint Insurance &amp; Tax</p>
          </td>
        </tr>

        <!-- ALERT BANNER -->
        <tr>
          <td style="background:#fbbf24;padding:10px 36px;text-align:center;">
            <p style="margin:0;font-size:12px;font-weight:700;color:#78350f;letter-spacing:0.8px;text-transform:uppercase;">⚡ Action Required — Follow up as soon as possible</p>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="background:#ffffff;padding:32px 36px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

            <!-- CONTACT INFO CARDS -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <!-- Name -->
              <tr>
                <td style="padding:0 0 12px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #2F5E9E;border-radius:8px;padding:14px 18px;">
                    <tr>
                      <td style="padding:14px 18px;">
                        <p style="margin:0 0 3px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Full Name</p>
                        <p style="margin:0;font-size:18px;font-weight:700;color:#0f172a;">${name}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Phone + Email row -->
              <tr>
                <td style="padding:0 0 12px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="48%" style="vertical-align:top;padding-right:8px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;">
                          <tr>
                            <td style="padding:14px 18px;">
                              <p style="margin:0 0 3px;font-size:10px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:1px;">📞 Phone</p>
                              <a href="tel:${phone}" style="font-size:15px;font-weight:700;color:#1d4ed8;text-decoration:none;">${phone}</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="4%"></td>
                      <td width="48%" style="vertical-align:top;padding-left:8px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background:${email ? "#f0fdf4" : "#f8fafc"};border:1px solid ${email ? "#bbf7d0" : "#e2e8f0"};border-radius:8px;">
                          <tr>
                            <td style="padding:14px 18px;">
                              <p style="margin:0 0 3px;font-size:10px;font-weight:700;color:${email ? "#22c55e" : "#94a3b8"};text-transform:uppercase;letter-spacing:1px;">✉️ Email</p>
                              ${email
                    ? `<a href="mailto:${email}" style="font-size:13px;font-weight:600;color:#15803d;text-decoration:none;word-break:break-all;">${email}</a>`
                    : `<span style="font-size:13px;color:#cbd5e1;">Not provided</span>`}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- DETAILS SECTION -->
            ${message ? `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:#fafafa;border:1px solid #e2e8f0;border-radius:8px;padding:18px 20px;">
                  <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">📋 Submission Details</p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#374151;line-height:1.8;">
                    ${message.split("|").map((line: string) => {
                        const trimmed = line.trim();
                        if (!trimmed) return "";
                        const colonIdx = trimmed.indexOf(":");
                        if (colonIdx === -1) return `<tr><td style="padding:3px 0;">${trimmed}</td></tr>`;
                        const label = trimmed.slice(0, colonIdx).trim();
                        const val = trimmed.slice(colonIdx + 1).trim();
                        return `<tr>
                        <td style="padding:4px 0;width:120px;color:#6b7280;font-weight:600;vertical-align:top;">${label}</td>
                        <td style="padding:4px 0;color:#111827;font-weight:500;">: ${val}</td>
                      </tr>`;
                    }).join("")}
                  </table>
                </td>
              </tr>
            </table>` : ""}

            <!-- QUICK ACTIONS -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
              <tr>
                <td align="center" style="padding:4px 6px;">
                  <a href="tel:${phone}" style="display:inline-block;background:#2F5E9E;color:white;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;">📞 Call Now</a>
                </td>
                ${email ? `<td align="center" style="padding:4px 6px;">
                  <a href="mailto:${email}" style="display:inline-block;background:#f1f5f9;color:#2F5E9E;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;border:1px solid #cbd5e1;">✉️ Reply by Email</a>
                </td>` : ""}
              </tr>
            </table>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#1e293b;border-radius:0 0 16px 16px;padding:20px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:12px;color:#94a3b8;">
                    Received <strong style="color:#cbd5e1;">${now} ET</strong> &nbsp;·&nbsp; Source: <strong style="color:#cbd5e1;">${source || "contact_form"}</strong>
                  </p>
                </td>
                <td align="right">
                  <p style="margin:0;font-size:11px;color:#64748b;">VietPoint Insurance &amp; Tax</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

            await transporter.sendMail({
                from: `"VietPoint Website" <${gmailUser}>`,
                to: notifyEmail,
                subject: `📬 New Contact: ${name} — ${phone}`,
                html,
            });
        } catch (mailErr) {
            // Log but don't fail the request — DB was saved successfully
            console.error("Email send error:", mailErr);
        }
    }

    return NextResponse.json({ ok: true });
}
