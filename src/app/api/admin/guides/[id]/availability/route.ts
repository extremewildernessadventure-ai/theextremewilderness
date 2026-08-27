import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { GUIDE_AVAILABILITY_TYPES, type GuideAvailability } from '@/lib/hr'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const { results } = await db.prepare(
    'SELECT * FROM guide_availability WHERE guide_id = ? ORDER BY start_date ASC'
  ).bind(id).all()
  return NextResponse.json({ availability: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { startDate?: string; endDate?: string; type?: string; notes?: string }
  if (!body.startDate || !body.endDate) {
    return NextResponse.json({ error: 'startDate and endDate are required' }, { status: 400 })
  }
  if (!body.type || !GUIDE_AVAILABILITY_TYPES.includes(body.type as GuideAvailability['type'])) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  const db = await getDb()
  const guide = await db.prepare('SELECT id FROM guides WHERE id = ?').bind(id).first()
  if (!guide) {
    return NextResponse.json({ error: 'Guide not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO guide_availability (guide_id, start_date, end_date, type, notes)
     VALUES (?, ?, ?, ?, ?)`
  ).bind(id, body.startDate, body.endDate, body.type, body.notes ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
