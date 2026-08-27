import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { LODGE_BOOKING_STATUSES, type LodgeBooking } from '@/lib/bookings'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string; lodgeBookingId: string }> }

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { lodgeBookingId } = await params
  const body = await req.json() as { status?: string }

  if (!body.status || !LODGE_BOOKING_STATUSES.includes(body.status as LodgeBooking['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare('UPDATE lodge_bookings SET status = ? WHERE id = ?').bind(body.status, lodgeBookingId).run()
  return NextResponse.json({ success: true })
}
