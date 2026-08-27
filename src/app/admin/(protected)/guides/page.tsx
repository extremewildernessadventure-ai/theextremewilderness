import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Guide } from '@/lib/ops'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<Guide>[] = [
  {
    header: 'Name',
    render: (g) => (
      <Link href={`/admin/guides/${g.id}`} className="text-brand font-medium hover:underline">
        {g.name}
      </Link>
    ),
  },
  { header: 'Phone', className: 'text-gray-700', render: (g) => g.phone ?? '—' },
  { header: 'Specialty', className: 'text-gray-700', render: (g) => g.specialty ?? '—' },
  {
    header: 'Status',
    render: (g) => (
      <span className={`pill ${g.active ? 'open' : 'full'}`}><i />{g.active ? 'Active' : 'Inactive'}</span>
    ),
  },
]

export default async function GuidesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM guides ORDER BY name ASC').all<Guide>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Guides</h1>
        </div>
        <Link href="/admin/guides/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Guide
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(g) => g.id} emptyMessage="No guides yet." />
    </div>
  )
}
