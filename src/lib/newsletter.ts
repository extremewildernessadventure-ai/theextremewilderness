import { getDb } from './db'

export type NewsletterSubscriberStatus = 'subscribed' | 'unsubscribed'

export interface NewsletterSubscriber {
  id: number
  email: string
  status: NewsletterSubscriberStatus
  source: string | null
  unsubscribe_token: string
  client_id: number | null
  created_at: string
  unsubscribed_at: string | null
}

function generateUnsubscribeToken(): string {
  return crypto.randomUUID()
}

// Called alongside the existing Resend `contacts.create` calls in
// src/app/api/newsletter/route.ts and src/app/api/pdf-lead/route.ts — never
// throws, same never-block-the-response philosophy as saveLead() in
// src/lib/leads.ts. Re-subscribing an existing (possibly unsubscribed)
// email flips it back to 'subscribed' rather than erroring on the UNIQUE
// constraint.
export async function upsertSubscriber(email: string, source?: string | null): Promise<void> {
  try {
    const db = await getDb()
    await db.prepare(
      `INSERT INTO newsletter_subscribers (email, source, unsubscribe_token)
       VALUES (?, ?, ?)
       ON CONFLICT(email) DO UPDATE SET status = 'subscribed', unsubscribed_at = NULL`
    ).bind(email, source ?? null, generateUnsubscribeToken()).run()
  } catch (err) {
    console.error('upsertSubscriber failed:', err)
  }
}
