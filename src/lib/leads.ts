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
