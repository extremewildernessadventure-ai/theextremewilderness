-- Migration number: 0014 	 2026-08-27T00:00:00.000Z

-- Admin-only — never surfaced publicly or in any client-facing view.
-- Backs the AMREF Flying Doctors safety claim. client_name/email are
-- denormalized (same shape as bookings.client_name/email) since a booking
-- link is optional — an incident can involve someone with no booking row.
CREATE TABLE incident_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER REFERENCES bookings(id),
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
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_incident_reports_departure_id ON incident_reports(departure_id);
