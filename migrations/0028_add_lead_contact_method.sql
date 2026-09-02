-- Migration number: 0028 	 2026-09-02T00:00:00.000Z

-- Which channel the VISITOR chose at submission time (WhatsApp vs Email
-- button on a lead-capture form). Distinct from communication_log.channel
-- (how STAFF later contacted the lead, logged manually — see leads.ts's
-- CommunicationChannel) and from utm_source/utm_medium/utm_campaign
-- (marketing attribution, migration 0020) — do not confuse the three.
--
-- NOT NULL DEFAULT 'email': every lead captured before this feature shipped
-- was, by definition, submitted via the only channel that existed — email —
-- so backfilling existing rows to 'email' is accurate, not a guess. This
-- also means no NULL-handling is needed anywhere downstream (TS types, the
-- admin badge, or SQL) — every row always has a valid value.
ALTER TABLE leads ADD COLUMN contact_method TEXT NOT NULL DEFAULT 'email';
