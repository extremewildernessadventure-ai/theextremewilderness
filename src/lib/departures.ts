import type { D1Database } from './db'

export interface Departure {
  id: number
  package_slug: string
  start_date: string
  end_date: string
  // 0/1 -- private single-party bookings have no shared capacity, so this
  // is the one thing left from the old open/few_left/full/departed/cancelled
  // status enum: whether the trip is still going ahead. Same int-boolean
  // convention as leads.email_sent/incidents.amref_evacuation elsewhere in
  // this schema.
  cancelled: number
  created_at: string
  updated_at: string | null
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
