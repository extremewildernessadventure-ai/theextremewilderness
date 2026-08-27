import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { IncidentReport, IncidentSeverity, IncidentType } from '@/lib/compliance'
import { INCIDENT_SEVERITIES } from '@/lib/compliance'
import { packages } from '@/data/packages'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const TYPE_LABELS: Record<IncidentType, string> = {
  medical: 'Medical', vehicle: 'Vehicle', weather: 'Weather', security: 'Security', other: 'Other',
}

const SEVERITY_PILL_CLASS: Record<IncidentSeverity, string> = {
  minor: 'full',
  moderate: 'few',
  serious: 'cancelled',
  critical: 'cancelled',
}

type IncidentRow = IncidentReport & { package_slug: string | null }

// No dedicated status field on incidents — "resolved" is inferred from
// whether an action_taken note has been logged, since that's the only
// signal this schema already captures.
function isResolved(i: IncidentReport): boolean {
  return !!i.action_taken?.trim()
}

function packageName(slug: string | null): string {
  if (!slug) return '—'
  return packages.find((p) => p.slug === slug)?.name ?? slug
}

const columns: AdminTableColumn<IncidentRow>[] = [
  { header: 'Date', className: 'dates-cell', render: (i) => i.occurred_at ?? '—' },
  { header: 'Trip', className: 'text-gray-700', render: (i) => packageName(i.package_slug) },
  { header: 'Type', className: 'text-gray-700 font-medium', render: (i) => TYPE_LABELS[i.type] },
  { header: 'Severity', render: (i) => <span className={`pill ${SEVERITY_PILL_CLASS[i.severity]}`}><i />{i.severity}</span> },
  {
    header: 'Status',
    render: (i) => <span className={`pill ${isResolved(i) ? 'open' : 'few'}`}><i />{isResolved(i) ? 'Resolved' : 'Open'}</span>,
  },
  { header: 'Logged By', className: 'text-gray-500', render: (i) => i.reported_by ?? '—' },
]

type Props = { searchParams: Promise<{ severity?: string }> }

export default async function IncidentsListPage({ searchParams }: Props) {
  const { severity } = await searchParams
  const db = await getDb()

  const where = severity && (INCIDENT_SEVERITIES as string[]).includes(severity) ? 'WHERE severity = ?' : ''
  const query = `
    SELECT incident_reports.*, departures.package_slug AS package_slug
    FROM incident_reports
    LEFT JOIN departures ON departures.id = incident_reports.departure_id
    ${where}
    ORDER BY incident_reports.created_at DESC
  `
  const { results } = where
    ? await db.prepare(query).bind(severity).all<IncidentRow>()
    : await db.prepare(query).all<IncidentRow>()

  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN created_at >= datetime('now', '-30 days') THEN 1 ELSE 0 END) as total30d,
      SUM(CASE WHEN action_taken IS NULL OR trim(action_taken) = '' THEN 1 ELSE 0 END) as open,
      SUM(CASE WHEN amref_evacuation = 1 THEN 1 ELSE 0 END) as medEvac,
      SUM(CASE WHEN action_taken IS NOT NULL AND trim(action_taken) != '' THEN 1 ELSE 0 END) as resolved
    FROM incident_reports
  `).first<{ total30d: number; open: number; medEvac: number; resolved: number }>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Incidents</h1>
        </div>
        <Link href="/admin/incidents/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Incident
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Incidents (30d)</div>
          <div className="stat-num">{statsRow?.total30d ?? 0}</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Open / Unresolved</div>
          <div className="stat-num">{statsRow?.open ?? 0}</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Medical Evacuations</div>
          <div className="stat-num">{statsRow?.medEvac ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Resolved</div>
          <div className="stat-num">{statsRow?.resolved ?? 0}</div>
        </div>
      </div>

      <div className="filter-bar">
        <form method="get" className="flex items-center gap-2">
          <div className="select-field">
            <select name="severity" defaultValue={severity ?? ''}>
              <option value="">All severities</option>
              {INCIDENT_SEVERITIES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-outline">Filter</button>
        </form>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(i) => i.id}
        emptyMessage={`No incidents ${severity ? 'match this filter' : 'recorded'}.`}
        rowClassName={(i) => (!isResolved(i) ? 'warn' : undefined)}
      />
    </div>
  )
}
