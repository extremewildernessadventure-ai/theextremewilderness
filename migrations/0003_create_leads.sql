-- Migration number: 0003 	 2026-08-09T00:00:00.000Z

CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL CHECK(type IN (
    'contact','enquiry','newsletter','pdf-lead','plan-brief','exit-intent-claim','trade-partners'
  )),
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new','contacted','converted','archived')),
  locale TEXT,
  payload TEXT NOT NULL,
  email_sent INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE INDEX idx_leads_type ON leads(type);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);
