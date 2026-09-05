import Link from 'next/link'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

interface Kpi {
  label: string
  value: number
  href: string
  variant?: 'gold' | 'rust'
}

function StatTile({ kpi }: { kpi: Kpi }) {
  return (
    <Link href={kpi.href} className={`stat-card ${kpi.variant ?? ''}`}>
      <div className="stat-label">{kpi.label}</div>
      <div className="stat-num">{kpi.value}</div>
    </Link>
  )
}

export default async function AdminDashboardPage() {
  const db = await getDb()

  const [leadsFollowUp, upcomingDepartures, unpaidInvoices, pendingPermits, openPayroll, pendingDocuments, subscribers] = await Promise.all([
    db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new' AND created_at <= datetime('now', '-2 days')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM departures WHERE cancelled = 0 AND start_date >= date('now')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM invoices WHERE status IN ('unpaid', 'partial')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM permits WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM payroll_periods WHERE status = 'open'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM documents WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = 'subscribed'").first<{ count: number }>(),
  ])

  const kpis: Kpi[] = [
    { label: 'Leads Needing Follow-Up', value: leadsFollowUp?.count ?? 0, href: '/admin/leads', variant: 'rust' },
    { label: 'Upcoming Departures', value: upcomingDepartures?.count ?? 0, href: '/admin/departures' },
    { label: 'Unpaid Invoices', value: unpaidInvoices?.count ?? 0, href: '/admin/invoices', variant: 'gold' },
    { label: 'Pending Permits', value: pendingPermits?.count ?? 0, href: '/admin/permits', variant: 'gold' },
    { label: 'Open Payroll Periods', value: openPayroll?.count ?? 0, href: '/admin/payroll' },
    { label: 'Pending Documents', value: pendingDocuments?.count ?? 0, href: '/admin/documents', variant: 'gold' },
    { label: 'Newsletter Subscribers', value: subscribers?.count ?? 0, href: '/admin/newsletter' },
  ]

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className="stats-row" style={{ marginBottom: 0 }}>
        {kpis.map((kpi) => <StatTile key={kpi.label} kpi={kpi} />)}
      </div>
    </div>
  )
}
