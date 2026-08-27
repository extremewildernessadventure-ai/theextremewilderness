import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM departures ORDER BY start_date ASC').all()
  return NextResponse.json({ departures: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    packageSlug?: string; startDate?: string; endDate?: string; capacity?: number
  }
  if (!body.packageSlug || !body.startDate || !body.endDate) {
    return NextResponse.json({ error: 'packageSlug, startDate, and endDate are required' }, { status: 400 })
  }
  if (typeof body.capacity !== 'number' || body.capacity <= 0) {
    return NextResponse.json({ error: 'capacity must be a positive number' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    'INSERT INTO departures (package_slug, start_date, end_date, capacity) VALUES (?, ?, ?, ?)'
  ).bind(body.packageSlug, body.startDate, body.endDate, body.capacity).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
