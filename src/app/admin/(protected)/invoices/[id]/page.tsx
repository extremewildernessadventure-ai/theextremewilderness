import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb, type Invoice, type InvoiceItem, type InvoicePayment, type InvoicePesapalOrder } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { computeQuoteTotalCost, type Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
import { getInvoiceFamily, computeInvoiceBalanceSchedule, INVOICE_STATUS_PILL_CLASS } from '@/lib/invoices'
import InvoiceEditForm from './InvoiceEditForm'
import InvoiceItemsEditor from './InvoiceItemsEditor'
import PaymentPanel from './PaymentPanel'
import PesapalPanel from './PesapalPanel'
import PaymentOptionsPanel from './PaymentOptionsPanel'
import SendInvoiceButton from './SendInvoiceButton'
import DeleteInvoiceButton from './DeleteInvoiceButton'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function InvoiceDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()

  if (!invoice) notFound()

  const [{ results: items }, { results: payments }, { results: pesapalOrders }, { results: departures }, family] = await Promise.all([
    db.prepare('SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY sort_order').bind(id).all<InvoiceItem>(),
    db.prepare('SELECT * FROM invoice_payments WHERE invoice_id = ? ORDER BY confirmed_at DESC').bind(id).all<InvoicePayment>(),
    db.prepare('SELECT * FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC').bind(id).all<InvoicePesapalOrder>(),
    db.prepare("SELECT * FROM departures WHERE cancelled = 0 ORDER BY start_date DESC").all<Departure>(),
    getInvoiceFamily(db, invoice.id),
  ])

  const latestOrder = pesapalOrders[0] ?? null
  const relatedInvoices = family.filter((inv) => inv.id !== invoice.id)
  const isRootInvoice = invoice.parent_invoice_id == null

  // The invoice's own quote, fetched directly by id -- this is now the
  // authoritative source for the balance schedule below (see migration
  // 0034's comment). departure_id stays on the invoice too, but purely for
  // tagging which trip this is (used by the profitability report) -- it no
  // longer feeds any pricing math.
  const quote = invoice.quote_id
    ? await db.prepare('SELECT * FROM quotes WHERE id = ?').bind(invoice.quote_id).first<Quote>()
    : null
  const schedule = computeInvoiceBalanceSchedule(invoice, family, quote ? computeQuoteTotalCost(quote) : null)
  const quoteLabel = quote ? (packages.find((p) => p.slug === quote.package_slug)?.name ?? 'Custom Safari') : null

  // "Create Linked Invoice" prefills the new-invoice form via query params
  // (the same mechanism already used for the Quote -> Invoice deep link) --
  // client/departure/quote carried over, parentInvoiceId set so the two
  // invoices show up under each other's "Related Invoices" below. When a
  // balance schedule applies, also prefill the description/amount/
  // priorBalance with the real current remaining balance so issuing the
  // next invoice is a due-date pick, not arithmetic.
  const linkedInvoiceParams = new URLSearchParams({
    parentInvoiceId: String(invoice.id),
    parentInvoiceNumber: invoice.invoice_number,
    clientName: invoice.client_name,
    ...(invoice.client_id ? { clientId: String(invoice.client_id) } : {}),
    ...(invoice.client_email ? { clientEmail: invoice.client_email } : {}),
    ...(invoice.departure_id ? { departureId: String(invoice.departure_id) } : {}),
    ...(invoice.quote_id ? { quoteId: String(invoice.quote_id) } : {}),
    currency: invoice.currency,
  })
  if (schedule != null) {
    const tripLabel = quoteLabel
      ?? items[0]?.description.replace(/^(?:Deposit|Balance|Payment)\s*(?:\(\d+%\))?\s*[—-]\s*/, '')
      ?? invoice.invoice_number
    linkedInvoiceParams.set('quoteTotalCost', String(schedule.totalCost))
    linkedInvoiceParams.set('quoteLabel', tripLabel)
    linkedInvoiceParams.set('itemDescription', `Balance — ${tripLabel}`)
    linkedInvoiceParams.set('itemPrice', String(schedule.newBalance))
    linkedInvoiceParams.set('priorBalance', String(schedule.newBalance))
  }

  return (
    <DetailTwoColumn
      backHref="/admin/invoices"
      backLabel="Back to Invoices"
      title={invoice.invoice_number}
      subtitle={`Created ${new Date(invoice.created_at).toLocaleString()}`}
      main={
        <>
          <div className="panel space-y-3 text-sm">
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Client</span>
              {invoice.client_id ? (
                <Link href={`/admin/clients/${invoice.client_id}`} className="text-brand font-medium hover:underline">
                  {invoice.client_name} →
                </Link>
              ) : (
                <span className="font-medium text-brand">{invoice.client_name}</span>
              )}
            </div>
            {invoice.client_email && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Email</span>
                <span>{invoice.client_email}</span>
              </div>
            )}
            {invoice.booking_reference && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Booking Ref</span>
                <span>{invoice.booking_reference}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Amount</span>
              <span className="font-semibold text-brand mono">{invoice.currency} {invoice.amount.toLocaleString()}</span>
            </div>
            {invoice.due_date && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Due Date</span>
                <span>{invoice.due_date}</span>
              </div>
            )}
            {invoice.deposit_percent != null && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Deposit</span>
                <span>{invoice.deposit_percent}% of the total</span>
              </div>
            )}
          </div>

          {schedule != null && (
            <div className="panel space-y-3">
              <h2 className="mb-1">{isRootInvoice ? 'Trip Cost Schedule' : 'Balance Schedule'}</h2>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>
                    {isRootInvoice ? 'Total Cost' : 'Previous Balance'}
                  </p>
                  <p className="text-sm font-semibold mono">
                    {invoice.currency} {(isRootInvoice ? schedule.totalCost : schedule.previousBalance).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>Amount Billed</p>
                  <p className="text-sm font-semibold mono" style={{ color: 'var(--pine)' }}>{invoice.currency} {schedule.thisAmount.toLocaleString()}</p>
                </div>
                <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>
                    {isRootInvoice ? 'Balance' : 'New Balance'}
                  </p>
                  <p className="text-sm font-semibold text-brand mono">{invoice.currency} {schedule.newBalance.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          {relatedInvoices.length > 0 && (
            <div className="panel space-y-2">
              <h2 className="mb-1">Related Invoices</h2>
              <ul className="space-y-1.5 text-sm">
                {relatedInvoices.map((rel) => (
                  <li key={rel.id} className="flex items-center justify-between">
                    <Link href={`/admin/invoices/${rel.id}`} className="text-brand font-medium hover:underline">
                      {rel.invoice_number}{rel.parent_invoice_id === invoice.id ? ' (follow-up)' : ' (original)'}
                    </Link>
                    <span className="flex items-center gap-2">
                      <span className="mono">{rel.currency} {rel.amount.toLocaleString()}</span>
                      <span className={`pill ${INVOICE_STATUS_PILL_CLASS[rel.status]}`}><i />{rel.status}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <InvoiceItemsEditor invoice={invoice} items={items} />

          <PaymentPanel invoice={invoice} payments={payments} />

          <PesapalPanel invoiceId={invoice.id} orders={pesapalOrders} />

          <PaymentOptionsPanel invoice={invoice} payments={payments} latestOrder={latestOrder} />

          <div className="pt-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
            <DeleteInvoiceButton invoiceId={invoice.id} invoiceNumber={invoice.invoice_number} />
            <Link href={`/admin/invoices/new?${linkedInvoiceParams.toString()}`} className="btn-outline">
              + Create Linked Invoice
            </Link>
          </div>
        </>
      }
      sidebar={
        <>
          <InvoiceEditForm invoice={invoice} departures={departures} />
          <div className="panel space-y-3">
            <h2 className="mb-1">Send Invoice</h2>
            <SendInvoiceButton invoiceId={invoice.id} hasClientEmail={!!invoice.client_email} lastSentAt={invoice.sent_at} />
          </div>
        </>
      }
    />
  )
}
