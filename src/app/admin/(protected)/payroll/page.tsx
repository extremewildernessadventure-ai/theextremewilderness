import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { PayrollPeriod } from '@/lib/hr'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import PayrollPeriodStatusSelect from './PayrollPeriodStatusSelect'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<PayrollPeriod>[] = [
  {
    header: 'Period',
    className: 'dates-cell',
    render: (p) => (
      <Link href={`/admin/payroll/${p.id}`} className="text-brand font-medium hover:underline">
        {p.period_start} → {p.period_end}
      </Link>
    ),
  },
  { header: 'Status', render: (p) => <PayrollPeriodStatusSelect periodId={p.id} currentStatus={p.status} compact /> },
]

export default async function PayrollListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM payroll_periods ORDER BY period_start DESC').all<PayrollPeriod>()

  // "Current" period = the most recently started one — payslip stats below
  // are scoped to it, since payroll figures don't mean much aggregated
  // across periods that may span very different pay cycles.
  const currentPeriod = results[0] ?? null

  const [payslipStats, nextPeriod] = await Promise.all([
    currentPeriod
      ? db.prepare(`
          SELECT
            SUM(CASE WHEN currency = 'USD' THEN net_amount ELSE 0 END) as totalPayrollUsd,
            COUNT(DISTINCT CASE WHEN status = 'paid' THEN staff_member_id END) as staffPaid,
            SUM(CASE WHEN status IN ('draft', 'approved') THEN 1 ELSE 0 END) as pending
          FROM payslips WHERE period_id = ?
        `).bind(currentPeriod.id).first<{ totalPayrollUsd: number; staffPaid: number; pending: number }>()
      : Promise.resolve(null),
    db.prepare(`SELECT * FROM payroll_periods WHERE status = 'open' AND period_end >= date('now') ORDER BY period_end ASC LIMIT 1`).first<PayrollPeriod>(),
  ])

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Payroll</h1>
        </div>
        <Link href="/admin/payroll/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Period
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Payroll</div>
          <div className="stat-num">${(payslipStats?.totalPayrollUsd ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
          <div className="stat-sub">Current period · USD only</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Staff Paid</div>
          <div className="stat-num">{payslipStats?.staffPaid ?? 0}</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Pending</div>
          <div className="stat-num">{payslipStats?.pending ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Next Pay Date</div>
          <div className="stat-num" style={{ fontSize: 20 }}>{nextPeriod?.period_end ?? '—'}</div>
        </div>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(p) => p.id} emptyMessage="No payroll periods yet." />
    </div>
  )
}
