import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb, type Invoice, type InvoiceItem, type InvoicePayment, type InvoicePesapalOrder } from '@/lib/db'
import type { Departure } from '@/lib/departures'
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

  const [{ results: items }, { results: payments }, { results: pesapalOrders }, { results: departures }] = await Promise.all([
    db.prepare('SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY sort_order').bind(id).all<InvoiceItem>(),
    db.prepare('SELECT * FROM invoice_payments WHERE invoice_id = ? ORDER BY confirmed_at DESC').bind(id).all<InvoicePayment>(),
    db.prepare('SELECT * FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC').bind(id).all<InvoicePesapalOrder>(),
    db.prepare("SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC").all<Departure>(),
  ])

  const latestOrder = pesapalOrders[0] ?? null

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
          </div>

          <InvoiceItemsEditor invoice={invoice} items={items} />

          <PaymentPanel invoice={invoice} payments={payments} />

          <PesapalPanel invoiceId={invoice.id} orders={pesapalOrders} />

          <PaymentOptionsPanel invoice={invoice} payments={payments} latestOrder={latestOrder} />

          <div className="panel space-y-3">
            <h2 className="mb-1">Send Invoice</h2>
            <SendInvoiceButton invoiceId={invoice.id} hasClientEmail={!!invoice.client_email} lastSentAt={invoice.sent_at} />
          </div>

          <Link href={`/admin/invoices/${invoice.id}/pdf`} className="btn-outline">
            Print / Download PDF
          </Link>

          <div className="pt-6 border-t border-gray-200">
            <DeleteInvoiceButton invoiceId={invoice.id} invoiceNumber={invoice.invoice_number} />
          </div>
        </>
      }
      sidebar={<InvoiceEditForm invoice={invoice} departures={departures} />}
    />
  )
}
