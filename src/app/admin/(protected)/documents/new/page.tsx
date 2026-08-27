import { getDb } from '@/lib/db'
import type { Client } from '@/lib/clients'
import NewDocumentForm from './NewDocumentForm'

export const dynamic = 'force-dynamic'

export default async function NewDocumentPage() {
  const db = await getDb()
  const { results: clients } = await db.prepare('SELECT * FROM clients ORDER BY name ASC').all<Client>()

  return <NewDocumentForm clients={clients} />
}
