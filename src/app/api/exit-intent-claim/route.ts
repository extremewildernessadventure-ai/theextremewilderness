import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { computeDiscountCode } from '@/lib/discountCode'
import { saveLead, markLeadEmailSent } from '@/lib/leads'
import { routing } from '@/i18n/routing'
import { escapeHtml, sendAutoReply, buildBrandedEmailHtml } from '@/lib/email'

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
  return buildBrandedEmailHtml({
    eyebrow: 'Exit-Intent Discount Claim',
    heading: name || email,
    subheading: email,
    maxWidth: 600,
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse">
        ${row('Name', name || '—')}
        ${row('Email', email)}
        ${row('Code', code)}
      </table>
      <p style="margin:16px 0 0;font-size:11px;color:#9ca3af">Reply directly to this email to reach the subscriber, or follow up when they enquire and honor the code manually.</p>
    `,
  })
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, locale: rawLocale } = await req.json() as { name?: string; email?: string; locale?: string }
    const locale = routing.locales.includes(rawLocale as (typeof routing.locales)[number]) ? rawLocale! : routing.defaultLocale

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const code = computeDiscountCode(email)

    const { id: leadId } = await saveLead({
      type: 'exit-intent-claim',
      name: name ?? email,
      email,
      subject: 'Discount code claim',
      locale,
      payload: { name, email, code },
    })

    let emailOk = false
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: email,
        subject: `Exit-Intent Discount Claim — ${name || email}`,
        html: buildHtml(name ?? '', email, code),
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
    // The discount code itself is already shown in the UI at claim time
    // (see ExitIntentPopup.tsx), so this is a confirmation, not delivery.
    try {
      const m = (await import(`../../../../messages/${locale}.json`)).default.emailAutoReply.exitIntentClaim as { subject: string; greeting: string; body: string }
      const resend = new Resend(process.env.RESEND_API_KEY)
      await sendAutoReply({
        resend,
        from: FROM,
        to: email,
        replyTo: TO,
        subject: m.subject,
        greeting: m.greeting.replace('{name}', escapeHtml(name || 'there')),
        bodyHtml: `<p style="margin:0;font-size:14px;line-height:1.6;color:#374151">${m.body}</p>`,
      })
    } catch (autoReplyErr) {
      console.error('Exit-intent auto-reply failed:', autoReplyErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Exit-intent claim API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
