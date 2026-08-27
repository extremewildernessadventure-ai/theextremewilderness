import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const STATUS_STYLES: Record<Invoice['status'], string> = {
  unpaid: 'bg-amber-100 text-amber-700',
  partial: 'bg-blue-100 text-blue-700',
  paid: 'bg-green-100 text-green-700',
  cancelled: 'bg-gray-100 text-gray-500',
}

const columns: AdminTableColumn<Invoice>[] = [
  {
    header: 'Invoice #',
    render: (inv) => (
      <Link href={`/admin/invoices/${inv.id}`} className="text-brand font-medium hover:underline">
        {inv.invoice_number}
      </Link>
    ),
  },
  { header: 'Client', className: 'text-gray-700', render: (inv) => inv.client_name },
  { header: 'Amount', className: 'text-gray-700', render: (inv) => `${inv.currency} ${inv.amount.toLocaleString()}` },
  {
    header: 'Status',
    render: (inv) => (
      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[inv.status]}`}>
        {inv.status}
      </span>
    ),
  },
  { header: 'Created', className: 'text-gray-500', render: (inv) => new Date(inv.created_at).toLocaleDateString() },
]

export default async function InvoicesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all<Invoice>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Invoices</h1>
        <Link
          href="/admin/invoices/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Invoice
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(inv) => inv.id} emptyMessage="No invoices yet." />
    </div>
  )
}
