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
