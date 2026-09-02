import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { saveLead, markLeadEmailSent } from '@/lib/leads'
import { routing } from '@/i18n/routing'
import { escapeHtml, sendAutoReply, buildBrandedEmailHtml } from '@/lib/email'

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

  const viaWhatsapp = d.contactMethod === 'whatsapp'

  return buildBrandedEmailHtml({
    eyebrow: `Safari Plan Brief — Builder${viaWhatsapp ? ' · via WhatsApp' : ''}`,
    heading: str(d.name),
    subheading: str(d.email),
    maxWidth: 600,
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse">
        ${section('Trip Basics', tripRows)}
        ${matchRows ? section('Matched Package', matchRows) : ''}
        ${section('Contact', contactRows)}
      </table>
      <p style="margin:16px 0 0;font-size:11px;color:#9ca3af">Reply directly to reach this visitor.</p>
    `,
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { name, email, locale: rawLocale } = body
    const locale = routing.locales.includes(rawLocale as (typeof routing.locales)[number]) ? String(rawLocale) : routing.defaultLocale
    const contactMethod = body.contactMethod === 'whatsapp' ? 'whatsapp' : 'email'

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { id: leadId } = await saveLead({
      type: 'plan-brief',
      name: String(name),
      email: String(email),
      subject: body.topMatchName ? String(body.topMatchName) : 'Plan brief (no match)',
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
        subject: `Safari Plan Brief: ${String(name)} — ${String(body.topMatchName || 'No strong match')}${contactMethod === 'whatsapp' ? ' (WhatsApp)' : ''}`,
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
    // Skipped for WhatsApp submissions (redundant once they're about to
    // open a live chat) — the team-notification email above still always
    // sends either way.
    if (contactMethod !== 'whatsapp') {
      try {
        const m = (await import(`../../../../messages/${locale}.json`)).default.emailAutoReply.planBrief as { subject: string; greeting: string; body: string }
        const resend = new Resend(process.env.RESEND_API_KEY)
        await sendAutoReply({
          resend,
          from: FROM,
          to: String(email),
          replyTo: TO,
          subject: m.subject,
          greeting: m.greeting.replace('{name}', escapeHtml(String(name))),
          bodyHtml: `<p style="margin:0;font-size:14px;line-height:1.6;color:#374151">${m.body}</p>`,
        })
      } catch (autoReplyErr) {
        console.error('Plan-brief auto-reply failed:', autoReplyErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Plan-brief API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
