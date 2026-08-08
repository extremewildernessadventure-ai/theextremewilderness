'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { useSearch } from '@/context/SearchContext'

// Pages with no dark hero section behind the fixed nav — the transparent
// white-text state has poor contrast there, so these start opaque immediately
// instead of waiting for the user to scroll.
const NO_HERO_ROUTES = ['/plan']

export default function Navbar() {
  const t = useTranslations('nav')
  const tSearch = useTranslations('search')
  const { openSearch } = useSearch()
  const pathname = usePathname()
  const forceOpaque = NO_HERO_ROUTES.includes(pathname)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: t('destinations'), href: '/destinations' as const },
    { label: t('safaris'), href: '/safaris' as const },
    { label: t('experiences'), href: '/experiences' as const },
    { label: t('trekking'), href: '/trekking' as const },
    { label: t('about'), href: '/about' as const },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || forceOpaque ? 'bg-brand' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/EWA logo.webp"
              alt="EWA Safari Outfitters"
              width={128}
              height={64}
              className="object-contain w-16 h-auto lg:w-24 lg:h-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language switcher + Social + CTA (desktop only) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openSearch}
              aria-label={tSearch('navLabel')}
              className="hidden lg:flex w-8 h-8 items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <LanguageSwitcher />
            <a
              href="https://www.instagram.com/extremewildernessadventure/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden lg:flex w-8 h-8 items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/theextremewilderness/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hidden lg:flex w-8 h-8 items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold hover:bg-gold-dark text-brand font-semibold text-sm rounded-lg transition-colors"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
