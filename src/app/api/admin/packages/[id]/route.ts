import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, getFullPackage, updatePackageFields, deletePackage } from '@/lib/packages'
import type { SafariPackage } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  const pkg = await getFullPackage(db, row.slug)
  return NextResponse.json({ row, pkg })
}

// Full-replace, not a partial column-map PATCH like invoices' -- the admin
// form always submits the complete package (same "load everything, save
// the whole thing" contract updatePackageFields() itself documents), since
// this object's optional fields interact too much to patch piecemeal (e.g.
// whyDifferent's heading and paragraphs must arrive together). Never
// touches slug (immutable) or status (a separate action, see .../status).
export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as Partial<SafariPackage>

  if (!body.name || !body.duration || !body.type || !body.priceFrom || !body.groupSize || !body.heroImage) {
    return NextResponse.json({ error: 'name, duration, type, priceFrom, groupSize, and heroImage are required' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  // slug/itinerary/gallery/pricingTiers/familyPricing/faq are owned by
  // their own dedicated endpoints (slug is immutable everywhere; the rest
  // are each their own replace* call) -- carried over from the existing
  // row/full package rather than trusted from this body, so a stale form
  // state posting basic-fields-only can never silently wipe them.
  const existing = await getFullPackage(db, row.slug)
  const pkg: SafariPackage = {
    ...(existing ?? { slug: row.slug, itinerary: [], gallery: [] }),
    ...body,
    slug: row.slug,
  } as SafariPackage

  await updatePackageFields(db, Number(id), pkg)
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await deletePackage(db, Number(id))
  return NextResponse.json({ success: true })
}
