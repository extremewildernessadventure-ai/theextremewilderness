import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'
import InvoiceEditForm from './InvoiceEditForm'
import DeleteInvoiceButton from './DeleteInvoiceButton'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function InvoiceDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()

  if (!invoice) notFound()

  return (
    <div className="max-w-5xl">
      <Link href="/admin/invoices" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Invoices</Link>
      <h1 className="text-2xl font-bold text-brand mb-1">{invoice.invoice_number}</h1>
      <p className="text-gray-500 text-sm mb-6">Created {new Date(invoice.created_at).toLocaleString()}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <div className="bg-white border border-gray-200 rounded-xl p-7 mb-6 space-y-3 text-sm">
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
            {invoice.description && (
              <div>
                <span className="text-gray-500 block mb-1">Description</span>
                <p className="text-gray-700 whitespace-pre-wrap">{invoice.description}</p>
              </div>
            )}
          </div>

          <Link
            href={`/admin/invoices/${invoice.id}/pdf`}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Print / Download PDF
          </Link>

          <div className="pt-6 border-t border-gray-200">
            <DeleteInvoiceButton invoiceId={invoice.id} invoiceNumber={invoice.invoice_number} />
          </div>
        </div>

        <InvoiceEditForm invoice={invoice} />
      </div>
    </div>
  )
}
