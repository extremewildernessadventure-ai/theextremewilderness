import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const client = await db.prepare('SELECT * FROM clients WHERE id = ?').bind(id).first()
  if (!client) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ client })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { name?: string; email?: string; phone?: string; notes?: string }

  const columnMap: Record<string, unknown> = {
    name: body.name,
    email: body.email,
    phone: body.phone,
    notes: body.notes,
  }
  const fields: string[] = []
  const values: unknown[] = []
  for (const [col, val] of Object.entries(columnMap)) {
    if (val !== undefined) {
      fields.push(`${col} = ?`)
      values.push(val)
    }
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare(`UPDATE clients SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()

  // Unlike Departures' hard block, unlinking is safe here — client_id is
  // always optional on leads/bookings/invoices/documents/reviews (a plain
  // cross-reference, not something those rows depend on to be valid), so a
  // client can be deleted while its linked records simply lose the link.
  await db.batch([
    db.prepare('UPDATE leads SET client_id = NULL WHERE client_id = ?').bind(id),
    db.prepare('UPDATE bookings SET client_id = NULL WHERE client_id = ?').bind(id),
    db.prepare('UPDATE invoices SET client_id = NULL WHERE client_id = ?').bind(id),
  ])

  const docCount = await db.prepare('SELECT COUNT(*) as count FROM documents WHERE client_id = ?').bind(id).first<{ count: number }>()
  if ((docCount?.count ?? 0) > 0) {
    return NextResponse.json(
      { error: 'Cannot delete this client — they have uploaded documents. Delete those first.' },
      { status: 409 }
    )
  }

  await db.prepare('UPDATE reviews SET client_id = NULL WHERE client_id = ?').bind(id).run()
  await db.prepare('DELETE FROM clients WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
