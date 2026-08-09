import { getDb } from './db'

const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token'
const AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth'
export const GMAIL_SCOPE = 'https://www.googleapis.com/auth/gmail.metadata'

// Refresh a bit before the real expiry to avoid a request racing an
// about-to-expire token.
const EXPIRY_BUFFER_MS = 60_000

interface GmailTokensRow {
  id: number
  access_token: string | null
  refresh_token: string
  expires_at: number
  status: 'connected' | 'disconnected'
  connected_at: string
  last_refreshed_at: string | null
}

function requireEnv(name: 'GMAIL_CLIENT_ID' | 'GMAIL_CLIENT_SECRET'): string {
  const value = process.env[name]
  if (!value) throw new Error(`${name} is not set`)
  return value
}

export function buildAuthUrl(redirectUri: string, state: string): string {
  const params = new URLSearchParams({
    client_id: requireEnv('GMAIL_CLIENT_ID'),
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: GMAIL_SCOPE,
    access_type: 'offline',
    prompt: 'consent', // force a refresh_token every time, even on reconnect
    state,
  })
  return `${AUTH_ENDPOINT}?${params.toString()}`
}

export async function exchangeCodeForTokens(code: string, redirectUri: string): Promise<{
  access_token: string; refresh_token: string; expires_in: number
} | null> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: requireEnv('GMAIL_CLIENT_ID'),
      client_secret: requireEnv('GMAIL_CLIENT_SECRET'),
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  })
  if (!res.ok) {
    console.error('Gmail token exchange failed:', await res.text())
    return null
  }
  const data = await res.json() as { access_token: string; refresh_token?: string; expires_in: number }
  if (!data.refresh_token) {
    // Google only returns a refresh_token on the first consent (or with
    // prompt=consent, which we always send) — if it's still missing here
    // the exchange itself is malformed, not a normal case.
    console.error('Gmail token exchange returned no refresh_token')
    return null
  }
  return { access_token: data.access_token, refresh_token: data.refresh_token, expires_in: data.expires_in }
}

export async function saveTokens(input: { accessToken: string; refreshToken: string; expiresIn: number }): Promise<void> {
  const db = await getDb()
  const expiresAt = Date.now() + input.expiresIn * 1000
  await db.prepare(`
    INSERT INTO gmail_tokens (id, access_token, refresh_token, expires_at, status, connected_at, last_refreshed_at)
    VALUES (1, ?, ?, ?, 'connected', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    ON CONFLICT(id) DO UPDATE SET
      access_token = excluded.access_token,
      refresh_token = excluded.refresh_token,
      expires_at = excluded.expires_at,
      status = 'connected',
      connected_at = CURRENT_TIMESTAMP,
      last_refreshed_at = CURRENT_TIMESTAMP
  `).bind(input.accessToken, input.refreshToken, expiresAt).run()
}

async function refreshAccessToken(row: GmailTokensRow): Promise<string | null> {
  const db = await getDb()
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token: row.refresh_token,
      client_id: requireEnv('GMAIL_CLIENT_ID'),
      client_secret: requireEnv('GMAIL_CLIENT_SECRET'),
      grant_type: 'refresh_token',
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    console.error('Gmail token refresh failed:', body)
    if (body.includes('invalid_grant')) {
      // The 7-day Testing-mode refresh token has expired (or was revoked) —
      // mark disconnected so the dashboard banner reflects reality instead
      // of silently failing on every sync run.
      await db.prepare(`UPDATE gmail_tokens SET status = 'disconnected' WHERE id = 1`).run()
    }
    return null
  }

  const data = await res.json() as { access_token: string; expires_in: number }
  const expiresAt = Date.now() + data.expires_in * 1000
  await db.prepare(`
    UPDATE gmail_tokens SET access_token = ?, expires_at = ?, last_refreshed_at = CURRENT_TIMESTAMP WHERE id = 1
  `).bind(data.access_token, expiresAt).run()
  return data.access_token
}

// Returns a currently-valid access token, refreshing if needed, or null if
// Gmail has never been connected or the connection has been revoked/expired.
export async function getValidAccessToken(): Promise<string | null> {
  const db = await getDb()
  const row = await db.prepare('SELECT * FROM gmail_tokens WHERE id = 1').first<GmailTokensRow>()
  if (!row || row.status === 'disconnected') return null

  if (row.access_token && row.expires_at > Date.now() + EXPIRY_BUFFER_MS) {
    return row.access_token
  }
  return refreshAccessToken(row)
}

export interface GmailConnectionStatus {
  state: 'not_connected' | 'connected' | 'expiring_soon' | 'disconnected'
  connectedAt: string | null
  lastRefreshedAt: string | null
}

export async function getGmailConnectionStatus(): Promise<GmailConnectionStatus> {
  const db = await getDb()
  const row = await db.prepare('SELECT * FROM gmail_tokens WHERE id = 1').first<GmailTokensRow>()
  if (!row) return { state: 'not_connected', connectedAt: null, lastRefreshedAt: null }
  if (row.status === 'disconnected') {
    return { state: 'disconnected', connectedAt: row.connected_at, lastRefreshedAt: row.last_refreshed_at }
  }

  const reference = row.last_refreshed_at ?? row.connected_at
  const daysSince = (Date.now() - new Date(reference.replace(' ', 'T') + 'Z').getTime()) / (1000 * 60 * 60 * 24)
  // Testing-mode refresh tokens expire ~7 days after issuance — nudge a
  // couple of days ahead so staff aren't caught off guard by a sync failure.
  const state = daysSince >= 5 ? 'expiring_soon' : 'connected'
  return { state, connectedAt: row.connected_at, lastRefreshedAt: row.last_refreshed_at }
}
