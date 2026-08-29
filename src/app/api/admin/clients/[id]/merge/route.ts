import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import type { Client } from '@/lib/clients'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Merges `duplicateId` into `id` — this client (the one whose page the
// merge was started from) is always the survivor. Every record pointing
// at the duplicate (leads/bookings/invoices/documents/reviews/newsletter
// subscribers) gets repointed at the survivor, any of the survivor's own
// name/email/phone/notes fields that are still blank get backfilled from
// the duplicate (never overwrites something already set), then the
// duplicate client row is deleted. One request, one batch, irreversible —
// the confirm dialog lives client-side in MergeClientPanel.
export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { duplicateId?: number }
  if (!body.duplicateId) {
    return NextResponse.json({ error: 'duplicateId is required' }, { status: 400 })
  }
  if (String(body.duplicateId) === id) {
    return NextResponse.json({ error: "Can't merge a client into itself" }, { status: 400 })
  }

  const db = await getDb()
  const [survivor, duplicate] = await Promise.all([
    db.prepare('SELECT * FROM clients WHERE id = ?').bind(id).first<Client>(),
    db.prepare('SELECT * FROM clients WHERE id = ?').bind(body.duplicateId).first<Client>(),
  ])
  if (!survivor) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  if (!duplicate) {
    return NextResponse.json({ error: 'Duplicate client not found' }, { status: 404 })
  }

  await db.batch([
    db.prepare('UPDATE leads SET client_id = ? WHERE client_id = ?').bind(id, body.duplicateId),
    db.prepare('UPDATE bookings SET client_id = ? WHERE client_id = ?').bind(id, body.duplicateId),
    db.prepare('UPDATE invoices SET client_id = ? WHERE client_id = ?').bind(id, body.duplicateId),
    db.prepare('UPDATE documents SET client_id = ? WHERE client_id = ?').bind(id, body.duplicateId),
    db.prepare('UPDATE reviews SET client_id = ? WHERE client_id = ?').bind(id, body.duplicateId),
    db.prepare('UPDATE newsletter_subscribers SET client_id = ? WHERE client_id = ?').bind(id, body.duplicateId),
    db.prepare('UPDATE clients SET email = ?, phone = ?, notes = ? WHERE id = ?').bind(
      survivor.email ?? duplicate.email,
      survivor.phone ?? duplicate.phone,
      survivor.notes ?? duplicate.notes,
      id,
    ),
    db.prepare('DELETE FROM clients WHERE id = ?').bind(body.duplicateId),
  ])

  return NextResponse.json({ success: true })
}
