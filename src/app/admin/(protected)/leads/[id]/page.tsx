import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import TypeBadge from '../TypeBadge'
import LeadStatusSelect from '../LeadStatusSelect'
import DeleteLeadButton from './DeleteLeadButton'
import LeadNotes from './LeadNotes'

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

  let payloadEntries: [string, unknown][] = []
  try {
    payloadEntries = Object.entries(JSON.parse(lead.payload) as Record<string, unknown>)
  } catch {
    // Malformed payload — render nothing rather than crash the page.
  }

  return (
    <div className="max-w-5xl">
      <Link href="/admin/leads" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Leads</Link>
      <div className="flex items-center gap-3 mb-1">
        <h1 className="text-2xl font-bold text-brand">{lead.name || lead.email}</h1>
        <TypeBadge type={lead.type} />
      </div>
      <p className="text-gray-500 text-sm mb-6">Received {new Date(lead.created_at.replace(' ', 'T') + 'Z').toLocaleString()}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <div className="bg-white border border-gray-200 rounded-xl p-7 mb-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-brand">{lead.email}</span>
            </div>
            {lead.phone && (
              <div className="flex justify-between">
                <span className="text-gray-500">Phone</span>
                <span className="text-gray-700">{lead.phone}</span>
              </div>
            )}
            {lead.subject && (
              <div className="flex justify-between">
                <span className="text-gray-500">Subject</span>
                <span className="text-gray-700">{lead.subject}</span>
              </div>
            )}
            {lead.locale && (
              <div className="flex justify-between">
                <span className="text-gray-500">Locale</span>
                <span className="text-gray-700">{lead.locale}</span>
              </div>
            )}
          </div>

          {!lead.email_sent && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
              <strong>Email notification failed</strong> — this lead was captured via the dashboard only. Reach out directly using the contact details above.
            </div>
          )}

          {payloadEntries.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-7 mb-6 space-y-3 text-sm">
              <h2 className="text-sm font-bold text-brand mb-1">Submitted Details</h2>
              {payloadEntries.map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-gray-500 shrink-0">{formatFieldLabel(key)}</span>
                  <span className="text-gray-700 text-end break-words">{formatFieldValue(value)}</span>
                </div>
              ))}
            </div>
          )}

          <div className="pt-2">
            <DeleteLeadButton leadId={lead.id} leadName={lead.name || lead.email} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-7">
            <h2 className="text-sm font-bold text-brand mb-4">Status</h2>
            <LeadStatusSelect leadId={lead.id} currentStatus={lead.status} />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-7">
            <h2 className="text-sm font-bold text-brand mb-4">Notes</h2>
            <LeadNotes leadId={lead.id} initialNotes={lead.notes ?? ''} />
          </div>
        </div>
      </div>
    </div>
  )
}
