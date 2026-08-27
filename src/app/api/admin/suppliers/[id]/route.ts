import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { SUPPLIER_TYPES, type Supplier } from '@/lib/ops'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const supplier = await db.prepare('SELECT * FROM suppliers WHERE id = ?').bind(id).first()
  if (!supplier) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ supplier })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { name?: string; type?: string; contactInfo?: string; active?: boolean; notes?: string }

  if (body.type !== undefined && !SUPPLIER_TYPES.includes(body.type as Supplier['type'])) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    name: body.name,
    type: body.type,
    contact_info: body.contactInfo,
    active: body.active !== undefined ? (body.active ? 1 : 0) : undefined,
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
  fields.push('updated_at = CURRENT_TIMESTAMP')

  const db = await getDb()
  await db.prepare(`UPDATE suppliers SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  // Child rows reference suppliers(id) without ON DELETE CASCADE.
  await db.batch([
    db.prepare('DELETE FROM supplier_contracts WHERE supplier_id = ?').bind(id),
    db.prepare('DELETE FROM supplier_payments WHERE supplier_id = ?').bind(id),
    db.prepare('DELETE FROM suppliers WHERE id = ?').bind(id),
  ])
  return NextResponse.json({ success: true })
}
