// Manual verification script (not part of `npm test` -- it shells out to
// wrangler and mutates local D1 state, doesn't fit vitest's fast in-memory
// model). Proves makeLocalWranglerD1() + src/lib/packages.ts work together
// against a REAL local D1 instance, not just packages.test.ts's in-memory
// fake -- exercises tricky characters (quotes, semicolons, parens, em
// dashes) that a fake can't catch shell/SQL-escaping bugs in. Deletes its
// own test row when done. Run with: npm run verify:local-d1
import { makeLocalWranglerD1 } from './localD1Client'
import { createPackage, insertItinerary, getFullPackage, deletePackage, getPackageRowBySlug } from '../src/lib/packages'
import type { SafariPackage } from '../src/data/packages'

async function main() {
  const db = makeLocalWranglerD1('ewa-invoices')

  const pkg: SafariPackage = {
    slug: 'real-d1-smoke-test',
    name: "Real D1 Smoke Test (w/ quotes, semicolons; and parens)",
    duration: 2,
    destinations: ['serengeti'],
    type: 'wildlife',
    priceFrom: 1234,
    groupSize: { min: 2, max: 6 },
    highlights: ["It's a test", 'Second highlight'],
    itinerary: [
      {
        day: 1,
        title: "Day one — arrival",
        description: 'Fly in; transfer to camp (approx. 2hrs)',
        accommodation: 'Test Camp',
        meals: 'D',
        accommodationByTier: {
          trail: { name: "Trail Camp", image: '/trail.jpg', amenities: ['wifi', "chef's table"] },
          sovereign: { name: 'Sovereign Camp', image: '/sov.jpg', amenities: [] },
        },
      },
    ],
    included: ['Guide'],
    excluded: ['Flights'],
    heroImage: '/hero.jpg',
    gallery: [{ src: '/g1.jpg', alt: "Gallery one — sunset" }],
    bestFor: ['Testing'],
    faq: [{ q: 'Real question?', a: "Yes, it's real." }],
  }

  console.log('Creating package...')
  const id = await createPackage(db, pkg, 'draft')
  console.log('Created id:', id)

  console.log('Inserting itinerary...')
  await insertItinerary(db, id, pkg.itinerary)

  console.log('Reading back via getFullPackage...')
  const roundTripped = await getFullPackage(db, pkg.slug)

  const matches = JSON.stringify(roundTripped) === JSON.stringify(pkg)
  console.log('Round-trip matches original exactly:', matches)
  if (!matches) {
    console.log('ORIGINAL:', JSON.stringify(pkg, null, 2))
    console.log('ROUND-TRIPPED:', JSON.stringify(roundTripped, null, 2))
  }

  const row = await getPackageRowBySlug(db, pkg.slug)
  console.log('Row status (should be draft):', row?.status)

  console.log('Cleaning up (deletePackage)...')
  await deletePackage(db, id)
  const afterDelete = await getPackageRowBySlug(db, pkg.slug)
  console.log('Row gone after delete:', afterDelete === null)

  if (!matches || afterDelete !== null) {
    console.error('SMOKE TEST FAILED')
    process.exit(1)
  }
  console.log('SMOKE TEST PASSED')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
