'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { RELATED_LINK_IMAGES } from '@/data/faq'

interface FaqItem {
  q: string
  a: string
  relatedLinks?: { label: string; href: string }[]
}

interface Props {
  faqs: FaqItem[]
  columns?: 1 | 2
}

export default function FaqAccordion({ faqs, columns = 1 }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-3 items-start' : 'space-y-3'}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-brand text-sm sm:text-base leading-snug">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? '900px' : '0px' }}
          >
            <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">
              {faq.a}
            </p>
            {faq.relatedLinks && faq.relatedLinks.length > 0 && (
              <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {faq.relatedLinks.map((link) => {
                  const image = RELATED_LINK_IMAGES[link.href]
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group relative h-28 rounded-xl overflow-hidden block bg-brand"
                    >
                      {image && (
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/30 to-transparent" />
                      <span className="absolute bottom-3 left-4 right-4 text-white font-semibold text-sm leading-snug">
                        {link.label}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
