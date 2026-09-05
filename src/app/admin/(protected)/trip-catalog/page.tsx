import { getDb } from '@/lib/db'
import type { TripCatalogEntry } from '@/lib/tripCatalog'
import AddTripCatalogEntry from './AddTripCatalogEntry'
import TripCatalogRow from './TripCatalogRow'

export const dynamic = 'force-dynamic'

export default async function TripCatalogPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM trip_catalog ORDER BY archived ASC, name ASC').all<TripCatalogEntry>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Trip Catalog</h1>
          <p>Names staff can pick from when creating a Quote or Departure — almost every real booking is custom, so this stays a short, curated list rather than the full public-marketing package catalog.</p>
        </div>
      </div>

      <AddTripCatalogEntry />

      <div className="table-card mt-6">
        <table>
          <thead>
            <tr>
              <th>Trip Name</th>
              <th>Notes</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr><td colSpan={4} className="text-center text-gray-400 py-8">No trip names registered yet — add one above.</td></tr>
            ) : (
              results.map((entry) => <TripCatalogRow key={entry.id} entry={entry} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
