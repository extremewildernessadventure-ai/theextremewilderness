import Link from 'next/link'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

interface Kpi {
  label: string
  value: number
  href: string
  accent: string
}

function StatTile({ kpi }: { kpi: Kpi }) {
  return (
    <Link
      href={kpi.href}
      className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand/30 hover:shadow-sm transition-all"
    >
      <p className={`text-2xl font-bold ${kpi.accent}`}>{kpi.value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{kpi.label}</p>
    </Link>
  )
}

export default async function AdminDashboardPage() {
  const db = await getDb()

  const [leadsFollowUp, upcomingDepartures, unpaidInvoices, pendingPermits, openPayroll, pendingDocuments, subscribers] = await Promise.all([
    db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new' AND created_at <= datetime('now', '-2 days')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM departures WHERE status IN ('open', 'few_left') AND start_date >= date('now')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM invoices WHERE status IN ('unpaid', 'partial')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM permits WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM payroll_periods WHERE status = 'open'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM documents WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = 'subscribed'").first<{ count: number }>(),
  ])

  const kpis: Kpi[] = [
    { label: 'Leads Needing Follow-Up', value: leadsFollowUp?.count ?? 0, href: '/admin/leads', accent: 'text-red-600' },
    { label: 'Upcoming Departures', value: upcomingDepartures?.count ?? 0, href: '/admin/departures', accent: 'text-brand' },
    { label: 'Unpaid Invoices', value: unpaidInvoices?.count ?? 0, href: '/admin/invoices', accent: 'text-amber-600' },
    { label: 'Pending Permits', value: pendingPermits?.count ?? 0, href: '/admin/permits', accent: 'text-amber-600' },
    { label: 'Open Payroll Periods', value: openPayroll?.count ?? 0, href: '/admin/payroll', accent: 'text-blue-600' },
    { label: 'Pending Documents', value: pendingDocuments?.count ?? 0, href: '/admin/documents', accent: 'text-amber-600' },
    { label: 'Newsletter Subscribers', value: subscribers?.count ?? 0, href: '/admin/newsletter', accent: 'text-green-600' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => <StatTile key={kpi.label} kpi={kpi} />)}
      </div>
    </div>
  )
}
