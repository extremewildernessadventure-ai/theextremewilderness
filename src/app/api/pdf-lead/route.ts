import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from '@/i18n/routing'
import { saveLead, markLeadEmailSent } from '@/lib/leads'
import { upsertSubscriber } from '@/lib/newsletter'
import { getOrGeneratePublicGuideUrl, type GuideDescriptor } from '@/lib/publicGuides'

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? ''
const TO = process.env.RESEND_TO ?? 'info@theextremewilderness.com'
const FROM = process.env.RESEND_FROM ?? 'EWA Guide <noreply@theextremewilderness.com>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name?: string; email?: string; phone?: string; context?: string; packageSlug?: string; locale?: string
    }
    // packageSlug is still accepted in the request body (kept in the `body`
    // type below) and lands in the saved lead's payload for context, but no
    // longer drives guide resolution — see the comment further down.
    const { name, email, phone, context, locale: rawLocale } = body
    const locale = routing.locales.includes(rawLocale as (typeof routing.locales)[number]) ? rawLocale! : routing.defaultLocale

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const trimName  = name.trim()
    const trimEmail = email.trim()
    const trimPhone = phone?.trim() ?? ''
    // Client-supplied — escape before embedding in the HTML email.
    const trimContext = (context?.trim() ?? '').slice(0, 120)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

    const { id: leadId } = await saveLead({
      type: 'pdf-lead',
      name: trimName,
      email: trimEmail,
      phone: trimPhone || null,
      subject: trimContext || 'PDF guide request',
      locale,
      payload: body,
    })

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Add to newsletter audience for follow-up emails
    if (AUDIENCE_ID) {
      const [firstName, ...rest] = trimName.split(' ')
      await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email: trimEmail,
        firstName: firstName ?? '',
        lastName: rest.join(' ') || '',
        unsubscribed: false,
      }).catch(() => {})   // ignore duplicate-contact errors
      await upsertSubscriber(trimEmail, 'pdf-lead')
    }

    // Notify the team
    const { error } = await resend.emails.send({
      from: FROM,
      to:   TO,
      replyTo: trimEmail,
      subject: trimContext ? `📥 Itinerary request — ${trimContext}: ${trimName}` : `📥 New PDF Lead: ${trimName}`,
      html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:26px 28px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">
        ${trimContext ? `Itinerary Request &mdash; ${trimContext}` : 'New Kilimanjaro Guide Lead'}
      </p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">${trimName}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">
        ${trimEmail}${trimPhone ? ' &middot; ' + trimPhone : ''}
      </p>
    </div>

    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr>
        <td style="padding:12px 28px;background:#f9fafb;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;width:110px">Name</td>
        <td style="padding:12px 28px;color:#1a1a1a">${trimName}</td>
      </tr>
      <tr>
        <td style="padding:12px 28px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em">Email</td>
        <td style="padding:12px 28px;color:#1a1a1a"><a href="mailto:${trimEmail}" style="color:#1C3A2A">${trimEmail}</a></td>
      </tr>
      ${trimPhone ? `<tr>
        <td style="padding:12px 28px;background:#f9fafb;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em">Phone</td>
        <td style="padding:12px 28px;background:#f9fafb;color:#1a1a1a">${trimPhone}</td>
      </tr>` : ''}
    </table>

    <div style="padding:16px 28px 20px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#9ca3af">
        ${trimContext
          ? `Requested the full &ldquo;${trimContext}&rdquo; itinerary by email &mdash; reply with the day-by-day plan within 24 hrs.`
          : 'Requested the free Kilimanjaro Trekking Guide PDF &mdash; follow up within 24 hrs for best conversion.'}
      </p>
    </div>
  </div>
</body>
</html>`,
    })

    let emailOk = false
    if (error) {
      console.error('Resend error:', error)
    } else {
      emailOk = true
      if (leadId) await markLeadEmailSent(leadId)
    }

    if (!emailOk && !leadId) {
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    // Resolve a download link, not an attachment — the PDF itself is
    // pre-generated ahead of demand (see src/app/api/cron/generate-guides/
    // route.ts) and served from R2 via a public URL; this call is a
    // self-healing fallback (renders + caches on the spot) for anything the
    // batch job hasn't backfilled yet. Both guides are now generic — one
    // file per locale, used everywhere — so which document depends only on
    // whether this came in as an itinerary-style request (trimContext set,
    // regardless of packageSlug — that field is accepted for logging/lead
    // context only now, not for guide resolution) or a plain Kilimanjaro
    // guide request (no context).
    const guide: GuideDescriptor = trimContext
      ? { type: 'itinerary', locale }
      : { type: 'kilimanjaro', locale }

    let downloadUrl: string | null = null
    try {
      const { url } = await getOrGeneratePublicGuideUrl(guide, req.nextUrl.origin)
      downloadUrl = url
    } catch (pdfErr) {
      // Falls through to an email with no download button rather than
      // failing the request — the lead is already saved either way.
      console.error('PDF-lead guide resolution failed:', pdfErr)
    }

    // Send the visitor the guide (or itinerary confirmation), localized.
    // The lead is already captured above, so a failure here is logged but not fatal.
    try {
      const m = (await import(`../../../../messages/${locale}.json`)).default.pdfLead as Record<string, string>
      const escName = trimName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      const isItinerary = Boolean(trimContext)
      const intro = isItinerary
        ? m.emailItineraryIntro.replace('{context}', trimContext)
        : m.emailIntro
      const downloadButton = downloadUrl
        ? `<p style="margin:0 0 22px;text-align:center">
        <a href="${downloadUrl}" style="display:inline-block;background:#D4A853;color:#1C3A2A;font-weight:800;font-size:14px;padding:14px 28px;border-radius:12px;text-decoration:none">${m.emailCta}</a>
      </p>`
        : ''
      const { error: visitorError } = await resend.emails.send({
        from: FROM,
        to: trimEmail,
        replyTo: TO,
        subject: isItinerary ? m.emailItinerarySubject : m.emailSubject,
        html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
    <div style="background:#1C3A2A;padding:26px 28px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">EWA Safari Outfitters</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">${isItinerary ? m.emailItinerarySubject : m.emailSubject}</h1>
    </div>
    <div style="padding:28px">
      <p style="margin:0 0 14px;font-size:15px;color:#1a1a1a">${m.emailGreeting.replace('{name}', escName)}</p>
      <p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:#374151">${intro}</p>
      ${downloadButton}
      <p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:#374151">${m.emailOutro}</p>
      <p style="margin:0;font-size:14px;color:#374151">${m.emailSignoff}<br><strong style="color:#1C3A2A">${m.emailTeam}</strong></p>
    </div>
  </div>
</body>
</html>`,
      })
      if (visitorError) console.error('Resend visitor-email error:', visitorError)
    } catch (visitorErr) {
      console.error('Visitor guide email failed:', visitorErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('PDF lead API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
