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
  const { results } = await db.prepare(
    'SELECT * FROM supplier_contracts WHERE supplier_id = ? ORDER BY created_at DESC'
  ).bind(id).all()
  return NextResponse.json({ contracts: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    negotiatedRate?: number; currency?: string; validFrom?: string; validTo?: string; notes?: string
  }

  const db = await getDb()
  const supplier = await db.prepare('SELECT id FROM suppliers WHERE id = ?').bind(id).first()
  if (!supplier) {
    return NextResponse.json({ error: 'Supplier not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO supplier_contracts (supplier_id, negotiated_rate, currency, valid_from, valid_to, notes)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    id, body.negotiatedRate ?? null, body.currency ?? 'USD',
    body.validFrom ?? null, body.validTo ?? null, body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
