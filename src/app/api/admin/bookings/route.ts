import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { recalculateSeatsBooked } from '@/lib/departures'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const departureId = req.nextUrl.searchParams.get('departureId')
  const db = await getDb()
  const { results } = departureId
    ? await db.prepare('SELECT * FROM bookings WHERE departure_id = ? ORDER BY created_at DESC').bind(departureId).all()
    : await db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all()
  return NextResponse.json({ bookings: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    departureId?: number; leadId?: number; clientName?: string; clientEmail?: string
    clientPhone?: string; guestsCount?: number
  }
  if (!body.departureId || !body.clientName?.trim()) {
    return NextResponse.json({ error: 'departureId and clientName are required' }, { status: 400 })
  }
  const guestsCount = body.guestsCount ?? 1
  if (guestsCount <= 0) {
    return NextResponse.json({ error: 'guestsCount must be a positive number' }, { status: 400 })
  }

  const db = await getDb()
  const departure = await db.prepare('SELECT id FROM departures WHERE id = ?').bind(body.departureId).first()
  if (!departure) {
    return NextResponse.json({ error: 'Departure not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO bookings (departure_id, lead_id, client_name, client_email, client_phone, guests_count)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    body.departureId, body.leadId ?? null, body.clientName.trim(),
    body.clientEmail ?? null, body.clientPhone ?? null, guestsCount,
  ).run()

  await recalculateSeatsBooked(db, body.departureId)

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
