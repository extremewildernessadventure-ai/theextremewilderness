import { notFound } from 'next/navigation'
import { getDb } from '@/lib/db'
import type { Lead, CommunicationLogEntry, LeadUpdate } from '@/lib/leads'
import type { Quote } from '@/lib/quotes'
import TypeBadge from '../TypeBadge'
import ContactMethodBadge from '../ContactMethodBadge'
import LeadStatusSelect from '../LeadStatusSelect'
import DeleteLeadButton from './DeleteLeadButton'
import LeadNotes from './LeadNotes'
import TripDatesForm from './TripDatesForm'
import QuotesSummary from './QuotesSummary'
import CommunicationLogPanel from './CommunicationLogPanel'
import TripProgressPanel from './TripProgressPanel'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import AddAsClientButton from '@/components/admin/AddAsClientButton'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

function formatFieldLabel(key: string): string {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (c) => c.toUpperCase())
}

function formatFieldValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return '—'
  if (Array.isArray(value)) return value.length ? value.join(', ') : '—'
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  return String(value)
}

export default async function LeadDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const lead = await db.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first<Lead>()
  if (!lead) notFound()

  const [{ results: quotes }, { results: commEntries }, { results: tripUpdates }] = await Promise.all([
    db.prepare('SELECT * FROM quotes WHERE lead_id = ? ORDER BY created_at DESC').bind(id).all<Quote>(),
    db.prepare('SELECT * FROM communication_log WHERE lead_id = ? ORDER BY created_at DESC').bind(id).all<CommunicationLogEntry>(),
    db.prepare('SELECT * FROM lead_updates WHERE lead_id = ? ORDER BY created_at DESC').bind(id).all<LeadUpdate>(),
  ])

  let payloadEntries: [string, unknown][] = []
  try {
    payloadEntries = Object.entries(JSON.parse(lead.payload) as Record<string, unknown>)
  } catch {
    // Malformed payload — render nothing rather than crash the page.
  }

  return (
    <DetailTwoColumn
      backHref="/admin/leads"
      backLabel="Back to Leads"
      title={lead.name || lead.email}
      titleBadge={<div className="flex items-center gap-2"><TypeBadge type={lead.type} /><ContactMethodBadge method={lead.contact_method} /></div>}
      subtitle={`Received ${new Date(lead.created_at.replace(' ', 'T') + 'Z').toLocaleString()}`}
      main={
        <>
          <div className="panel space-y-3 text-sm">
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Email</span>
              <span className="font-medium text-brand">{lead.email}</span>
            </div>
            {lead.phone && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Phone</span>
                <span>{lead.phone}</span>
              </div>
            )}
            {lead.subject && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Subject</span>
                <span>{lead.subject}</span>
              </div>
            )}
            {lead.locale && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Locale</span>
                <span>{lead.locale}</span>
              </div>
            )}
          </div>

          <AddAsClientButton
            endpoint={`/api/admin/leads/${lead.id}/add-client`}
            clientId={lead.client_id}
            leadId={lead.id}
            showBookNow
          />

          {!lead.email_sent && (
            <div className="panel text-sm" style={{ borderLeft: '4px solid var(--gold)' }}>
              <strong>Email notification failed</strong> — this lead was captured via the dashboard only. Reach out directly using the contact details above.
            </div>
          )}

          {payloadEntries.length > 0 && (
            <div className="panel space-y-3 text-sm">
              <h2 className="mb-1">Submitted Details</h2>
              {payloadEntries.map(([key, value]) => {
                const formatted = formatFieldValue(value)
                // Long free-text fields (a message, notes, etc.) read badly
                // squeezed right-aligned onto the same line as their label —
                // stack them instead, like a normal paragraph under a heading.
                const isLongText = formatted.length > 60
                return isLongText ? (
                  <div key={key} className="space-y-1">
                    <span style={{ color: 'var(--grey)' }}>{formatFieldLabel(key)}</span>
                    <p className="whitespace-pre-wrap break-words">{formatted}</p>
                  </div>
                ) : (
                  <div key={key} className="flex justify-between gap-4">
                    <span className="shrink-0" style={{ color: 'var(--grey)' }}>{formatFieldLabel(key)}</span>
                    <span className="text-end break-words">{formatted}</span>
                  </div>
                )
              })}
            </div>
          )}

          <QuotesSummary leadId={lead.id} quotes={quotes} />

          <CommunicationLogPanel leadId={lead.id} entries={commEntries} />

          <TripProgressPanel leadId={lead.id} updates={tripUpdates} />

          <div className="pt-2">
            <DeleteLeadButton leadId={lead.id} leadName={lead.name || lead.email} />
          </div>
        </>
      }
      sidebar={
        <>
          <div className="panel">
            <h2 className="mb-4">Status</h2>
            <LeadStatusSelect leadId={lead.id} currentStatus={lead.status} />
          </div>

          <TripDatesForm leadId={lead.id} initialStart={lead.trip_start_date} initialEnd={lead.trip_end_date} />

          <div className="panel">
            <h2 className="mb-4">Notes</h2>
            <LeadNotes leadId={lead.id} initialNotes={lead.notes ?? ''} />
          </div>
        </>
      }
    />
  )
}
