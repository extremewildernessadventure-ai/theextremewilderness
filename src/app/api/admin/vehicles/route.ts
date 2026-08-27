import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM vehicles ORDER BY plate_number ASC').all()
  return NextResponse.json({ vehicles: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as { plateNumber?: string; capacity?: number; notes?: string }
  if (!body.plateNumber?.trim()) {
    return NextResponse.json({ error: 'plateNumber is required' }, { status: 400 })
  }
  if (typeof body.capacity !== 'number' || body.capacity <= 0) {
    return NextResponse.json({ error: 'capacity must be a positive number' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    'INSERT INTO vehicles (plate_number, capacity, notes) VALUES (?, ?, ?)'
  ).bind(body.plateNumber.trim(), body.capacity, body.notes ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
