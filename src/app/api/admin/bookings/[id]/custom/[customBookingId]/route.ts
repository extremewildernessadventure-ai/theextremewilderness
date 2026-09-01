import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { CUSTOM_BOOKING_STATUSES, type CustomBooking } from '@/lib/bookings'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string; customBookingId: string }> }

type PatchBody = {
  status?: string
  description?: string; startDate?: string | null; endDate?: string | null
  contactInfo?: string | null; notes?: string | null
}

// Doubles as both the compact InlineStatusSelect pill (sends only
// { status }) and the full inline edit form in CustomBookingsPanel (sends
// every field) — same dynamic-SET-clause pattern as the sibling lodge
// route.
export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { customBookingId } = await params
  const body = await req.json() as PatchBody

  if (body.status !== undefined && !CUSTOM_BOOKING_STATUSES.includes(body.status as CustomBooking['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }
  if (body.description !== undefined && !body.description.trim()) {
    return NextResponse.json({ error: 'description is required' }, { status: 400 })
  }

  const columns: Record<string, keyof PatchBody> = {
    status: 'status', description: 'description', start_date: 'startDate',
    end_date: 'endDate', contact_info: 'contactInfo', notes: 'notes',
  }
  const sets: string[] = []
  const values: unknown[] = []
  for (const [column, key] of Object.entries(columns)) {
    if (body[key] === undefined) continue
    sets.push(`${column} = ?`)
    values.push(key === 'description' ? (body.description as string).trim() : (body[key] as string) || null)
  }
  if (sets.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare(`UPDATE custom_bookings SET ${sets.join(', ')} WHERE id = ?`).bind(...values, customBookingId).run()
  return NextResponse.json({ success: true })
}
