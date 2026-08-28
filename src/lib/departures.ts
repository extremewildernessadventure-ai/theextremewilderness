import type { D1Database } from './db'

export type DepartureStatus = 'open' | 'few_left' | 'full' | 'departed' | 'cancelled'

export const DEPARTURE_STATUSES: DepartureStatus[] = ['open', 'few_left', 'full', 'departed', 'cancelled']

export interface Departure {
  id: number
  package_slug: string
  start_date: string
  end_date: string
  capacity: number
  seats_booked: number
  status: DepartureStatus
  created_at: string
  updated_at: string | null
}

// Denormalized-recalc-on-write, same pattern as recalculateInvoiceTotals in
// src/lib/invoices.ts — called after any booking create/status-change on this
// departure rather than incrementing/decrementing in place, so it's always
// derived fresh from the actual booking rows (cancelled bookings don't
// occupy a seat).
export async function recalculateSeatsBooked(db: D1Database, departureId: number): Promise<void> {
  const row = await db.prepare(
    `SELECT COALESCE(SUM(guests_count), 0) as total FROM bookings WHERE departure_id = ? AND status != 'cancelled'`
  ).bind(departureId).first<{ total: number }>()
  await db.prepare('UPDATE departures SET seats_booked = ? WHERE id = ?').bind(row?.total ?? 0, departureId).run()
}

// Used by pages that need to explain a gate before it's hit — e.g. the
// bookings list, since a booking can only be created via a "+ New Booking"
// link on a departure's own detail page (bookings/new requires
// ?departureId=). Reusable for any other future relationship with the same
// shape.
export async function anyDepartureExists(db: D1Database): Promise<boolean> {
  const row = await db.prepare('SELECT 1 FROM departures LIMIT 1').first()
  return row !== null
}
