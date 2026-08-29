import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const { results } = await db.prepare(
    'SELECT * FROM custom_bookings WHERE booking_id = ? ORDER BY created_at ASC'
  ).bind(id).all()
  return NextResponse.json({ customBookings: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    description?: string; startDate?: string; endDate?: string
    contactInfo?: string; notes?: string
  }
  if (!body.description?.trim()) {
    return NextResponse.json({ error: 'description is required' }, { status: 400 })
  }

  const db = await getDb()
  const booking = await db.prepare('SELECT id FROM bookings WHERE id = ?').bind(id).first()
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO custom_bookings (booking_id, description, start_date, end_date, contact_info, notes)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    id,
    body.description.trim(),
    body.startDate ?? null,
    body.endDate ?? null,
    body.contactInfo ?? null,
    body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
