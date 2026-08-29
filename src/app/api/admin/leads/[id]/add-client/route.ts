import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import { resolveClientId } from '@/lib/clients'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function POST(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const lead = await db.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first<Lead>()
  if (!lead) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  // Idempotent — re-clicking on an already-linked lead just returns the
  // existing link rather than re-resolving (no need to manually add an
  // enquiry we already have into a client, twice).
  if (lead.client_id) {
    return NextResponse.json({ success: true, clientId: lead.client_id })
  }

  const clientId = await resolveClientId(db, {
    name: lead.name || lead.email,
    email: lead.email,
    phone: lead.phone,
  })

  // "Add as Client" is the moment an enquiry actually matures — status
  // 'converted' already exists in the model and nothing else ever sets it.
  await db.prepare('UPDATE leads SET client_id = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .bind(clientId, 'converted', id)
    .run()

  return NextResponse.json({ success: true, clientId })
}
