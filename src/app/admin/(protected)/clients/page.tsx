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
      <div className="page-head">
        <div>
          <h1>Clients</h1>
        </div>
        <Link href="/admin/clients/new" className="btn-primary">
          + New Client
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(c) => c.id} emptyMessage="No clients yet." />
    </div>
  )
}
