import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM departures ORDER BY start_date ASC').all()
  return NextResponse.json({ departures: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    packageSlug?: string; startDate?: string; endDate?: string
    adults?: number; children?: number; pricePerAdult?: number; pricePerChild?: number | null
  }
  if (!body.packageSlug || !body.startDate || !body.endDate) {
    return NextResponse.json({ error: 'packageSlug, startDate, and endDate are required' }, { status: 400 })
  }
  if (typeof body.adults !== 'number' || body.adults <= 0) {
    return NextResponse.json({ error: 'adults must be a positive number' }, { status: 400 })
  }
  const children = body.children ?? 0
  if (typeof children !== 'number' || children < 0) {
    return NextResponse.json({ error: 'children must be zero or a positive number' }, { status: 400 })
  }
  if (typeof body.pricePerAdult !== 'number' || body.pricePerAdult < 0) {
    return NextResponse.json({ error: 'pricePerAdult must be a non-negative number' }, { status: 400 })
  }
  if (children > 0 && (typeof body.pricePerChild !== 'number' || body.pricePerChild < 0)) {
    return NextResponse.json({ error: 'pricePerChild is required when children > 0' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    'INSERT INTO departures (package_slug, start_date, end_date, adults, children, price_per_adult, price_per_child) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).bind(
    body.packageSlug, body.startDate, body.endDate, body.adults, children,
    body.pricePerAdult, children > 0 ? body.pricePerChild : null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
