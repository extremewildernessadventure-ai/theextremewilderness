import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { LODGE_BOOKING_STATUSES, type LodgeBooking } from '@/lib/bookings'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string; lodgeBookingId: string }> }

type PatchBody = {
  status?: string
  lodgeId?: number | null; lodgeNameOther?: string | null
  checkIn?: string | null; checkOut?: string | null; confirmationRef?: string | null
  roomType?: string | null; inclusions?: string | null; contactInfo?: string | null
}

// Doubles as both the compact InlineStatusSelect pill (sends only
// { status }) and the full inline edit form in LodgeBookingPanel (sends
// every field) — one endpoint, dynamic SET clause built from whichever
// keys are actually present in the body, same pattern as the lodge-select
// prefill's "only touch what was actually sent" philosophy elsewhere in
// this panel.
export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { lodgeBookingId } = await params
  const body = await req.json() as PatchBody

  if (body.status !== undefined && !LODGE_BOOKING_STATUSES.includes(body.status as LodgeBooking['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }
  const editingLodge = body.lodgeId !== undefined || body.lodgeNameOther !== undefined
  if (editingLodge && !body.lodgeId && !body.lodgeNameOther) {
    return NextResponse.json({ error: 'lodgeId or lodgeNameOther is required' }, { status: 400 })
  }

  const sets: string[] = []
  const values: unknown[] = []
  if (body.status !== undefined) { sets.push('status = ?'); values.push(body.status) }
  if (editingLodge) {
    // A lodge picked from the catalog clears any leftover free-text name,
    // and vice versa — same exclusivity the POST route already enforces on
    // insert, so an edit can't leave both set.
    sets.push('lodge_id = ?', 'lodge_name_other = ?')
    values.push(body.lodgeId ?? null, body.lodgeId ? null : (body.lodgeNameOther || null))
  }
  const simpleColumns: Record<string, keyof PatchBody> = {
    check_in: 'checkIn', check_out: 'checkOut', confirmation_ref: 'confirmationRef',
    room_type: 'roomType', inclusions: 'inclusions', contact_info: 'contactInfo',
  }
  for (const [column, key] of Object.entries(simpleColumns)) {
    if (body[key] === undefined) continue
    sets.push(`${column} = ?`)
    values.push(body[key] || null)
  }
  if (sets.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare(`UPDATE lodge_bookings SET ${sets.join(', ')} WHERE id = ?`).bind(...values, lodgeBookingId).run()
  return NextResponse.json({ success: true })
}
