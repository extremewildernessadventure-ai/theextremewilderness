import { getDb } from '@/lib/db'
import type { TripCatalogEntry } from '@/lib/tripCatalog'
import NewDepartureForm from './NewDepartureForm'

export const dynamic = 'force-dynamic'

export default async function NewDeparturePage() {
  const db = await getDb()
  const { results: tripCatalog } = await db.prepare(
    'SELECT * FROM trip_catalog WHERE archived = 0 ORDER BY name ASC'
  ).all<TripCatalogEntry>()

  return <NewDepartureForm tripCatalog={tripCatalog} />
}
