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
      <div className="page-head">
        <div>
          <h1>Lodges</h1>
        </div>
        <Link href="/admin/lodges/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Lodge
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(l) => l.id} emptyMessage="No lodges yet." />
    </div>
  )
}
