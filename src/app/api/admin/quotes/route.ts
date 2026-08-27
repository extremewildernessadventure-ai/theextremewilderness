import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const leadId = req.nextUrl.searchParams.get('leadId')
  const db = await getDb()
  const { results } = leadId
    ? await db.prepare('SELECT * FROM quotes WHERE lead_id = ? ORDER BY created_at DESC').bind(leadId).all()
    : await db.prepare(`
        SELECT quotes.*, leads.name AS lead_name, leads.email AS lead_email
        FROM quotes JOIN leads ON leads.id = quotes.lead_id
        ORDER BY quotes.created_at DESC
      `).all()
  return NextResponse.json({ quotes: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json() as {
    leadId?: number; packageSlug?: string; price?: number; currency?: string
    validUntil?: string; notes?: string
  }
  if (!body.leadId) {
    return NextResponse.json({ error: 'leadId is required' }, { status: 400 })
  }
  if (typeof body.price !== 'number' || body.price < 0) {
    return NextResponse.json({ error: 'price must be a non-negative number' }, { status: 400 })
  }

  const db = await getDb()
  const lead = await db.prepare('SELECT id FROM leads WHERE id = ?').bind(body.leadId).first()
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO quotes (lead_id, package_slug, price, currency, valid_until, notes)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    body.leadId,
    body.packageSlug ?? null,
    body.price,
    body.currency ?? 'USD',
    body.validUntil ?? null,
    body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
