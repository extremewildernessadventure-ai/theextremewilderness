import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { QUOTE_STATUSES, type Quote } from '@/lib/quotes'
import type { Lead } from '@/lib/leads'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const quote = await db.prepare('SELECT * FROM quotes WHERE id = ?').bind(id).first<Quote>()
  if (!quote) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  const lead = await db.prepare('SELECT * FROM leads WHERE id = ?').bind(quote.lead_id).first<Lead>()
  return NextResponse.json({ quote, lead })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    packageSlug?: string; price?: number; currency?: string
    status?: string; validUntil?: string; notes?: string
  }

  if (body.status !== undefined && !QUOTE_STATUSES.includes(body.status as Quote['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    package_slug: body.packageSlug,
    price: body.price,
    currency: body.currency,
    status: body.status,
    valid_until: body.validUntil,
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
  await db.prepare(`UPDATE quotes SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM quotes WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
