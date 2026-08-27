import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb, type Invoice, type InvoiceItem, type InvoicePayment, type InvoicePesapalOrder } from '@/lib/db'
import InvoiceEditForm from './InvoiceEditForm'
import InvoiceItemsEditor from './InvoiceItemsEditor'
import PaymentPanel from './PaymentPanel'
import PesapalPanel from './PesapalPanel'
import PaymentOptionsPanel from './PaymentOptionsPanel'
import DeleteInvoiceButton from './DeleteInvoiceButton'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function InvoiceDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()

  if (!invoice) notFound()

  const [{ results: items }, { results: payments }, { results: pesapalOrders }] = await Promise.all([
    db.prepare('SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY sort_order').bind(id).all<InvoiceItem>(),
    db.prepare('SELECT * FROM invoice_payments WHERE invoice_id = ? ORDER BY confirmed_at DESC').bind(id).all<InvoicePayment>(),
    db.prepare('SELECT * FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC').bind(id).all<InvoicePesapalOrder>(),
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
          <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Client</span>
              <span className="font-medium text-brand">{invoice.client_name}</span>
            </div>
            {invoice.client_email && (
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-700">{invoice.client_email}</span>
              </div>
            )}
            {invoice.booking_reference && (
              <div className="flex justify-between">
                <span className="text-gray-500">Booking Ref</span>
                <span className="text-gray-700">{invoice.booking_reference}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">Amount</span>
              <span className="font-semibold text-brand">{invoice.currency} {invoice.amount.toLocaleString()}</span>
            </div>
            {invoice.due_date && (
              <div className="flex justify-between">
                <span className="text-gray-500">Due Date</span>
                <span className="text-gray-700">{invoice.due_date}</span>
              </div>
            )}
          </div>

          <InvoiceItemsEditor invoice={invoice} items={items} />

          <PaymentPanel invoice={invoice} payments={payments} />

          <PesapalPanel invoiceId={invoice.id} orders={pesapalOrders} />

          <PaymentOptionsPanel invoice={invoice} payments={payments} latestOrder={latestOrder} />

          <Link
            href={`/admin/invoices/${invoice.id}/pdf`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Print / Download PDF
          </Link>

          <div className="pt-6 border-t border-gray-200">
            <DeleteInvoiceButton invoiceId={invoice.id} invoiceNumber={invoice.invoice_number} />
          </div>
        </>
      }
      sidebar={<InvoiceEditForm invoice={invoice} />}
    />
  )
}
