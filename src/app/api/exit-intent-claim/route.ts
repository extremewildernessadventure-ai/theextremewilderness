import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { computeDiscountCode } from '@/lib/discountCode'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM ?? 'EWA Enquiries <noreply@theextremewilderness.com>'
const TO   = process.env.RESEND_TO ?? 'info@theextremewilderness.com'

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px;background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;width:160px">${label}</td>
      <td style="padding:8px 12px;font-size:14px;color:#1a1a1a">${value}</td>
    </tr>`
}

function buildHtml(name: string, email: string, code: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:28px 24px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">Exit-Intent Discount Claim</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">${name || email}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">${email}</p>
    </div>

    <table style="width:100%;border-collapse:collapse">
      ${row('Name', name || '—')}
      ${row('Email', email)}
      ${row('Code', code)}
    </table>

    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">Reply directly to this email to reach the subscriber, or follow up when they enquire and honor the code manually.</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json() as { name?: string; email?: string }

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const code = computeDiscountCode(email)

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Exit-Intent Discount Claim — ${name || email}`,
      html: buildHtml(name ?? '', email, code),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Exit-intent claim API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
