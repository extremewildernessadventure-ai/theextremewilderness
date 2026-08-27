export type BookingStatus = 'confirmed' | 'pending' | 'cancelled'
export const BOOKING_STATUSES: BookingStatus[] = ['confirmed', 'pending', 'cancelled']

export type LodgeBookingStatus = 'pending' | 'confirmed' | 'cancelled'
export const LODGE_BOOKING_STATUSES: LodgeBookingStatus[] = ['pending', 'confirmed', 'cancelled']

export interface Booking {
  id: number
  departure_id: number
  lead_id: number | null
  client_name: string
  client_email: string | null
  client_phone: string | null
  guests_count: number
  guide_id: number | null
  vehicle_id: number | null
  status: BookingStatus
  cancellation_reason: string | null
  created_at: string
  updated_at: string | null
}

export interface LodgeBooking {
  id: number
  booking_id: number
  lodge_id: number
  check_in: string | null
  check_out: string | null
  confirmation_ref: string | null
  status: LodgeBookingStatus
  created_at: string
}
