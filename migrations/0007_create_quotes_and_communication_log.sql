-- Migration number: 0007 	 2026-08-27T00:00:00.000Z

-- A written quote sent to a lead before they book. `package_slug` is
-- validated at the app layer against src/data/packages.ts, not a DB FK —
-- packages are a static data file, not a table.
CREATE TABLE quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id INTEGER NOT NULL REFERENCES leads(id),
  package_slug TEXT,
  price REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'accepted', 'declined', 'expired')),
  valid_until TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE INDEX idx_quotes_lead_id ON quotes(lead_id);

-- Internal staff-only contact log — distinct from lead_updates (added in
-- 0008), which is the client-relevant trip-progress timeline. This one is
-- purely "what did we say to this person and when," never shown to a client.
CREATE TABLE communication_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id INTEGER NOT NULL REFERENCES leads(id),
  channel TEXT NOT NULL CHECK (channel IN ('whatsapp', 'email', 'call', 'in_person')),
  summary TEXT NOT NULL,
  logged_by TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_communication_log_lead_id ON communication_log(lead_id);
