import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession, ADMIN_SESSION_COOKIE } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { markVoucherSent, type Booking } from '@/lib/bookings'
import { renderPageToPdf } from '@/lib/browser'
import { getDocsBucket, voucherKey } from '@/lib/r2'

export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM ?? 'EWA Enquiries <noreply@theextremewilderness.com>'

type Params = { params: Promise<{ id: string }> }

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const booking = await db.prepare('SELECT * FROM bookings WHERE id = ?').bind(id).first<Booking>()
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }
  if (!booking.client_email) {
    return NextResponse.json({ error: 'Add a client email before sending a voucher.' }, { status: 400 })
  }

  // The voucher page (src/app/admin/(protected)/bookings/[id]/voucher/page.tsx)
  // is itself behind the admin auth gate, same as every other admin page —
  // forward this request's own session cookie so Puppeteer's page.goto()
  // sees the same authenticated view a staff member does, rather than
  // hitting the login redirect.
  const sessionCookie = req.cookies.get(ADMIN_SESSION_COOKIE)?.value
  if (!sessionCookie) {
    return NextResponse.json({ error: 'Session expired — refresh and try again.' }, { status: 401 })
  }
  const voucherUrl = new URL(`/admin/bookings/${id}/voucher`, req.nextUrl.origin).toString()

  let pdf: ArrayBuffer
  try {
    pdf = await renderPageToPdf(voucherUrl, `${ADMIN_SESSION_COOKIE}=${sessionCookie}`)
  } catch (err) {
    console.error('Voucher PDF generation failed:', err)
    return NextResponse.json({ error: 'Could not generate the voucher PDF. Please try again.' }, { status: 502 })
  }

  const r2Key = voucherKey(booking.id)
  try {
    const bucket = await getDocsBucket()
    await bucket.put(r2Key, pdf, { httpMetadata: { contentType: 'application/pdf' } })
  } catch (err) {
    // Not fatal to the send itself — the important side effect (the client
    // getting their voucher) can still succeed even if archival storage
    // fails. Logged, not swallowed silently.
    console.error('Voucher R2 storage failed:', err)
  }

  const base64Pdf = Buffer.from(pdf).toString('base64')
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: FROM,
    to: booking.client_email,
    subject: `Your EWA Safari Voucher — Booking #${booking.id}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
        <p style="font-size:14px;color:#1a1a1a">Hi ${booking.client_name},</p>
        <p style="font-size:14px;color:#1a1a1a;line-height:1.6">
          Please find your booking voucher attached — it has your trip dates,
          accommodation, and guide/vehicle details. If anything looks off, just
          reply to this email and we'll sort it out.
        </p>
        <p style="font-size:14px;color:#1a1a1a">— EWA Safari Outfitters</p>
      </div>
    `,
    attachments: [
      { filename: `EWA-Voucher-Booking-${booking.id}.pdf`, content: base64Pdf, contentType: 'application/pdf' },
    ],
  })

  if (error) {
    console.error('Voucher email send failed:', error)
    return NextResponse.json({ error: 'Could not email the voucher. Please try again.' }, { status: 502 })
  }

  await markVoucherSent(db, booking.id, r2Key)

  return NextResponse.json({ success: true })
}
