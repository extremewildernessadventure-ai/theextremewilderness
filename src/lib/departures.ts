import type { D1Database } from './db'
import { round2 } from './invoices'

export interface Departure {
  id: number
  package_slug: string
  start_date: string
  end_date: string
  adults: number
  children: number
  // NULL means pricing hasn't been entered for this departure yet (e.g. an
  // older departure created before this column existed) -- computeDepartureTotalCost
  // returns null rather than guessing, same "don't fabricate a number"
  // convention as computeImpliedTotal in src/lib/invoices.ts.
  price_per_adult: number | null
  price_per_child: number | null
  // 0/1, not a 5-value status -- these are private single-party bookings,
  // not a shared trip with seats to track, so "cancelled" is the only part
  // of the old open/few_left/full/departed/cancelled enum that's still a
  // real need. Same int-boolean convention as leads.email_sent/
  // incidents.amref_evacuation elsewhere in this schema.
  cancelled: number
  created_at: string
  updated_at: string | null
}

// A departure's amount is derived, never stored -- same "compute at read
// time" convention as computeImpliedTotal in src/lib/invoices.ts, so an
// edited price never leaves a stale total sitting somewhere. null whenever
// price_per_adult hasn't been set (an admin hasn't priced this departure
// yet) rather than treating an unset price as free.
export function computeDepartureTotalCost(departure: Pick<Departure, 'adults' | 'children' | 'price_per_adult' | 'price_per_child'>): number | null {
  if (departure.price_per_adult == null) return null
  const adultsTotal = departure.adults * departure.price_per_adult
  const childrenTotal = departure.children * (departure.price_per_child ?? 0)
  return round2(adultsTotal + childrenTotal)
}

// For pages that need to explain a gate before it's hit — a booking's own
// departure selector is optional (bookings/new doesn't require any
// departures to exist), but other record types (permits, quotes) still
// reference departures optionally and may want the same "none exist yet"
// messaging. Kept as reusable infra for that shape.
export async function anyDepartureExists(db: D1Database): Promise<boolean> {
  const row = await db.prepare('SELECT 1 FROM departures LIMIT 1').first()
  return row !== null
}
