import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { computeQuoteTotalCost } from '@/lib/quotes'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const leadId = req.nextUrl.searchParams.get('leadId')
  const clientId = req.nextUrl.searchParams.get('clientId')
  const db = await getDb()
  const { results } = leadId
    ? await db.prepare('SELECT * FROM quotes WHERE lead_id = ? ORDER BY created_at DESC').bind(leadId).all()
    : clientId
    ? await db.prepare('SELECT * FROM quotes WHERE client_id = ? ORDER BY created_at DESC').bind(clientId).all()
    : await db.prepare(`
        SELECT quotes.*, leads.name AS lead_name, leads.email AS lead_email, clients.name AS client_name, clients.email AS client_email
        FROM quotes
        LEFT JOIN leads ON leads.id = quotes.lead_id
        LEFT JOIN clients ON clients.id = quotes.client_id
        ORDER BY quotes.created_at DESC
      `).all()
  return NextResponse.json({ quotes: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json() as {
    leadId?: number; clientId?: number; packageSlug?: string
    adults?: number; children?: number; pricePerAdult?: number; pricePerChild?: number | null
    currency?: string; validUntil?: string; notes?: string
  }
  if (!body.leadId && !body.clientId) {
    return NextResponse.json({ error: 'leadId or clientId is required' }, { status: 400 })
  }
  if (typeof body.adults !== 'number' || body.adults <= 0) {
    return NextResponse.json({ error: 'adults must be a positive number' }, { status: 400 })
  }
  const children = body.children ?? 0
  if (typeof children !== 'number' || children < 0) {
    return NextResponse.json({ error: 'children must be zero or a positive number' }, { status: 400 })
  }
  if (typeof body.pricePerAdult !== 'number' || body.pricePerAdult < 0) {
    return NextResponse.json({ error: 'pricePerAdult must be a non-negative number' }, { status: 400 })
  }
  if (children > 0 && (typeof body.pricePerChild !== 'number' || body.pricePerChild < 0)) {
    return NextResponse.json({ error: 'pricePerChild is required when children > 0' }, { status: 400 })
  }

  const db = await getDb()
  if (body.leadId) {
    const lead = await db.prepare('SELECT id FROM leads WHERE id = ?').bind(body.leadId).first()
    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }
  }
  if (body.clientId) {
    const client = await db.prepare('SELECT id FROM clients WHERE id = ?').bind(body.clientId).first()
    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 })
    }
  }

  const pricePerChild = children > 0 ? (body.pricePerChild ?? null) : null
  const price = computeQuoteTotalCost({ adults: body.adults, children, price_per_adult: body.pricePerAdult, price_per_child: pricePerChild }) ?? 0

  const result = await db.prepare(
    `INSERT INTO quotes (lead_id, client_id, package_slug, adults, children, price_per_adult, price_per_child, price, currency, valid_until, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.leadId ?? null,
    body.clientId ?? null,
    body.packageSlug ?? null,
    body.adults,
    children,
    body.pricePerAdult,
    pricePerChild,
    price,
    body.currency ?? 'USD',
    body.validUntil ?? null,
    body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
