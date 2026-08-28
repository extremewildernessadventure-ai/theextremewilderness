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
  { header: 'Guests', className: 'text-gray-700', render: (b) => b.guests_count },
  { header: 'Status', render: (b) => <BookingStatusSelect bookingId={b.id} currentStatus={b.status} compact /> },
  { header: 'Created', className: 'text-gray-500', render: (b) => new Date(b.created_at).toLocaleDateString() },
]

export default async function BookingsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all<Booking>()

  // Bookings are only ever created from a departure's own detail page (no
  // standalone "+ New Booking" entry point exists) — if there are none yet,
  // say so explicitly instead of just showing a blank list with no way
  // forward.
  const hasDepartures = results.length > 0 || (await anyDepartureExists(db))

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Bookings</h1>
        </div>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(b) => b.id}
        emptyMessage={
          hasDepartures
            ? 'No bookings yet.'
            : 'No bookings yet — bookings are created from a departure, and there are no departures yet.'
        }
        emptyAction={hasDepartures ? undefined : { label: '+ Create Departure', href: '/admin/departures/new' }}
      />
    </div>
  )
}
