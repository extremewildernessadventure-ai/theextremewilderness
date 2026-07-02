'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const tc = useTranslations('common')
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const navLinks = [
    {
      label: t('destinations'),
      href: '/destinations' as const,
      children: [
        { label: t('tanzania'), href: '/tanzania' as const, flag: '🇹🇿', desc: t('tanzaniaDesc') },
        { label: t('kenya'), href: '/kenya' as const, flag: '🇰🇪', desc: t('kenyaDesc') },
        { label: t('rwanda'), href: '/rwanda' as const, flag: '🇷🇼', desc: t('rwandaDesc') },
      ],
    },
    {
      label: t('safaris'),
      href: '/safaris' as const,
      children: [
        { label: t('tanzaniaSafaris'), href: '/safaris' as const, flag: '🇹🇿', desc: t('tanzaniaSafarisDesc') },
        { label: t('kenyaSafaris'), href: '/kenya#packages', flag: '🇰🇪', desc: t('kenyaSafarisDesc') },
        { label: t('rwandaSafaris'), href: '/rwanda#packages', flag: '🇷🇼', desc: t('rwandaSafarisDesc') },
      ],
    },
    { label: t('experiences'), href: '/experiences' as const },
    { label: t('itineraries'), href: '/itineraries' as const },
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
        scrolled ? 'bg-brand shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/EWA logo.webp"
              alt="EWA Safari Outfitters"
              width={160}
              height={80}
              className="object-contain w-16 h-auto lg:w-24 lg:h-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3 opacity-70" />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                    <div className="bg-brand rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                      <div className="px-5 py-3 border-b border-white/10">
                        <span className="text-gold text-[10px] font-bold uppercase tracking-[0.15em]">
                          {link.label}
                        </span>
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-4 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group/item"
                        >
                          <span className="text-2xl flex-shrink-0">{child.flag}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-sm group-hover/item:text-gold transition-colors">
                              {child.label}
                            </div>
                            {'desc' in child && (
                              <div className="text-white/50 text-xs leading-tight mt-0.5 truncate">
                                {(child as { desc: string }).desc}
                              </div>
                            )}
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover/item:text-gold group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                        </Link>
                      ))}
                      <div className="px-5 py-3 border-t border-white/10">
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold hover:gap-2.5 transition-all"
                        >
                          {tc('viewAll')} {link.label} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language switcher + Social + CTA + Hamburger */}
          <div className="flex items-center gap-2 lg:gap-3">
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
            {/* Hamburger — tablet & mobile (hidden on desktop) */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down menu for tablet / mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-brand border-t border-white/10 shadow-2xl">
          <nav className="px-6 sm:px-10 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between w-full px-3 py-3 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4 opacity-60" />}
                </Link>
                {link.children && (
                  <div className="ml-4 pl-4 border-l border-white/10 space-y-1 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 text-white/80 text-sm rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span className="text-lg flex-shrink-0">{child.flag}</span>
                        <div>
                          <div className="font-medium">{child.label}</div>
                          {'desc' in child && (
                            <div className="text-white/50 text-xs leading-tight">{(child as { desc: string }).desc}</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-gold hover:bg-gold-dark text-brand font-bold text-sm rounded-xl transition-colors"
              >
                {t('cta')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
