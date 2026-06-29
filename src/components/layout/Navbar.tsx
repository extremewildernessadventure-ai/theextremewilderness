'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      {
        label: 'Tanzania',
        href: '/tanzania',
        flag: '🇹🇿',
        desc: 'Serengeti · Ngorongoro · Zanzibar',
      },
      {
        label: 'Kenya',
        href: '/kenya',
        flag: '🇰🇪',
        desc: 'Masai Mara · Amboseli · Tsavo',
      },
      {
        label: 'Rwanda',
        href: '/rwanda',
        flag: '🇷🇼',
        desc: 'Volcanoes NP · Gorilla Trekking',
      },
    ],
  },
  {
    label: 'Safaris',
    href: '/safaris',
    children: [
      {
        label: 'Tanzania Safaris',
        href: '/safaris',
        flag: '🇹🇿',
        desc: 'Wildlife · Migration · Beach & Safari',
      },
      {
        label: 'Kenya Safaris',
        href: '/kenya',
        flag: '🇰🇪',
        desc: 'Big Cat Country · Masai Mara',
      },
      {
        label: 'Rwanda Safaris',
        href: '/rwanda',
        flag: '🇷🇼',
        desc: 'Gorilla Trekking · Nyungwe',
      },
    ],
  },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Itineraries', href: '/itineraries' },
  { label: 'Trekking', href: '/trekking' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-brand shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-brand font-bold text-sm">EW</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">The Extreme</div>
              <div className="text-gold text-xs leading-tight tracking-widest uppercase">Wilderness</div>
            </div>
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
                  <div className="absolute top-full left-0 pt-1 min-w-56">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-light-green transition-colors group/item"
                        >
                          <div>
                            <div className="text-sm font-semibold text-brand group-hover/item:text-brand-secondary transition-colors">
                              {child.label}
                            </div>
                            {'desc' in child && (
                              <div className="text-xs text-text-muted leading-tight mt-0.5">
                                {(child as { desc: string }).desc}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold hover:bg-gold-dark text-brand font-semibold text-sm rounded-lg transition-colors"
            >
              Plan My Safari
            </Link>
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-white font-medium rounded-lg hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-0.5 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div>
                          <div className="text-sm text-white font-medium">{child.label}</div>
                          {'desc' in child && (
                            <div className="text-xs text-white/50 leading-tight">
                              {(child as { desc: string }).desc}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-gold text-brand font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Plan My Safari
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
