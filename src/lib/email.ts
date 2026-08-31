import { SITE_URL } from './site'

// Shared branded HTML wrapper for outbound transactional emails. Every
// lead-creation route previously hand-rolled its own near-identical inline
// HTML (a #1C3A2A header with a #D4A853 gold eyebrow label, a white card,
// a gray footer) — this extracts that into one place so new email types
// (starting with the auto-reply confirmations) don't duplicate it again.
// Deliberately just a plain wrapper, not a template-per-purpose: callers
// pass their own eyebrow/heading/body HTML and get consistent chrome
// around it.
//
// Logo uses an absolute URL (SITE_URL, not a relative path) — email
// clients render HTML with no notion of "this site's own origin", so a
// relative /EWA%20logo.png would just be a broken image everywhere. PNG,
// not the site's usual WebP: mail clients (Outlook desktop chief among
// them) have historically poor/no WebP support, and this exact PNG
// export already exists in public/ for that reason.
export function buildBrandedEmailHtml({ eyebrow, heading, subheading, bodyHtml, maxWidth = 520 }: {
  eyebrow: string
  heading: string
  // Optional third header line, e.g. a submitter's "name · email · phone"
  // under the main heading — several team-notification templates need
  // this and it belongs in the branded header, not floated into bodyHtml.
  subheading?: string
  bodyHtml: string
  // Team-notification emails carrying a data table (enquiry/trade-partner
  // detail rows) want more width than the auto-reply confirmations' single
  // column of prose; the card itself still centers and stays responsive.
  maxWidth?: number
}): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:${maxWidth}px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
    <div style="background:#1C3A2A;padding:24px 28px 26px">
      <img src="${SITE_URL}/EWA%20logo.png" width="40" height="40" alt="EWA Safari Outfitters" style="display:block;width:40px;height:40px;margin:0 0 10px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">${eyebrow}</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">${heading}</h1>
      ${subheading ? `<p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">${subheading}</p>` : ''}
    </div>
    <div style="padding:28px">
      ${bodyHtml}
    </div>
    <div style="padding:16px 28px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0 0 4px;font-size:11px;color:#9ca3af">EWA Safari Outfitters · Arusha, Tanzania · theextremewilderness.com</p>
      <p style="margin:0;font-size:11px;color:#9ca3af">+255 (0) 747 999 070 · info@theextremewilderness.com</p>
    </div>
  </div>
</body>
</html>`
}

// Footer-only branding (logo + full contact details), for the one email
// type that can't use buildBrandedEmailHtml's full card wrapper: the
// newsletter blast, whose body is arbitrary HTML an admin composes per
// send (already its own complete message, not an eyebrow/heading/body
// shape) — nesting that inside another branded card would double up or
// clash with whatever the admin already designed. This gets appended
// after the admin's own content instead, so every outbound email still
// carries the logo and full contact details, without assuming anything
// about the content it's attached to.
export function buildEmailFooterHtml(extraLinkHtml?: string): string {
  return `
    <div style="max-width:520px;margin:24px auto 0;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center">
      <img src="${SITE_URL}/EWA%20logo.png" width="28" height="28" alt="EWA Safari Outfitters" style="display:inline-block;width:28px;height:28px;margin:0 0 8px">
      <p style="margin:0 0 4px;font-size:12px;color:#9ca3af">EWA Safari Outfitters · Arusha, Tanzania · theextremewilderness.com</p>
      <p style="margin:0;font-size:12px;color:#9ca3af">+255 (0) 747 999 070 · info@theextremewilderness.com${extraLinkHtml ? ` · ${extraLinkHtml}` : ''}</p>
    </div>
  `
}

// Escapes free-typed visitor input before interpolating it into an HTML
// email — every route already does this ad hoc; centralized here so the
// auto-reply helper below doesn't need callers to remember it separately.
export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// A best-effort auto-reply to whoever just submitted a lead-creation form —
// sent as a second Resend call after the existing business-notification
// email, `to` the submitter and `replyTo` the business inbox so any reply
// lands with the team, not back at this noreply address. Wrapped in its
// own try/catch by every caller (matching the established pattern in
// api/pdf-lead/route.ts) so a failure here never fails the request or
// blocks lead persistence/the business notification.
export async function sendAutoReply({ resend, from, to, replyTo, subject, greeting, bodyHtml }: {
  resend: import('resend').Resend
  from: string
  to: string
  replyTo: string
  subject: string
  greeting: string
  bodyHtml: string
}): Promise<void> {
  const html = buildBrandedEmailHtml({
    eyebrow: 'EWA Safari Outfitters',
    heading: subject,
    bodyHtml: `
      <p style="margin:0 0 14px;font-size:15px;color:#1a1a1a">${greeting}</p>
      ${bodyHtml}
      <p style="margin:22px 0 0;font-size:14px;color:#374151">Warm regards,<br><strong style="color:#1C3A2A">The EWA Safari Outfitters Team</strong></p>
    `,
  })
  const { error } = await resend.emails.send({ from, to, replyTo, subject, html })
  if (error) console.error('Auto-reply send failed:', error)
}
