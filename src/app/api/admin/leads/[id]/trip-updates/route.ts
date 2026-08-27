import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { LEAD_UPDATE_CATEGORIES, COMMUNICATION_CHANNELS } from '@/lib/leads'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const { results } = await db.prepare(
    'SELECT * FROM lead_updates WHERE lead_id = ? ORDER BY created_at DESC'
  ).bind(id).all()
  return NextResponse.json({ updates: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    category?: string; title?: string; body?: string
    proofChannel?: string; proofNote?: string
  }

  if (!body.category || !LEAD_UPDATE_CATEGORIES.includes(body.category as (typeof LEAD_UPDATE_CATEGORIES)[number])) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  }
  if (!body.title?.trim()) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 })
  }
  if (body.proofChannel !== undefined && body.proofChannel !== '' && !COMMUNICATION_CHANNELS.includes(body.proofChannel as (typeof COMMUNICATION_CHANNELS)[number])) {
    return NextResponse.json({ error: 'Invalid proof channel' }, { status: 400 })
  }

  const db = await getDb()
  const lead = await db.prepare('SELECT id FROM leads WHERE id = ?').bind(id).first()
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO lead_updates (lead_id, category, title, body, proof_channel, proof_note)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    id,
    body.category,
    body.title.trim(),
    body.body?.trim() || null,
    body.proofChannel || null,
    body.proofNote?.trim() || null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
