import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import type { NewsletterSubscriber } from '@/lib/newsletter'
import { resolveClientId } from '@/lib/clients'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function POST(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const subscriber = await db.prepare('SELECT * FROM newsletter_subscribers WHERE id = ?').bind(id).first<NewsletterSubscriber>()
  if (!subscriber) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  if (subscriber.client_id) {
    return NextResponse.json({ success: true, clientId: subscriber.client_id })
  }

  // A bare subscriber row has no name field at all -- fall back to the
  // email, same as a contact with no display name. Renameable anytime via
  // Clients & Reviews.
  const clientId = await resolveClientId(db, {
    name: subscriber.email,
    email: subscriber.email,
  })

  await db.prepare('UPDATE newsletter_subscribers SET client_id = ? WHERE id = ?')
    .bind(clientId, id)
    .run()

  return NextResponse.json({ success: true, clientId })
}
