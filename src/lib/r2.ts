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
