import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Booking } from '@/lib/bookings'
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
      <span className={`pill ${b.departure_id === null ? 'few' : 'open'}`}>
        <i />{b.departure_id === null ? 'Custom' : 'Safari'}
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

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Bookings</h1>
        </div>
        <Link href="/admin/bookings/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Booking
        </Link>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(b) => b.id}
        emptyMessage="No bookings yet."
        emptyAction={{ label: '+ New Booking', href: '/admin/bookings/new' }}
      />
    </div>
  )
}
