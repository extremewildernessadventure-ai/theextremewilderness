import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'
import type { Client } from '@/lib/clients'
import type { Lead } from '@/lib/leads'
import type { Booking } from '@/lib/bookings'
import type { ClientDocument } from '@/lib/documents'
import type { NewsletterSubscriber } from '@/lib/newsletter'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import DeleteButton from '@/components/admin/DeleteButton'
import ClientEditForm from './ClientEditForm'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

function LinkedSection({ title, addHref, addLabel, children, empty }: {
  title: string
  addHref?: string
  addLabel?: string
  children: React.ReactNode
  empty: boolean
}) {
  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-3">
        <h2>{title}</h2>
        {addHref && <Link href={addHref} className="text-xs font-semibold text-brand hover:underline">{addLabel}</Link>}
      </div>
      {empty ? <p className="text-sm text-gray-400">None linked yet.</p> : children}
    </div>
  )
}

export default async function ClientDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const client = await db.prepare('SELECT * FROM clients WHERE id = ?').bind(id).first<Client>()
  if (!client) notFound()

  const [{ results: leads }, { results: bookings }, { results: invoices }, { results: documents }, { results: subscriptions }] = await Promise.all([
    db.prepare('SELECT * FROM leads WHERE client_id = ? ORDER BY created_at DESC').bind(id).all<Lead>(),
    db.prepare('SELECT * FROM bookings WHERE client_id = ? ORDER BY created_at DESC').bind(id).all<Booking>(),
    db.prepare('SELECT * FROM invoices WHERE client_id = ? ORDER BY created_at DESC').bind(id).all<Invoice>(),
    db.prepare('SELECT * FROM documents WHERE client_id = ? ORDER BY uploaded_at DESC').bind(id).all<ClientDocument>(),
    db.prepare('SELECT * FROM newsletter_subscribers WHERE client_id = ? ORDER BY created_at DESC').bind(id).all<NewsletterSubscriber>(),
  ])

  return (
    <DetailTwoColumn
      backHref="/admin/clients"
      backLabel="Back to Clients"
      title={client.name}
      main={
        <>
          <LinkedSection title="Leads" empty={leads.length === 0}>
            <ul className="space-y-1.5">
              {leads.map((l) => (
                <li key={l.id}>
                  <Link href={`/admin/leads/${l.id}`} className="text-sm text-brand hover:underline">{l.subject || l.email}</Link>
                </li>
              ))}
            </ul>
          </LinkedSection>

          <LinkedSection title="Bookings" empty={bookings.length === 0}>
            <ul className="space-y-1.5">
              {bookings.map((b) => (
                <li key={b.id}>
                  <Link href={`/admin/bookings/${b.id}`} className="text-sm text-brand hover:underline">{b.client_name} — {b.guests_count} guests</Link>
                </li>
              ))}
            </ul>
          </LinkedSection>

          <LinkedSection title="Invoices" empty={invoices.length === 0}>
            <ul className="space-y-1.5">
              {invoices.map((inv) => (
                <li key={inv.id}>
                  <Link href={`/admin/invoices/${inv.id}`} className="text-sm text-brand hover:underline">
                    {inv.invoice_number} — {inv.currency} {inv.amount.toLocaleString()}
                  </Link>
                </li>
              ))}
            </ul>
          </LinkedSection>

          <LinkedSection title="Newsletter" empty={subscriptions.length === 0}>
            <ul className="space-y-1.5">
              {subscriptions.map((s) => (
                <li key={s.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{s.email}</span>
                  <span className={`pill ${s.status === 'subscribed' ? 'open' : 'full'}`}>{s.status}</span>
                </li>
              ))}
            </ul>
          </LinkedSection>

          <LinkedSection
            title="Documents"
            addHref={`/admin/documents/new?clientId=${client.id}`}
            addLabel="+ Upload"
            empty={documents.length === 0}
          >
            <ul className="space-y-1.5">
              {documents.map((d) => (
                <li key={d.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{d.filename}</span>
                  <span className={`pill ${d.status === 'verified' ? 'open' : d.status === 'rejected' ? 'cancelled' : 'few'}`}>{d.status}</span>
                </li>
              ))}
            </ul>
          </LinkedSection>

          <div className="pt-2">
            <DeleteButton
              endpoint={`/api/admin/clients/${client.id}`}
              confirmMessage={`Delete client ${client.name}? Linked leads/bookings/invoices will just lose the link. This cannot be undone.`}
              redirectTo="/admin/clients"
              label="Delete Client"
            />
          </div>
        </>
      }
      sidebar={<ClientEditForm client={client} />}
    />
  )
}
