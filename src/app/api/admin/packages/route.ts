import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { listPackageRows, createPackage, insertItinerary } from '@/lib/packages'
import type { SafariPackage } from '@/data/packages'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const packages = await listPackageRows(db)
  return NextResponse.json({ packages })
}

// Creates a minimal-but-valid package (every required SafariPackage field,
// none of the optional ones) -- the admin then fleshes it out via the
// per-section editors on the detail page. Starts as 'draft' and with an
// empty itinerary; insertItinerary(db, id, []) is a no-op but keeps the
// call shape identical to every other creation path (the migration script
// included) rather than special-casing "zero days" here.
export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json() as {
    slug?: string; name?: string; duration?: number; type?: SafariPackage['type']
    priceFrom?: number; groupSizeMin?: number; groupSizeMax?: number; heroImage?: string
  }
  if (!body.slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(body.slug)) {
    return NextResponse.json({ error: 'slug is required and must be lowercase-kebab-case' }, { status: 400 })
  }
  if (!body.name) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }
  if (!body.duration || body.duration < 1) {
    return NextResponse.json({ error: 'duration must be at least 1' }, { status: 400 })
  }
  if (!body.type) {
    return NextResponse.json({ error: 'type is required' }, { status: 400 })
  }
  if (!body.priceFrom || body.priceFrom <= 0) {
    return NextResponse.json({ error: 'priceFrom must be greater than 0' }, { status: 400 })
  }
  if (!body.groupSizeMin || !body.groupSizeMax || body.groupSizeMin > body.groupSizeMax) {
    return NextResponse.json({ error: 'groupSizeMin/groupSizeMax must be set, with min <= max' }, { status: 400 })
  }
  if (!body.heroImage) {
    return NextResponse.json({ error: 'heroImage is required' }, { status: 400 })
  }

  const db = await getDb()
  const existing = await db.prepare('SELECT id FROM packages WHERE slug = ?').bind(body.slug).first()
  if (existing) {
    return NextResponse.json({ error: 'That slug is already in use. Please choose another.' }, { status: 409 })
  }

  const pkg: SafariPackage = {
    slug: body.slug,
    name: body.name,
    duration: body.duration,
    destinations: [],
    type: body.type,
    priceFrom: body.priceFrom,
    groupSize: { min: body.groupSizeMin, max: body.groupSizeMax },
    highlights: [],
    itinerary: [],
    included: [],
    excluded: [],
    heroImage: body.heroImage,
    gallery: [],
    bestFor: [],
  }

  // sortOrder = current count -- new packages append to the end of the
  // catalog's display order by default; reordering is a later admin action,
  // not something a brand-new package needs to guess at.
  const { results: existingRows } = await db.prepare('SELECT COUNT(*) as n FROM packages').all<{ n: number }>()
  const sortOrder = existingRows[0]?.n ?? 0

  const id = await createPackage(db, pkg, 'draft', sortOrder)
  await insertItinerary(db, id, [])

  return NextResponse.json({ success: true, id, slug: pkg.slug })
}
