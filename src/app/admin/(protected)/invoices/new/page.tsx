import { Suspense } from 'react'
import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import type { Client } from '@/lib/clients'
import NewInvoiceForm from './NewInvoiceForm'

export const dynamic = 'force-dynamic'

export default async function NewInvoicePage() {
  const db = await getDb()
  const [{ results: departures }, { results: clients }] = await Promise.all([
    db.prepare("SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC").all<Departure>(),
    db.prepare('SELECT * FROM clients ORDER BY name ASC').all<Client>(),
  ])

  return (
    <Suspense fallback={null}>
      <NewInvoiceForm departures={departures} clients={clients} />
    </Suspense>
  )
}
