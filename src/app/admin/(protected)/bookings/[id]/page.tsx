import { notFound } from 'next/navigation'
import { getDb } from '@/lib/db'
import type { Booking, LodgeBooking, CustomBooking } from '@/lib/bookings'
import type { Departure } from '@/lib/departures'
import type { Guide, Vehicle, OpsLodge } from '@/lib/ops'
import { packages } from '@/data/packages'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import DeleteButton from '@/components/admin/DeleteButton'
import BookingEditForm from './BookingEditForm'
import BookingAssignmentPanel from './BookingAssignmentPanel'
import LodgeBookingPanel from './LodgeBookingPanel'
import CustomBookingsPanel from './CustomBookingsPanel'
import SendVoucherButton from './SendVoucherButton'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function BookingDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const booking = await db.prepare('SELECT * FROM bookings WHERE id = ?').bind(id).first<Booking>()
  if (!booking) notFound()

  const [departure, { results: guides }, { results: vehicles }, { results: lodges }, { results: lodgeBookings }, { results: customBookings }] = await Promise.all([
    db.prepare('SELECT * FROM departures WHERE id = ?').bind(booking.departure_id).first<Departure>(),
    db.prepare('SELECT * FROM guides WHERE active = 1 ORDER BY name ASC').all<Guide>(),
    db.prepare('SELECT * FROM vehicles ORDER BY plate_number ASC').all<Vehicle>(),
    db.prepare('SELECT * FROM ops_lodges ORDER BY name ASC').all<OpsLodge>(),
    db.prepare('SELECT * FROM lodge_bookings WHERE booking_id = ? ORDER BY check_in ASC').bind(id).all<LodgeBooking>(),
    db.prepare('SELECT * FROM custom_bookings WHERE booking_id = ? ORDER BY created_at ASC').bind(id).all<CustomBooking>(),
  ])

  const pkg = departure ? packages.find((p) => p.slug === departure.package_slug) : undefined

  return (
    <DetailTwoColumn
      backHref={departure ? `/admin/departures/${departure.id}` : '/admin/bookings'}
      backLabel={departure ? `Back to ${pkg?.name ?? departure.package_slug}` : 'Back to Bookings'}
      title={booking.client_name}
      subtitle={`Created ${new Date(booking.created_at).toLocaleString()}`}
      main={
        <>
          <div className="panel space-y-3 text-sm">
            {departure && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Departure</span>
                <span>{pkg?.name ?? departure.package_slug} ({departure.start_date} → {departure.end_date})</span>
              </div>
            )}
            {booking.client_email && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Email</span>
                <span>{booking.client_email}</span>
              </div>
            )}
            {booking.client_phone && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Phone</span>
                <span>{booking.client_phone}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Guests</span>
              <span className="font-semibold text-brand">{booking.guests_count}</span>
            </div>
          </div>

          <LodgeBookingPanel bookingId={booking.id} lodgeBookings={lodgeBookings} lodges={lodges} />

          <CustomBookingsPanel bookingId={booking.id} customBookings={customBookings} />

          <SendVoucherButton bookingId={booking.id} hasClientEmail={!!booking.client_email} lastSentAt={booking.voucher_sent_at} />

          <div className="pt-2">
            <DeleteButton
              endpoint={`/api/admin/bookings/${booking.id}`}
              confirmMessage={`Delete this booking for ${booking.client_name}? This cannot be undone.`}
              redirectTo="/admin/bookings"
              label="Delete Booking"
            />
          </div>
        </>
      }
      sidebar={
        <>
          <BookingEditForm booking={booking} />
          <BookingAssignmentPanel
            bookingId={booking.id}
            guides={guides}
            vehicles={vehicles}
            currentGuideId={booking.guide_id}
            currentGuideNameOther={booking.guide_name_other}
            currentVehicleId={booking.vehicle_id}
            currentVehicleNotesOther={booking.vehicle_notes_other}
          />
        </>
      }
    />
  )
}
