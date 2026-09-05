import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

function packageName(slug: string): string {
  return packages.find((p) => p.slug === slug)?.name ?? slug
}

const columns: AdminTableColumn<Departure>[] = [
  {
    header: 'Package',
    render: (d) => (
      <Link href={`/admin/departures/${d.id}`}>
        <div className="pkg-name">{packageName(d.package_slug)}</div>
      </Link>
    ),
  },
  { header: 'Dates', className: 'dates-cell', render: (d) => `${d.start_date} → ${d.end_date}` },
  {
    header: 'Status',
    render: (d) => (d.cancelled ? <span className="pill cancelled"><i />cancelled</span> : <span className="pill open"><i />confirmed</span>),
  },
]

export default async function DeparturesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM departures ORDER BY start_date ASC').all<Departure>()

  const statsRow = await db.prepare(`
    SELECT
      COUNT(*) as total,
      SUM(CASE WHEN cancelled = 1 AND created_at >= datetime('now', '-30 days') THEN 1 ELSE 0 END) as cancelled30d
    FROM departures
  `).first<{ total: number; cancelled30d: number }>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Departures</h1>
          <p>{statsRow?.total ?? 0} total</p>
        </div>
        <Link href="/admin/departures/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Departure
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Active Departures</div>
          <div className="stat-num">{statsRow?.total ?? 0}</div>
          <div className="stat-sub">Across all packages</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Cancelled (30d)</div>
          <div className="stat-num">{statsRow?.cancelled30d ?? 0}</div>
          <div className="stat-sub">In the last 30 days</div>
        </div>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(d) => d.id}
        emptyMessage="No departures yet."
        emptyAction={{ label: '+ Create Departure', href: '/admin/departures/new' }}
        rowClassName={(d) => (d.cancelled ? 'cancelled' : undefined)}
      />
    </div>
  )
}
