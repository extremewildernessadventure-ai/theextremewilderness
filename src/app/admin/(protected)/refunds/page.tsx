import { getDb } from '@/lib/db'
import type { Refund } from '@/lib/finance'
import Link from 'next/link'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import RefundStatusSelect from './RefundStatusSelect'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<Refund>[] = [
  { header: 'Amount', className: 'text-gray-700 font-medium', render: (r) => `${r.currency} ${r.amount.toLocaleString()}` },
  { header: 'Reason', className: 'text-gray-700 max-w-[280px] truncate', render: (r) => r.reason ?? '—' },
  { header: 'Status', render: (r) => <RefundStatusSelect refundId={r.id} currentStatus={r.status} compact /> },
  { header: 'Requested', className: 'text-gray-500', render: (r) => new Date(r.created_at).toLocaleDateString() },
]

export default async function RefundsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM refunds ORDER BY created_at DESC').all<Refund>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Refunds</h1>
        <Link
          href="/admin/refunds/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Refund
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(r) => r.id} emptyMessage="No refunds yet." />
    </div>
  )
}
