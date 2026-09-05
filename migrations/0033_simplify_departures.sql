-- Migration number: 0033

-- Reverting migration 0031's departure pricing: pricing now belongs on
-- Quotes instead (see migration 0032), so a departure goes back to being
-- just "this package, these dates" -- `cancelled` stays, that's a real
-- standalone concept (voiding a booked private trip) unrelated to pricing.
ALTER TABLE departures DROP COLUMN adults;
ALTER TABLE departures DROP COLUMN children;
ALTER TABLE departures DROP COLUMN price_per_adult;
ALTER TABLE departures DROP COLUMN price_per_child;
