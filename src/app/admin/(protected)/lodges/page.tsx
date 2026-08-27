import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { OpsLodge } from '@/lib/ops'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<OpsLodge>[] = [
  {
    header: 'Name',
    render: (l) => (
      <Link href={`/admin/lodges/${l.id}`} className="text-brand font-medium hover:underline">
        {l.name}
      </Link>
    ),
  },
  { header: 'Location', className: 'text-gray-700', render: (l) => l.location ?? '—' },
  { header: 'Contact', className: 'text-gray-700', render: (l) => l.contact_info ?? '—' },
]

export default async function LodgesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM ops_lodges ORDER BY name ASC').all<OpsLodge>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Lodges</h1>
        <Link
          href="/admin/lodges/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Lodge
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(l) => l.id} emptyMessage="No lodges yet." />
    </div>
  )
}
