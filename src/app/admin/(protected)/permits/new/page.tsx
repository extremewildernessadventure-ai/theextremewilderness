import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import NewPermitForm from './NewPermitForm'

export const dynamic = 'force-dynamic'

export default async function NewPermitPage() {
  const db = await getDb()
  const { results: departures } = await db.prepare(
    "SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC"
  ).all<Departure>()

  return <NewPermitForm departures={departures} />
}
