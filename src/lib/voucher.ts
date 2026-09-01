// Deliberately its own file with no other imports (unlike bookings.ts,
// which pulls in the D1Database type from db.ts, which itself imports
// getCloudflareContext) — this needs to be safely importable from the
// client-side SendVoucherButton as well as the two server-side voucher
// renderers, without dragging a server-only Cloudflare binding into the
// client bundle.
export function formatVoucherNumber(bookingId: number): string {
  return `EWA-V-${String(bookingId).padStart(6, '0')}`
}
