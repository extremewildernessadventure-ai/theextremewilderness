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
      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${g.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
        {g.active ? 'Active' : 'Inactive'}
      </span>
    ),
  },
]

export default async function GuidesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM guides ORDER BY name ASC').all<Guide>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Guides</h1>
        <Link
          href="/admin/guides/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Guide
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(g) => g.id} emptyMessage="No guides yet." />
    </div>
  )
}
