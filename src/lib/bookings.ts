import type { D1Database } from './db'

export type BookingStatus = 'confirmed' | 'pending' | 'cancelled'
export const BOOKING_STATUSES: BookingStatus[] = ['confirmed', 'pending', 'cancelled']

export type LodgeBookingStatus = 'pending' | 'confirmed' | 'cancelled'
export const LODGE_BOOKING_STATUSES: LodgeBookingStatus[] = ['pending', 'confirmed', 'cancelled']

export type CustomBookingStatus = 'pending' | 'confirmed' | 'cancelled'
export const CUSTOM_BOOKING_STATUSES: CustomBookingStatus[] = ['pending', 'confirmed', 'cancelled']

export interface Booking {
  id: number
  departure_id: number | null
  lead_id: number | null
  client_id: number | null
  client_name: string
  client_email: string | null
  client_phone: string | null
  guests_count: number
  guide_id: number | null
  guide_name_other: string | null
  vehicle_id: number | null
  vehicle_notes_other: string | null
  status: BookingStatus
  cancellation_reason: string | null
  special_requests: string | null
  voucher_sent_at: string | null
  voucher_r2_key: string | null
  created_at: string
  updated_at: string | null
}

export interface LodgeBooking {
  id: number
  booking_id: number
  lodge_id: number | null
  lodge_name_other: string | null
  check_in: string | null
  check_out: string | null
  confirmation_ref: string | null
  status: LodgeBookingStatus
  room_type: string | null
  inclusions: string | null
  contact_info: string | null
  created_at: string
}

// Sibling to LodgeBooking, for anything booked that isn't accommodation — a
// venue, a pitch, an arena, equipment. Belongs to the same booking (same
// client), shown as its own panel directly below Accommodation & Facilities.
export interface CustomBooking {
  id: number
  booking_id: number
  description: string
  start_date: string | null
  end_date: string | null
  status: CustomBookingStatus
  contact_info: string | null
  notes: string | null
  created_at: string
}

// Best-effort tracking after a successful voucher send, mirroring
// markLeadEmailSent's convention in src/lib/leads.ts. Called from the
// voucher-send route, never blocks the response if it fails.
export async function markVoucherSent(db: D1Database, bookingId: number, r2Key: string): Promise<void> {
  await db.prepare('UPDATE bookings SET voucher_sent_at = CURRENT_TIMESTAMP, voucher_r2_key = ? WHERE id = ?')
    .bind(r2Key, bookingId)
    .run()
}
