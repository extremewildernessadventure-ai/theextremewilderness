import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'
import { INVOICE_STATUS_PILL_CLASS, computeInstallments } from '@/lib/invoices'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

// For a plain (un-split) invoice this is exactly today's check: overdue
// once due_date has passed and it isn't fully paid. For a deposit-split
// invoice, each leg is checked independently against its own due date and
// its own paid state -- a fully-paid deposit whose due date has passed
// doesn't count as overdue just because the invoice as a whole is still
// 'partial' waiting on the (not-yet-due) balance.
function isOverdue(inv: Invoice): boolean {
  if (inv.status !== 'unpaid' && inv.status !== 'partial') return false
  const today = new Date().toISOString().slice(0, 10)
  const installments = computeInstallments(inv)
  if (installments) {
    const depositOverdue = installments.deposit.status !== 'paid' && !!installments.deposit.dueDate && installments.deposit.dueDate < today
    const balanceOverdue = installments.balance.status !== 'paid' && !!installments.balance.dueDate && installments.balance.dueDate < today
    return depositOverdue || balanceOverdue
  }
  return !!inv.due_date && inv.due_date < today
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
  { header: 'Amount', className: 'mono', render: (inv) => `${inv.currency} ${inv.amount.toLocaleString()}` },
  {
    header: 'Due Date',
    className: 'dates-cell',
    render: (inv) => {
      const installments = computeInstallments(inv)
      if (!installments) return inv.due_date ?? '—'
      return (
        <span className="text-xs leading-tight block">
          <span className="block">Deposit: {installments.deposit.dueDate ?? '—'}</span>
          <span className="block" style={{ color: 'var(--grey)' }}>Balance: {installments.balance.dueDate ?? '—'}</span>
        </span>
      )
    },
  },
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
