-- Migration number: 0008 	 2026-08-27T00:00:00.000Z

-- A lead becomes a "trip" once these are set — used to show an
-- upcoming/in-progress/completed phase on the lead detail page.
ALTER TABLE leads ADD COLUMN trip_start_date TEXT;
ALTER TABLE leads ADD COLUMN trip_end_date TEXT;

-- Staff-visible-only trip-progress timeline (no client portal exists on this
-- project, so unlike the sibling system this reference is modeled on, there
-- is no client-facing view of this table today — see the admin-parity plan's
-- friction notes). `proof_channel`/`proof_note` let staff record how a
-- promised update was actually confirmed (e.g. "confirmed via WhatsApp
-- 8/26"), not just that it was logged.
CREATE TABLE lead_updates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id INTEGER NOT NULL REFERENCES leads(id),
  category TEXT NOT NULL CHECK (category IN ('accommodation', 'flight', 'payment', 'document', 'general')),
  title TEXT NOT NULL,
  body TEXT,
  proof_channel TEXT CHECK (proof_channel IN ('whatsapp', 'email', 'call', 'in_person')),
  proof_note TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_lead_updates_lead_id ON lead_updates(lead_id);
