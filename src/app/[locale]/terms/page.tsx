import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  Mail, Phone, ChevronRight, FileText, Users, DollarSign, XCircle,
  AlertTriangle, Edit3, UserCheck, Shield, Scale, MessageCircle,
  Lock, CheckCircle2, CloudLightning, Star,
} from 'lucide-react'
import TableOfContents from '@/components/legal/TableOfContents'

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Extreme Wilderness',
  description: 'Terms and Conditions for booking safaris, trekking, and travel experiences with The Extreme Wilderness. Includes cancellation policy, liability, and insurance requirements.',
}

const EFFECTIVE_DATE = '1 July 2026'
const EMAIL = 'info@theextremewilderness.com'
const PHONE = '+255 (0) 747 999 070'

function SectionHeading({ number, title, icon: Icon, sectionLabel }: { number: string; title: string; icon: React.ElementType; sectionLabel: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mt-0.5">
        <Icon className="w-5 h-5 text-brand" />
      </div>
      <div>
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-0.5">{sectionLabel} {number}</p>
        <h2 className="text-2xl font-bold text-brand">{title.replace(/^\d+\.\s/, '')}</h2>
      </div>
    </div>
  )
}

function GoldBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function Callout({ children, warning }: { children: React.ReactNode; warning?: boolean }) {
  if (warning) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>{children}</div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  )
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border-l-4 border-brand rounded-r-xl p-5 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  )
}

export default async function TermsPage() {
  const t = await getTranslations('terms')
  const sl = t('sectionLabel')

  const tocSections = [
    { id: 'agreement',   title: t('s1Title') },
    { id: 'bookings',    title: t('s2Title') },
    { id: 'pricing',     title: t('s3Title') },
    { id: 'cancel-you',  title: t('s4Title') },
    { id: 'cancel-us',   title: t('s5Title') },
    { id: 'changes',     title: t('s6Title') },
    { id: 'client',      title: t('s7Title') },
    { id: 'insurance',   title: t('s8Title') },
    { id: 'liability',   title: t('s9Title') },
    { id: 'health',      title: t('s10Title') },
    { id: 'force',       title: t('s11Title') },
    { id: 'complaints',  title: t('s12Title') },
    { id: 'law',         title: t('s13Title') },
    { id: 'privacy-ref', title: t('s14Title') },
    { id: 'contact',     title: t('s15Title') },
  ]

  const insurance = [
    [t('s8ins1Title'), t('s8ins1Desc')],
    [t('s8ins2Title'), t('s8ins2Desc')],
    [t('s8ins3Title'), t('s8ins3Desc')],
    [t('s8ins4Title'), t('s8ins4Desc')],
  ]

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-brand overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[18rem] font-black text-white/[0.03] leading-none tracking-tighter">EW</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white/70 text-xs mb-5">
              <FileText className="w-3.5 h-3.5 text-gold" />
              {t('lastUpdatedPrefix')} {EFFECTIVE_DATE}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle1')} <span className="text-gold">{t('heroTitle2')}</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">{t('heroSubtitle')}</p>
          </div>

          {/* Notice pill */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 bg-gold/20 border border-gold/40 rounded-xl">
            <AlertTriangle className="w-4 h-4 text-gold flex-shrink-0" />
            <p className="text-white/90 text-xs">
              {t('noticePillPrefix')}{' '}
              <a href={`mailto:${EMAIL}`} className="text-gold underline">{EMAIL}</a>
            </p>
          </div>

          <div className="mt-10 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

          {/* ── Main content ─────────────────────────────────────────────── */}
          <div className="space-y-0">

            {/* 1. Agreement */}
            <section id="agreement" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="1" title={t('s1Title')} icon={FileText} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-4">{t('s1p1')}</p>
              <TipBox>{t('s1tip')}</TipBox>
            </section>

            {/* 2. Bookings */}
            <section id="bookings" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="2" title={t('s2Title')} icon={Users} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-5">{t('s2p1')}</p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-brand/10 text-center">
                    <p className="text-3xl font-black text-gold mb-1">{t('s2card1Value')}</p>
                    <p className="text-brand font-bold text-sm">{t('s2card1Label')}</p>
                    <p className="text-text-muted text-xs mt-1">{t('s2card1Sub')}</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-brand/10 text-center">
                    <p className="text-3xl font-black text-gold mb-1">{t('s2card2Value')}</p>
                    <p className="text-brand font-bold text-sm">{t('s2card2Label')}</p>
                    <p className="text-text-muted text-xs mt-1">{t('s2card2Sub')}</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-brand/10 text-center">
                    <p className="text-3xl font-black text-gold mb-1">{t('s2card3Value')}</p>
                    <p className="text-brand font-bold text-sm">{t('s2card3Label')}</p>
                    <p className="text-text-muted text-xs mt-1">{t('s2card3Sub')}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <Callout>{t('s2callout')}</Callout>
                </div>
              </div>
            </section>

            {/* 3. Pricing */}
            <section id="pricing" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="3" title={t('s3Title')} icon={DollarSign} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s3p1')}</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-bold text-brand text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> {t('s3inc')}
                  </h3>
                  <GoldBulletList items={[t('s3i1'), t('s3i2'), t('s3i3'), t('s3i4'), t('s3i5'), t('s3i6'), t('s3i7')]} />
                </div>
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-bold text-brand text-sm mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" /> {t('s3exc')}
                  </h3>
                  <GoldBulletList items={[t('s3e1'), t('s3e2'), t('s3e3'), t('s3e4'), t('s3e5'), t('s3e6'), t('s3e7')]} />
                </div>
              </div>

              <TipBox>{t('s3tip')}</TipBox>
            </section>

            {/* 4. Cancellation by client */}
            <section id="cancel-you" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="4" title={t('s4Title')} icon={XCircle} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-6">{t('s4p1')}</p>

                <div className="overflow-x-auto rounded-2xl border border-brand/10 bg-white">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand text-white">
                        <th className="text-left px-5 py-3.5 font-semibold rounded-tl-2xl">{t('s4th1')}</th>
                        <th className="text-left px-5 py-3.5 font-semibold rounded-tr-2xl">{t('s4th2')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-5 py-4 text-gray-700">{t('s4tr1c1')}</td>
                        <td className="px-5 py-4 font-semibold text-green-700">{t('s4tr1c2')}</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <td className="px-5 py-4 text-gray-700">{t('s4tr2c1')}</td>
                        <td className="px-5 py-4 font-semibold text-amber-700">{t('s4tr2c2')}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-5 py-4 text-gray-700">{t('s4tr3c1')}</td>
                        <td className="px-5 py-4 font-semibold text-orange-700">{t('s4tr3c2')}</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="px-5 py-4 text-gray-700 font-medium rounded-bl-2xl">{t('s4tr4c1')}</td>
                        <td className="px-5 py-4 font-bold text-red-700 rounded-br-2xl">{t('s4tr4c2')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-5">
                  <Callout>{t('s4callout')}</Callout>
                </div>
              </div>
            </section>

            {/* 5. Cancellation by us */}
            <section id="cancel-us" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="5" title={t('s5Title')} icon={AlertTriangle} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s5p1')}</p>
              <GoldBulletList items={[t('s5item1'), t('s5item2')]} />
              <div className="mt-5">
                <Callout warning>{t('s5callout')}</Callout>
              </div>
            </section>

            {/* 6. Itinerary changes */}
            <section id="changes" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="6" title={t('s6Title')} icon={Edit3} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-4">{t('s6p1')}</p>
                <TipBox>{t('s6tip')}</TipBox>
              </div>
            </section>

            {/* 7. Client responsibilities */}
            <section id="client" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="7" title={t('s7Title')} icon={UserCheck} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s7p1')}</p>
              <GoldBulletList items={[t('s7item1'), t('s7item2'), t('s7item3'), t('s7item4'), t('s7item5'), t('s7item6'), t('s7item7')]} />
            </section>

            {/* 8. Insurance */}
            <section id="insurance" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="8" title={t('s8Title')} icon={Shield} sectionLabel={sl} />

                <div className="mb-5">
                  <Callout warning>{t('s8callout')}</Callout>
                </div>

                <p className="text-gray-700 leading-relaxed mb-5">{t('s8p1')}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {insurance.map(([title, desc]) => (
                    <div key={title} className="bg-white rounded-xl p-4 border border-brand/10">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-brand text-sm">{title}</p>
                          <p className="text-text-muted text-xs mt-0.5">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. Liability */}
            <section id="liability" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="9" title={t('s9Title')} icon={Scale} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s9p1')}</p>
              <GoldBulletList items={[t('s9item1'), t('s9item2'), t('s9item3'), t('s9item4'), t('s9item5'), t('s9item6')]} />
              <div className="mt-5">
                <Callout>{t('s9callout')}</Callout>
              </div>
            </section>

            {/* 10. Health */}
            <section id="health" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="10" title={t('s10Title')} icon={Star} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-4">{t('s10p1')}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{t('s10p2')}</p>
                <TipBox>{t('s10tip')}</TipBox>
              </div>
            </section>

            {/* 11. Force majeure */}
            <section id="force" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="11" title={t('s11Title')} icon={CloudLightning} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-4">{t('s11p1')}</p>
              <GoldBulletList items={[t('s11item1'), t('s11item2'), t('s11item3'), t('s11item4'), t('s11item5')]} />
              <div className="mt-5">
                <TipBox>{t('s11tip')}</TipBox>
              </div>
            </section>

            {/* 12. Complaints */}
            <section id="complaints" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="12" title={t('s12Title')} icon={MessageCircle} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-4">{t('s12p1')}</p>
                <p className="text-gray-700 leading-relaxed">
                  {t('s12p2Prefix')}{' '}
                  <a href={`mailto:${EMAIL}`} className="text-brand font-semibold underline">{EMAIL}</a>{' '}
                  {t('s12p2Suffix')}
                </p>
              </div>
            </section>

            {/* 13. Governing law */}
            <section id="law" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="13" title={t('s13Title')} icon={Scale} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-4">{t('s13p1')}</p>
              <Callout>{t('s13callout')}</Callout>
            </section>

            {/* 14. Privacy ref */}
            <section id="privacy-ref" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="14" title={t('s14Title')} icon={Lock} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-4">{t('s14p1')}</p>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  {t('privacyPageBtn')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* 15. Contact */}
            <section id="contact" className="scroll-mt-28 py-10">
              <SectionHeading number="15" title={t('s15Title')} icon={MessageCircle} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-6">{t('s15p1')}</p>
              <div className="bg-brand rounded-2xl p-8 md:p-10 text-center">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t('getInTouchEyebrow')}</p>
                <h3 className="text-white text-2xl font-bold mb-2">{t('companyName')}</h3>
                <p className="text-white/60 text-sm mb-8">{t('location')}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {EMAIL}
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {PHONE}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                >
                  {t('contactPageBtn')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

          </div>

          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <TableOfContents sections={tocSections} />
        </div>

        {/* Cross-link bar */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="text-brand hover:underline flex items-center gap-1">
            <ChevronRight className="w-4 h-4 rotate-180" /> {t('backToHome')}
          </Link>
          <Link href="/privacy" className="text-brand hover:underline flex items-center gap-1">
            {t('privacyLink')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
