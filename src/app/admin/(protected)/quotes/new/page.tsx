import { Suspense } from 'react'
import { getDb } from '@/lib/db'
import type { TripCatalogEntry } from '@/lib/tripCatalog'
import NewQuoteForm from './NewQuoteForm'

export const dynamic = 'force-dynamic'

export default async function NewQuotePage() {
  const db = await getDb()
  const { results: tripCatalog } = await db.prepare(
    'SELECT * FROM trip_catalog WHERE archived = 0 ORDER BY name ASC'
  ).all<TripCatalogEntry>()

  return (
    <Suspense fallback={null}>
      <NewQuoteForm tripCatalog={tripCatalog} />
    </Suspense>
  )
}
