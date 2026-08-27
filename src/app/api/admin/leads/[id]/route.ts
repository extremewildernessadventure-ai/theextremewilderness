import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

const VALID_STATUSES = new Set(['new', 'contacted', 'converted', 'archived'])

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const lead = await db.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first()
  if (!lead) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ lead })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const { status, notes, tripStartDate, tripEndDate } = await req.json() as {
    status?: string; notes?: string; tripStartDate?: string; tripEndDate?: string
  }

  if (status !== undefined && !VALID_STATUSES.has(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const fields: string[] = []
  const values: unknown[] = []
  if (status !== undefined) {
    fields.push('status = ?')
    values.push(status)
  }
  if (notes !== undefined) {
    fields.push('notes = ?')
    values.push(notes)
  }
  if (tripStartDate !== undefined) {
    fields.push('trip_start_date = ?')
    values.push(tripStartDate || null)
  }
  if (tripEndDate !== undefined) {
    fields.push('trip_end_date = ?')
    values.push(tripEndDate || null)
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }
  fields.push('updated_at = CURRENT_TIMESTAMP')

  const db = await getDb()
  await db.prepare(`UPDATE leads SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM leads WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
