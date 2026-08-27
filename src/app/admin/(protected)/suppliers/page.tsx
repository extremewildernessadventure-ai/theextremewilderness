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
      <span className={`pill ${s.active ? 'open' : 'full'}`}><i />{s.active ? 'Active' : 'Inactive'}</span>
    ),
  },
]

export default async function SuppliersListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM suppliers ORDER BY name ASC').all<Supplier>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Suppliers</h1>
        </div>
        <Link href="/admin/suppliers/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Supplier
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(s) => s.id} emptyMessage="No suppliers yet." />
    </div>
  )
}
