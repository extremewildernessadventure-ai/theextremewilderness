import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { FALLBACK_CHAIN, getAvailableChain, rungKey } from './aiProviders'

const ALL_ENV_VARS = Array.from(new Set(FALLBACK_CHAIN.map((r) => r.apiKeyEnv)))

describe('getAvailableChain', () => {
  const original: Record<string, string | undefined> = {}

  beforeEach(() => {
    for (const key of ALL_ENV_VARS) {
      original[key] = process.env[key]
      delete process.env[key]
    }
  })

  afterEach(() => {
    for (const key of ALL_ENV_VARS) {
      if (original[key] === undefined) delete process.env[key]
      else process.env[key] = original[key]
    }
  })

  it('returns nothing when no provider keys are set', () => {
    expect(getAvailableChain()).toEqual([])
  })

  it('returns only the rungs whose provider key is set', () => {
    process.env.GROQ_API_KEY = 'test-key'
    const chain = getAvailableChain()
    expect(chain.length).toBeGreaterThan(0)
    expect(chain.every((r) => r.provider === 'groq')).toBe(true)
  })

  it('grows as more provider keys are added, preserving chain order', () => {
    process.env.GROQ_API_KEY = 'test-key'
    process.env.GEMINI_API_KEY = 'test-key'
    const chain = getAvailableChain()
    const providers = chain.map((r) => r.provider)
    expect(providers).toContain('groq')
    expect(providers).toContain('gemini')
    expect(providers).not.toContain('cerebras')
    expect(providers).not.toContain('openrouter')
    // order matches FALLBACK_CHAIN's relative order, not insertion order of env vars
    expect(chain).toEqual(FALLBACK_CHAIN.filter((r) => r.provider === 'groq' || r.provider === 'gemini'))
  })

  it('includes every rung once all provider keys are set', () => {
    for (const key of ALL_ENV_VARS) process.env[key] = 'test-key'
    expect(getAvailableChain()).toEqual(FALLBACK_CHAIN)
  })
})

describe('rungKey', () => {
  it('combines provider and model into a stable key', () => {
    expect(rungKey({ provider: 'groq', baseUrl: 'x', apiKeyEnv: 'GROQ_API_KEY', model: 'llama-3.3-70b-versatile' })).toBe(
      'groq:llama-3.3-70b-versatile'
    )
  })
})
