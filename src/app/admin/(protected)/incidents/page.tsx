import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { IncidentReport, IncidentSeverity, IncidentType } from '@/lib/compliance'
import { INCIDENT_SEVERITIES } from '@/lib/compliance'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const TYPE_LABELS: Record<IncidentType, string> = {
  medical: 'Medical', vehicle: 'Vehicle', weather: 'Weather', security: 'Security', other: 'Other',
}

const SEVERITY_STYLES: Record<IncidentSeverity, string> = {
  minor: 'bg-gray-100 text-gray-600',
  moderate: 'bg-amber-100 text-amber-700',
  serious: 'bg-orange-100 text-orange-700',
  critical: 'bg-red-600 text-white',
}

const columns: AdminTableColumn<IncidentReport>[] = [
  { header: 'Type', className: 'text-gray-700 font-medium', render: (i) => TYPE_LABELS[i.type] },
  {
    header: 'Severity',
    render: (i) => (
      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${SEVERITY_STYLES[i.severity]}`}>
        {i.severity}
      </span>
    ),
  },
  { header: 'Description', className: 'text-gray-700 max-w-[320px] truncate', render: (i) => i.description },
  { header: 'Client', className: 'text-gray-500', render: (i) => i.client_name ?? '—' },
  { header: 'Occurred', className: 'text-gray-500', render: (i) => i.occurred_at ?? '—' },
]

type Props = { searchParams: Promise<{ severity?: string }> }

export default async function IncidentsListPage({ searchParams }: Props) {
  const { severity } = await searchParams
  const db = await getDb()

  const where = severity && (INCIDENT_SEVERITIES as string[]).includes(severity) ? 'WHERE severity = ?' : ''
  const { results } = where
    ? await db.prepare(`SELECT * FROM incident_reports ${where} ORDER BY created_at DESC`).bind(severity).all<IncidentReport>()
    : await db.prepare('SELECT * FROM incident_reports ORDER BY created_at DESC').all<IncidentReport>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Incidents</h1>
        <Link
          href="/admin/incidents/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Incident
        </Link>
      </div>

      <form method="get" className="flex items-center gap-2 mb-4">
        <select
          name="severity"
          defaultValue={severity ?? ''}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
        >
          <option value="">All severities</option>
          {INCIDENT_SEVERITIES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
        <button type="submit" className="px-4 py-2 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors">
          Filter
        </button>
      </form>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(i) => i.id}
        emptyMessage={`No incidents ${severity ? 'match this filter' : 'recorded'}.`}
      />
    </div>
  )
}
