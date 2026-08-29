-- Migration number: 0024

-- booking_type/custom_description (added in 0023) are superseded by:
-- departure now just an optional field on the unified "New Booking" form,
-- and the new custom_bookings table below for anything that isn't
-- accommodation. Safe to rebuild bookings directly this time -- as of
-- 0023, all 6 tables that used to reference bookings(id) had that
-- REFERENCES clause stripped, so nothing holds a live FK into bookings any
-- more and the standard rebuild recipe needs no child-table dance.
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
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
INSERT INTO bookings_new (id, departure_id, lead_id, client_name, client_email, client_phone, guests_count, guide_id, guide_name_other, vehicle_id, vehicle_notes_other, status, cancellation_reason, special_requests, voucher_sent_at, voucher_r2_key, client_id, created_at, updated_at)
  SELECT id, departure_id, lead_id, client_name, client_email, client_phone, guests_count, guide_id, guide_name_other, vehicle_id, vehicle_notes_other, status, cancellation_reason, special_requests, voucher_sent_at, voucher_r2_key, client_id, created_at, updated_at FROM bookings;
DROP TABLE bookings;
ALTER TABLE bookings_new RENAME TO bookings;
CREATE INDEX idx_bookings_departure_id ON bookings(departure_id);

-- Sibling to lodge_bookings, for anything booked that isn't accommodation --
-- a venue, a pitch, an arena, equipment. Belongs to the same booking (same
-- client, no re-entry needed), shown as its own block directly below
-- Accommodation & Facilities on the booking's detail page.
CREATE TABLE custom_bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER NOT NULL REFERENCES bookings(id),
  description TEXT NOT NULL,
  start_date TEXT,
  end_date TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  contact_info TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_custom_bookings_booking_id ON custom_bookings(booking_id);
