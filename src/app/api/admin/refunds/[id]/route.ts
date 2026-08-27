import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { REFUND_STATUSES, type Refund } from '@/lib/finance'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const refund = await db.prepare('SELECT * FROM refunds WHERE id = ?').bind(id).first()
  if (!refund) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ refund })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { status?: string; reason?: string; notes?: string }

  if (body.status !== undefined && !REFUND_STATUSES.includes(body.status as Refund['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    status: body.status,
    reason: body.reason,
    notes: body.notes,
    processed_at: body.status === 'processed' ? new Date().toISOString() : undefined,
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
  await db.prepare(`UPDATE refunds SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM refunds WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
