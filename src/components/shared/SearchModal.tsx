'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Search as SearchIcon } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, useRouter } from '@/i18n/navigation'
import { useSearch } from '@/context/SearchContext'
import type { SearchResult, SearchResultType } from '@/lib/search'

const TYPE_LABEL_KEY: Record<SearchResultType, string> = {
  safari: 'typeSafari',
  destination: 'typeDestination',
  experience: 'typeExperience',
  blog: 'typeBlog',
  faq: 'typeFaq',
  accommodation: 'typeAccommodation',
}

export default function SearchModal() {
  const t = useTranslations('search')
  const tf = useTranslations('forms')
  const locale = useLocale()
  const router = useRouter()
  const { isOpen, closeSearch } = useSearch()
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setResults([])
      setSearched(false)
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [isOpen])

  useEffect(() => {
    const trimmed = query.trim()
    if (trimmed.length < 2) {
      setResults([])
      setSearched(false)
      setLoading(false)
      return
    }
    setLoading(true)
    const controller = new AbortController()
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(trimmed)}&locale=${locale}`, { signal: controller.signal })
        .then((res) => res.json() as Promise<{ results: SearchResult[] }>)
        .then((data) => {
          setResults(data.results)
          setSearched(true)
          setLoading(false)
        })
        .catch((err) => {
          if (err?.name !== 'AbortError') setLoading(false)
        })
    }, 300)
    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query, locale])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSearch() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeSearch])

  useEffect(() => {
    if (!isOpen || !modalRef.current) return
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [isOpen])

  const goToResultsPage = () => {
    const trimmed = query.trim()
    if (!trimmed) return
    router.push(`/search?q=${encodeURIComponent(trimmed)}`)
    closeSearch()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    goToResultsPage()
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-brand/75 backdrop-blur-sm"
        onClick={closeSearch}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-[101] flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-28 pointer-events-none">
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('navLabel')}
          className="relative w-full max-w-xl max-h-[70vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
        >
          <button
            onClick={closeSearch}
            className="absolute top-3 end-3 w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label={tf('closeLabel')}
          >
            <X className="w-4 h-4 text-brand" />
          </button>

          <form onSubmit={handleSubmit} className="flex-shrink-0 bg-brand px-5 pt-5 pb-4">
            <div className="relative">
              <SearchIcon className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('placeholder')}
                className="w-full ps-10 pe-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </form>

          <div className="flex-1 overflow-y-auto">
            {loading && (
              <div className="py-10 text-center text-text-muted text-sm">{t('searching')}</div>
            )}

            {!loading && searched && results.length === 0 && (
              <div className="py-10 px-6 text-center">
                <p className="text-brand font-semibold text-sm mb-1">{t('noResultsTitle')}</p>
                <p className="text-text-muted text-sm">{t('noResultsBody')}</p>
              </div>
            )}

            {!loading && results.length > 0 && (
              <ul className="divide-y divide-gray-100">
                {results.map((r) => (
                  <li key={`${r.type}-${r.href}`}>
                    <Link
                      href={r.href}
                      onClick={closeSearch}
                      className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gold-label bg-gold/10 px-2 py-0.5 rounded-full">
                            {t(TYPE_LABEL_KEY[r.type])}
                          </span>
                        </div>
                        <p className="text-brand font-semibold text-sm truncate">{r.title}</p>
                        <p className="text-text-muted text-xs mt-0.5 line-clamp-1">{r.snippet}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {query.trim().length >= 2 && (
            <button
              type="button"
              onClick={goToResultsPage}
              className="flex-shrink-0 w-full py-3 border-t border-gray-100 text-brand text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              {t('seeAllResults', { query: query.trim() })}
            </button>
          )}
        </div>
      </div>
    </>
  )
}
