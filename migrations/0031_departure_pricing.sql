-- Migration number: 0031

-- Every departure here is a single private party's booking, not a shared
-- trip with competing seats -- the capacity/seats_booked/status ('open'/
-- 'few_left'/'full'/'departed'/'cancelled') occupancy model from migration
-- 0009 never actually applied to this business. Replaced with a real,
-- authoritative per-party cost: adults/children headcounts and a distinct
-- price for each, multiplying out to one total cost per departure (see
-- computeDepartureTotalCost in src/lib/departures.ts). `cancelled` keeps
-- the one piece of the old status that's still a real need -- voiding a
-- booked private trip -- as a plain 0/1 flag instead of a 5-value enum.
ALTER TABLE departures ADD COLUMN adults INTEGER NOT NULL DEFAULT 0;
ALTER TABLE departures ADD COLUMN children INTEGER NOT NULL DEFAULT 0;
ALTER TABLE departures ADD COLUMN price_per_adult REAL;
ALTER TABLE departures ADD COLUMN price_per_child REAL;
ALTER TABLE departures ADD COLUMN cancelled INTEGER NOT NULL DEFAULT 0;
ALTER TABLE departures DROP COLUMN capacity;
ALTER TABLE departures DROP COLUMN seats_booked;
ALTER TABLE departures DROP COLUMN status;
