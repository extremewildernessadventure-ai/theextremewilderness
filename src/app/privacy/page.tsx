import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, ChevronRight, ShieldCheck, Eye, Share2, Globe, Clock, UserCheck, Lock, Baby, RefreshCw, Cookie, MessageCircle } from 'lucide-react'
import TableOfContents from '@/components/legal/TableOfContents'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Extreme Wilderness',
  description: 'How The Extreme Wilderness collects, uses, and protects your personal data. GDPR-compliant privacy policy for our safari booking services.',
}

const EFFECTIVE_DATE = '1 July 2026'
const EMAIL = 'info@theextremewilderness.com'
const PHONE = '+255 (0) 767 000 000'

const sections = [
  { id: 'overview',      title: '1. Overview',                icon: ShieldCheck },
  { id: 'who-we-are',   title: '2. Who We Are',              icon: Eye },
  { id: 'data-collect', title: '3. Data We Collect',         icon: Eye },
  { id: 'how-we-use',   title: '4. How We Use Your Data',    icon: Eye },
  { id: 'sharing',      title: '5. Sharing Your Data',       icon: Share2 },
  { id: 'transfers',    title: '6. International Transfers', icon: Globe },
  { id: 'retention',    title: '7. Data Retention',          icon: Clock },
  { id: 'rights',       title: '8. Your Rights',             icon: UserCheck },
  { id: 'cookies',      title: '9. Cookies',                 icon: Cookie },
  { id: 'children',     title: '10. Children\'s Privacy',    icon: Baby },
  { id: 'security',     title: '11. Security',               icon: Lock },
  { id: 'changes',      title: '12. Changes to This Policy', icon: RefreshCw },
  { id: 'contact',      title: '13. Contact Us',             icon: MessageCircle },
]

const tocSections = sections.map(({ id, title }) => ({ id, title }))

function SectionHeading({ number, title, icon: Icon }: { number: string; title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mt-0.5">
        <Icon className="w-5 h-5 text-brand" />
      </div>
      <div>
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-0.5">Section {number}</p>
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

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-brand overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[18rem] font-black text-white/[0.03] leading-none tracking-tighter">EW</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-xs mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/30">Legal</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">Privacy Policy</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white/70 text-xs mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              Last updated: {EFFECTIVE_DATE}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              We are committed to protecting your personal data. This policy explains exactly what we collect, why, and how you stay in control — including your rights under GDPR.
            </p>
          </div>

          {/* Gold divider bar */}
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
              <SectionHeading number="1" title="Overview" icon={ShieldCheck} />
              <p className="text-gray-700 leading-relaxed mb-5">
                The Extreme Wilderness ("we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains what data we collect when you visit our website or enquire about our safari services, how we use it, and your rights under applicable data protection laws — including the EU General Data Protection Regulation (GDPR) and the UK GDPR.
              </p>
              <TipBox>
                By using our website or submitting an enquiry, you agree to the collection and use of information in accordance with this policy.
              </TipBox>
            </section>

            {/* 2. Who We Are */}
            <section id="who-we-are" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="2" title="Who We Are" icon={Eye} />
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Extreme Wilderness is a Tanzania-registered safari operator based in Arusha, Tanzania. We design and operate custom safaris, Kilimanjaro climbs, and wildlife experiences across Tanzania, Kenya, and Rwanda.
                </p>
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
              <SectionHeading number="3" title="Data We Collect" icon={Eye} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand text-sm mb-3">Information you provide directly</h3>
                  <GoldBulletList items={[
                    'Full name, email address, phone number',
                    'Passport details (required for booking only)',
                    'Travel dates, group size, dietary requirements, and relevant medical conditions',
                    'Payment information (processed by our payment provider — we do not store card details)',
                    'Correspondence via email, contact forms, or chat',
                  ]} />
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand text-sm mb-3">Information collected automatically</h3>
                  <GoldBulletList items={[
                    'IP address, browser type, and device information',
                    'Pages visited, time on site, and referring URLs',
                    'Cookie data (see Section 9)',
                  ]} />
                </div>
              </div>
            </section>

            {/* 4. How We Use Your Data */}
            <section id="how-we-use" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="4" title="How We Use Your Data" icon={Eye} />
                <p className="text-gray-700 leading-relaxed mb-5">We use your personal information to:</p>
                <GoldBulletList items={[
                  'Respond to safari enquiries and prepare personalised itineraries',
                  'Process bookings and issue travel documents',
                  'Communicate pre-trip details, updates, and post-trip follow-ups',
                  'Send promotional emails and newsletters (only where you have opted in)',
                  'Comply with legal obligations (e.g. Tanzania Tourism Authority reporting)',
                  'Improve our website and services through anonymised analytics',
                ]} />
                <div className="mt-6">
                  <Callout>
                    <strong className="text-brand">Legal basis (GDPR):</strong> Contract performance for booking processing · Legitimate interests for customer service and business improvement · Consent for marketing communications.
                  </Callout>
                </div>
              </div>
            </section>

            {/* 5. Sharing Your Data */}
            <section id="sharing" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="5" title="Sharing Your Data" icon={Share2} />
              <p className="text-gray-700 leading-relaxed mb-5">
                We do not sell your personal data. We share it only with trusted third parties necessary to deliver your safari:
              </p>
              <GoldBulletList items={[
                'Partner lodges, camps, and hotels — to confirm your accommodation',
                'Local ground operators and guides — to facilitate activities',
                'Airlines and transfer services — where booked through us',
                'Payment processors — to handle transactions securely',
                'Analytics providers (e.g. Google Analytics) — using anonymised data only',
                'Regulatory authorities — where required by Tanzanian or other applicable law',
              ]} />
              <div className="mt-6">
                <TipBox>
                  All third parties are contractually required to protect your data and use it only for the stated purpose.
                </TipBox>
              </div>
            </section>

            {/* 6. International Transfers */}
            <section id="transfers" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="6" title="International Transfers" icon={Globe} />
                <p className="text-gray-700 leading-relaxed">
                  As a Tanzania-based company serving global clients, your data may be transferred to and processed in countries outside the European Economic Area (EEA). Where this occurs, we take steps to ensure appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission.
                </p>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section id="retention" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="7" title="Data Retention" icon={Clock} />
              <p className="text-gray-700 leading-relaxed mb-5">
                We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="text-brand font-bold text-sm mb-1">Booking records</p>
                  <p className="text-2xl font-black text-gold">7 years</p>
                  <p className="text-text-muted text-xs mt-1">For accounting and tax compliance</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="text-brand font-bold text-sm mb-1">Marketing data</p>
                  <p className="text-2xl font-black text-gold">Until you unsubscribe</p>
                  <p className="text-text-muted text-xs mt-1">Opt out any time, instantly honoured</p>
                </div>
              </div>
            </section>

            {/* 8. Your Rights */}
            <section id="rights" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="8" title="Your Rights" icon={UserCheck} />
                <p className="text-gray-700 leading-relaxed mb-5">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    ['Access', 'Request a copy of the data we hold about you'],
                    ['Rectification', 'Ask us to correct inaccurate or incomplete data'],
                    ['Erasure', 'Request deletion of your data ("right to be forgotten")'],
                    ['Restriction', 'Ask us to limit how we process your data'],
                    ['Portability', 'Receive your data in a machine-readable format'],
                    ['Objection', 'Object to processing based on legitimate interests'],
                    ['Withdraw consent', 'For marketing, at any time with immediate effect'],
                  ].map(([right, desc]) => (
                    <div key={right} className="bg-white rounded-xl p-4 border border-brand/10">
                      <p className="font-bold text-brand text-sm">{right}</p>
                      <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Callout>
                    To exercise any right, email us at <a href={`mailto:${EMAIL}`} className="text-brand font-semibold underline">{EMAIL}</a>. We respond within 30 days. You also have the right to lodge a complaint with your national data protection authority.
                  </Callout>
                </div>
              </div>
            </section>

            {/* 9. Cookies */}
            <section id="cookies" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="9" title="Cookies" icon={Cookie} />
              <p className="text-gray-700 leading-relaxed mb-5">Our website uses cookies to improve your experience and analyse site traffic:</p>
              <div className="space-y-3">
                {[
                  { name: 'Essential', desc: 'Necessary for the website to function correctly. Cannot be disabled.', colour: 'bg-brand/10 border-brand/20 text-brand' },
                  { name: 'Analytics', desc: 'Help us understand how visitors interact with the site (Google Analytics, anonymised).', colour: 'bg-gold/10 border-gold/30 text-brand' },
                  { name: 'Preference', desc: 'Remember your settings and choices for a better experience.', colour: 'bg-gray-100 border-gray-200 text-brand' },
                ].map((cookie) => (
                  <div key={cookie.name} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold border ${cookie.colour}`}>{cookie.name}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{cookie.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-text-muted text-sm mt-4">You can control or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
            </section>

            {/* 10. Children's Privacy */}
            <section id="children" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="10" title="Children's Privacy" icon={Baby} />
                <p className="text-gray-700 leading-relaxed">
                  Our website is not directed at children under 16. We do not knowingly collect personal data from children without verified parental consent. If you believe we have inadvertently collected data from a child, please contact us and we will delete it promptly.
                </p>
              </div>
            </section>

            {/* 11. Security */}
            <section id="security" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="11" title="Security" icon={Lock} />
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction.
              </p>
              <TipBox>
                Our website uses HTTPS encryption for all data transmissions. Payment data is handled by PCI-DSS compliant processors — we never see or store card numbers.
              </TipBox>
            </section>

            {/* 12. Changes */}
            <section id="changes" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="12" title="Changes to This Policy" icon={RefreshCw} />
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. The effective date at the top of this page will reflect the most recent revision. We encourage you to review this page periodically. Continued use of our website after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* 13. Contact */}
            <section id="contact" className="scroll-mt-28 py-10">
              <SectionHeading number="13" title="Contact Us" icon={MessageCircle} />
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us — we aim to respond within 2 working days.
              </p>
              <div className="bg-brand rounded-2xl p-8 md:p-10 text-center">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Data Protection Enquiries</p>
                <h3 className="text-white text-2xl font-bold mb-2">The Extreme Wilderness</h3>
                <p className="text-white/60 text-sm mb-8">Arusha, Tanzania</p>
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
                  Go to Contact Page
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
            <ChevronRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>
          <Link href="/terms" className="text-brand hover:underline flex items-center gap-1">
            Terms &amp; Conditions <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
