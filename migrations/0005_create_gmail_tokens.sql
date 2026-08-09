-- Migration number: 0005 	 2026-08-09T00:00:00.000Z

CREATE TABLE gmail_tokens (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  access_token TEXT,
  refresh_token TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'connected' CHECK(status IN ('connected','disconnected')),
  connected_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_refreshed_at TEXT
);
