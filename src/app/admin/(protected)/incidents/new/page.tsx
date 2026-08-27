import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import type { Guide } from '@/lib/ops'
import NewIncidentForm from './NewIncidentForm'

export const dynamic = 'force-dynamic'

export default async function NewIncidentPage() {
  const db = await getDb()
  const [{ results: departures }, { results: guides }] = await Promise.all([
    db.prepare("SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC").all<Departure>(),
    db.prepare('SELECT * FROM guides WHERE active = 1 ORDER BY name ASC').all<Guide>(),
  ])

  return <NewIncidentForm departures={departures} guides={guides} />
}
