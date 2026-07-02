'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import {
  Home,
  Compass,
  Mountain,
  CalendarDays,
  Grid2x2,
  MapPin,
  Globe,
  Sparkles,
  List,
  Info,
  BookOpen,
  X,
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
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()

  const destItems = [
    { label: t('destinations'), href: '/destinations' as const, Icon: MapPin },
    { label: t('tanzania'),     href: '/tanzania' as const,     Icon: Globe },
    { label: t('kenya'),        href: '/kenya' as const,        Icon: Globe },
    { label: t('rwanda'),       href: '/rwanda' as const,       Icon: Globe },
  ]

  const safariItems = [
    { label: t('safaris'),          href: '/safaris' as const,       Icon: Compass },
    { label: t('tanzaniaPackages'), href: '/safaris' as const,       Icon: Globe },
    { label: t('kenyaPackages'),    href: '/kenya#packages',         Icon: Globe },
    { label: t('rwandaPackages'),   href: '/rwanda#packages',        Icon: Globe },
  ]

  const otherItems = [
    { label: t('blog'),         href: '/blog' as const,         Icon: BookOpen },
    { label: t('experiences'),  href: '/experiences' as const,  Icon: Sparkles },
    { label: t('itineraries'),  href: '/itineraries' as const,  Icon: List },
    { label: t('about'),        href: '/about' as const,        Icon: Info },
  ]

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const tabCls = (active: boolean) =>
    `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
      active ? 'text-gold' : 'text-white/75'
    }`

  const close = () => setMoreOpen(false)

  useEffect(() => { setMoreOpen(false) }, [pathname])

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
        <div className="tew-sheet-enter fixed bottom-16 left-0 right-0 z-[60] lg:hidden bg-brand rounded-t-2xl border-t border-white/10 max-h-[75vh] overflow-y-auto">
          <div className="p-5 pb-6">
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">
                {t('moreSections')}
              </span>
              <button
                onClick={close}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-2">{t('destinations')}</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {destItems.map(({ label, href, Icon }) => (
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

            <div className="border-t border-white/10 mb-4" />

            <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-2">{t('safarisSection')}</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {safariItems.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl px-4 py-3 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{label}</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-white/10 mb-4" />

            <div className="grid grid-cols-2 gap-3">
              {otherItems.map(({ label, href, Icon }) => (
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

      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden h-16 bg-brand border-t border-white/10 flex items-stretch">
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

        <button
          onClick={() => setMoreOpen((o) => !o)}
          className={tabCls(moreOpen)}
          aria-label="More"
        >
          <Grid2x2 className="w-5 h-5" />
          <span>{t('more')}</span>
        </button>
      </nav>
    </>
  )
}
