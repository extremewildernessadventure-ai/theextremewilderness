import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM reviews ORDER BY created_at DESC').all()
  return NextResponse.json({ reviews: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    clientId?: number; bookingId?: number; rating?: number; quoteText?: string; source?: string; parkTag?: string
  }
  if (!body.quoteText?.trim()) {
    return NextResponse.json({ error: 'quoteText is required' }, { status: 400 })
  }
  if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) {
    return NextResponse.json({ error: 'rating must be between 1 and 5' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    `INSERT INTO reviews (client_id, booking_id, rating, quote_text, source, park_tag)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(
    body.clientId ?? null, body.bookingId ?? null, body.rating,
    body.quoteText.trim(), body.source ?? null, body.parkTag ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
