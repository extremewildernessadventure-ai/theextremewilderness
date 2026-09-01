import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Booking, LodgeBooking, CustomBooking } from '@/lib/bookings'
import type { Departure } from '@/lib/departures'
import type { Guide, Vehicle, OpsLodge } from '@/lib/ops'
import { packages } from '@/data/packages'
import {
  printCssFullBleed, sanitizeForPdf,
  PdfDarkPage, PdfDarkHeader, PdfDarkLabel, PdfDarkDivider, PdfDarkCard, PdfDarkFooter,
  PDF_DARK_HEADING_FONT, PDF_DARK_HEADING_WEIGHT,
} from '@/components/pdf/PdfChrome'
import PrintButton from '../../../invoices/[id]/pdf/PrintButton'
import { formatVoucherNumber } from '@/lib/voucher'

// Same rendering this page produces is also what the server-side voucher PDF
// route (api/admin/bookings/[id]/voucher/route.ts) fetches and hands to
// Cloudflare Browser Rendering — one template, not two, and it correctly
// goes through the real Next.js request pipeline (so next/image in
// PdfDarkHeader resolves normally) rather than a manual renderToStaticMarkup
// call outside that pipeline.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

// A field-label/value pair inside an accommodation/custom-booking card's
// grid — small shared helper so the four-ish fields per card (room type,
// includes, confirmation ref, contact) stay visually identical.
function CardField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span style={{ color: '#c9d6cc' }}>{label}</span><br />{children}
    </div>
  )
}

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
  const tripName = pkg?.name ?? departure?.package_slug ?? 'Your Safari'
  const guideName = guide?.name ?? (booking.guide_name_other ? sanitizeForPdf(booking.guide_name_other) : null)
  const vehicleLabel = vehicle?.plate_number ?? (booking.vehicle_notes_other ? sanitizeForPdf(booking.vehicle_notes_other) : null)
  const clientName = sanitizeForPdf(booking.client_name)
  const specialRequests = booking.special_requests ? sanitizeForPdf(booking.special_requests) : null

  return (
    <>
      <style>{printCssFullBleed()}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-3xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <Link href={`/admin/bookings/${booking.id}`} className="detail-back">← Back to Booking</Link>
          <h1 className="text-xl font-bold text-brand">Voucher — {clientName}</h1>
        </div>
        <PrintButton />
      </div>

      <div id="pdf-voucher" className="max-w-3xl mx-auto print:max-w-none">
        <PdfDarkPage>
          <PdfDarkHeader documentLabel="BOOKING VOUCHER" documentNumber={formatVoucherNumber(booking.id)} titleSize="label" />

          {/* ── Hero trip title ── */}
          <div className="no-break" style={{ marginTop: 24 }}>
            <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 22 }}>{tripName}</div>
            {departure && (
              <div style={{ fontSize: 14, color: 'var(--color-gold)', marginTop: 4 }}>
                {departure.start_date} – {departure.end_date}
              </div>
            )}
          </div>

          {/* ── Guest / Guide & Vehicle ── */}
          <div className="grid grid-cols-2 no-break" style={{ gap: '24px 32px', marginTop: 32 }}>
            <div>
              <PdfDarkLabel>Guest</PdfDarkLabel>
              <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 18 }}>{clientName}</div>
              {booking.client_email && <div style={{ fontSize: 13.5, color: '#dfe6e0', marginTop: 2 }}>{booking.client_email}</div>}
              <div style={{ fontSize: 13.5, color: '#dfe6e0', marginTop: 2 }}>{booking.guests_count} guest{booking.guests_count === 1 ? '' : 's'}</div>
            </div>
            <div>
              <PdfDarkLabel>Guide &amp; Vehicle</PdfDarkLabel>
              <div style={{ fontSize: 13.5, color: '#dfe6e0' }}>Guide: <em>{guideName ?? 'Not yet assigned'}</em></div>
              <div style={{ fontSize: 13.5, color: '#dfe6e0', marginTop: 2 }}>Vehicle: <em>{vehicleLabel ?? 'Not yet assigned'}</em></div>
            </div>
          </div>

          {departure && (
            <div className="no-break" style={{ marginTop: 32 }}>
              <PdfDarkDivider />
              <div style={{ paddingTop: 24 }}>
                <PdfDarkLabel>Trip</PdfDarkLabel>
                <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 16 }}>{tripName}</div>
                <div style={{ fontSize: 13, color: '#dfe6e0', marginTop: 2 }}>{departure.start_date} → {departure.end_date}</div>
              </div>
            </div>
          )}

          {lodgeBookings.length > 0 && (
            <div style={{ marginTop: 24 }}>
              {/* Divider + label grouped in their own no-break div, separate
                  from the card list below — the section header can't be
                  sliced mid-line by a page break, but the cards underneath
                  it are still free to paginate across pages individually
                  (each PdfDarkCard is its own no-break unit). */}
              <div className="no-break" style={{ paddingBottom: 24 }}>
                <PdfDarkDivider />
                <div style={{ paddingTop: 24 }}>
                  <PdfDarkLabel>Accommodation</PdfDarkLabel>
                </div>
              </div>
              <div className="space-y-4">
                {lodgeBookings.map((lb) => {
                  const lodgeDisplayName = sanitizeForPdf(lb.lodge_name_other ?? (lb.lodge_id ? lodgesById.get(lb.lodge_id)?.name : undefined) ?? 'Lodge')
                  return (
                    <PdfDarkCard key={lb.id}>
                      <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 18 }}>{lodgeDisplayName}</div>
                      {(lb.check_in || lb.check_out) && (
                        <div style={{ fontSize: 13, color: '#dfe6e0', marginTop: 2 }}>{lb.check_in ?? '…'} → {lb.check_out ?? '…'}</div>
                      )}
                      <div className="grid grid-cols-2" style={{ fontSize: 13, gap: '8px 24px', marginTop: 16 }}>
                        {lb.room_type && <CardField label="Room Type">{sanitizeForPdf(lb.room_type)}</CardField>}
                        {lb.inclusions && <CardField label="Includes"><span className="whitespace-pre-wrap">{sanitizeForPdf(lb.inclusions)}</span></CardField>}
                        {lb.confirmation_ref && <CardField label="Confirmation Ref">{sanitizeForPdf(lb.confirmation_ref)}</CardField>}
                        {lb.contact_info && <CardField label="Contact">{sanitizeForPdf(lb.contact_info)}</CardField>}
                      </div>
                    </PdfDarkCard>
                  )
                })}
              </div>
            </div>
          )}

          {customBookings.length > 0 && (
            <div style={{ marginTop: 24 }}>
              <div className="no-break" style={{ paddingBottom: 24 }}>
                <PdfDarkDivider />
                <div style={{ paddingTop: 24 }}>
                  <PdfDarkLabel>Custom Bookings</PdfDarkLabel>
                </div>
              </div>
              <div className="space-y-4">
                {customBookings.map((cb) => (
                  <PdfDarkCard key={cb.id}>
                    <div style={{ fontFamily: PDF_DARK_HEADING_FONT, fontWeight: PDF_DARK_HEADING_WEIGHT, fontSize: 18 }}>{sanitizeForPdf(cb.description)}</div>
                    {(cb.start_date || cb.end_date) && (
                      <div style={{ fontSize: 13, color: '#dfe6e0', marginTop: 2 }}>{cb.start_date ?? '…'} → {cb.end_date ?? '…'}</div>
                    )}
                    {(cb.contact_info || cb.notes) && (
                      <div className="grid grid-cols-2" style={{ fontSize: 13, gap: '8px 24px', marginTop: 16 }}>
                        {cb.contact_info && <CardField label="Contact">{sanitizeForPdf(cb.contact_info)}</CardField>}
                        {cb.notes && <CardField label="Notes"><span className="whitespace-pre-wrap">{sanitizeForPdf(cb.notes)}</span></CardField>}
                      </div>
                    )}
                  </PdfDarkCard>
                ))}
              </div>
            </div>
          )}

          {specialRequests && (
            <div style={{ marginTop: 24 }}>
              <div className="no-break" style={{ paddingBottom: 24 }}>
                <PdfDarkDivider />
                <div style={{ paddingTop: 24 }}>
                  <PdfDarkLabel>Special Requests / Notes</PdfDarkLabel>
                </div>
              </div>
              <PdfDarkCard>
                <p className="whitespace-pre-wrap" style={{ fontSize: 13.5, color: '#dfe6e0' }}>{specialRequests}</p>
              </PdfDarkCard>
            </div>
          )}

          <PdfDarkFooter
            heading="Questions About Your Trip?"
            body="Reach out any time — we're here to help before, during, and after your safari."
          />
        </PdfDarkPage>
      </div>
    </>
  )
}
