import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Booking } from '@/lib/bookings'
import { anyDepartureExists } from '@/lib/departures'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import BookingStatusSelect from './BookingStatusSelect'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<Booking>[] = [
  {
    header: 'Client',
    render: (b) => (
      <Link href={`/admin/bookings/${b.id}`} className="text-brand font-medium hover:underline">
        {b.client_name}
      </Link>
    ),
  },
  {
    header: 'Type',
    render: (b) => (
      <span className={`pill ${b.booking_type === 'custom' ? 'few' : 'open'}`}>
        <i />{b.booking_type === 'custom' ? 'Custom' : 'Safari'}
      </span>
    ),
  },
  { header: 'Guests', className: 'text-gray-700', render: (b) => b.guests_count },
  { header: 'Status', render: (b) => <BookingStatusSelect bookingId={b.id} currentStatus={b.status} compact /> },
  { header: 'Created', className: 'text-gray-500', render: (b) => new Date(b.created_at).toLocaleDateString() },
]

export default async function BookingsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all<Booking>()

  // Safari bookings are only ever created from a departure's own detail
  // page (no standalone entry point for that type) — if there are no
  // departures yet, say so explicitly rather than just showing a blank
  // list. Custom bookings (the "+ Custom Booking" button above) have their
  // own standalone entry point regardless of departures existing.
  const hasDepartures = results.length > 0 || (await anyDepartureExists(db))

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Bookings</h1>
        </div>
        <Link href="/admin/bookings/new-custom" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          Custom Booking
        </Link>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(b) => b.id}
        emptyMessage={
          hasDepartures
            ? 'No bookings yet.'
            : 'No bookings yet — safari bookings are created from a departure, and there are no departures yet. Use "+ Custom Booking" above for anything else.'
        }
        emptyAction={hasDepartures ? undefined : { label: '+ Create Departure', href: '/admin/departures/new' }}
      />
    </div>
  )
}
