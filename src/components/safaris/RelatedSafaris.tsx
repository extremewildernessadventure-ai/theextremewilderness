'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import type { SafariPackage } from '@/data/packages'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

const SHOWN = 3

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function RelatedSafaris({ current, all }: { current: SafariPackage; all: SafariPackage[] }) {
  const t = useTranslations('safari')
  const tc = useTranslations('common')

  const candidates = all.filter(
    (p) =>
      p.slug !== current.slug &&
      (p.type === current.type || p.destinations.some((d) => current.destinations.includes(d)))
  )

  // Render a stable, deterministic slice on the server/first paint (so
  // hydration matches), then reshuffle client-side after mount — every
  // fresh page load picks a different set instead of always the same first 3.
  const [related, setRelated] = useState(() => candidates.slice(0, SHOWN))

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reshuffles client-side, after the hydration-matching first paint, so the "you might like" set rotates per visit instead of always showing the same deterministic slice
    setRelated(shuffle(candidates).slice(0, SHOWN))
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only reshuffle once per mount, not on every candidates re-render
  }, [current.slug])

  if (related.length === 0) return null

  return (
    <div className="bg-light-green py-12">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-brand mb-5">{t('otherSafaris')}</h2>
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/safaris/${p.slug}`}
                className="group block h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={p.heroImage}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-brand text-lg leading-tight">{p.name}</p>
                  <p className="text-text-muted text-base mt-1.5">
                    {p.duration} {tc('nights')}
                  </p>
                  <p className="text-gold font-bold text-lg mt-3">
                    ${p.priceFrom.toLocaleString('en-US')}{' '}
                    <span className="text-text-muted font-normal text-sm">{tc('perPerson')}</span>
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </div>
  )
}
