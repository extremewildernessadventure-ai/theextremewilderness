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
      <h1 className="text-2xl font-bold text-brand mb-1">Lead Sources</h1>
      <p className="text-sm text-gray-500 mb-6">
        Grouped by UTM source, falling back to referrer, falling back to &quot;Direct / Unknown&quot;. UTM/referrer
        capture is not yet wired into the public lead-capture forms — expect most leads to show as Direct/Unknown
        until that&apos;s built.
      </p>

      {results.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-gray-500 text-sm">
          No leads yet.
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Source</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Total Leads</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Converted</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Conversion Rate</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.source} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-3 text-brand font-medium">{r.source}</td>
                  <td className="px-5 py-3 text-end text-gray-700">{r.total}</td>
                  <td className="px-5 py-3 text-end text-gray-700">{r.converted}</td>
                  <td className="px-5 py-3 text-end text-gray-700">
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
