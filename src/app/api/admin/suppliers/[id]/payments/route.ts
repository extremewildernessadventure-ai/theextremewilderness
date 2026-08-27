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
    'SELECT * FROM supplier_payments WHERE supplier_id = ? ORDER BY created_at DESC'
  ).bind(id).all()
  return NextResponse.json({ payments: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    departureId?: number; amount?: number; currency?: string; dueDate?: string; notes?: string
  }
  if (typeof body.amount !== 'number' || body.amount <= 0) {
    return NextResponse.json({ error: 'amount must be a positive number' }, { status: 400 })
  }

  const db = await getDb()
  const supplier = await db.prepare('SELECT id FROM suppliers WHERE id = ?').bind(id).first()
  if (!supplier) {
    return NextResponse.json({ error: 'Supplier not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO supplier_payments (supplier_id, departure_id, amount, currency, due_date, notes)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    id, body.departureId ?? null, body.amount, body.currency ?? 'USD',
    body.dueDate ?? null, body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
