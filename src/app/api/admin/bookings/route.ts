import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { resolveClientId } from '@/lib/clients'

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
    departureId?: number; leadId?: number; clientId?: number; clientName?: string; clientEmail?: string
    clientPhone?: string; guestsCount?: number
  }

  if (!body.clientName?.trim()) {
    return NextResponse.json({ error: 'clientName is required' }, { status: 400 })
  }
  const guestsCount = body.guestsCount ?? 1
  if (guestsCount <= 0) {
    return NextResponse.json({ error: 'guestsCount must be a positive number' }, { status: 400 })
  }

  const db = await getDb()

  // departureId is optional — a booking with no departure at all (a venue
  // rental, a one-off facility booking) is valid; what's actually being
  // booked is recorded via Accommodation & Facilities / Custom Bookings on
  // the booking's own page, not at creation time.
  if (body.departureId) {
    const departure = await db.prepare('SELECT id FROM departures WHERE id = ?').bind(body.departureId).first()
    if (!departure) {
      return NextResponse.json({ error: 'Departure not found' }, { status: 404 })
    }
  }

  // One canonical client record either way — reuse the picked one, dedupe
  // by email against the existing rolodex, or create a fresh one from the
  // name/email/phone typed here (see resolveClientId's own comment).
  const clientId = await resolveClientId(db, {
    clientId: body.clientId,
    name: body.clientName.trim(),
    email: body.clientEmail,
    phone: body.clientPhone,
  })

  const result = await db.prepare(
    `INSERT INTO bookings (departure_id, lead_id, client_id, client_name, client_email, client_phone, guests_count)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.departureId ?? null, body.leadId ?? null, clientId, body.clientName.trim(),
    body.clientEmail ?? null, body.clientPhone ?? null, guestsCount,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
