// Snapshots every real published review from the local D1 `reviews` table
// into public/locale-data/reviews.json, grouped by package_slug -- the same
// "pre-generate a static asset, read it during `next build`'s static-
// generation phase" convention src/lib/localeData.ts already established
// for every other dataset (see that file's own doc comment: spinning up a
// local Cloudflare context per call, across 7 parallel build workers x
// 700+ package/locale page variants, reliably crashes on Windows).
//
// Reviews are the first genuinely D1-backed (not checked-in-source-file)
// piece of public content this site has, so unlike packages/destinations/
// etc. this snapshot can't be regenerated from scratch in CI (the deploy
// pipeline has no access to the real production D1, and even if it did, a
// fresh CI checkout's local D1 has no data at all). It's the same
// "run a script, review the diff, commit the regenerated data" workflow
// already used for the bestMonths/wildlifeTargets content backfills earlier
// in this project -- run this manually after moderating new reviews, then
// commit the result and redeploy for them to actually reach the public
// site (the real, non-obvious tradeoff of this whole approach: a newly-
// approved review needs this script + a rebuild, it does not appear the
// instant an admin approves it).
//
// Usage: npx tsx scripts/generate-review-data.ts

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { makeLocalWranglerD1 } from './localD1Client'
import type { Review, PublishedReview } from '../src/lib/reviews'

async function main() {
  const db = makeLocalWranglerD1('ewa-invoices')

  const { results } = await db.prepare(
    `SELECT reviews.*, clients.name AS resolved_client_name
     FROM reviews LEFT JOIN clients ON clients.id = reviews.client_id
     WHERE reviews.status = 'published' AND reviews.package_slug IS NOT NULL
     ORDER BY reviews.package_slug, reviews.created_at DESC`
  ).all<Review & { resolved_client_name: string | null }>()

  const bySlug: Record<string, PublishedReview[]> = {}
  for (const { resolved_client_name, ...review } of results) {
    const slug = review.package_slug
    if (!slug) continue // filtered by the WHERE clause above; guards the type narrowing only
    const published: PublishedReview = {
      ...review,
      reviewer_name: review.client_name_other ?? resolved_client_name ?? 'Guest',
    }
    ;(bySlug[slug] ??= []).push(published)
  }

  const outPath = join(process.cwd(), 'public', 'locale-data', 'reviews.json')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, JSON.stringify(bySlug))

  const packageCount = Object.keys(bySlug).length
  const reviewCount = results.length
  console.log(`Wrote ${reviewCount} published review(s) across ${packageCount} package(s) to public/locale-data/reviews.json`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
