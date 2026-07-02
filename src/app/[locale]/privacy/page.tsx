import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Mail, Phone, ChevronRight, ShieldCheck, Eye, Share2, Globe, Clock, UserCheck, Lock, Baby, RefreshCw, Cookie, MessageCircle } from 'lucide-react'
import TableOfContents from '@/components/legal/TableOfContents'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Extreme Wilderness',
  description: 'How The Extreme Wilderness collects, uses, and protects your personal data. GDPR-compliant privacy policy for our safari booking services.',
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

function Callout({ children }: { children: React.ReactNode }) {
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

export default async function PrivacyPage() {
  const t = await getTranslations('privacy')
  const sl = t('sectionLabel')

  const tocSections = [
    { id: 'overview',      title: t('s1Title') },
    { id: 'who-we-are',   title: t('s2Title') },
    { id: 'data-collect', title: t('s3Title') },
    { id: 'how-we-use',   title: t('s4Title') },
    { id: 'sharing',      title: t('s5Title') },
    { id: 'transfers',    title: t('s6Title') },
    { id: 'retention',    title: t('s7Title') },
    { id: 'rights',       title: t('s8Title') },
    { id: 'cookies',      title: t('s9Title') },
    { id: 'children',     title: t('s10Title') },
    { id: 'security',     title: t('s11Title') },
    { id: 'changes',      title: t('s12Title') },
    { id: 'contact',      title: t('s13Title') },
  ]

  const rights = [
    [t('s8r1Name'), t('s8r1Desc')],
    [t('s8r2Name'), t('s8r2Desc')],
    [t('s8r3Name'), t('s8r3Desc')],
    [t('s8r4Name'), t('s8r4Desc')],
    [t('s8r5Name'), t('s8r5Desc')],
    [t('s8r6Name'), t('s8r6Desc')],
    [t('s8r7Name'), t('s8r7Desc')],
  ]

  const cookies = [
    { name: t('s9c1Name'), desc: t('s9c1Desc'), colour: 'bg-brand/10 border-brand/20 text-brand' },
    { name: t('s9c2Name'), desc: t('s9c2Desc'), colour: 'bg-gold/10 border-gold/30 text-brand' },
    { name: t('s9c3Name'), desc: t('s9c3Desc'), colour: 'bg-gray-100 border-gray-200 text-brand' },
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
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              {t('lastUpdatedPrefix')} {EFFECTIVE_DATE}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle1')} <span className="text-gold">{t('heroTitle2')}</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">{t('heroSubtitle')}</p>
          </div>

          <div className="mt-10 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

          {/* ── Main content ─────────────────────────────────────────────── */}
          <div className="space-y-0">

            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="1" title={t('s1Title')} icon={ShieldCheck} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s1p1')}</p>
              <TipBox>{t('s1tip')}</TipBox>
            </section>

            {/* 2. Who We Are */}
            <section id="who-we-are" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="2" title={t('s2Title')} icon={Eye} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-4">{t('s2p1')}</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-brand/20 text-brand text-sm font-medium hover:bg-brand hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    {EMAIL}
                  </a>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-brand/20 text-brand text-sm font-medium hover:bg-brand hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    {PHONE}
                  </a>
                </div>
              </div>
            </section>

            {/* 3. Data We Collect */}
            <section id="data-collect" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="3" title={t('s3Title')} icon={Eye} sectionLabel={sl} />
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand text-sm mb-3">{t('s3card1Title')}</h3>
                  <GoldBulletList items={[t('s3item1'), t('s3item2'), t('s3item3'), t('s3item4'), t('s3item5')]} />
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand text-sm mb-3">{t('s3card2Title')}</h3>
                  <GoldBulletList items={[t('s3item6'), t('s3item7'), t('s3item8')]} />
                </div>
              </div>
            </section>

            {/* 4. How We Use Your Data */}
            <section id="how-we-use" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="4" title={t('s4Title')} icon={Eye} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-5">{t('s4p1')}</p>
                <GoldBulletList items={[t('s4item1'), t('s4item2'), t('s4item3'), t('s4item4'), t('s4item5'), t('s4item6')]} />
                <div className="mt-6">
                  <Callout>{t('s4callout')}</Callout>
                </div>
              </div>
            </section>

            {/* 5. Sharing Your Data */}
            <section id="sharing" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="5" title={t('s5Title')} icon={Share2} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s5p1')}</p>
              <GoldBulletList items={[t('s5item1'), t('s5item2'), t('s5item3'), t('s5item4'), t('s5item5'), t('s5item6')]} />
              <div className="mt-6">
                <TipBox>{t('s5tip')}</TipBox>
              </div>
            </section>

            {/* 6. International Transfers */}
            <section id="transfers" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="6" title={t('s6Title')} icon={Globe} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed">{t('s6p1')}</p>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section id="retention" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="7" title={t('s7Title')} icon={Clock} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s7p1')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="text-brand font-bold text-sm mb-1">{t('s7card1Label')}</p>
                  <p className="text-2xl font-black text-gold">{t('s7card1Value')}</p>
                  <p className="text-text-muted text-xs mt-1">{t('s7card1Sub')}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="text-brand font-bold text-sm mb-1">{t('s7card2Label')}</p>
                  <p className="text-2xl font-black text-gold">{t('s7card2Value')}</p>
                  <p className="text-text-muted text-xs mt-1">{t('s7card2Sub')}</p>
                </div>
              </div>
            </section>

            {/* 8. Your Rights */}
            <section id="rights" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="8" title={t('s8Title')} icon={UserCheck} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed mb-5">{t('s8p1')}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {rights.map(([right, desc]) => (
                    <div key={right} className="bg-white rounded-xl p-4 border border-brand/10">
                      <p className="font-bold text-brand text-sm">{right}</p>
                      <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Callout>
                    {t('s8callout', { email: EMAIL })}
                  </Callout>
                </div>
              </div>
            </section>

            {/* 9. Cookies */}
            <section id="cookies" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="9" title={t('s9Title')} icon={Cookie} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-5">{t('s9p1')}</p>
              <div className="space-y-3">
                {cookies.map((cookie) => (
                  <div key={cookie.name} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold border ${cookie.colour}`}>{cookie.name}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{cookie.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-text-muted text-sm mt-4">{t('s9note')}</p>
            </section>

            {/* 10. Children's Privacy */}
            <section id="children" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="10" title={t('s10Title')} icon={Baby} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed">{t('s10p1')}</p>
              </div>
            </section>

            {/* 11. Security */}
            <section id="security" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="11" title={t('s11Title')} icon={Lock} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-4">{t('s11p1')}</p>
              <TipBox>{t('s11tip')}</TipBox>
            </section>

            {/* 12. Changes */}
            <section id="changes" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="12" title={t('s12Title')} icon={RefreshCw} sectionLabel={sl} />
                <p className="text-gray-700 leading-relaxed">{t('s12p1')}</p>
              </div>
            </section>

            {/* 13. Contact */}
            <section id="contact" className="scroll-mt-28 py-10">
              <SectionHeading number="13" title={t('s13Title')} icon={MessageCircle} sectionLabel={sl} />
              <p className="text-gray-700 leading-relaxed mb-6">{t('s13p1')}</p>
              <div className="bg-brand rounded-2xl p-8 md:p-10 text-center">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t('dataProtectionEyebrow')}</p>
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
          <Link href="/terms" className="text-brand hover:underline flex items-center gap-1">
            {t('termsLink')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
