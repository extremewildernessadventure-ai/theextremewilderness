import { NextRequest, NextResponse } from 'next/server'
import { verifyCronSecret } from '@/lib/cronAuth'
import { getOrGeneratePublicGuideUrl, listAllGuideDescriptors, guidePublicPath, type GuideDescriptor } from '@/lib/publicGuides'

export const dynamic = 'force-dynamic'

const DEFAULT_LIMIT = 5

function describe(guide: GuideDescriptor): string {
  return `${guide.type}/${guide.locale}`
}

// Eagerly pre-generates every (locale × Kilimanjaro guide) and
// (locale × sample itinerary) PDF — 16 + 16 = 32 combinations, one file per
// locale per type (neither guide is per-package/per-route anymore) —
// skipping anything already in R2 unless `force=true`. Paginated via
// cursor/limit rather than one giant request, matching the shape of the
// original (much larger, 720-item) version of this batch job. Meant to be
// called repeatedly in a loop (see the deploy workflow's post-deploy step)
// until `done: true`. Skip-if-exists means this is a one-time cost the
// first time it runs and near-instant on every call after that.
export async function POST(req: NextRequest) {
  if (!verifyCronSecret(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = req.nextUrl
  const cursor = Number(searchParams.get('cursor') ?? '0')
  const limit = Number(searchParams.get('limit') ?? String(DEFAULT_LIMIT))
  const force = searchParams.get('force') === 'true'

  const all = listAllGuideDescriptors()
  const batch = all.slice(cursor, cursor + limit)

  let processed = 0
  let skipped = 0
  const errors: { guide: string; message: string }[] = []

  for (const guide of batch) {
    try {
      const { generated } = await getOrGeneratePublicGuideUrl(guide, req.nextUrl.origin, force)
      if (generated) processed++
      else skipped++
    } catch (err) {
      // Best-effort: one bad render (a transient Browser Rendering hiccup,
      // a malformed package) shouldn't stall the whole backfill — log and
      // move on, the cursor still advances past it.
      errors.push({ guide: describe(guide), message: err instanceof Error ? err.message : String(err) })
      console.error(`generate-guides: failed on ${describe(guide)}:`, err)
    }
  }

  const nextCursor = cursor + batch.length
  const done = nextCursor >= all.length

  return NextResponse.json({
    total: all.length,
    cursor,
    nextCursor,
    processed,
    skipped,
    errors,
    done,
    // Handy for a manual spot-check without needing to know the URL scheme.
    samplePath: batch[0] ? guidePublicPath(batch[0]) : null,
  })
}
