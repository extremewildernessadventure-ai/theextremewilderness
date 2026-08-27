import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Client } from '@/lib/clients'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<Client>[] = [
  {
    header: 'Name',
    render: (c) => (
      <Link href={`/admin/clients/${c.id}`} className="text-brand font-medium hover:underline">
        {c.name}
      </Link>
    ),
  },
  { header: 'Email', className: 'text-gray-700', render: (c) => c.email ?? '—' },
  { header: 'Phone', className: 'text-gray-700', render: (c) => c.phone ?? '—' },
]

export default async function ClientsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM clients ORDER BY name ASC').all<Client>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Clients</h1>
        <Link
          href="/admin/clients/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Client
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(c) => c.id} emptyMessage="No clients yet." />
    </div>
  )
}
