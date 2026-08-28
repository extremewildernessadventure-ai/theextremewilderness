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
    'SELECT * FROM lodge_bookings WHERE booking_id = ? ORDER BY check_in ASC'
  ).bind(id).all()
  return NextResponse.json({ lodgeBookings: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    lodgeId?: number | null; lodgeNameOther?: string | null
    checkIn?: string; checkOut?: string; confirmationRef?: string
    roomType?: string; inclusions?: string; contactInfo?: string
  }
  if (!body.lodgeId && !body.lodgeNameOther) {
    return NextResponse.json({ error: 'lodgeId or lodgeNameOther is required' }, { status: 400 })
  }

  const db = await getDb()
  const booking = await db.prepare('SELECT id FROM bookings WHERE id = ?').bind(id).first()
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO lodge_bookings (booking_id, lodge_id, lodge_name_other, check_in, check_out, confirmation_ref, room_type, inclusions, contact_info)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    id,
    body.lodgeId ?? null,
    body.lodgeId ? null : (body.lodgeNameOther || null),
    body.checkIn ?? null,
    body.checkOut ?? null,
    body.confirmationRef ?? null,
    body.roomType ?? null,
    body.inclusions ?? null,
    body.contactInfo ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
