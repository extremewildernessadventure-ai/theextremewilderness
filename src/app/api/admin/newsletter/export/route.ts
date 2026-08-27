import { NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { toCsv } from '@/lib/csv'
import type { NewsletterSubscriber } from '@/lib/newsletter'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM newsletter_subscribers ORDER BY created_at DESC').all<NewsletterSubscriber>()

  const csv = toCsv(results, [
    { key: 'email', header: 'Email' },
    { key: 'status', header: 'Status' },
    { key: 'source', header: 'Source' },
    { key: 'created_at', header: 'Subscribed At' },
  ])

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="newsletter-subscribers.csv"',
    },
  })
}
