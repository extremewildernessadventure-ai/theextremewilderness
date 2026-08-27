import { getDb } from '@/lib/db'
import type { Client } from '@/lib/clients'
import type { Booking } from '@/lib/bookings'
import NewReviewForm from './NewReviewForm'

export const dynamic = 'force-dynamic'

export default async function NewReviewPage() {
  const db = await getDb()
  const [{ results: clients }, { results: bookings }] = await Promise.all([
    db.prepare('SELECT * FROM clients ORDER BY name ASC').all<Client>(),
    db.prepare("SELECT * FROM bookings WHERE status != 'cancelled' ORDER BY created_at DESC").all<Booking>(),
  ])

  return <NewReviewForm clients={clients} bookings={bookings} />
}
