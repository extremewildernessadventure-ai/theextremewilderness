-- Migration number: 0017 	 2026-08-27T00:00:00.000Z

-- Staff-side upload only (received via email/WhatsApp, uploaded on the
-- client's behalf) — no client self-serve portal exists on this project.
-- r2_key points into the new DOCS R2 bucket (wrangler.jsonc), key-prefixed
-- documents/{client_id}/... and served only via an authenticated streaming
-- route, never a public path or signed URL. Goes straight to the 3-state
-- status (pending/verified/rejected) rather than a boolean-then-fix
-- history.
CREATE TABLE documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL REFERENCES clients(id),
  lead_id INTEGER REFERENCES leads(id),
  booking_id INTEGER REFERENCES bookings(id),
  type TEXT NOT NULL CHECK (type IN ('passport', 'waiver', 'visa', 'other')),
  r2_key TEXT NOT NULL,
  filename TEXT NOT NULL,
  content_type TEXT NOT NULL,
  uploaded_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
  rejection_reason TEXT,
  reviewed_by TEXT,
  reviewed_at TEXT
);

CREATE INDEX idx_documents_client_id ON documents(client_id);
