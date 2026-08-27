import { Suspense } from 'react'
import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import NewInvoiceForm from './NewInvoiceForm'

export const dynamic = 'force-dynamic'

export default async function NewInvoicePage() {
  const db = await getDb()
  const { results: departures } = await db.prepare(
    "SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC"
  ).all<Departure>()

  return (
    <Suspense fallback={null}>
      <NewInvoiceForm departures={departures} />
    </Suspense>
  )
}
