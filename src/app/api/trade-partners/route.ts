import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { saveLead, markLeadEmailSent } from '@/lib/leads'

const FROM = process.env.RESEND_FROM ?? 'EWA Trade Desk <noreply@theextremewilderness.com>'
const TO = process.env.RESEND_TO ?? 'info@theextremewilderness.com'

function row(label: string, value: string | number | undefined | null) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 12px;background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;width:160px">${label}</td>
      <td style="padding:8px 12px;font-size:14px;color:#1a1a1a">${value}</td>
    </tr>`
}

function section(title: string, rows: string) {
  if (!rows.trim()) return ''
  return `
    <tr><td colspan="2" style="padding:16px 12px 4px;font-size:11px;font-weight:700;color:#1C3A2A;text-transform:uppercase;letter-spacing:0.1em;border-top:2px solid #f0f7f2">${title}</td></tr>
    ${rows}`
}

function buildHtml(d: Record<string, unknown>) {
  const str = (v: unknown) => (v ? String(v) : '')

  const agencyRows = [
    row('Agency Name', str(d.agencyName)),
    row('Country / Market', str(d.country)),
    row('Website', str(d.website)),
  ].join('')

  const contactRows = row('Email', str(d.email))

  const volumeRows = [
    row('Annual Booking Volume', str(d.volume)),
    row('Typical Client', str(d.clientDescription)),
  ].join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:28px 24px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">New Trade Partner Enquiry</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">${str(d.agencyName)}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">${str(d.email)}</p>
    </div>

    <table style="width:100%;border-collapse:collapse">
      ${section('Agency', agencyRows)}
      ${section('Contact', contactRows)}
      ${section('Volume & Client', volumeRows)}
    </table>

    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">Sent from the Trade Partnerships page on theextremewilderness.com · Reply directly to reach this agency.</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { agencyName, email } = body

    if (!agencyName || !email) {
      return NextResponse.json({ error: 'Agency name and email are required' }, { status: 400 })
    }

    const { id: leadId } = await saveLead({
      type: 'trade-partners',
      name: String(agencyName),
      email: String(email),
      subject: body.country ? `${String(agencyName)} — ${String(body.country)}` : String(agencyName),
      payload: body,
    })

    let emailOk = false
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: String(email),
        subject: `🤝 New Trade Partner Enquiry — ${String(agencyName)}`,
        html: buildHtml(body),
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
    console.error('Trade-partners API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
