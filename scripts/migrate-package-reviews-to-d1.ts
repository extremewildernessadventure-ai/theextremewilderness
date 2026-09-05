// One-off script: moves the 4 real, already-verified reviews from
// src/data/packageReviews.ts (previously only ever displayed via hardcoded
// PACKAGE_REVIEWS lookups on the detail page + homepage Testimonials
// carousel) into the real `reviews` D1 table, now that Stage B's Guest
// Reviews tab reads from there instead. These are not new/unverified
// content -- they're the exact same real guest reviews already live
// elsewhere on the site, just properly stored in the dedicated system
// now, with package_slug set and status set straight to 'published' (they
// were already public before this migration, so there's no new moderation
// step for content that was already approved and live).
//
// Safe to re-run: skips a slug if a review is already present for it
// (checked by package_slug), so this never creates duplicates.
//
// Usage: npx tsx scripts/migrate-package-reviews-to-d1.ts

import { makeLocalWranglerD1 } from './localD1Client'

const REVIEWS: { packageSlug: string; name: string; country: string; rating: number; quoteText: string }[] = [
  {
    packageSlug: '10-day-northern-circuit',
    name: 'James Kowalski',
    country: 'United States',
    rating: 5,
    quoteText: "I've done safaris in Kenya and South Africa, but Tanzania with EWA Safari Outfitters was on another level. No crowds, no cookie-cutter experiences — pure, authentic wilderness. The balloon over the Serengeti at sunrise was life-changing.",
  },
  {
    packageSlug: '5-day-serengeti-fly-in',
    name: 'Erick Edwin',
    country: 'United States',
    rating: 5,
    quoteText: "Wow, just wow, what an experience! My girlfriend and I had a 5-day tour of Lake Manyara, Serengeti and Ngorongoro Crater and it was nothing short of spectacular. Our guide George's enthusiasm for Tanzania and the wildlife was so contagious. We saw so many animals and managed to spot the Big 5!! He definitely went above and beyond.",
  },
  {
    packageSlug: '7-day-serengeti-ngorongoro',
    name: 'Sarah & Michael Thompson',
    country: 'United Kingdom',
    rating: 5,
    quoteText: "EWA Safari Outfitters gave us the most incredible experience of our lives. Our guide Samuel knew exactly where to find the leopard we'd been hoping to see — and delivered it on our last morning. Every detail was perfect. We'll be back for Kilimanjaro!",
  },
  {
    packageSlug: '9-day-honeymoon-safari-zanzibar',
    name: 'Marie & François Dupont',
    country: 'France',
    rating: 5,
    quoteText: "Notre lune de miel parfaite — safari au Serengeti puis Zanzibar. The team arranged everything flawlessly and our French-speaking guide was exceptional. We saw all the Big Five in three days. Magnifique!",
  },
]

async function main() {
  const db = makeLocalWranglerD1('ewa-invoices')

  for (const review of REVIEWS) {
    const existing = await db.prepare(
      'SELECT id FROM reviews WHERE package_slug = ?'
    ).bind(review.packageSlug).first<{ id: number }>()

    if (existing) {
      console.log(`skip ${review.packageSlug}: review already present (id ${existing.id})`)
      continue
    }

    await db.prepare(
      `INSERT INTO reviews (client_id, client_name_other, booking_id, booking_ref_other, rating, quote_text, source, park_tag, package_slug, status)
       VALUES (NULL, ?, NULL, NULL, ?, ?, ?, NULL, ?, 'published')`
    ).bind(
      `${review.name} (${review.country})`, review.rating, review.quoteText, 'Existing verified guest testimonial', review.packageSlug,
    ).run()

    console.log(`migrated ${review.packageSlug}: ${review.name}`)
  }

  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
