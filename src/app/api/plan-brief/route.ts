import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM ?? 'EWA Safari Builder <noreply@theextremewilderness.com>'
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
  const arr = (v: unknown) => (Array.isArray(v) && v.length ? (v as string[]).join(', ') : '')

  const tripRows = [
    row('Duration', d.days ? `${str(d.days)} days` : ''),
    row('Travel Month', d.year ? `${str(d.month)} ${str(d.year)}` : str(d.month)),
    row('Party Size', str(d.pax)),
    row('Interests', arr(d.interests)),
    row('Comfort Style', str(d.style)),
    row('Pace', str(d.pace)),
  ].join('')

  const matchRows = d.topMatchName ? [
    row('Top Match', str(d.topMatchName)),
    row('Match Slug', str(d.topMatchSlug)),
    row('No Strong Match?', d.belowThreshold ? 'Yes — flag as unmet demand' : ''),
  ].join('') : ''

  const contactRows = [
    row('Name', str(d.name)),
    row('Email', str(d.email)),
  ].join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:28px 24px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">Safari Plan Brief — Builder</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">${str(d.name)}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">${str(d.email)}</p>
    </div>

    <table style="width:100%;border-collapse:collapse">
      ${section('Trip Basics', tripRows)}
      ${matchRows ? section('Matched Package', matchRows) : ''}
      ${section('Contact', contactRows)}
    </table>

    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">Sent from the Craft Your Safari builder on theextremewilderness.com · Reply directly to reach this visitor.</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { name, email, website } = body

    if (website) return NextResponse.json({ success: true })

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: String(email),
      subject: `Safari Plan Brief: ${String(name)} — ${String(body.topMatchName || 'No strong match')}`,
      html: buildHtml(body),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Plan-brief API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
