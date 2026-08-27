import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { PERMIT_STATUSES, type Permit } from '@/lib/compliance'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const permit = await db.prepare('SELECT * FROM permits WHERE id = ?').bind(id).first()
  if (!permit) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ permit })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    park?: string; permitNumber?: string; amountPaid?: number; paidAt?: string
    confirmationRef?: string; validFrom?: string; validTo?: string; status?: string; notes?: string
  }

  if (body.status !== undefined && !PERMIT_STATUSES.includes(body.status as Permit['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    park: body.park,
    permit_number: body.permitNumber,
    amount_paid: body.amountPaid,
    paid_at: body.paidAt,
    confirmation_ref: body.confirmationRef,
    valid_from: body.validFrom,
    valid_to: body.validTo,
    status: body.status,
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
  await db.prepare(`UPDATE permits SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM permits WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
