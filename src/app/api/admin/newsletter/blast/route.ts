import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { SITE_URL } from '@/lib/site'
import type { NewsletterSubscriber } from '@/lib/newsletter'

export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM ?? 'EWA Safari Outfitters <noreply@theextremewilderness.com>'

// A one-off send, not a campaign platform — no scheduling, no open/click
// tracking, no template library. Sends individually (not one email with
// every address in BCC) so each recipient gets their own unsubscribe link.
export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as { subject?: string; html?: string }
  if (!body.subject?.trim() || !body.html?.trim()) {
    return NextResponse.json({ error: 'subject and html are required' }, { status: 400 })
  }

  const db = await getDb()
  const { results: subscribers } = await db.prepare(
    "SELECT * FROM newsletter_subscribers WHERE status = 'subscribed'"
  ).all<NewsletterSubscriber>()

  if (subscribers.length === 0) {
    return NextResponse.json({ sent: 0, total: 0 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const results = await Promise.allSettled(subscribers.map((sub) => {
    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${sub.unsubscribe_token}`
    const html = `${body.html}<hr style="margin-top:2rem;border:none;border-top:1px solid #eee;">
      <p style="font-size:12px;color:#999;text-align:center;">
        <a href="${unsubscribeUrl}" style="color:#999;">Unsubscribe</a>
      </p>`
    return resend.emails.send({ from: FROM, to: sub.email, subject: body.subject!, html })
  }))

  const sent = results.filter((r) => r.status === 'fulfilled').length
  return NextResponse.json({ sent, total: subscribers.length })
}
