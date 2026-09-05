import Link from 'next/link'
import { getDb } from '@/lib/db'
import { listPackageRows, type PackageRow, type PackageType } from '@/lib/packages'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const TYPE_LABELS: Record<PackageType, string> = {
  big_five_game_drives: 'Big Five Game Drives',
  migration: 'Great Migration',
  photographic: 'Photographic',
  walking: 'Walking Safari',
  cultural: 'Cultural',
  gorilla_trekking: 'Gorilla Trekking',
  beach_extension: 'Beach Extension',
  mountain_trekking: 'Mountain Trekking',
}

const columns: AdminTableColumn<PackageRow>[] = [
  {
    header: 'Name',
    render: (p) => (
      <Link href={`/admin/packages/${p.id}`} className="text-brand font-medium hover:underline">
        {p.name}
      </Link>
    ),
  },
  { header: 'Slug', className: 'text-gray-400 text-xs', render: (p) => p.slug },
  { header: 'Type', className: 'text-gray-700', render: (p) => TYPE_LABELS[p.type] },
  { header: 'Duration', className: 'text-gray-700', render: (p) => `${p.duration} days` },
  { header: 'Price From', className: 'text-gray-700', render: (p) => `$${p.price_from.toLocaleString('en-US')}` },
  {
    header: 'Status',
    render: (p) => (
      <span className={`pill ${p.status === 'published' ? 'open' : 'full'}`}><i />{p.status === 'published' ? 'Published' : 'Draft'}</span>
    ),
  },
]

export default async function PackagesListPage() {
  const db = await getDb()
  const packages = await listPackageRows(db)

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Safari Packages</h1>
        </div>
        <Link href="/admin/packages/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Package
        </Link>
      </div>

      <AdminTable
        columns={columns}
        rows={packages}
        rowKey={(p) => p.id}
        emptyMessage="No packages yet."
        emptyAction={{ label: '+ New Package', href: '/admin/packages/new' }}
      />
    </div>
  )
}
