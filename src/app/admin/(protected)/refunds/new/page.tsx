import { getDb, type Invoice } from '@/lib/db'
import type { Booking } from '@/lib/bookings'
import NewRefundForm from './NewRefundForm'

export const dynamic = 'force-dynamic'

export default async function NewRefundPage() {
  const db = await getDb()
  const [{ results: invoices }, { results: bookings }] = await Promise.all([
    db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all<Invoice>(),
    db.prepare("SELECT * FROM bookings WHERE status != 'cancelled' ORDER BY created_at DESC").all<Booking>(),
  ])

  return <NewRefundForm invoices={invoices} bookings={bookings} />
}
