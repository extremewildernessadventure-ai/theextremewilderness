import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getPackages } from '@/data/packages.i18n'
import { getDestinations } from '@/data/destinations.i18n'
import { packageTags } from '@/data/packageTags'
import { buildCatalog, buildSystemPrompt, filterKnownSlugs, RESULTS_SENTINEL } from '@/lib/aiCatalog'
import { getAvailableChain, rungKey, type ModelRung } from '@/lib/aiProviders'

// Prevents Next.js from treating this route as statically cacheable, which
// would otherwise buffer the whole stream before serving instead of flushing
// chunks as they arrive.
export const dynamic = 'force-dynamic'

const MAX_QUESTION_LENGTH = 500
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 8

// Best-effort, in-memory, per-server-instance — resets on cold start/redeploy.
// Enough to deter casual abuse of a free public AI endpoint; not meant to
// survive multi-instance scaling.
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  requestLog.set(ip, recent)
  return recent.length > RATE_LIMIT_MAX
}

// Tracks, per model rung, the timestamp until which it should be skipped
// after a 429/5xx — same in-memory-per-instance caveat as `requestLog` above.
const exhaustedUntil = new Map<string, number>()

function isExhausted(rung: ModelRung): boolean {
  const until = exhaustedUntil.get(rungKey(rung))
  return !!until && until > Date.now()
}

function markExhausted(rung: ModelRung, res: Response): void {
  const retryAfter = Number(res.headers.get('retry-after'))
  const cooldownMs = retryAfter > 0
    ? retryAfter * 1000
    : Date.UTC(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate() + 1
      ) - Date.now()
  exhaustedUntil.set(rungKey(rung), Date.now() + cooldownMs)
}

const resultSchema = z.object({
  packageSlugs: z.array(z.string()).max(5).default([]),
  reasoning: z.record(z.string(), z.string()).optional(),
})

function encodeEvent(event: Record<string, unknown>): Uint8Array {
  return new TextEncoder().encode(`${JSON.stringify(event)}\n`)
}

// Re-frames Groq's raw SSE stream into our own NDJSON protocol: `token` events
// for narrative text emitted before the model's `<<<RESULTS>>>` sentinel, then
// one `result` and `done` event once the trailing JSON block is fully
// received, parsed, schema-validated and slug-filtered against real data.
// The sentinel can land split across two SSE chunks, so unemitted text is
// held back a sentinel's-length at a time until it's safe to flush.
//
// `pull()` loops internally until it has something to enqueue (or the
// upstream is done) rather than returning empty-handed — some SSE chunks
// (e.g. Groq's leading empty-content role announcement) parse to nothing,
// and a `pull()` that resolves without enqueuing never gets re-invoked here,
// permanently stalling the response.
function buildAdviceStream(
  groqBody: ReadableStream<Uint8Array>,
  validPackageSlugs: Set<string>
): ReadableStream<Uint8Array> {
  const reader = groqBody.getReader()
  const decoder = new TextDecoder()
  const sentinelLen = RESULTS_SENTINEL.length

  let sseBuffer = ''
  let pending = ''
  let tailBuffer = ''
  let sawSentinel = false

  function emitResult(controller: ReadableStreamDefaultController<Uint8Array>) {
    if (pending) {
      controller.enqueue(encodeEvent({ type: 'token', value: pending }))
      pending = ''
    }
    if (!tailBuffer.trim()) {
      controller.enqueue(encodeEvent({ type: 'result', packageSlugs: [] }))
      return
    }
    try {
      const parsed = resultSchema.parse(JSON.parse(tailBuffer.trim()))
      const packageSlugs = filterKnownSlugs(parsed.packageSlugs, validPackageSlugs)
      controller.enqueue(encodeEvent({ type: 'result', packageSlugs, reasoning: parsed.reasoning ?? {} }))
    } catch {
      controller.enqueue(encodeEvent({ type: 'result', packageSlugs: [] }))
    }
  }

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      for (;;) {
        const { done, value } = await reader.read()
        if (done) {
          emitResult(controller)
          controller.enqueue(encodeEvent({ type: 'done' }))
          controller.close()
          return
        }

        sseBuffer += decoder.decode(value, { stream: true })
        const lines = sseBuffer.split('\n')
        sseBuffer = lines.pop() ?? ''

        let enqueuedAny = false
        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed.startsWith('data:')) continue
          const payload = trimmed.slice(5).trim()
          if (payload === '[DONE]') continue

          let delta = ''
          try {
            delta = JSON.parse(payload).choices?.[0]?.delta?.content ?? ''
          } catch {
            continue
          }
          if (!delta) continue

          if (sawSentinel) {
            tailBuffer += delta
            continue
          }

          pending += delta
          const idx = pending.indexOf(RESULTS_SENTINEL)
          if (idx !== -1) {
            const before = pending.slice(0, idx)
            if (before) {
              controller.enqueue(encodeEvent({ type: 'token', value: before }))
              enqueuedAny = true
            }
            sawSentinel = true
            tailBuffer = pending.slice(idx + sentinelLen)
            pending = ''
          } else {
            const safeLen = Math.max(0, pending.length - (sentinelLen - 1))
            if (safeLen > 0) {
              controller.enqueue(encodeEvent({ type: 'token', value: pending.slice(0, safeLen) }))
              enqueuedAny = true
              pending = pending.slice(safeLen)
            }
          }
        }

        if (enqueuedAny) return
        // Nothing worth showing came out of this chunk (e.g. an empty-content
        // announcement, or a sentinel-only delta) — keep reading from Groq
        // until we have something to give the consumer.
      }
    },
    cancel() {
      reader.cancel()
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { question?: string; locale?: string }
    const question = body.question?.trim()
    const locale = body.locale ?? 'en'

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }
    if (question.length > MAX_QUESTION_LENGTH) {
      return NextResponse.json({ error: 'Question is too long' }, { status: 400 })
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests — please wait a moment.' }, { status: 429 })
    }

    const chain = getAvailableChain()
    if (chain.length === 0) {
      console.error('Travel-advice API error: no provider API keys are configured')
      return NextResponse.json({ error: 'AI service unavailable' }, { status: 500 })
    }

    const packages = getPackages(locale)
    const destinations = getDestinations(locale)
    const catalog = buildCatalog(packages, destinations, packageTags)
    const validPackageSlugs = new Set(packages.map((p) => p.slug))
    const systemPrompt = buildSystemPrompt(catalog, locale)

    for (const rung of chain) {
      if (isExhausted(rung)) continue

      let res: Response
      try {
        res = await fetch(rung.baseUrl, {
          method: 'POST',
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${process.env[rung.apiKeyEnv]}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: rung.model,
            stream: true,
            temperature: 0.4,
            // Generous headroom: some providers (e.g. Gemini 2.5's internal
            // "thinking" tokens) consume part of this budget invisibly before
            // producing any visible output, so a tight cap truncates the
            // answer before it reaches the <<<RESULTS>>> sentinel.
            max_tokens: 2000,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: question },
            ],
          }),
        })
      } catch (err) {
        console.error(`Travel-advice: ${rungKey(rung)} request failed`, err)
        continue
      }

      if (res.status === 429 || res.status >= 500) {
        console.error(`Travel-advice: ${rungKey(rung)} unavailable (${res.status}), trying next rung`)
        markExhausted(rung, res)
        continue
      }

      if (!res.ok || !res.body) {
        console.error(`Travel-advice: ${rungKey(rung)} error`, res.status, await res.text().catch(() => ''))
        continue
      }

      console.log(`[travel-advice] serving from ${rungKey(rung)}`)
      const stream = buildAdviceStream(res.body, validPackageSlugs)
      return new Response(stream, {
        headers: { 'Content-Type': 'application/x-ndjson', 'Cache-Control': 'no-cache' },
      })
    }

    console.error('Travel-advice API error: all model rungs exhausted or failed')
    return NextResponse.json({ error: 'AI service unavailable' }, { status: 502 })
  } catch (err) {
    console.error('Travel-advice API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
