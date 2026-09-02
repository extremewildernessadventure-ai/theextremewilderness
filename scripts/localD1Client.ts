import { execFileSync } from 'node:child_process'
import { writeFileSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { D1Database, D1PreparedStatement } from '../src/lib/db'

// A D1Database implementation for one-off Node scripts (the packages
// migration script) that need to call src/lib/packages.ts's already-tested
// CRUD functions outside a real Worker request -- there's no
// getCloudflareContext() binding available in a plain `tsx` script, so this
// shells out to `wrangler d1 execute --local` instead.
//
// LOCAL ONLY, deliberately: this talks to the same on-disk local D1 state
// `wrangler dev` uses (--local, never --remote). Migrating to production D1
// is a separate, explicit, later step once everything built on top of this
// has been verified -- matches this project's "nothing touches production
// until fully proven" standing instruction for this feature.
//
// Uses --file rather than --command: wrangler's CLI has no parameter
// binding, so bound values are inlined as escaped SQL literals, and on
// Windows, passing an arbitrary SQL string (quotes, parens, semicolons,
// non-ASCII translated text) through a shell-parsed --command argument
// proved unreliable in testing (cmd.exe mis-splits it into separate argv
// words). A temp .sql file sidesteps that entirely -- file contents need no
// shell escaping at all.

const WRANGLER_BIN = join(process.cwd(), 'node_modules', 'wrangler', 'bin', 'wrangler.js')

export function escapeSqlValue(v: unknown): string {
  if (v === null || v === undefined) return 'NULL'
  if (typeof v === 'number') return Number.isFinite(v) ? String(v) : 'NULL'
  if (typeof v === 'boolean') return v ? '1' : '0'
  return `'${String(v).replace(/'/g, "''")}'`
}

export function substitutePlaceholders(sql: string, bound: unknown[]): string {
  const parts = sql.split('?')
  if (parts.length - 1 !== bound.length) {
    throw new Error(`placeholder/bound-value count mismatch (${parts.length - 1} placeholders vs ${bound.length} values) in: ${sql}`)
  }
  return parts.reduce((acc, part, i) => acc + part + (i < bound.length ? escapeSqlValue(bound[i]) : ''), '')
}

interface RawStatementResult {
  results: unknown[]
  success: boolean
  meta?: { duration: number }
}

// Synchronous sleep (no setTimeout-based async sleep is usable here --
// execSql() itself must stay synchronous, called from inside D1Database's
// async methods but needing to block before a retry). Atomics.wait on a
// throwaway SharedArrayBuffer is the standard way to block synchronously
// in Node without a native dependency.
function sleepSync(ms: number): void {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

// A migration run spawns 1000+ of these subprocesses back to back. Rarely
// (observed once in ~700 calls during testing), the spawned `node
// wrangler.js` process crashes outright (empty stdout/stderr, a Windows
// STATUS_STACK_BUFFER_OVERRUN-shaped exit code) rather than returning a
// normal SQLITE_ERROR -- this looks like OS/libuv-level flakiness under
// rapid repeated spawning (this project has separately seen benign libuv
// "UV_HANDLE_CLOSING" assertion noise from wrangler after otherwise-
// successful calls), not anything wrong with the SQL or the data. Retried
// rather than treated as fatal, since a real SQL error (bad constraint,
// syntax) fails immediately and consistently on retry too and still
// surfaces after MAX_ATTEMPTS.
const MAX_ATTEMPTS = 3

function execSql(databaseName: string, sql: string): RawStatementResult[] {
  const tmpFile = join(tmpdir(), `d1-local-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}.sql`)
  writeFileSync(tmpFile, sql, 'utf8')
  try {
    let lastErr: unknown
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const out = execFileSync(
          'node',
          [WRANGLER_BIN, 'd1', 'execute', databaseName, '--local', '--json', '--file', tmpFile],
          { encoding: 'utf8', maxBuffer: 1024 * 1024 * 64 }
        )
        return JSON.parse(out) as RawStatementResult[]
      } catch (err) {
        lastErr = err
        if (attempt < MAX_ATTEMPTS) {
          console.warn(`  (retrying wrangler d1 execute after attempt ${attempt}/${MAX_ATTEMPTS} failed)`)
          sleepSync(500 * attempt)
        }
      }
    }
    throw lastErr
  } finally {
    unlinkSync(tmpFile)
  }
}

// Internal-only extension so batch() below can read back each statement's
// final (placeholder-substituted) SQL without it being part of the public
// D1PreparedStatement surface.
interface LocalStatement extends D1PreparedStatement {
  _finalSql(): string
}

export function makeLocalWranglerD1(databaseName: string): D1Database {
  return {
    prepare(sql: string): D1PreparedStatement {
      let bound: unknown[] = []
      const stmt: LocalStatement = {
        bind(...values: unknown[]) {
          bound = values
          return stmt
        },
        _finalSql: () => substitutePlaceholders(sql, bound),
        async all<T>() {
          const [result] = execSql(databaseName, stmt._finalSql())
          return { results: (result?.results ?? []) as T[] }
        },
        async first<T>() {
          const [result] = execSql(databaseName, stmt._finalSql())
          const rows = (result?.results ?? []) as T[]
          return rows[0] ?? null
        },
        async run() {
          const finalSql = stmt._finalSql()
          const isInsert = /^\s*INSERT/i.test(finalSql)
          // last_insert_rowid() must run in the same wrangler invocation as
          // the INSERT it's reading back -- each execSql() call is its own
          // fresh connection, so a separate follow-up call would see no
          // rowid at all.
          const combined = isInsert ? `${finalSql};\nSELECT last_insert_rowid() as id;` : finalSql
          const results = execSql(databaseName, combined)
          if (isInsert) {
            const idRow = results[results.length - 1]?.results?.[0] as { id?: number } | undefined
            return { success: true, meta: { last_row_id: idRow?.id } }
          }
          return { success: results.every((r) => r.success) }
        },
      }
      return stmt
    },
    async batch<T>(statements: D1PreparedStatement[]) {
      // Concatenated into one wrangler invocation rather than one per
      // statement -- a 44-package migration issues hundreds of batched
      // inserts (gallery rows, pricing rows, tier stays...), and per-call
      // Node/wrangler startup cost adds up fast otherwise. Not a real
      // transaction (no atomicity guarantee across statements) -- fine
      // here, since src/lib/packages.ts's replace*() functions only rely
      // on being safe to re-run, never on batch() rolling back a partial
      // failure.
      const withSql = statements as LocalStatement[]
      if (withSql.length === 0) return []
      const combinedSql = withSql.map((s) => `${s._finalSql()};`).join('\n')
      const results = execSql(databaseName, combinedSql)
      if (results.length !== statements.length) {
        throw new Error(`batch(): expected ${statements.length} results, got ${results.length}`)
      }
      return results.map((r) => ({ success: r.success, results: (r.results ?? []) as T[] }))
    },
  }
}
