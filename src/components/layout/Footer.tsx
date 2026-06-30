import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const socialIcons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ),
}

const destinations = [
  { label: 'Serengeti National Park', href: '/destinations/serengeti' },
  { label: 'Ngorongoro Crater', href: '/destinations/ngorongoro' },
  { label: 'Tarangire National Park', href: '/destinations/tarangire' },
  { label: 'Zanzibar Island', href: '/destinations/zanzibar' },
  { label: 'Masai Mara, Kenya', href: '/kenya' },
  { label: 'Gorilla Trekking, Rwanda', href: '/rwanda' },
]

const safaris = [
  { label: '7 Days Serengeti & Ngorongoro', href: '/safaris/7-day-serengeti-ngorongoro' },
  { label: '10 Days Northern Circuit', href: '/safaris/10-day-northern-circuit' },
  { label: 'Safari & Zanzibar Beach', href: '/safaris/10-day-safari-zanzibar' },
  { label: 'Kilimanjaro Machame Route', href: '/safaris/kilimanjaro-machame-7day' },
  { label: 'Southern Circuit', href: '/safaris/7-day-southern-circuit' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Why Choose Us', href: '/about#why-us' },
  { label: 'Our Guides', href: '/about#guides' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer — 5 columns on xl, tighter gap to fit */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1fr_0.8fr_1fr] gap-6 lg:gap-8 text-center md:text-left">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center">
                <span className="text-brand font-bold text-sm">EW</span>
              </div>
              <div>
                <div className="font-semibold text-sm leading-tight">The Extreme</div>
                <div className="text-gold text-xs tracking-widest uppercase">Wilderness</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Where the Wild Calls You Home. Tanzania-born and locally owned, crafting custom safaris since 2009.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Arusha, Tanzania</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+255 (0) 767 000 000</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>info@theextremewilderness.com</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              {([
                { label: 'Instagram', href: 'https://www.instagram.com/extremewildernessadventure/' },
                { label: 'Facebook',  href: 'https://www.facebook.com/theextremewilderness/' },
                { label: 'YouTube',   href: '#' },
              ] as const).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-gold hover:text-brand rounded-lg flex items-center justify-center transition-colors"
                >
                  {socialIcons[label]}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safaris */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">Safari Packages</h3>
            <ul className="space-y-2">
              {safaris.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership / Affiliation */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">Memberships &amp; Affiliations</h3>
            <div className="relative w-full h-28">
              <Image
                src="/Route%20maps/membership.png"
                alt="Our memberships and affiliations"
                fill
                className="object-contain object-center md:object-left-top"
                sizes="180px"
              />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} The Extreme Wilderness. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
