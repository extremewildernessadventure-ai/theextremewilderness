import type { D1Database } from './db'

export interface Client {
  id: number
  name: string
  email: string | null
  phone: string | null
  notes: string | null
  created_at: string
}

// The one place a client's identity is created or reused — bookings and
// invoices both call this rather than inserting into `clients` themselves,
// so "pick an existing client, or create one by typing their details" works
// identically everywhere (same shape as guide_id/guide_name_other on
// bookings: one canonical record, picked when it already exists).
//
// If clientId is given (staff picked an existing client), trust it as-is —
// never overwrite the canonical record from a booking/invoice's local
// fields. That stays a Clients & Reviews-only edit, so one booking's
// tweaked phone number can't silently clobber another booking's contact
// for the same client. Otherwise dedupe by email (case-insensitive)
// against the existing rolodex before creating a new row, so typing the
// same repeat client's email on a second booking reuses them instead of
// forking a duplicate entry.
export async function resolveClientId(
  db: D1Database,
  opts: { clientId?: number | null; name: string; email?: string | null; phone?: string | null }
): Promise<number | null> {
  if (opts.clientId) {
    const existing = await db.prepare('SELECT id FROM clients WHERE id = ?').bind(opts.clientId).first()
    if (existing) return opts.clientId
  }
  if (opts.email) {
    const match = await db.prepare('SELECT id FROM clients WHERE LOWER(email) = LOWER(?)').bind(opts.email).first<{ id: number }>()
    if (match) return match.id
  }
  const created = await db.prepare(
    'INSERT INTO clients (name, email, phone) VALUES (?, ?, ?)'
  ).bind(opts.name, opts.email ?? null, opts.phone ?? null).run()
  return created.meta?.last_row_id ?? null
}
