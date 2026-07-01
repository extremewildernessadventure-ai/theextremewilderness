import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import {
  ArrowRight, MapPin, Star, Users, Award,
  Globe, Shield, Clock, Leaf,
  Mail, Phone,
} from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Us | The Extreme Wilderness',
    description: "Tanzania-born and locally owned since 2022. Meet the guides and team behind The Extreme Wilderness.",
  }
}

const galleryImages = [
  '/images/gallery/serengeti (1).png',
  '/images/gallery/safari-007.jpg',
  '/images/gallery/kilimanjaro (1).png',
  '/images/gallery/elephants.png',
  '/images/gallery/safari-014.jpg',
  '/images/gallery/zanzibar (1).png',
]

export default async function AboutPage() {
  const t = await getTranslations('about')

  const stats = [
    { value: '4.9', label: t('tripAdvisorRating'), sub: t('tripAdvisorSub'), icon: Star },
    { value: '200+', label: t('happyTravellers'), sub: t('happyTravellersSub'), icon: Users },
    { value: '20+', label: t('tanzaniaRegions'), sub: t('tanzaniaRegionsSub'), icon: MapPin },
    { value: 'TATO', label: t('tatoCertifiedLabel'), sub: t('tatoCertifiedLabelSub'), icon: Award },
  ]

  const values = [
    { icon: Globe, title: t('locallyOwnedTitle'), body: t('locallyOwnedBody') },
    { icon: Shield, title: t('expertGuidesTitle'), body: t('expertGuidesBody') },
    { icon: Users, title: t('privateOnlyTitle'), body: t('privateOnlyBody') },
    { icon: Clock, title: t('yearsTitle'), body: t('yearsBody') },
  ]

  const team = [
    {
      image: '/Team/Mike Mawolle.png',
      name: 'Mike Mawolle',
      role: 'Destinations Manager',
      bio: 'Mike oversees our entire destination portfolio across Tanzania, Kenya, and Rwanda. He knows every park, lodge, and back road — and makes sure every itinerary is built around what each destination does best.',
    },
    {
      image: '/Team/Johnson Rafael.jpeg',
      name: 'Johnson Rafael',
      role: 'Safari Guide',
      bio: 'Johnson brings the bush to life with expert wildlife knowledge and calm precision behind the wheel. TANAPA-certified and fluent in multiple languages, he turns every game drive into a story worth telling.',
    },
    {
      image: '/Team/Joshua Meela.jpeg',
      name: 'Josh Meela',
      role: 'Mountain Guide',
      bio: 'Joshua has led hundreds of climbers to the Kilimanjaro summit across all major routes. His deep knowledge of altitude, weather patterns, and pacing keeps every trekker safe and on track.',
    },
  ]

  const pills = [t('est2009'), t('tatoCertified'), t('locallyOwned'), t('arushaBased')]

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand min-h-[90vh] flex items-stretch overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 pt-32 pb-16 lg:py-32">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('ourStory')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t('weAreTanzania').split(' ').slice(0, -1).join(' ')} <span className="text-gold">{t('weAreTanzania').split(' ').slice(-1)}</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {pills.map((pill) => (
              <span key={pill} className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium">
                {pill}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors self-start"
          >
            {t('planYourSafari')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-brand to-transparent" />
          <Image src="/images/gallery/elephants.png" alt="Serengeti at sunrise" fill className="object-cover" priority sizes="50vw" />
        </div>
        <div className="lg:hidden absolute inset-0 z-0">
          <Image src="/images/gallery/elephants.png" alt="Serengeti at sunrise" fill className="object-cover opacity-20" priority sizes="100vw" />
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────────── */}
      <section className="bg-brand border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(({ value, label, sub, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center px-6 py-4">
                <Icon className="w-5 h-5 text-gold mb-3" />
                <span className="text-4xl font-black text-gold leading-none mb-1">{value}</span>
                <span className="text-white text-sm font-semibold">{label}</span>
                <span className="text-white/50 text-xs mt-0.5">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section id="why-us" className="bg-light-green py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('whyLocalMatters')}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-6 leading-tight">
                {t('whyChooseLocal')}
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">{t('localDesc1')}</p>
              <div className="bg-white rounded-2xl p-6 border-l-4 border-gold my-7 shadow-sm">
                <p className="text-brand font-semibold text-base italic leading-relaxed">
                  &ldquo;{t('pullQuote')}&rdquo;
                </p>
                <p className="text-text-muted text-xs mt-3 font-medium">{t('pullQuoteAuthor')}</p>
              </div>
              <p className="text-text-muted leading-relaxed mb-5">{t('localDesc2')}</p>
              <p className="text-text-muted leading-relaxed">{t('localDesc3')}</p>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/gallery/kilimanjaro (1).png" alt="Guide in the field" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-brand font-bold text-sm">{t('ecoConscious')}</p>
                    <p className="text-text-muted text-xs">{t('ecoConsSub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('ourDifference')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand">{t('whatMakesDifferent')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-brand/30 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-brand font-bold text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {galleryImages.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden group">
            <Image src={src} alt={t('safariMoment')} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 33vw, 16vw" />
            <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors" />
          </div>
        ))}
      </div>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section id="guides" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('thePeople')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-3">{t('meetTheTeam')}</h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">{t('teamDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map(({ image, name, role, bio }) => (
              <div key={name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
                <div className="flex justify-center mb-5">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gold/30 group-hover:ring-gold/60 transition-all flex-shrink-0">
                    <Image src={image} alt={name} width={128} height={128} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <span className="inline-flex px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full uppercase tracking-wider mb-3">{role}</span>
                <h3 className="text-brand font-bold text-xl mb-3">{name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Location ──────────────────────────────────────────────── */}
      <section className="bg-light-green py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('ourLocation')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand">{t('findOurOffice')}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-brand rounded-2xl p-8 lg:p-10 flex flex-col min-h-[400px]">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t('ourOfficeCard')}</p>
              <h3 className="text-white font-bold text-2xl leading-snug mb-6">
                {t('companyName')}
              </h3>
              <div className="border-t border-white/10 mb-6" />
              <div className="space-y-1">
                <p className="text-white/70 text-sm">Near Kaloleni Primary School</p>
                <p className="text-white/70 text-sm">Kaloleni, Arusha</p>
                <p className="text-white/70 text-sm">Tanzania, East Africa</p>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href="https://www.google.com/maps/place/The+Extreme+Wilderness+Adventure/@-3.3649565,36.6889837,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                >
                  {t('getDirections')} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm min-h-[400px] ring-1 ring-black/5">
              <iframe
                src="https://maps.google.com/maps?q=-3.3649565,36.6889837&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Extreme Wilderness Adventure office location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('letsStartPlanning')}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">{t('readyToPlan')}</h2>
              <p className="text-white/70 leading-relaxed mb-8 text-base">{t('ctaDesc')}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/safaris" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
                  {t('viewSafariPackages')} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">
                  {t('contactUs')}
                </Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <p className="text-white font-bold text-lg mb-6">{t('reachUsDirectly')}</p>
              <div className="space-y-4 mb-8">
                <a href="mailto:info@theextremewilderness.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">{t('emailLabel')}</p>
                    <p className="text-sm font-medium">info@theextremewilderness.com</p>
                  </div>
                </a>
                <a href="tel:+255767000000" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">{t('phoneLabel')}</p>
                    <p className="text-sm font-medium">+255 (0) 767 000 000</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">{t('officeLabel')}</p>
                    <p className="text-sm font-medium">{t('officeArusha')}</p>
                  </div>
                </div>
              </div>
              <p className="text-white/40 text-xs">{t('responseNote')}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
