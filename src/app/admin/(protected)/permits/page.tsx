import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Permit, PermitType } from '@/lib/compliance'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import PermitStatusSelect from './PermitStatusSelect'

export const dynamic = 'force-dynamic'

const TYPE_LABELS: Record<PermitType, string> = { tanapa: 'TANAPA', ncaa: 'NCAA', other: 'Other' }

const columns: AdminTableColumn<Permit>[] = [
  { header: 'Type', className: 'text-gray-700 font-medium', render: (p) => TYPE_LABELS[p.type] },
  { header: 'Park', className: 'text-gray-700', render: (p) => p.park ?? '—' },
  { header: 'Permit #', className: 'text-gray-700', render: (p) => p.permit_number ?? '—' },
  { header: 'Amount', className: 'text-gray-700', render: (p) => (p.amount_paid != null ? `${p.currency} ${p.amount_paid.toLocaleString()}` : '—') },
  { header: 'Status', render: (p) => <PermitStatusSelect permitId={p.id} currentStatus={p.status} compact /> },
]

export default async function PermitsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM permits ORDER BY created_at DESC').all<Permit>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Permits</h1>
        <Link
          href="/admin/permits/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Permit
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(p) => p.id} emptyMessage="No permits yet." />
    </div>
  )
}
