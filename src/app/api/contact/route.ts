import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { saveLead, markLeadEmailSent } from '@/lib/leads'
import { routing } from '@/i18n/routing'
import { escapeHtml, sendAutoReply, buildBrandedEmailHtml } from '@/lib/email'

const FROM = process.env.RESEND_FROM ?? 'EWA Contact <noreply@theextremewilderness.com>'
const TO   = process.env.RESEND_TO ?? 'info@theextremewilderness.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const { fullName, email, phone, subject, message, locale: rawLocale } = body
    const locale = routing.locales.includes(rawLocale as (typeof routing.locales)[number]) ? String(rawLocale) : routing.defaultLocale

    // Required fields
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailStr = String(email)
    const html = buildBrandedEmailHtml({
      eyebrow: 'New Contact Message',
      heading: String(fullName),
      subheading: `${emailStr}${phone ? ` · ${String(phone)}` : ''}`,
      maxWidth: 560,
      bodyHtml: `
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;width:120px">Subject</td><td style="padding:12px 16px;font-size:14px;color:#1a1a1a">${subject ? String(subject) : '—'}</td></tr>
          <tr><td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top">Message</td><td style="padding:12px 16px;font-size:14px;color:#1a1a1a;line-height:1.6"><em>${String(message).replace(/\n/g, '<br>')}</em></td></tr>
        </table>
        <p style="margin:16px 0 0;font-size:11px;color:#9ca3af">Reply directly to reach ${String(fullName)}.</p>
      `,
    })

    // Persist first — this is the durable path, and must not depend on the
    // Resend call below succeeding or even completing.
    const { id: leadId } = await saveLead({
      type: 'contact',
      name: String(fullName),
      email: emailStr,
      phone: phone ? String(phone) : null,
      subject: subject ? String(subject) : 'General Enquiry',
      locale,
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

    // Best-effort auto-reply to the submitter — never fails the request.
    try {
      const m = (await import(`../../../../messages/${locale}.json`)).default.emailAutoReply.contact as { subject: string; greeting: string; body: string }
      const resend = new Resend(process.env.RESEND_API_KEY)
      await sendAutoReply({
        resend,
        from: FROM,
        to: emailStr,
        replyTo: TO,
        subject: m.subject,
        greeting: m.greeting.replace('{name}', escapeHtml(String(fullName))),
        bodyHtml: `<p style="margin:0;font-size:14px;line-height:1.6;color:#374151">${m.body}</p>`,
      })
    } catch (autoReplyErr) {
      console.error('Contact auto-reply failed:', autoReplyErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
