import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { saveLead, markLeadEmailSent } from '@/lib/leads'

const FROM = process.env.RESEND_FROM ?? 'EWA Contact <noreply@theextremewilderness.com>'
const TO   = process.env.RESEND_TO ?? 'info@theextremewilderness.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { fullName, email, phone, subject, message } = body

    // Required fields
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailStr = String(email)
    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:28px 24px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">New Contact Message</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">${String(fullName)}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">${emailStr}${phone ? ` · ${String(phone)}` : ''}</p>
    </div>

    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;width:120px">Subject</td><td style="padding:12px 16px;font-size:14px;color:#1a1a1a">${subject ? String(subject) : '—'}</td></tr>
      <tr><td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top">Message</td><td style="padding:12px 16px;font-size:14px;color:#1a1a1a;line-height:1.6"><em>${String(message).replace(/\n/g, '<br>')}</em></td></tr>
    </table>

    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">Sent via theextremewilderness.com · Reply directly to reach ${String(fullName)}.</p>
    </div>
  </div>
</body>
</html>`

    // Persist first — this is the durable path, and must not depend on the
    // Resend call below succeeding or even completing.
    const { id: leadId } = await saveLead({
      type: 'contact',
      name: String(fullName),
      email: emailStr,
      phone: phone ? String(phone) : null,
      subject: subject ? String(subject) : 'General Enquiry',
      payload: body,
    })

    let emailOk = false
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: emailStr,
        subject: `Contact: ${String(fullName)} — ${subject ? String(subject) : 'General Enquiry'}`,
        html,
      })
      if (error) {
        console.error('Resend error:', error)
      } else {
        emailOk = true
        if (leadId) await markLeadEmailSent(leadId)
      }
    } catch (err) {
      console.error('Resend send threw:', err)
    }

    if (!emailOk && !leadId) {
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
