-- Migration number: 0011 	 2026-08-27T00:00:00.000Z

-- A client's seat(s) on a departure. `guide_id`/`vehicle_id` are plain
-- nullable FKs directly on the row, not a separate assignments table — the
-- plan called for "one active row per booking, full-replace-on-reassign"
-- (i.e. no reassignment history is kept), which a direct column achieves
-- with a single UPDATE instead of a delete+insert into a join table that
-- would only ever hold 0-1 rows per booking anyway.
CREATE TABLE bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  departure_id INTEGER NOT NULL REFERENCES departures(id),
  lead_id INTEGER REFERENCES leads(id),
  client_name TEXT NOT NULL,
  client_email TEXT,
  client_phone TEXT,
  guests_count INTEGER NOT NULL DEFAULT 1,
  guide_id INTEGER REFERENCES guides(id),
  vehicle_id INTEGER REFERENCES vehicles(id),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('confirmed', 'pending', 'cancelled')),
  cancellation_reason TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE INDEX idx_bookings_departure_id ON bookings(departure_id);

-- Multi-row (unlike guide/vehicle assignment) since one trip can stop at
-- several lodges across its itinerary.
CREATE TABLE lodge_bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER NOT NULL REFERENCES bookings(id),
  lodge_id INTEGER NOT NULL REFERENCES ops_lodges(id),
  check_in TEXT,
  check_out TEXT,
  confirmation_ref TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_lodge_bookings_booking_id ON lodge_bookings(booking_id);

-- Deferred from 0010 — the bookings table didn't exist yet at that point,
-- and SQLite won't validate a REFERENCES target that doesn't exist.
ALTER TABLE supplier_payments ADD COLUMN booking_id INTEGER REFERENCES bookings(id);
