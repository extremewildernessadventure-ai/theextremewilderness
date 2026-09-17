import Link from 'next/link'
import { DollarSign, Calendar, Users2, AlertCircle } from 'lucide-react'
import { getDb } from '@/lib/db'
import StatCard from '@/components/admin/StatCard'
import DonutChart from '@/components/admin/charts/DonutChart'
import MonthlyBarChart from '@/components/admin/charts/MonthlyBarChart'
import RadialProgressCard from '@/components/admin/charts/RadialProgressCard'
import { CHART_GOOD, CHART_WARNING, CHART_CRITICAL, CHART_ACCENT } from '@/components/admin/charts/chartColors'

export const dynamic = 'force-dynamic'

interface Kpi {
  label: string
  value: number
  href: string
  variant?: 'gold' | 'rust'
}

function OperationalTile({ kpi }: { kpi: Kpi }) {
  return (
    <Link href={kpi.href} className={`stat-card ${kpi.variant ?? ''}`}>
      <div className="stat-label">{kpi.label}</div>
      <div className="stat-num">{kpi.value}</div>
    </Link>
  )
}

// Builds a 14-entry array of the last 14 calendar days (oldest first),
// each defaulted to 0 — D1's GROUP BY query only returns rows for days
// that actually had activity, so this fills the gaps rather than letting
// the sparkline silently compress/skip missing days.
function last14Days(): string[] {
  const days: string[] = []
  const today = new Date()
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today)
    d.setUTCDate(d.getUTCDate() - i)
    days.push(d.toISOString().slice(0, 10))
  }
  return days
}

function toSparkline(days: string[], rows: { d: string; v: number }[]): { date: string; value: number }[] {
  const byDay = new Map(rows.map((r) => [r.d, r.v]))
  return days.map((d) => ({ date: d, value: byDay.get(d) ?? 0 }))
}

function pctChange(current: number, previous: number): { percent: number; direction: 'up' | 'down' } | undefined {
  if (previous === 0) return current === 0 ? undefined : { percent: 100, direction: 'up' }
  const percent = ((current - previous) / previous) * 100
  return { percent, direction: percent >= 0 ? 'up' : 'down' }
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Builds a 12-entry array of the last 12 calendar months (oldest first) as
// 'YYYY-MM' keys, same gap-filling reasoning as last14Days() above.
function last12Months(): string[] {
  const months: string[] = []
  const today = new Date()
  for (let i = 11; i >= 0; i--) {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, 1))
    months.push(`${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`)
  }
  return months
}

export default async function AdminDashboardPage() {
  const db = await getDb()
  const months = last12Months()
  const days = last14Days()

  const [
    revenueMoM,
    revenueDaily,
    bookingsMoM,
    bookingsDaily,
    leadsMoM,
    leadsDaily,
    outstanding,
    bookingStatusRows,
    revenueByMonth,
    bookingsByMonth,
    monthlyRadial,
    yearlyRadial,
    leadsFollowUp,
    upcomingDepartures,
    unpaidInvoices,
    pendingPermits,
    openPayroll,
    pendingDocuments,
    subscribers,
  ] = await Promise.all([
    // Revenue (paid, USD) — following the same currency='USD' convention
    // already used in src/app/admin/(protected)/invoices/page.tsx, since
    // invoices in other currencies aren't converted and mixing them into
    // one total would misrepresent it.
    db.prepare(`
      SELECT
        SUM(CASE WHEN currency = 'USD' AND status = 'paid' AND created_at >= date('now', 'start of month') THEN amount ELSE 0 END) as thisPeriod,
        SUM(CASE WHEN currency = 'USD' AND status = 'paid' AND created_at >= date('now', 'start of month', '-1 month') AND created_at < date('now', 'start of month') THEN amount ELSE 0 END) as prevPeriod
      FROM invoices
    `).first<{ thisPeriod: number | null; prevPeriod: number | null }>(),
    db.prepare(`
      SELECT strftime('%Y-%m-%d', created_at) as d, SUM(amount) as v
      FROM invoices WHERE currency = 'USD' AND status = 'paid' AND created_at >= date('now', '-13 days')
      GROUP BY d
    `).all<{ d: string; v: number }>(),

    // Bookings (confirmed)
    db.prepare(`
      SELECT
        SUM(CASE WHEN status = 'confirmed' AND created_at >= date('now', 'start of month') THEN 1 ELSE 0 END) as thisPeriod,
        SUM(CASE WHEN status = 'confirmed' AND created_at >= date('now', 'start of month', '-1 month') AND created_at < date('now', 'start of month') THEN 1 ELSE 0 END) as prevPeriod
      FROM bookings
    `).first<{ thisPeriod: number | null; prevPeriod: number | null }>(),
    db.prepare(`
      SELECT strftime('%Y-%m-%d', created_at) as d, COUNT(*) as v
      FROM bookings WHERE status = 'confirmed' AND created_at >= date('now', '-13 days')
      GROUP BY d
    `).all<{ d: string; v: number }>(),

    // New leads
    db.prepare(`
      SELECT
        SUM(CASE WHEN created_at >= date('now', 'start of month') THEN 1 ELSE 0 END) as thisPeriod,
        SUM(CASE WHEN created_at >= date('now', 'start of month', '-1 month') AND created_at < date('now', 'start of month') THEN 1 ELSE 0 END) as prevPeriod
      FROM leads
    `).first<{ thisPeriod: number | null; prevPeriod: number | null }>(),
    db.prepare(`
      SELECT strftime('%Y-%m-%d', created_at) as d, COUNT(*) as v
      FROM leads WHERE created_at >= date('now', '-13 days')
      GROUP BY d
    `).all<{ d: string; v: number }>(),

    // Outstanding (USD) — real remaining balance (amount - amount_paid),
    // not just the invoice's face amount, so a partially-paid invoice
    // only counts what's actually still owed.
    db.prepare(`
      SELECT SUM(CASE WHEN currency = 'USD' AND status IN ('unpaid', 'partial') THEN amount - amount_paid ELSE 0 END) as outstanding
      FROM invoices
    `).first<{ outstanding: number | null }>(),

    // Order Status donut — bookings.status, not invoice status: "order"
    // maps to the booking itself, invoices are a downstream billing
    // artifact of a booking that already went through.
    db.prepare('SELECT status, COUNT(*) as c FROM bookings GROUP BY status').all<{ status: string; c: number }>(),

    // Monthly bar chart — revenue and bookings each queried separately
    // (the two tables don't share a row grain, so no join), zipped by
    // month below.
    db.prepare(`
      SELECT strftime('%Y-%m', created_at) as m, SUM(amount) as v
      FROM invoices WHERE currency = 'USD' AND status = 'paid' AND created_at >= date('now', 'start of month', '-11 months')
      GROUP BY m
    `).all<{ m: string; v: number }>(),
    db.prepare(`
      SELECT strftime('%Y-%m', created_at) as m, COUNT(*) as v
      FROM bookings WHERE status = 'confirmed' AND created_at >= date('now', 'start of month', '-11 months')
      GROUP BY m
    `).all<{ m: string; v: number }>(),

    // Monthly radial — this month's paid revenue vs the trailing 3-month
    // average (not an arbitrary invented sales target — no target/goal
    // field exists anywhere in this schema).
    db.prepare(`
      SELECT
        SUM(CASE WHEN created_at >= date('now', 'start of month') THEN amount ELSE 0 END) as thisMonth,
        SUM(CASE WHEN created_at >= date('now', 'start of month', '-3 months') AND created_at < date('now', 'start of month') THEN amount ELSE 0 END) as trailing3
      FROM invoices WHERE currency = 'USD' AND status = 'paid'
    `).first<{ thisMonth: number | null; trailing3: number | null }>(),

    // Yearly radial — year-to-date vs the same YTD window last year (a
    // real YoY comparison, computed with SQLite's own date arithmetic
    // rather than JS-computed boundaries, consistent with every other
    // query on this page).
    db.prepare(`
      SELECT
        SUM(CASE WHEN created_at >= date('now', 'start of year') THEN amount ELSE 0 END) as thisYearYtd,
        SUM(CASE WHEN created_at >= date('now', 'start of year', '-1 year') AND created_at < date('now', '-1 year') THEN amount ELSE 0 END) as lastYearYtd
      FROM invoices WHERE currency = 'USD' AND status = 'paid'
    `).first<{ thisYearYtd: number | null; lastYearYtd: number | null }>(),

    // Existing operational tiles — unchanged queries, just moved lower on
    // the page under their own heading (see also the identical three
    // reused for the topbar's notification badge in
    // src/app/admin/(protected)/layout.tsx).
    db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new' AND created_at <= datetime('now', '-2 days')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM departures WHERE cancelled = 0 AND start_date >= date('now')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM invoices WHERE status IN ('unpaid', 'partial')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM permits WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM payroll_periods WHERE status = 'open'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM documents WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = 'subscribed'").first<{ count: number }>(),
  ])

  const revenueThisMonth = revenueMoM?.thisPeriod ?? 0
  const revenueTrend = pctChange(revenueThisMonth, revenueMoM?.prevPeriod ?? 0)
  const bookingsThisMonth = bookingsMoM?.thisPeriod ?? 0
  const bookingsTrend = pctChange(bookingsThisMonth, bookingsMoM?.prevPeriod ?? 0)
  const leadsThisMonth = leadsMoM?.thisPeriod ?? 0
  const leadsTrend = pctChange(leadsThisMonth, leadsMoM?.prevPeriod ?? 0)
  const outstandingTotal = outstanding?.outstanding ?? 0

  const bookingStatusColors: Record<string, string> = { confirmed: CHART_GOOD, pending: CHART_WARNING, cancelled: CHART_CRITICAL }
  const bookingStatusLabels: Record<string, string> = { confirmed: 'Confirmed', pending: 'Pending', cancelled: 'Cancelled' }
  const totalBookings = bookingStatusRows.results.reduce((sum, r) => sum + r.c, 0)
  const donutData = bookingStatusRows.results
    .map((r) => ({ label: bookingStatusLabels[r.status] ?? r.status, value: r.c, color: bookingStatusColors[r.status] ?? CHART_ACCENT }))
    .sort((a, b) => b.value - a.value)

  const revenueByMonthMap = new Map(revenueByMonth.results.map((r) => [r.m, r.v]))
  const bookingsByMonthMap = new Map(bookingsByMonth.results.map((r) => [r.m, r.v]))
  const monthlyChartData = months.map((m) => ({
    month: MONTH_LABELS[Number(m.slice(5, 7)) - 1],
    revenue: revenueByMonthMap.get(m) ?? 0,
    bookings: bookingsByMonthMap.get(m) ?? 0,
  }))

  const trailingAvg = (monthlyRadial?.trailing3 ?? 0) / 3
  const monthlyPercent = trailingAvg > 0 ? ((monthlyRadial?.thisMonth ?? 0) / trailingAvg) * 100 : 0
  const yearlyPercent = (yearlyRadial?.lastYearYtd ?? 0) > 0 ? ((yearlyRadial?.thisYearYtd ?? 0) / (yearlyRadial?.lastYearYtd ?? 1)) * 100 : 0

  const usd = (n: number) => `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`

  const operationalKpis: Kpi[] = [
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

      {/* Business-level greeting, not a fake personal name — there's no
          per-admin-user identity in this app (a single shared password,
          no user accounts table), so a "Congratulations Jhon" style
          greeting would have to invent a name that isn't real. */}
      <div className="panel" style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h2 style={{ marginBottom: 6 }}>Welcome back 👋</h2>
          <p style={{ color: 'var(--grey)', fontSize: 13.5 }}>
            {bookingsThisMonth} confirmed booking{bookingsThisMonth === 1 ? '' : 's'} and {usd(revenueThisMonth)} in paid revenue so far this month.
          </p>
        </div>
        <Link href="/admin/reports/profitability" className="btn-primary">View Details</Link>
      </div>

      <div className="stats-row">
        <StatCard
          icon={DollarSign}
          label="Revenue This Month (USD)"
          value={usd(revenueThisMonth)}
          trendPercent={revenueTrend?.percent}
          trendDirection={revenueTrend?.direction}
          sparklineData={toSparkline(days, revenueDaily.results)}
          accentColor={CHART_GOOD}
        />
        <StatCard
          icon={Calendar}
          label="Bookings This Month"
          value={String(bookingsThisMonth)}
          trendPercent={bookingsTrend?.percent}
          trendDirection={bookingsTrend?.direction}
          sparklineData={toSparkline(days, bookingsDaily.results)}
          accentColor={CHART_WARNING}
        />
        <StatCard
          icon={Users2}
          label="New Leads This Month"
          value={String(leadsThisMonth)}
          trendPercent={leadsTrend?.percent}
          trendDirection={leadsTrend?.direction}
          sparklineData={toSparkline(days, leadsDaily.results)}
          accentColor={CHART_ACCENT}
        />
        <StatCard
          icon={AlertCircle}
          label="Outstanding (USD)"
          value={usd(outstandingTotal)}
          accentColor={CHART_CRITICAL}
        />
      </div>

      <div className="dash-row-a">
        <div className="panel">
          <h2 style={{ marginBottom: 14 }}>Order Status</h2>
          <DonutChart data={donutData} centerLabel="Total Bookings" centerValue={totalBookings} />
        </div>
        <div className="panel">
          <h2 style={{ marginBottom: 14 }}>Sales &amp; Bookings</h2>
          <MonthlyBarChart data={monthlyChartData} />
        </div>
      </div>

      <div className="dash-row-b">
        <div className="panel">
          <RadialProgressCard
            label="Monthly"
            percent={monthlyPercent}
            headline={usd(monthlyRadial?.thisMonth ?? 0)}
            secondary={`vs ${usd(Math.round(trailingAvg))} trailing 3-month average`}
            color={CHART_GOOD}
          />
        </div>
        <div className="panel">
          <RadialProgressCard
            label="Yearly"
            percent={yearlyPercent}
            headline={usd(yearlyRadial?.thisYearYtd ?? 0)}
            secondary={`vs ${usd(yearlyRadial?.lastYearYtd ?? 0)} same period last year`}
            color={CHART_WARNING}
          />
        </div>
      </div>

      <h2 style={{ marginTop: 32, marginBottom: 14 }}>Operational Alerts</h2>
      <div className="stats-row" style={{ marginBottom: 0 }}>
        {operationalKpis.map((kpi) => <OperationalTile key={kpi.label} kpi={kpi} />)}
      </div>
    </div>
  )
}
