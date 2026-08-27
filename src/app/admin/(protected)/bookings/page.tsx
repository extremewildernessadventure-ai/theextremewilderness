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
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(b) => b.id} emptyMessage="No bookings yet." />
    </div>
  )
}
