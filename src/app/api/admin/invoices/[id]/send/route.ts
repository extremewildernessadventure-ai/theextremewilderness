import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession, ADMIN_SESSION_COOKIE } from '@/lib/adminAuth'
import { getDb, type Invoice } from '@/lib/db'
import { markInvoiceSent } from '@/lib/invoices'
import { renderPageToPdf } from '@/lib/browser'
import { getDocsBucket, invoiceKey } from '@/lib/r2'

export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM ?? 'EWA Enquiries <noreply@theextremewilderness.com>'

type Params = { params: Promise<{ id: string }> }

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()
  if (!invoice) {
    return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
  }
  if (!invoice.client_email) {
    return NextResponse.json({ error: 'Add a client email before sending this invoice.' }, { status: 400 })
  }

  // The invoice PDF page (src/app/admin/(protected)/invoices/[id]/pdf/page.tsx)
  // is itself behind the admin auth gate, same as every other admin page —
  // forward this request's own session cookie so Puppeteer's page.goto()
  // sees the same authenticated view a staff member does, rather than
  // hitting the login redirect. Same pattern as the booking voucher route.
  const sessionCookie = req.cookies.get(ADMIN_SESSION_COOKIE)?.value
  if (!sessionCookie) {
    return NextResponse.json({ error: 'Session expired — refresh and try again.' }, { status: 401 })
  }
  const invoiceUrl = new URL(`/admin/invoices/${id}/pdf`, req.nextUrl.origin).toString()

  let pdf: ArrayBuffer
  try {
    pdf = await renderPageToPdf(invoiceUrl, `${ADMIN_SESSION_COOKIE}=${sessionCookie}`)
  } catch (err) {
    console.error('Invoice PDF generation failed:', err)
    return NextResponse.json({ error: 'Could not generate the invoice PDF. Please try again.' }, { status: 502 })
  }

  const r2Key = invoiceKey(invoice.id)
  try {
    const bucket = await getDocsBucket()
    await bucket.put(r2Key, pdf, { httpMetadata: { contentType: 'application/pdf' } })
  } catch (err) {
    // Not fatal to the send itself — the important side effect (the client
    // getting their invoice) can still succeed even if archival storage
    // fails. Logged, not swallowed silently.
    console.error('Invoice R2 storage failed:', err)
  }

  const balanceDue = Math.max(0, invoice.amount - invoice.amount_paid)
  const base64Pdf = Buffer.from(pdf).toString('base64')
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: FROM,
    to: invoice.client_email,
    subject: `Invoice ${invoice.invoice_number} from EWA Safari Outfitters`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
        <p style="font-size:14px;color:#1a1a1a">Hi ${invoice.client_name},</p>
        <p style="font-size:14px;color:#1a1a1a;line-height:1.6">
          Please find invoice ${invoice.invoice_number} attached
          (${invoice.currency} ${balanceDue.toLocaleString()} ${invoice.amount_paid > 0 ? 'balance due' : 'due'}).
          Payment instructions are on the invoice. If anything looks off, just
          reply to this email and we'll sort it out.
        </p>
        <p style="font-size:14px;color:#1a1a1a">— EWA Safari Outfitters</p>
      </div>
    `,
    attachments: [
      { filename: `EWA-Invoice-${invoice.invoice_number}.pdf`, content: base64Pdf, contentType: 'application/pdf' },
    ],
  })

  if (error) {
    console.error('Invoice email send failed:', error)
    return NextResponse.json({ error: 'Could not email the invoice. Please try again.' }, { status: 502 })
  }

  await markInvoiceSent(db, invoice.id, r2Key)

  return NextResponse.json({ success: true })
}
