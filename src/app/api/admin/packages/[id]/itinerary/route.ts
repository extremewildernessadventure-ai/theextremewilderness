import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, replaceItinerary } from '@/lib/packages'
import type { ItineraryDay } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Replaces the whole day-by-day itinerary (and every day's per-tier
// lodging) in one call -- see replaceItinerary()'s own doc comment for why
// a full delete-and-reinsert is simpler and safer here than diffing days
// row by row.
export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { days?: ItineraryDay[] }

  if (!Array.isArray(body.days) || body.days.some((d) => !d.title || !d.description || !d.accommodation || !d.meals)) {
    return NextResponse.json({ error: 'Every itinerary day needs a title, description, accommodation, and meals' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replaceItinerary(db, Number(id), body.days)
  return NextResponse.json({ success: true })
}
