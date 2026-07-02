'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm({ dark = true }: { dark?: boolean }) {
  const tf = useTranslations('forms')
  const [name, setName]     = useState('')
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const inputCls = dark
    ? 'w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold'
    : 'w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-brand placeholder-gray-400 text-sm focus:outline-none focus:border-gold'
  const btnCls = dark
    ? 'w-full py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed'
    : 'w-full py-3 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed'
  const noteCls = dark ? 'text-white/60 text-xs text-center' : 'text-gray-400 text-xs text-center'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={dark ? 'text-white/80 text-sm text-center py-4' : 'text-brand/80 text-sm text-center py-4'}>
        {tf('subscribeSuccess')}
      </p>
    )
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <label htmlFor="nl-name" className="sr-only">{tf('yourNamePlaceholder')}</label>
      <input
        id="nl-name"
        type="text"
        placeholder={tf('yourNamePlaceholder')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputCls}
      />
      <label htmlFor="nl-email" className="sr-only">{tf('yourEmailPlaceholder')}</label>
      <input
        id="nl-email"
        type="email"
        required
        aria-required="true"
        placeholder={tf('yourEmailPlaceholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputCls}
      />
      <button type="submit" disabled={status === 'loading'} className={btnCls}>
        {status === 'loading' ? tf('subscribing') : tf('subscribeButton')}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-red-400 text-xs text-center">{tf('subscribeError')}</p>
      )}
      <p className={noteCls}>{tf('noSpam')}</p>
    </form>
  )
}
