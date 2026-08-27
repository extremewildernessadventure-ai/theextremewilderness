import { getDb } from '@/lib/db'
import type { Refund } from '@/lib/finance'
import Link from 'next/link'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import RefundStatusSelect from './RefundStatusSelect'

export const dynamic = 'force-dynamic'

type RefundRow = Refund & { client_name: string | null; booking_client: string | null }

const columns: AdminTableColumn<RefundRow>[] = [
  { header: 'Client', className: 'text-gray-700 font-medium', render: (r) => r.client_name ?? r.booking_client ?? '—' },
  {
    header: 'Booking',
    render: (r) => r.booking_id ? <Link href={`/admin/bookings/${r.booking_id}`} className="text-brand hover:underline">#{r.booking_id}</Link> : '—',
  },
  { header: 'Reason', className: 'text-gray-700 max-w-[280px] truncate', render: (r) => r.reason ?? '—' },
  { header: 'Amount', className: 'mono', render: (r) => `${r.currency} ${r.amount.toLocaleString()}` },
  { header: 'Status', render: (r) => <RefundStatusSelect refundId={r.id} currentStatus={r.status} compact /> },
]

export default async function RefundsListPage() {
  const db = await getDb()
  const { results } = await db.prepare(`
    SELECT refunds.*, invoices.client_name AS client_name, bookings.client_name AS booking_client
    FROM refunds
    LEFT JOIN invoices ON invoices.id = refunds.invoice_id
    LEFT JOIN bookings ON bookings.id = refunds.booking_id
    ORDER BY refunds.created_at DESC
  `).all<RefundRow>()

  // Summed/averaged in USD only — refunds in other currencies aren't
  // converted, so mixing them into one total would misrepresent it.
  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN status = 'requested' THEN 1 ELSE 0 END) as pending,
      SUM(CASE WHEN status = 'processed' AND processed_at >= datetime('now', '-30 days') THEN 1 ELSE 0 END) as processed30d,
      SUM(CASE WHEN currency = 'USD' AND status = 'processed' THEN amount ELSE 0 END) as totalRefundedUsd,
      AVG(CASE WHEN currency = 'USD' AND status = 'processed' AND processed_at IS NOT NULL THEN julianday(processed_at) - julianday(created_at) ELSE NULL END) as avgProcessingDays
    FROM refunds
  `).first<{ pending: number; processed30d: number; totalRefundedUsd: number; avgProcessingDays: number | null }>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Refunds</h1>
        </div>
        <Link href="/admin/refunds/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Refund
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card gold">
          <div className="stat-label">Pending</div>
          <div className="stat-num">{statsRow?.pending ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Processed (30d)</div>
          <div className="stat-num">{statsRow?.processed30d ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Refunded</div>
          <div className="stat-num">${(statsRow?.totalRefundedUsd ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg. Processing Time</div>
          <div className="stat-num">{statsRow?.avgProcessingDays != null ? `${statsRow.avgProcessingDays.toFixed(1)}d` : '—'}</div>
        </div>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(r) => r.id} emptyMessage="No refunds yet." />
    </div>
  )
}
