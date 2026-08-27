-- Migration number: 0019 	 2026-08-27T00:00:00.000Z

-- Newsletter signups already write a `leads` row (type='newsletter', the raw
-- capture audit trail) and add a contact to Resend's own audience — this
-- table is new: the authoritative subscribe/unsubscribe status and blast
-- target list, queryable/manageable from our own admin without going
-- through Resend's dashboard. src/lib/newsletter.ts's upsertSubscriber() is
-- called alongside the existing Resend contact calls in
-- src/app/api/newsletter/route.ts and src/app/api/pdf-lead/route.ts so this
-- table actually reflects real public-site signups, not just future
-- admin-only additions.
CREATE TABLE newsletter_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
  source TEXT,
  unsubscribe_token TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TEXT
);
