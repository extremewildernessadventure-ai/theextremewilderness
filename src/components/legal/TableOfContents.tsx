'use client'

import { useEffect, useRef, useState } from 'react'
import { List } from 'lucide-react'

interface Section {
  id: string
  title: string
}

interface Props {
  sections: Section[]
}

export default function TableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [sections])

  return (
    <div className="lg:sticky lg:top-24 space-y-4">
      {/* Desktop TOC card */}
      <div className="hidden lg:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 bg-brand">
          <List className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Contents</span>
        </div>
        <nav className="py-2">
          {sections.map((s) => {
            const isActive = activeId === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-all border-l-2 ${
                  isActive
                    ? 'border-gold bg-gold/5 text-brand font-semibold'
                    : 'border-transparent text-text-muted hover:text-brand hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                {s.title}
              </a>
            )
          })}
        </nav>
      </div>

      {/* Mobile TOC accordion */}
      <details className="lg:hidden border border-brand/20 rounded-xl overflow-hidden group">
        <summary className="flex items-center justify-between px-5 py-4 bg-brand/5 cursor-pointer select-none list-none">
          <div className="flex items-center gap-2">
            <List className="w-4 h-4 text-brand" />
            <span className="text-brand text-sm font-semibold">Jump to section</span>
          </div>
          <svg
            className="w-4 h-4 text-brand transition-transform group-open:rotate-180"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <nav className="bg-white border-t border-brand/10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex px-5 py-3 text-sm text-text-muted hover:text-brand hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </details>

      {/* Need help? nudge */}
      <div className="hidden lg:block bg-brand rounded-2xl p-5 text-center">
        <p className="text-white/70 text-xs mb-3 leading-relaxed">Have a question about our policies?</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold hover:bg-gold-dark text-brand font-bold text-xs rounded-lg transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
