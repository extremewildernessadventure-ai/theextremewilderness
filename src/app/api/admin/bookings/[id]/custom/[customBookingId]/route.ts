import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { CUSTOM_BOOKING_STATUSES, type CustomBooking } from '@/lib/bookings'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string; customBookingId: string }> }

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { customBookingId } = await params
  const body = await req.json() as { status?: string }

  if (!body.status || !CUSTOM_BOOKING_STATUSES.includes(body.status as CustomBooking['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare('UPDATE custom_bookings SET status = ? WHERE id = ?').bind(body.status, customBookingId).run()
  return NextResponse.json({ success: true })
}
