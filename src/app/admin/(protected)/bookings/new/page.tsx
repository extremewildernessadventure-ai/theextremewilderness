import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import type { Client } from '@/lib/clients'
import NewBookingForm from './NewBookingForm'

export const dynamic = 'force-dynamic'

export default async function NewBookingPage() {
  const db = await getDb()
  const [{ results: departures }, { results: clients }] = await Promise.all([
    db.prepare("SELECT * FROM departures WHERE cancelled = 0 ORDER BY start_date DESC").all<Departure>(),
    db.prepare('SELECT * FROM clients ORDER BY name ASC').all<Client>(),
  ])

  return <NewBookingForm departures={departures} clients={clients} />
}
