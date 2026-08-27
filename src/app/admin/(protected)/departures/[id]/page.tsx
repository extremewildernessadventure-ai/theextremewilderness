import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import type { Booking } from '@/lib/bookings'
import { packages } from '@/data/packages'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import DeleteButton from '@/components/admin/DeleteButton'
import DepartureEditForm from './DepartureEditForm'
import BookingStatusSelect from '../../bookings/BookingStatusSelect'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function DepartureDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const departure = await db.prepare('SELECT * FROM departures WHERE id = ?').bind(id).first<Departure>()
  if (!departure) notFound()

  const { results: bookings } = await db.prepare(
    'SELECT * FROM bookings WHERE departure_id = ? ORDER BY created_at DESC'
  ).bind(id).all<Booking>()

  const pkg = packages.find((p) => p.slug === departure.package_slug)
  const occupancyPct = departure.capacity > 0 ? Math.min(100, Math.round((departure.seats_booked / departure.capacity) * 100)) : 0

  return (
    <DetailTwoColumn
      backHref="/admin/departures"
      backLabel="Back to Departures"
      title={pkg?.name ?? departure.package_slug}
      subtitle={`${departure.start_date} → ${departure.end_date}`}
      main={
        <>
          <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4 text-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-500">Occupancy</span>
              <span className="font-semibold text-brand">{departure.seats_booked} / {departure.capacity} seats</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand rounded-full" style={{ width: `${occupancyPct}%` }} />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-7">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-brand">Bookings</h2>
              <Link href={`/admin/bookings/new?departureId=${departure.id}`} className="text-xs font-semibold text-brand hover:underline">
                + New Booking
              </Link>
            </div>
            {bookings.length === 0 ? (
              <p className="text-sm text-gray-400">No bookings yet.</p>
            ) : (
              <ul className="space-y-2">
                {bookings.map((b) => (
                  <li key={b.id} className="flex items-center justify-between text-sm">
                    <Link href={`/admin/bookings/${b.id}`} className="text-brand font-medium hover:underline">
                      {b.client_name} ({b.guests_count} {b.guests_count === 1 ? 'guest' : 'guests'})
                    </Link>
                    <BookingStatusSelect bookingId={b.id} currentStatus={b.status} compact />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-2">
            <DeleteButton
              endpoint={`/api/admin/departures/${departure.id}`}
              confirmMessage="Delete this departure? This cannot be undone."
              redirectTo="/admin/departures"
              label="Delete Departure"
            />
          </div>
        </>
      }
      sidebar={<DepartureEditForm departure={departure} />}
    />
  )
}
