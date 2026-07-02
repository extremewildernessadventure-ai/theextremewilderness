import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// Update RESEND_FROM in .env.local to your verified Resend domain once set up.
// Until then, onboarding@resend.dev only delivers to your Resend account email.
const FROM = process.env.RESEND_FROM ?? 'EWA Enquiries <onboarding@resend.dev>'
const TO   = process.env.RESEND_TO ?? 'extremewildernessadventure@gmail.com'

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
  const arr = (v: unknown) => Array.isArray(v) && v.length ? (v as string[]).join(', ') : ''

  const personalRows = [
    row('Name',    `${str(d.firstName)} ${str(d.lastName)}`),
    row('Email',   str(d.email)),
    row('Phone',   str(d.phone)),
    row('Gender',  str(d.gender)),
    row('Country', str(d.country)),
  ].join('')

  const tripRows = [
    row('Trip Type',   str(d.tripType)),
    row('Arrival',     str(d.arrivalDate)),
    row('Departure',   str(d.departureDate)),
    row('Flexibility', str(d.flexibility)),
    row('Adults',      str(d.adults)),
    row('Children',    str(d.children)),
    row('Child Ages',  arr(d.childAges)),
  ].join('')

  const prefRows = [
    row('Budget',          str(d.budget)),
    row('Accommodation',   str(d.accommodation)),
    row('Special Req.',    arr(d.specialReqs)),
    row('Contact Via',     str(d.contactPref)),
  ].join('')

  const packageRows = d.packageName ? [
    row('Package',  str(d.packageName)),
    row('Type',     str(d.packageType)),
    row('Duration', str(d.duration)),
    row('From',     str(d.priceFrom)),
  ].join('') : ''

  const msgRows = d.message ? row('Message', `<em>${str(d.message).replace(/\n/g, '<br>')}</em>`) : ''

  const source = str(d.source) === 'contact_page' ? 'Contact Page' : 'Booking Modal'

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:28px 24px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">New Safari Enquiry — ${source}</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">${str(d.firstName)} ${str(d.lastName)}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">${str(d.email)} · ${str(d.phone)}</p>
    </div>

    <table style="width:100%;border-collapse:collapse">
      ${section('Personal Details', personalRows)}
      ${section('Trip Details', tripRows)}
      ${section('Preferences', prefRows)}
      ${packageRows ? section('Selected Package', packageRows) : ''}
      ${msgRows ? section('Message', msgRows) : ''}
    </table>

    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">Sent from theextremewilderness.com · Reply directly to this email to reach the enquirer.</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { firstName, lastName, email } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: String(email),
      subject: `New Enquiry: ${String(firstName)} ${String(lastName)} — ${String(body.tripType || 'Safari')}`,
      html: buildHtml(body),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
