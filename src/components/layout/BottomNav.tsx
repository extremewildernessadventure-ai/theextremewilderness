'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  X,
} from 'lucide-react'

const moreItems = [
  { label: 'Destinations', href: '/destinations', Icon: MapPin },
  { label: 'Tanzania',     href: '/tanzania',     Icon: Globe },
  { label: 'Kenya',        href: '/kenya',        Icon: Globe },
  { label: 'Rwanda',       href: '/rwanda',       Icon: Globe },
  { label: 'Experiences',  href: '/experiences',  Icon: Sparkles },
  { label: 'Itineraries',  href: '/itineraries',  Icon: List },
  { label: 'About',        href: '/about',        Icon: Info },
]

export default function BottomNav() {
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const tabCls = (active: boolean) =>
    `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
      active ? 'text-gold' : 'text-white/55'
    }`

  const close = () => setMoreOpen(false)

  return (
    <>
      {/* Backdrop */}
      {moreOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[59] lg:hidden"
          onClick={close}
        />
      )}

      {/* Slide-up "More" sheet */}
      <div
        className={`fixed bottom-16 left-0 right-0 z-[60] lg:hidden bg-brand rounded-t-2xl border-t border-white/10 transition-transform duration-200 ease-out ${
          moreOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
      >
        <div className="p-5 pb-6">
          <div className="flex items-center justify-between mb-5">
            <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">
              More Sections
            </span>
            <button
              onClick={close}
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {moreItems.map(({ label, href, Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl px-4 py-3 transition-colors"
              >
                <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden h-16 bg-brand border-t border-white/10 flex items-stretch">
        {/* Home */}
        <Link href="/" className={tabCls(isActive('/'))}>
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>

        {/* Safaris */}
        <Link href="/safaris" className={tabCls(isActive('/safaris'))}>
          <Compass className="w-5 h-5" />
          <span>Safaris</span>
        </Link>

        {/* Trekking */}
        <Link href="/trekking" className={tabCls(isActive('/trekking'))}>
          <Mountain className="w-5 h-5" />
          <span>Trekking</span>
        </Link>

        {/* Plan My Safari — gold CTA pill */}
        <Link
          href="/contact"
          className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
            isActive('/contact') ? 'text-gold' : 'text-white/55'
          }`}
        >
          <div className="bg-gold rounded-full p-1.5">
            <CalendarDays className="w-4 h-4 text-brand" />
          </div>
          <span>Plan</span>
        </Link>

        {/* More */}
        <button
          onClick={() => setMoreOpen((o) => !o)}
          className={tabCls(moreOpen)}
          aria-label="More"
        >
          <Grid2x2 className="w-5 h-5" />
          <span>More</span>
        </button>
      </nav>
    </>
  )
}
