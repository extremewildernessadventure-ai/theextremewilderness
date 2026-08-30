import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Booking, LodgeBooking, CustomBooking } from '@/lib/bookings'
import type { Departure } from '@/lib/departures'
import type { Guide, Vehicle, OpsLodge } from '@/lib/ops'
import { packages } from '@/data/packages'
import { printCss, PdfCover, PdfRunningHeader, PdfSectionHeading, PdfClosingCta, PdfFooter, sanitizeForPdf } from '@/components/pdf/PdfChrome'
import PrintButton from '../../../invoices/[id]/pdf/PrintButton'

// Same rendering this page produces is also what the server-side voucher PDF
// route (api/admin/bookings/[id]/voucher/route.ts) fetches and hands to
// Cloudflare Browser Rendering — one template, not two, and it correctly
// goes through the real Next.js request pipeline (so next/image in
// PdfHeader resolves normally) rather than a manual renderToStaticMarkup
// call outside that pipeline.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function BookingVoucherPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const booking = await db.prepare('SELECT * FROM bookings WHERE id = ?').bind(id).first<Booking>()
  if (!booking) notFound()

  const [departure, guide, vehicle, { results: lodgeBookings }, { results: customBookings }] = await Promise.all([
    db.prepare('SELECT * FROM departures WHERE id = ?').bind(booking.departure_id).first<Departure>(),
    booking.guide_id ? db.prepare('SELECT * FROM guides WHERE id = ?').bind(booking.guide_id).first<Guide>() : null,
    booking.vehicle_id ? db.prepare('SELECT * FROM vehicles WHERE id = ?').bind(booking.vehicle_id).first<Vehicle>() : null,
    db.prepare('SELECT * FROM lodge_bookings WHERE booking_id = ? ORDER BY check_in ASC').bind(id).all<LodgeBooking>(),
    db.prepare('SELECT * FROM custom_bookings WHERE booking_id = ? ORDER BY created_at ASC').bind(id).all<CustomBooking>(),
  ])

  const lodgeIds = lodgeBookings.filter((lb) => lb.lodge_id).map((lb) => lb.lodge_id as number)
  let lodgesById = new Map<number, OpsLodge>()
  if (lodgeIds.length > 0) {
    const placeholders = lodgeIds.map(() => '?').join(',')
    const { results: lodges } = await db.prepare(`SELECT * FROM ops_lodges WHERE id IN (${placeholders})`).bind(...lodgeIds).all<OpsLodge>()
    lodgesById = new Map(lodges.map((l) => [l.id, l]))
  }

  const pkg = departure ? packages.find((p) => p.slug === departure.package_slug) : undefined
  const guideName = guide?.name ?? (booking.guide_name_other ? sanitizeForPdf(booking.guide_name_other) : null)
  const vehicleLabel = vehicle?.plate_number ?? (booking.vehicle_notes_other ? sanitizeForPdf(booking.vehicle_notes_other) : null)
  const clientName = sanitizeForPdf(booking.client_name)
  const specialRequests = booking.special_requests ? sanitizeForPdf(booking.special_requests) : null

  return (
    <>
      <style>{printCss('pdf-voucher')}</style>

      <div className="max-w-3xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <Link href={`/admin/bookings/${booking.id}`} className="detail-back">← Back to Booking</Link>
          <h1 className="text-xl font-bold text-brand">Voucher — {clientName}</h1>
        </div>
        <PrintButton />
      </div>

      <div id="pdf-voucher" className="max-w-3xl mx-auto bg-white font-sans print:max-w-none">
        <PdfCover
          image={pkg?.heroImage ?? '/images/gallery/masai-mara-lion-pride-sunset.webp'}
          imageAlt={pkg?.name ?? 'Safari'}
          eyebrow="Booking Voucher"
          title={pkg?.name ?? departure?.package_slug ?? 'Your Safari'}
          subtitle={departure ? `${departure.start_date} → ${departure.end_date}` : undefined}
          metaLeft={`Voucher #${booking.id} · ${clientName}`}
        />

        <div className="px-10 py-8">
          <PdfRunningHeader documentType="Booking Voucher" documentNumber={`#${booking.id}`} />

          <div className="flex items-start justify-between mb-7 no-break">
            <div>
              <PdfSectionHeading>Guest</PdfSectionHeading>
              <p className="text-sm font-bold text-gray-900">{clientName}</p>
              {booking.client_email && <p className="text-sm text-gray-600">{booking.client_email}</p>}
              {booking.client_phone && <p className="text-sm text-gray-600">{booking.client_phone}</p>}
              <p className="text-xs text-gray-500 mt-1">{booking.guests_count} guest{booking.guests_count === 1 ? '' : 's'}</p>
            </div>
          </div>

          {departure && (
            <div className="mb-7 no-break">
              <PdfSectionHeading>Trip</PdfSectionHeading>
              <p className="text-sm font-bold text-gray-900">{pkg?.name ?? departure.package_slug}</p>
              <p className="text-sm text-gray-600">{departure.start_date} → {departure.end_date}</p>
            </div>
          )}

          <div className="mb-7 no-break">
            <PdfSectionHeading>Guide & Vehicle</PdfSectionHeading>
            <p className="text-sm text-gray-700">Guide: <span className="font-semibold text-gray-900">{guideName ?? 'Not yet assigned'}</span></p>
            <p className="text-sm text-gray-700">Vehicle: <span className="font-semibold text-gray-900">{vehicleLabel ?? 'Not yet assigned'}</span></p>
          </div>

          {lodgeBookings.length > 0 && (
            <div className="mb-7 no-break">
              <PdfSectionHeading>Accommodation</PdfSectionHeading>
              <div className="space-y-4">
                {lodgeBookings.map((lb) => {
                  const lodgeDisplayName = sanitizeForPdf(lb.lodge_name_other ?? (lb.lodge_id ? lodgesById.get(lb.lodge_id)?.name : undefined) ?? 'Lodge')
                  return (
                    <div key={lb.id} className="border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-bold text-gray-900">{lodgeDisplayName}</p>
                      <div className="text-sm text-gray-600 mt-1 space-y-0.5">
                        {(lb.check_in || lb.check_out) && <p>{lb.check_in ?? '…'} → {lb.check_out ?? '…'}</p>}
                        {lb.room_type && <p>Room Type: {sanitizeForPdf(lb.room_type)}</p>}
                        {lb.confirmation_ref && <p>Confirmation Ref: {sanitizeForPdf(lb.confirmation_ref)}</p>}
                        {lb.contact_info && <p className="font-semibold text-gray-800">Contact: {sanitizeForPdf(lb.contact_info)}</p>}
                        {lb.inclusions && <p className="whitespace-pre-wrap">Includes: {sanitizeForPdf(lb.inclusions)}</p>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {customBookings.length > 0 && (
            <div className="mb-7 no-break">
              <PdfSectionHeading>Custom Bookings</PdfSectionHeading>
              <div className="space-y-4">
                {customBookings.map((cb) => (
                  <div key={cb.id} className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-bold text-gray-900">{sanitizeForPdf(cb.description)}</p>
                    <div className="text-sm text-gray-600 mt-1 space-y-0.5">
                      {(cb.start_date || cb.end_date) && <p>{cb.start_date ?? '…'} → {cb.end_date ?? '…'}</p>}
                      {cb.contact_info && <p className="font-semibold text-gray-800">Contact: {sanitizeForPdf(cb.contact_info)}</p>}
                      {cb.notes && <p className="whitespace-pre-wrap">{sanitizeForPdf(cb.notes)}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {specialRequests && (
            <div className="mb-7 no-break bg-brand/5 rounded-lg p-5">
              <PdfSectionHeading>Special Requests / Notes</PdfSectionHeading>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{specialRequests}</p>
            </div>
          )}

          <div className="mb-8">
            <PdfClosingCta heading="Questions About Your Trip?" body="Reach out any time — we're here to help before, during, and after your safari." />
          </div>

          <PdfFooter />
        </div>
      </div>
    </>
  )
}
