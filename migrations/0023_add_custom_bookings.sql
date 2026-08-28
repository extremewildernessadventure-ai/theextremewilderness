-- Migration number: 0023

-- Six tables carry a `booking_id INTEGER REFERENCES bookings(id)` column
-- (lodge_bookings, supplier_payments, refunds, incident_reports, documents,
-- reviews). D1 enforces foreign keys unconditionally — confirmed live,
-- `PRAGMA foreign_keys=OFF` is silently ignored (`PRAGMA foreign_keys`
-- still reports 1 afterward) — so unlike a normal standalone SQLite
-- database, there is no way to temporarily disable enforcement and rebuild
-- `bookings` (the parent) directly the way 0022 rebuilt lodge_bookings (a
-- table nothing else referenced). Dropping a CHILD table is always safe
-- (nothing references lodge_bookings/supplier_payments/etc.), so instead
-- every one of these six is rebuilt first with the `REFERENCES bookings(id)`
-- clause removed from booking_id — everything else about each table is
-- unchanged. Once none of them reference `bookings` any more, the
-- `bookings` rebuild below (departure_id -> nullable, + booking_type,
-- custom_description) can drop and recreate it freely. The FK constraint on
-- these six is not reinstated afterward — recreating it would require this
-- same six-table rebuild a second time for a guarantee that was already
-- fairly loose (all six are optional, nullable linkage columns; every route
-- that writes them is trusted admin code, not user input).

-- lodge_bookings: also folds in contact_info (the per-entry provider
-- phone/email shown on the voucher) so this is one rebuild, not two.
CREATE TABLE lodge_bookings_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER NOT NULL,
  lodge_id INTEGER REFERENCES ops_lodges(id),
  lodge_name_other TEXT,
  check_in TEXT,
  check_out TEXT,
  confirmation_ref TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  room_type TEXT,
  inclusions TEXT,
  contact_info TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO lodge_bookings_new (id, booking_id, lodge_id, lodge_name_other, check_in, check_out, confirmation_ref, status, room_type, inclusions, created_at)
  SELECT id, booking_id, lodge_id, lodge_name_other, check_in, check_out, confirmation_ref, status, room_type, inclusions, created_at FROM lodge_bookings;
DROP TABLE lodge_bookings;
ALTER TABLE lodge_bookings_new RENAME TO lodge_bookings;
CREATE INDEX idx_lodge_bookings_booking_id ON lodge_bookings(booking_id);

CREATE TABLE supplier_payments_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  supplier_id INTEGER NOT NULL REFERENCES suppliers(id),
  departure_id INTEGER REFERENCES departures(id),
  amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'owed' CHECK (status IN ('owed', 'paid')),
  due_date TEXT,
  paid_at TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  booking_id INTEGER
);
INSERT INTO supplier_payments_new (id, supplier_id, departure_id, amount, currency, status, due_date, paid_at, notes, created_at, booking_id)
  SELECT id, supplier_id, departure_id, amount, currency, status, due_date, paid_at, notes, created_at, booking_id FROM supplier_payments;
DROP TABLE supplier_payments;
ALTER TABLE supplier_payments_new RENAME TO supplier_payments;
CREATE INDEX idx_supplier_payments_supplier_id ON supplier_payments(supplier_id);

CREATE TABLE refunds_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoice_id INTEGER REFERENCES invoices(id),
  booking_id INTEGER,
  amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'requested' CHECK (status IN ('requested', 'approved', 'processed', 'denied')),
  processed_at TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  invoice_ref_other TEXT,
  booking_ref_other TEXT
);
INSERT INTO refunds_new (id, invoice_id, booking_id, amount, currency, reason, status, processed_at, notes, created_at, invoice_ref_other, booking_ref_other)
  SELECT id, invoice_id, booking_id, amount, currency, reason, status, processed_at, notes, created_at, invoice_ref_other, booking_ref_other FROM refunds;
DROP TABLE refunds;
ALTER TABLE refunds_new RENAME TO refunds;

CREATE TABLE incident_reports_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER,
  departure_id INTEGER REFERENCES departures(id),
  guide_id INTEGER REFERENCES guides(id),
  client_name TEXT,
  client_email TEXT,
  type TEXT NOT NULL CHECK (type IN ('medical', 'vehicle', 'weather', 'security', 'other')),
  severity TEXT NOT NULL CHECK (severity IN ('minor', 'moderate', 'serious', 'critical')),
  description TEXT NOT NULL,
  action_taken TEXT,
  amref_evacuation INTEGER NOT NULL DEFAULT 0,
  reported_by TEXT,
  occurred_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  departure_notes_other TEXT,
  guide_name_other TEXT
);
INSERT INTO incident_reports_new (id, booking_id, departure_id, guide_id, client_name, client_email, type, severity, description, action_taken, amref_evacuation, reported_by, occurred_at, created_at, departure_notes_other, guide_name_other)
  SELECT id, booking_id, departure_id, guide_id, client_name, client_email, type, severity, description, action_taken, amref_evacuation, reported_by, occurred_at, created_at, departure_notes_other, guide_name_other FROM incident_reports;
DROP TABLE incident_reports;
ALTER TABLE incident_reports_new RENAME TO incident_reports;
CREATE INDEX idx_incident_reports_departure_id ON incident_reports(departure_id);

CREATE TABLE documents_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL REFERENCES clients(id),
  lead_id INTEGER REFERENCES leads(id),
  booking_id INTEGER,
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
INSERT INTO documents_new (id, client_id, lead_id, booking_id, type, r2_key, filename, content_type, uploaded_at, status, rejection_reason, reviewed_by, reviewed_at)
  SELECT id, client_id, lead_id, booking_id, type, r2_key, filename, content_type, uploaded_at, status, rejection_reason, reviewed_by, reviewed_at FROM documents;
DROP TABLE documents;
ALTER TABLE documents_new RENAME TO documents;
CREATE INDEX idx_documents_client_id ON documents(client_id);

CREATE TABLE reviews_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  booking_id INTEGER,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  quote_text TEXT NOT NULL,
  source TEXT,
  park_tag TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'published')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  client_name_other TEXT,
  booking_ref_other TEXT
);
INSERT INTO reviews_new (id, client_id, booking_id, rating, quote_text, source, park_tag, status, created_at, client_name_other, booking_ref_other)
  SELECT id, client_id, booking_id, rating, quote_text, source, park_tag, status, created_at, client_name_other, booking_ref_other FROM reviews;
DROP TABLE reviews;
ALTER TABLE reviews_new RENAME TO reviews;

-- bookings.departure_id is NOT NULL — same table-rebuild recipe, now safe
-- since nothing above references `bookings` any more. booking_type defaults
-- to 'safari' so every existing row is correctly classified with no
-- backfill needed; custom rows carry departure_id = NULL and describe
-- themselves via the new custom_description column instead.
CREATE TABLE bookings_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  departure_id INTEGER REFERENCES departures(id),
  lead_id INTEGER REFERENCES leads(id),
  client_name TEXT NOT NULL,
  client_email TEXT,
  client_phone TEXT,
  guests_count INTEGER NOT NULL DEFAULT 1,
  guide_id INTEGER REFERENCES guides(id),
  guide_name_other TEXT,
  vehicle_id INTEGER REFERENCES vehicles(id),
  vehicle_notes_other TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('confirmed', 'pending', 'cancelled')),
  cancellation_reason TEXT,
  special_requests TEXT,
  voucher_sent_at TEXT,
  voucher_r2_key TEXT,
  client_id INTEGER REFERENCES clients(id),
  booking_type TEXT NOT NULL DEFAULT 'safari' CHECK (booking_type IN ('safari', 'custom')),
  custom_description TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

INSERT INTO bookings_new (
  id, departure_id, lead_id, client_name, client_email, client_phone, guests_count,
  guide_id, guide_name_other, vehicle_id, vehicle_notes_other, status, cancellation_reason,
  special_requests, voucher_sent_at, voucher_r2_key, client_id, created_at, updated_at
)
  SELECT
    id, departure_id, lead_id, client_name, client_email, client_phone, guests_count,
    guide_id, guide_name_other, vehicle_id, vehicle_notes_other, status, cancellation_reason,
    special_requests, voucher_sent_at, voucher_r2_key, client_id, created_at, updated_at
  FROM bookings;

DROP TABLE bookings;
ALTER TABLE bookings_new RENAME TO bookings;
CREATE INDEX idx_bookings_departure_id ON bookings(departure_id);
