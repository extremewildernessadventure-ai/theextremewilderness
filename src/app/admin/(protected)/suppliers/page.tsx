import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Supplier } from '@/lib/ops'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const TYPE_LABELS: Record<Supplier['type'], string> = {
  lodge: 'Lodge',
  vehicle_vendor: 'Vehicle Vendor',
  activity_operator: 'Activity Operator',
  other: 'Other',
}

const columns: AdminTableColumn<Supplier>[] = [
  {
    header: 'Name',
    render: (s) => (
      <Link href={`/admin/suppliers/${s.id}`} className="text-brand font-medium hover:underline">
        {s.name}
      </Link>
    ),
  },
  { header: 'Type', className: 'text-gray-700', render: (s) => TYPE_LABELS[s.type] },
  { header: 'Contact', className: 'text-gray-700', render: (s) => s.contact_info ?? '—' },
  {
    header: 'Status',
    render: (s) => (
      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${s.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
        {s.active ? 'Active' : 'Inactive'}
      </span>
    ),
  },
]

export default async function SuppliersListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM suppliers ORDER BY name ASC').all<Supplier>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Suppliers</h1>
        <Link
          href="/admin/suppliers/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Supplier
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(s) => s.id} emptyMessage="No suppliers yet." />
    </div>
  )
}
