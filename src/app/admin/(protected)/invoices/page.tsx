import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'
import { INVOICE_STATUS_PILL_CLASS } from '@/lib/invoices'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

function isOverdue(inv: Invoice): boolean {
  return (inv.status === 'unpaid' || inv.status === 'partial') && !!inv.due_date && inv.due_date < new Date().toISOString().slice(0, 10)
}

const columns: AdminTableColumn<Invoice>[] = [
  {
    header: 'Invoice No.',
    className: 'mono',
    render: (inv) => (
      <Link href={`/admin/invoices/${inv.id}`} className="text-brand font-medium hover:underline">
        {inv.invoice_number}
      </Link>
    ),
  },
  { header: 'Client', className: 'text-gray-700', render: (inv) => inv.client_name },
  {
    header: 'Amount',
    className: 'mono',
    render: (inv) => (
      <>
        {inv.currency} {inv.amount.toLocaleString()}
        {inv.deposit_percent != null && <span className="text-xs ms-1.5" style={{ color: 'var(--grey)' }}>(deposit, {inv.deposit_percent}%)</span>}
      </>
    ),
  },
  { header: 'Due Date', className: 'dates-cell', render: (inv) => inv.due_date ?? '—' },
  { header: 'Status', render: (inv) => <span className={`pill ${INVOICE_STATUS_PILL_CLASS[inv.status]}`}><i />{inv.status}</span> },
]

export default async function InvoicesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all<Invoice>()

  // Summed in USD only — invoices in other currencies aren't converted, so
  // mixing them into one total would misrepresent the figure.
  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN currency = 'USD' AND created_at >= datetime('now', '-30 days') THEN amount ELSE 0 END) as totalInvoiced30d,
      SUM(CASE WHEN currency = 'USD' AND status = 'paid' THEN amount ELSE 0 END) as paid,
      SUM(CASE WHEN currency = 'USD' AND status IN ('unpaid', 'partial') THEN amount ELSE 0 END) as outstanding
    FROM invoices
  `).first<{ totalInvoiced30d: number; paid: number; outstanding: number }>()

  const overdueCount = results.filter(isOverdue).length

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Invoices</h1>
        </div>
        <Link href="/admin/invoices/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Invoice
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Invoiced (30d)</div>
          <div className="stat-num">${(statsRow?.totalInvoiced30d ?? 0).toLocaleString()}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Paid</div>
          <div className="stat-num">${(statsRow?.paid ?? 0).toLocaleString()}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Outstanding</div>
          <div className="stat-num">${(statsRow?.outstanding ?? 0).toLocaleString()}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Overdue</div>
          <div className="stat-num">{overdueCount}</div>
        </div>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(inv) => inv.id}
        emptyMessage="No invoices yet."
        rowClassName={(inv) => (isOverdue(inv) ? 'warn' : undefined)}
      />
    </div>
  )
}
