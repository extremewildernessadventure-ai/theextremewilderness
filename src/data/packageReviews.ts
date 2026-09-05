// Real, verified guest reviews (also displayed in the homepage Testimonials
// carousel) mapped to the specific package their itinerary matches -- only
// wired up where the reviewer's stated duration and destinations line up with
// a real package, so the schema and on-page quote stay accurate. Deliberately
// sparse: most packages have no entry here, and nothing should ever synthesize
// a rating/review for a package that isn't listed (used by both the detail
// page and the listing page's card badges). `key` selects which translated
// review-text variant to render; `countryKey` selects which `common.country*`
// label to show next to the reviewer's name.
export const PACKAGE_REVIEWS: Record<string, { key: 0 | 1 | 7 | 10; name: string; countryKey: 'countryUS' | 'countryUK' | 'countryFR'; rating: number }> = {
  '10-day-northern-circuit':         { key: 0,  name: 'James Kowalski',              countryKey: 'countryUS', rating: 5 },
  '5-day-serengeti-fly-in':          { key: 1,  name: 'Erick Edwin',                 countryKey: 'countryUS', rating: 5 },
  '7-day-serengeti-ngorongoro':      { key: 7,  name: 'Sarah & Michael Thompson',    countryKey: 'countryUK', rating: 5 },
  '9-day-honeymoon-safari-zanzibar': { key: 10, name: 'Marie & François Dupont',     countryKey: 'countryFR', rating: 5 },
}
