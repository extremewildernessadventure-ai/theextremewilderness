import { getCloudflareContext } from '@opennextjs/cloudflare'

// @cloudflare/workers-types isn't a dependency of this project (see
// src/lib/db.ts's identical note for D1) — this covers exactly the R2
// surface used here. Deliberately NOT `wrangler types`-generated: that
// output declares its own global `Response`/`Body` interfaces which merge
// with (and break) lib.dom's `Response.json(): Promise<any>` project-wide,
// silently turning it into `Promise<unknown>` everywhere `fetch` is used —
// confirmed live, a ~20-file tsc regression the moment that file existed on
// disk. Hand-written types avoid pulling in that whole ambient surface.
export interface R2Object {
  body: ReadableStream | null
}
export interface R2Bucket {
  put(key: string, value: ArrayBuffer, options?: { httpMetadata?: { contentType?: string } }): Promise<unknown>
  get(key: string): Promise<R2Object | null>
  // Metadata-only existence check — no body transfer, unlike get(). Used by
  // the public-guides batch generator (src/lib/publicGuides.ts) to skip
  // regenerating something that's already there without paying for a full
  // object download just to check.
  head(key: string): Promise<unknown | null>
  delete(key: string): Promise<void>
}

declare global {
  interface CloudflareEnv {
    DOCS?: R2Bucket
  }
}

export async function getDocsBucket(): Promise<R2Bucket> {
  const { env } = await getCloudflareContext({ async: true })
  if (!env.DOCS) {
    throw new Error('No DOCS (R2) binding available')
  }
  return env.DOCS
}

export function documentKey(clientId: number, filename: string): string {
  // Prefix with a timestamp to avoid collisions if the same filename is
  // uploaded twice for the same client (e.g. two passport scans).
  return `documents/${clientId}/${Date.now()}-${filename}`
}

export function voucherKey(bookingId: number): string {
  // Timestamped so a re-send doesn't overwrite the previous copy — old
  // vouchers stay retrievable, bookings.voucher_r2_key always points at the
  // most recent one.
  return `vouchers/${bookingId}/${Date.now()}-voucher.pdf`
}

export function invoiceKey(invoiceId: number): string {
  // Same timestamped-copy convention as voucherKey — a re-send after items
  // change keeps the old PDF retrievable, invoices.sent_r2_key always
  // points at the most recent one.
  return `invoices/${invoiceId}/${Date.now()}-invoice.pdf`
}

// Public-facing lead-magnet PDFs (api/pdf-lead/route.ts) — archival copies
// of what was actually emailed, same timestamped convention as above, keyed
// by lead id (not a booking/invoice id, since these have no other row to
// hang the key off) rather than email/slug, to avoid putting a visitor's
// email address in an R2 object key.
export function trekGuideKey(leadId: number): string {
  return `trek-guides/${leadId}/${Date.now()}-kilimanjaro-guide.pdf`
}

export function itineraryKey(leadId: number, packageSlug: string): string {
  return `itineraries/${leadId}/${Date.now()}-${packageSlug}.pdf`
}

// Pre-generated, content-addressable public guides (src/lib/publicGuides.ts)
// — unlike the per-lead archival keys above, these are NOT timestamped:
// there's exactly one canonical file per locale (and per route/package),
// meant to be reused by every visitor and overwritten in place on
// regeneration, not accumulated. Served publicly by
// src/app/api/guides/**/route.ts, which is scoped to only ever read this
// `public-guides/` prefix — every other prefix in this bucket holds
// personal/per-customer data (documents/, vouchers/, invoices/,
// trek-guides/[leadId]/, itineraries/[leadId]/) and must stay
// admin-authenticated-only.
export function publicKilimanjaroGuideKey(locale: string): string {
  return `public-guides/kilimanjaro/${locale}.pdf`
}

// One generic sample day-by-day itinerary per locale, not one per package —
// deliberately not tied to a specific trip ("it is a sample day-to-day
// itinerary, not a real one, so it can go anywhere" — direct instruction),
// same "one file, used everywhere" shape as the Kilimanjaro key above.
export function publicItineraryGuideKey(locale: string): string {
  return `public-guides/itinerary/${locale}.pdf`
}
