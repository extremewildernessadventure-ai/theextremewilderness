import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

interface SourceRow {
  source: string
  total: number
  converted: number
}

export default async function LeadSourcesReportPage() {
  const db = await getDb()
  const { results } = await db.prepare(`
    SELECT
      COALESCE(NULLIF(utm_source, ''), NULLIF(referrer, ''), 'Direct / Unknown') as source,
      COUNT(*) as total,
      SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) as converted
    FROM leads
    GROUP BY source
    ORDER BY total DESC
  `).all<SourceRow>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Lead Sources</h1>
          <p>
            Grouped by UTM source, falling back to referrer, falling back to &quot;Direct / Unknown&quot;. UTM/referrer
            capture is not yet wired into the public lead-capture forms — expect most leads to show as Direct/Unknown
            until that&apos;s built.
          </p>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="empty-state">No leads yet.</div>
      ) : (
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th style={{ textAlign: 'right' }}>Total Leads</th>
                <th style={{ textAlign: 'right' }}>Converted</th>
                <th style={{ textAlign: 'right' }}>Conversion Rate</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.source}>
                  <td className="text-brand font-medium">{r.source}</td>
                  <td className="mono" style={{ textAlign: 'right' }}>{r.total}</td>
                  <td className="mono" style={{ textAlign: 'right' }}>{r.converted}</td>
                  <td className="mono" style={{ textAlign: 'right' }}>
                    {r.total > 0 ? `${((r.converted / r.total) * 100).toFixed(1)}%` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
