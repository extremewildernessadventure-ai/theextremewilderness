export interface ModelRung {
  provider: string
  baseUrl: string
  apiKeyEnv: string
  model: string
}

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const CEREBRAS_URL = 'https://api.cerebras.ai/v1/chat/completions'
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions'
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'

// Ordered best-quality-first. Each rung is tried until one succeeds; a rung
// that returns 429/5xx is skipped for the rest of its cooldown window (see
// route.ts). Multiple providers hosting the same open-weight model (e.g.
// gpt-oss-120b on both Groq and Cerebras) are intentional — independent
// quota pools for the same quality tier.
export const FALLBACK_CHAIN: ModelRung[] = [
  { provider: 'groq', baseUrl: GROQ_URL, apiKeyEnv: 'GROQ_API_KEY', model: 'llama-3.3-70b-versatile' },
  { provider: 'groq', baseUrl: GROQ_URL, apiKeyEnv: 'GROQ_API_KEY', model: 'openai/gpt-oss-120b' },
  { provider: 'cerebras', baseUrl: CEREBRAS_URL, apiKeyEnv: 'CEREBRAS_API_KEY', model: 'gpt-oss-120b' },
  { provider: 'groq', baseUrl: GROQ_URL, apiKeyEnv: 'GROQ_API_KEY', model: 'meta-llama/llama-4-scout-17b-16e-instruct' },
  { provider: 'gemini', baseUrl: GEMINI_URL, apiKeyEnv: 'GEMINI_API_KEY', model: 'gemini-2.5-flash' },
  { provider: 'groq', baseUrl: GROQ_URL, apiKeyEnv: 'GROQ_API_KEY', model: 'openai/gpt-oss-20b' },
  { provider: 'groq', baseUrl: GROQ_URL, apiKeyEnv: 'GROQ_API_KEY', model: 'qwen/qwen3.6-27b' },
  { provider: 'cerebras', baseUrl: CEREBRAS_URL, apiKeyEnv: 'CEREBRAS_API_KEY', model: 'gemma-4-31b' },
  { provider: 'groq', baseUrl: GROQ_URL, apiKeyEnv: 'GROQ_API_KEY', model: 'llama-3.1-8b-instant' },
  { provider: 'openrouter', baseUrl: OPENROUTER_URL, apiKeyEnv: 'OPENROUTER_API_KEY', model: 'openrouter/free' },
]

// Filters out any rung whose provider key isn't configured, so the chain
// degrades gracefully to whichever providers are actually set up.
export function getAvailableChain(): ModelRung[] {
  return FALLBACK_CHAIN.filter((r) => !!process.env[r.apiKeyEnv])
}

export function rungKey(rung: ModelRung): string {
  return `${rung.provider}:${rung.model}`
}
