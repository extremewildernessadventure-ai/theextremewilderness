import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { saveLead, markLeadEmailSent } from '@/lib/leads'
import { routing } from '@/i18n/routing'
import { escapeHtml, sendAutoReply, buildBrandedEmailHtml } from '@/lib/email'

const FROM = process.env.RESEND_FROM ?? 'EWA Enquiries <noreply@theextremewilderness.com>'
const TO   = process.env.RESEND_TO ?? 'info@theextremewilderness.com'

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
  ].join('')

  const packageRows = d.packageName ? [
    row('Package',  str(d.packageName)),
    row('Type',     str(d.packageType)),
    row('Duration', str(d.duration)),
    row('Season',   str(d.season)),
    row('Tier',     str(d.tier)),
    row('From',     str(d.priceFrom)),
  ].join('') : ''

  const msgRows = d.message ? row('Message', `<em>${str(d.message).replace(/\n/g, '<br>')}</em>`) : ''

  const source = str(d.source) === 'contact_page' ? 'Contact Page' : 'Booking Modal'
  const viaWhatsapp = d.contactMethod === 'whatsapp'

  return buildBrandedEmailHtml({
    eyebrow: `New Safari Enquiry — ${source}${viaWhatsapp ? ' · via WhatsApp' : ''}`,
    heading: `${str(d.firstName)} ${str(d.lastName)}`,
    subheading: `${str(d.email)} · ${str(d.phone)}`,
    maxWidth: 600,
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse">
        ${section('Personal Details', personalRows)}
        ${section('Trip Details', tripRows)}
        ${section('Preferences', prefRows)}
        ${packageRows ? section('Selected Package', packageRows) : ''}
        ${msgRows ? section('Message', msgRows) : ''}
      </table>
      <p style="margin:16px 0 0;font-size:11px;color:#9ca3af">Reply directly to this email to reach the enquirer.</p>
    `,
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { firstName, lastName, email, locale: rawLocale } = body
    const locale = routing.locales.includes(rawLocale as (typeof routing.locales)[number]) ? String(rawLocale) : routing.defaultLocale
    const contactMethod = body.contactMethod === 'whatsapp' ? 'whatsapp' : 'email'

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { id: leadId } = await saveLead({
      type: 'enquiry',
      name: `${String(firstName)} ${String(lastName)}`,
      email: String(email),
      phone: body.phone ? String(body.phone) : null,
      subject: String(body.packageName || body.tripType || 'Safari'),
      locale,
      payload: body,
      contactMethod,
    })

    let emailOk = false
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: String(email),
        subject: `New Enquiry: ${String(firstName)} ${String(lastName)} — ${String(body.tripType || 'Safari')}${contactMethod === 'whatsapp' ? ' (WhatsApp)' : ''}`,
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

    // Best-effort auto-reply to the submitter — never fails the request.
    // Skipped for WhatsApp submissions: the visitor is about to open a live
    // WhatsApp chat, so a "we received your message" email is redundant —
    // the team-notification email above still always sends either way.
    if (contactMethod !== 'whatsapp') {
      try {
        const m = (await import(`../../../../messages/${locale}.json`)).default.emailAutoReply.enquiry as { subject: string; greeting: string; body: string }
        const resend = new Resend(process.env.RESEND_API_KEY)
        await sendAutoReply({
          resend,
          from: FROM,
          to: String(email),
          replyTo: TO,
          subject: m.subject,
          greeting: m.greeting.replace('{name}', escapeHtml(String(firstName))),
          bodyHtml: `<p style="margin:0;font-size:14px;line-height:1.6;color:#374151">${m.body}</p>`,
        })
      } catch (autoReplyErr) {
        console.error('Enquiry auto-reply failed:', autoReplyErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
