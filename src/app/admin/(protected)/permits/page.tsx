import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Permit, PermitType } from '@/lib/compliance'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import PermitStatusSelect from './PermitStatusSelect'

export const dynamic = 'force-dynamic'

const TYPE_LABELS: Record<PermitType, string> = { tanapa: 'TANAPA', ncaa: 'NCAA', other: 'Other' }

function isExpiringSoon(p: Permit): boolean {
  if (!p.valid_to) return false
  const daysLeft = (new Date(p.valid_to).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  return daysLeft >= 0 && daysLeft <= 30
}

const columns: AdminTableColumn<Permit>[] = [
  { header: 'Permit Type', className: 'text-gray-700 font-medium', render: (p) => TYPE_LABELS[p.type] },
  { header: 'Authority', className: 'text-gray-700', render: (p) => p.park ?? '—' },
  { header: 'Permit No.', className: 'mono', render: (p) => p.permit_number ?? '—' },
  { header: 'Expiry Date', className: 'dates-cell', render: (p) => p.valid_to ?? '—' },
  { header: 'Status', render: (p) => <PermitStatusSelect permitId={p.id} currentStatus={p.status} compact /> },
]

export default async function PermitsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM permits ORDER BY created_at DESC').all<Permit>()

  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN status != 'expired' AND (valid_to IS NULL OR valid_to >= date('now')) THEN 1 ELSE 0 END) as active,
      SUM(CASE WHEN valid_to IS NOT NULL AND valid_to >= date('now') AND valid_to <= date('now', '+30 days') THEN 1 ELSE 0 END) as expiringSoon,
      SUM(CASE WHEN status = 'expired' OR (valid_to IS NOT NULL AND valid_to < date('now')) THEN 1 ELSE 0 END) as expired,
      SUM(CASE WHEN valid_from >= date('now', 'start of month') THEN 1 ELSE 0 END) as renewedThisMonth
    FROM permits
  `).first<{ active: number; expiringSoon: number; expired: number; renewedThisMonth: number }>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Permits</h1>
        </div>
        <Link href="/admin/permits/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Permit
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Active Permits</div>
          <div className="stat-num">{statsRow?.active ?? 0}</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Expiring Within 30 Days</div>
          <div className="stat-num">{statsRow?.expiringSoon ?? 0}</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Expired</div>
          <div className="stat-num">{statsRow?.expired ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Renewed This Month</div>
          <div className="stat-num">{statsRow?.renewedThisMonth ?? 0}</div>
        </div>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(p) => p.id}
        emptyMessage="No permits yet."
        rowClassName={(p) => (isExpiringSoon(p) ? 'warn' : undefined)}
      />
    </div>
  )
}
