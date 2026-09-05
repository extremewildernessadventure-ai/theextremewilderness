import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb, type Invoice, type InvoiceItem, type InvoicePayment, type InvoicePesapalOrder } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { computeImpliedTotal, computeRemainingBalance, getRelatedInvoices, INVOICE_STATUS_PILL_CLASS } from '@/lib/invoices'
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

  const [{ results: items }, { results: payments }, { results: pesapalOrders }, { results: departures }, relatedInvoices] = await Promise.all([
    db.prepare('SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY sort_order').bind(id).all<InvoiceItem>(),
    db.prepare('SELECT * FROM invoice_payments WHERE invoice_id = ? ORDER BY confirmed_at DESC').bind(id).all<InvoicePayment>(),
    db.prepare('SELECT * FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC').bind(id).all<InvoicePesapalOrder>(),
    db.prepare("SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC").all<Departure>(),
    getRelatedInvoices(db, invoice),
  ])

  const latestOrder = pesapalOrders[0] ?? null
  const impliedTotal = computeImpliedTotal(invoice)

  // "Create Linked Invoice" prefills the new-invoice form via query params
  // (the same mechanism already used for the Quote -> Invoice deep link) --
  // client/departure carried over, parentInvoiceId set so the two invoices
  // show up under each other's "Related Invoices" below. When this invoice
  // is itself a deposit, also prefill the description/amount with the real
  // remaining balance so issuing it later is a due-date pick, not arithmetic.
  const linkedInvoiceParams = new URLSearchParams({
    parentInvoiceId: String(invoice.id),
    parentInvoiceNumber: invoice.invoice_number,
    clientName: invoice.client_name,
    ...(invoice.client_id ? { clientId: String(invoice.client_id) } : {}),
    ...(invoice.client_email ? { clientEmail: invoice.client_email } : {}),
    ...(invoice.departure_id ? { departureId: String(invoice.departure_id) } : {}),
    currency: invoice.currency,
  })
  if (impliedTotal != null) {
    const remaining = computeRemainingBalance(invoice)!
    // Reuses the deposit line item's own label (real invoices only ever
    // have the one synthesized "Deposit (X%) — ..." item at this point --
    // description is legacy/unused since multi-line-items landed) rather
    // than falling back to something less meaningful like the invoice number.
    const tripLabel = items[0]?.description.replace(/^Deposit \(\d+%\)\s*—\s*/, '') ?? invoice.invoice_number
    linkedInvoiceParams.set('itemDescription', `Balance — ${tripLabel}`)
    linkedInvoiceParams.set('itemPrice', String(remaining))
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
            {impliedTotal != null && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Deposit</span>
                <span>{invoice.deposit_percent}% of {invoice.currency} {impliedTotal.toLocaleString()}</span>
              </div>
            )}
          </div>

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
