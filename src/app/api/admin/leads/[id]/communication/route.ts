import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { COMMUNICATION_CHANNELS } from '@/lib/leads'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const { results } = await db.prepare(
    'SELECT * FROM communication_log WHERE lead_id = ? ORDER BY created_at DESC'
  ).bind(id).all()
  return NextResponse.json({ entries: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { channel?: string; summary?: string; loggedBy?: string }

  if (!body.channel || !COMMUNICATION_CHANNELS.includes(body.channel as (typeof COMMUNICATION_CHANNELS)[number])) {
    return NextResponse.json({ error: 'Invalid channel' }, { status: 400 })
  }
  if (!body.summary?.trim()) {
    return NextResponse.json({ error: 'summary is required' }, { status: 400 })
  }

  const db = await getDb()
  const lead = await db.prepare('SELECT id FROM leads WHERE id = ?').bind(id).first()
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  }

  const result = await db.prepare(
    'INSERT INTO communication_log (lead_id, channel, summary, logged_by) VALUES (?, ?, ?, ?)'
  ).bind(id, body.channel, body.summary.trim(), body.loggedBy ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
