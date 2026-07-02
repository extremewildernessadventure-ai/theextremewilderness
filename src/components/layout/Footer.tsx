import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
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

export default async function Footer() {
  const t = await getTranslations('footer')

  const destinations = [
    { label: t('destSerengeti'),   href: '/destinations/serengeti' },
    { label: t('destNgorongoro'),  href: '/destinations/ngorongoro' },
    { label: t('destTarangire'),   href: '/destinations/tarangire' },
    { label: t('destZanzibar'),    href: '/destinations/zanzibar' },
    { label: t('destMasaiMara'),   href: '/kenya' },
    { label: t('destGorilla'),     href: '/rwanda' },
  ]

  const safaris = [
    { label: t('safariSerengetiNgorongoro'), href: '/safaris/7-day-serengeti-ngorongoro' },
    { label: t('safariNorthernCircuit'),     href: '/safaris/10-day-northern-circuit' },
    { label: t('safariZanzibar'),            href: '/safaris/10-day-safari-zanzibar' },
    { label: t('safariMachame'),             href: '/safaris/kilimanjaro-machame-7day' },
    { label: t('safariSouthern'),            href: '/safaris/7-day-southern-circuit' },
  ]

  const company = [
    { label: t('companyAbout'), href: '/about' },
    { label: t('companyWhyUs'), href: '/about#why-us' },
    { label: t('companyGuides'), href: '/about#guides' },
    { label: t('companyBlog'), href: '/blog' },
    { label: t('companyContact'), href: '/contact' },
  ] as const

  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1fr_0.8fr_1fr] gap-6 lg:gap-8 text-center md:text-left">

          {/* Brand column */}
          <div className="xl:row-span-2">
            <div className="flex mb-4 justify-center md:justify-start">
              <Image
                src="/EWA logo.png"
                alt="EWA Safari Outfitters"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">{t('tagline')}</p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{t('location')}</span>
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
                { label: 'YouTube',   href: 'https://www.youtube.com/@ExtremeWildernessAdventure' },
              ] as const).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">{t('destinations')}</h3>
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
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">{t('safariPackages')}</h3>
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
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">{t('company')}</h3>
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
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gold mb-4">{t('memberships')}</h3>
            <div className="flex flex-wrap gap-4 items-center">
              {[
                { src: '/Boards%20affiliated/Google%20reviews.png', alt: 'Google Reviews' },
                { src: '/Boards%20affiliated/Tanapa.png', alt: 'TANAPA' },
                { src: '/Boards%20affiliated/TripAdvisor.png', alt: 'TripAdvisor' },
                { src: '/Boards%20affiliated/safari-bookings.png', alt: 'Safari Bookings' },
                { src: '/Boards%20affiliated/tanzania-tourist-board.png', alt: 'Tanzania Tourist Board' },
              ].map(({ src, alt }) => (
                <div key={alt} className="relative h-14 w-14 flex-shrink-0">
                  <Image src={src} alt={alt} fill className="object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Trust strip — fills empty space below nav columns */}
          <div className="xl:col-start-2 xl:col-span-4 xl:self-end flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4 xl:pt-0 xl:pb-2 text-center sm:text-left">

            <div className="shrink-0">
              <div className="flex gap-0.5 justify-center sm:justify-start mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white font-bold text-lg">4.9 / 5</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{t('trustGuests')}</p>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10 shrink-0 self-center" />

            <div className="flex gap-6 shrink-0">
              {([
                { value: '97%',  label: t('trustFiveStar') },
                { value: '40+',  label: t('trustCountries') },
                { value: '100%', label: t('trustBigFive') },
              ] as const).map(({ value, label }) => (
                <div key={value}>
                  <p className="text-gold font-bold text-lg">{value}</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10 shrink-0 self-center" />

            <blockquote className="border-l-2 border-gold pl-3 text-left">
              <p className="text-white/60 text-sm leading-relaxed italic">{t('trustQuote')}</p>
              <footer className="mt-1.5 text-gold text-xs font-semibold not-italic">{t('trustQuoteAuthor')}</footer>
            </blockquote>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col items-center gap-3 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <p className="text-xs">Developed by <a href="https://matowodev.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MatowoDev</a></p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
