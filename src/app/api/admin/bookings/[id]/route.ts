import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { recalculateSeatsBooked } from '@/lib/departures'
import { BOOKING_STATUSES, type Booking } from '@/lib/bookings'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const booking = await db.prepare('SELECT * FROM bookings WHERE id = ?').bind(id).first()
  if (!booking) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ booking })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    clientName?: string; clientEmail?: string; clientPhone?: string
    guestsCount?: number; status?: string; cancellationReason?: string; specialRequests?: string
  }

  if (body.status !== undefined && !BOOKING_STATUSES.includes(body.status as Booking['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    client_name: body.clientName,
    client_email: body.clientEmail,
    client_phone: body.clientPhone,
    guests_count: body.guestsCount,
    status: body.status,
    cancellation_reason: body.cancellationReason,
    special_requests: body.specialRequests,
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
  const booking = await db.prepare('SELECT departure_id FROM bookings WHERE id = ?').bind(id).first<{ departure_id: number | null }>()
  if (!booking) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await db.prepare(`UPDATE bookings SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()

  // status/guestsCount changes both affect how many seats this booking
  // occupies — recalculate whenever either could have changed. No-op for
  // custom bookings, which have no departure to hold a seat count.
  if ((body.status !== undefined || body.guestsCount !== undefined) && booking.departure_id !== null) {
    await recalculateSeatsBooked(db, booking.departure_id)
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const booking = await db.prepare('SELECT departure_id FROM bookings WHERE id = ?').bind(id).first<{ departure_id: number | null }>()
  if (!booking) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await db.batch([
    db.prepare('DELETE FROM lodge_bookings WHERE booking_id = ?').bind(id),
    db.prepare('DELETE FROM custom_bookings WHERE booking_id = ?').bind(id),
    db.prepare('DELETE FROM bookings WHERE id = ?').bind(id),
  ])
  if (booking.departure_id !== null) {
    await recalculateSeatsBooked(db, booking.departure_id)
  }

  return NextResponse.json({ success: true })
}
