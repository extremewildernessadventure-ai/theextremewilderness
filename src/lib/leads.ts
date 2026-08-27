import { getDb } from './db'

export type LeadType =
  | 'contact'
  | 'enquiry'
  | 'newsletter'
  | 'pdf-lead'
  | 'plan-brief'
  | 'exit-intent-claim'
  | 'trade-partners'

export type LeadStatus = 'new' | 'contacted' | 'converted' | 'archived'

export type CommunicationChannel = 'whatsapp' | 'email' | 'call' | 'in_person'
export const COMMUNICATION_CHANNELS: CommunicationChannel[] = ['whatsapp', 'email', 'call', 'in_person']

export type LeadUpdateCategory = 'accommodation' | 'flight' | 'payment' | 'document' | 'general'
export const LEAD_UPDATE_CATEGORIES: LeadUpdateCategory[] = ['accommodation', 'flight', 'payment', 'document', 'general']

// Internal staff-only contact log — distinct from LeadUpdate below. This is
// "what did we say to this person and when," never shown to a client.
export interface CommunicationLogEntry {
  id: number
  lead_id: number
  channel: CommunicationChannel
  summary: string
  logged_by: string | null
  created_at: string
}

// Staff-visible-only trip-progress timeline entry. proof_channel/proof_note
// record how a promised update was actually confirmed, not just that it was
// logged — see the admin-parity plan's friction notes for why this has no
// client-facing view on this project (no accounts/portal system exists).
export interface LeadUpdate {
  id: number
  lead_id: number
  category: LeadUpdateCategory
  title: string
  body: string | null
  proof_channel: CommunicationChannel | null
  proof_note: string | null
  created_at: string
}

export interface Lead {
  id: number
  type: LeadType
  name: string | null
  email: string
  phone: string | null
  subject: string | null
  status: LeadStatus
  locale: string | null
  payload: string
  email_sent: number
  notes: string | null
  trip_start_date: string | null
  trip_end_date: string | null
  created_at: string
  updated_at: string | null
}

export interface SaveLeadInput {
  type: LeadType
  name?: string | null
  email: string
  phone?: string | null
  subject?: string | null
  locale?: string | null
  payload: unknown
}

// Never throws — a D1 failure here must not take down the Resend email path
// or the visitor-facing response, the same way a Resend failure must not
// take down persistence. Callers get a plain {ok, id} and decide what to do.
export async function saveLead(input: SaveLeadInput): Promise<{ ok: boolean; id: number | null }> {
  try {
    const db = await getDb()
    const result = await db.prepare(
      `INSERT INTO leads (type, name, email, phone, subject, locale, payload, email_sent)
       VALUES (?, ?, ?, ?, ?, ?, ?, 0)`
    ).bind(
      input.type,
      input.name ?? null,
      input.email,
      input.phone ?? null,
      input.subject ?? null,
      input.locale ?? null,
      JSON.stringify(input.payload),
    ).run()
    return { ok: true, id: result.meta?.last_row_id ?? null }
  } catch (err) {
    console.error(`saveLead(${input.type}) failed:`, err)
    return { ok: false, id: null }
  }
}

// Best-effort only — called after a successful Resend send. Failure here
// just means the dashboard under-reports email_sent; never blocks the response.
export async function markLeadEmailSent(id: number): Promise<void> {
  try {
    const db = await getDb()
    await db.prepare('UPDATE leads SET email_sent = 1 WHERE id = ?').bind(id).run()
  } catch (err) {
    console.error(`markLeadEmailSent(${id}) failed:`, err)
  }
}
