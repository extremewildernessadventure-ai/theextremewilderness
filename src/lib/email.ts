// Shared branded HTML wrapper for outbound transactional emails. Every
// lead-creation route previously hand-rolled its own near-identical inline
// HTML (a #1C3A2A header with a #D4A853 gold eyebrow label, a white card,
// a gray footer) — this extracts that into one place so new email types
// (starting with the auto-reply confirmations) don't duplicate it again.
// Deliberately just a plain wrapper, not a template-per-purpose: callers
// pass their own eyebrow/heading/body HTML and get consistent chrome
// around it.
export function buildBrandedEmailHtml({ eyebrow, heading, bodyHtml }: {
  eyebrow: string
  heading: string
  bodyHtml: string
}): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
    <div style="background:#1C3A2A;padding:26px 28px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">${eyebrow}</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">${heading}</h1>
    </div>
    <div style="padding:28px">
      ${bodyHtml}
    </div>
    <div style="padding:16px 28px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">EWA Safari Outfitters · Arusha, Tanzania · theextremewilderness.com</p>
    </div>
  </div>
</body>
</html>`
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
