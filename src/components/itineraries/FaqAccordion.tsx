'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

interface Props {
  faqs: FaqItem[]
}

export default function FaqAccordion({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
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
            style={{ maxHeight: open === i ? '600px' : '0px' }}
          >
            <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
