'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useBooking } from '@/context/BookingContext'
import { useSearch } from '@/context/SearchContext'
import {
  Home,
  Compass,
  Mountain,
  CalendarDays,
  Grid2x2,
  MapPin,
  Sparkles,
  Info,
  BookOpen,
  Handshake,
  BedDouble,
  Search,
  X,
  ArrowRight,
} from 'lucide-react'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)
const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default function BottomNav() {
  const t = useTranslations('bottomNav')
  const tf = useTranslations('forms')
  const tc = useTranslations('common')
  const tSearch = useTranslations('search')
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()
  const { pageBookingInfo, openBooking } = useBooking()
  const { openSearch } = useSearch()

  const moreItems = [
    { label: t('destinations'),  href: '/destinations' as const,  Icon: MapPin },
    { label: t('experiences'),   href: '/experiences' as const,   Icon: Sparkles },
    { label: t('about'),         href: '/about' as const,         Icon: Info },
    { label: t('blog'),          href: '/blog' as const,          Icon: BookOpen },
    { label: t('tradePartners'), href: '/trade-partners' as const, Icon: Handshake },
    { label: t('accommodations'), href: '/accommodations' as const, Icon: BedDouble },
  ]

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const tabCls = (active: boolean) =>
    `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
      active ? 'text-gold' : 'text-white/75'
    }`

  const close = () => setMoreOpen(false)

  useEffect(() => { setMoreOpen(false) }, [pathname])

  // Tawk's widget forces itself to an extremely high z-index (see the
  // tawk-reposition script in the root layout), so it floats above this
  // sheet regardless of stacking order here — hide it for the duration.
  useEffect(() => {
    const w = window as typeof window & { Tawk_API?: { hideWidget?: () => void; showWidget?: () => void } }
    const ring = document.getElementById('tawk-pulse-ring')
    if (moreOpen) {
      w.Tawk_API?.hideWidget?.()
      if (ring) ring.style.display = 'none'
    } else {
      w.Tawk_API?.showWidget?.()
      if (ring) ring.style.display = ''
    }
  }, [moreOpen])

  return (
    <>
      <style>{`
        @keyframes tew-sheet-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .tew-sheet-enter { animation: tew-sheet-up 0.22s ease-out both; }
      `}</style>

      {moreOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[59] lg:hidden"
          onClick={close}
        />
      )}

      {moreOpen && (
        <div className="tew-sheet-enter fixed bottom-16 inset-x-0 z-[60] lg:hidden bg-brand rounded-t-2xl border-t border-white/10 max-h-[75vh] overflow-y-auto">
          <div className="p-5 pb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">
                {t('moreSections')}
              </span>
              <button
                onClick={close}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label={tf('closeLabel')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Plan My Safari CTA */}
            {pageBookingInfo ? (
              <button
                onClick={() => { close(); openBooking(pageBookingInfo) }}
                className="flex items-center justify-center gap-2 w-full py-3.5 mb-5 bg-gold hover:bg-gold-dark text-brand font-bold text-sm rounded-xl transition-colors"
              >
                <CalendarDays className="w-4 h-4" />
                Plan My Safari
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            ) : (
              <Link
                href="/contact"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full py-3.5 mb-5 bg-gold hover:bg-gold-dark text-brand font-bold text-sm rounded-xl transition-colors"
              >
                <CalendarDays className="w-4 h-4" />
                Plan My Safari
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            )}

            <button
              type="button"
              onClick={() => { close(); openSearch() }}
              className="flex items-center gap-3 w-full bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl px-4 py-3 mb-3 transition-colors"
            >
              <Search className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-white text-sm font-medium">{tSearch('navLabel')}</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              {moreItems.map(({ label, href, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl px-4 py-3 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
              <span className="text-white/60 text-xs uppercase tracking-wider">{t('followUs')}</span>
              <a
                href="https://www.instagram.com/extremewildernessadventure/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 flex-1 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl px-4 py-2.5 transition-colors text-gold"
              >
                <IgIcon />
                <span className="text-white text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/theextremewilderness/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 flex-1 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl px-4 py-2.5 transition-colors text-gold"
              >
                <FbIcon />
                <span className="text-white text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden h-16 bg-brand border-t border-white/10 flex items-stretch print:hidden">
        <Link href="/" className={tabCls(isActive('/'))}>
          <Home className="w-5 h-5" />
          <span>{t('home')}</span>
        </Link>

        <Link href="/safaris" className={tabCls(isActive('/safaris'))}>
          <Compass className="w-5 h-5" />
          <span>{t('safaris')}</span>
        </Link>

        <Link href="/trekking" className={tabCls(isActive('/trekking'))}>
          <Mountain className="w-5 h-5" />
          <span>{t('trekking')}</span>
        </Link>

        {pageBookingInfo ? (
          <button
            onClick={() => openBooking(pageBookingInfo)}
            className="flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors text-white/75"
          >
            <div className="bg-gold rounded-full p-1.5">
              <CalendarDays className="w-4 h-4 text-brand" />
            </div>
            <span>{t('plan')}</span>
          </button>
        ) : (
          <Link
            href="/contact"
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
              isActive('/contact') ? 'text-gold' : 'text-white/75'
            }`}
          >
            <div className="bg-gold rounded-full p-1.5">
              <CalendarDays className="w-4 h-4 text-brand" />
            </div>
            <span>{t('plan')}</span>
          </Link>
        )}

        <button
          onClick={() => setMoreOpen((o) => !o)}
          className={tabCls(moreOpen)}
          aria-label={tc('moreLabel')}
        >
          <Grid2x2 className="w-5 h-5" />
          <span>{t('more')}</span>
        </button>
      </nav>
    </>
  )
}
