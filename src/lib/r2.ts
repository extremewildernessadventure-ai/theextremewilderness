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
