-- Migration number: 0021

-- Sidecar free-text columns for record-picker dropdowns that need a "custom
-- / not listed" escape hatch (see SelectWithCustom.tsx). Each of these FK
-- columns is already nullable, so a "custom" selection just leaves the FK
-- null and fills the paired *_other column instead — no rebuild needed,
-- unlike lodge_bookings.lodge_id (NOT NULL, handled separately in
-- 0022_strengthen_lodge_bookings.sql).

ALTER TABLE bookings ADD COLUMN guide_name_other TEXT;
ALTER TABLE bookings ADD COLUMN vehicle_notes_other TEXT;

ALTER TABLE expenses ADD COLUMN vehicle_notes_other TEXT;
ALTER TABLE expenses ADD COLUMN departure_notes_other TEXT;
ALTER TABLE expenses ADD COLUMN staff_member_other TEXT;

ALTER TABLE permits ADD COLUMN departure_notes_other TEXT;

ALTER TABLE invoices ADD COLUMN departure_notes_other TEXT;

ALTER TABLE incident_reports ADD COLUMN departure_notes_other TEXT;
ALTER TABLE incident_reports ADD COLUMN guide_name_other TEXT;

ALTER TABLE staff_members ADD COLUMN guide_name_other TEXT;

ALTER TABLE refunds ADD COLUMN invoice_ref_other TEXT;
ALTER TABLE refunds ADD COLUMN booking_ref_other TEXT;

ALTER TABLE reviews ADD COLUMN client_name_other TEXT;
ALTER TABLE reviews ADD COLUMN booking_ref_other TEXT;
