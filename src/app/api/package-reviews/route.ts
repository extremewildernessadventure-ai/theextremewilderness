import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { packages } from '@/data/packages'

export const dynamic = 'force-dynamic'

// Public, unauthenticated review submission for a specific safari package's
// Guest Reviews tab -- NOT the staff-moderation route (@/app/api/admin/reviews),
// which is for admin-pasted verbatim quotes from external review sites.
// A visitor typing their own real opinion through this form is not
// fabrication (reviews.ts's own migration comment already anticipated
// this); every submission lands as `status: 'pending'` -- hardcoded here,
// never taken from the request body -- and only reaches the public site
// after a staff member approves it in the existing /admin/reviews
// moderation queue. Never counts as "verified" (see isVerifiedReview in
// @/lib/reviews) since it has no real client_id/booking_id link, unlike
// the prototype this is based on, which hardcoded every submission as
// "Verified Itinerary Traveler" regardless of any real link.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      packageSlug?: string; name?: string; rating?: number; quoteText?: string
    }

    const packageSlug = body.packageSlug?.trim()
    if (!packageSlug || !packages.some((p) => p.slug === packageSlug)) {
      return NextResponse.json({ error: 'A valid packageSlug is required' }, { status: 400 })
    }
    if (!body.name?.trim()) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 })
    }
    if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) {
      return NextResponse.json({ error: 'rating must be between 1 and 5' }, { status: 400 })
    }
    if (!body.quoteText?.trim() || body.quoteText.trim().length < 20) {
      return NextResponse.json({ error: 'quoteText must be at least 20 characters' }, { status: 400 })
    }

    const db = await getDb()
    await db.prepare(
      `INSERT INTO reviews (client_id, client_name_other, booking_id, booking_ref_other, rating, quote_text, source, park_tag, package_slug, status)
       VALUES (NULL, ?, NULL, NULL, ?, ?, ?, NULL, ?, 'pending')`
    ).bind(
      body.name.trim(), body.rating, body.quoteText.trim(), 'Website submission', packageSlug,
    ).run()

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Package review submission error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
