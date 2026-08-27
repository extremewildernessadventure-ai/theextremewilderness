-- Migration number: 0016 	 2026-08-27T00:00:00.000Z

-- A lightweight, non-auth rolodex — no accounts/roles/portal system exists
-- on this project (a deliberate decision, see the admin-parity plan's
-- friction notes), so this exists purely to let staff manually link a
-- lead/booking/invoice/document to one real person for cross-referencing,
-- not to gate access to anything. No password/session column, ever.
CREATE TABLE clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Optional on all three — most rows will stay client-less, exactly as
-- invoices.client_name/client_email and bookings.client_name/email already
-- work today without a clients row behind them.
ALTER TABLE leads ADD COLUMN client_id INTEGER REFERENCES clients(id);
ALTER TABLE bookings ADD COLUMN client_id INTEGER REFERENCES clients(id);
ALTER TABLE invoices ADD COLUMN client_id INTEGER REFERENCES clients(id);
