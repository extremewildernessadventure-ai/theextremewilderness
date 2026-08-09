import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { verifyCronSecret } from '@/lib/cronAuth'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM ?? 'EWA Leads <noreply@theextremewilderness.com>'
const TO = process.env.RESEND_TO ?? 'info@theextremewilderness.com'

function row(lead: Lead) {
  const link = `${SITE_URL}/admin/leads/${lead.id}`
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f7f2;font-size:14px;color:#1a1a1a"><a href="${link}" style="color:#1C3A2A;text-decoration:none;font-weight:600">${lead.name || lead.email}</a></td>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f7f2;font-size:13px;color:#6b7280;text-transform:capitalize">${lead.type}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f7f2;font-size:13px;color:#374151">${lead.subject ?? '—'}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f7f2;font-size:13px;color:#374151"><a href="mailto:${lead.email}" style="color:#1C3A2A">${lead.email}</a></td>
    </tr>`
}

function buildHtml(leads: Lead[]) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f0f7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <div style="background:#1C3A2A;padding:28px 24px">
      <p style="margin:0 0 4px;color:#D4A853;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em">Leads Digest</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">${leads.length} lead${leads.length === 1 ? '' : 's'} still need follow-up</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px">Unactioned for 48+ hours</p>
    </div>

    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr>
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;background:#f9fafb">Name</th>
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;background:#f9fafb">Type</th>
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;background:#f9fafb">Subject</th>
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;background:#f9fafb">Email</th>
        </tr>
      </thead>
      <tbody>
        ${leads.map(row).join('')}
      </tbody>
    </table>

    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af">Click a name to open it in the dashboard · <a href="${SITE_URL}/admin/leads" style="color:#1C3A2A">View all leads</a></p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  if (!verifyCronSecret(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const db = await getDb()
  const { results } = await db.prepare(
    `SELECT * FROM leads WHERE status = 'new' AND created_at <= datetime('now', '-2 days') ORDER BY created_at ASC`
  ).all<Lead>()

  if (results.length === 0) {
    return NextResponse.json({ sent: false, count: 0 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `📋 ${results.length} lead${results.length === 1 ? '' : 's'} need follow-up`,
    html: buildHtml(results),
  })

  if (error) {
    console.error('Leads digest Resend error:', error)
    return NextResponse.json({ error: 'Email failed', count: results.length }, { status: 500 })
  }

  return NextResponse.json({ sent: true, count: results.length })
}
