import type { Metadata } from 'next'
import Link from 'next/link'
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

const sections = [
  { id: 'agreement',    title: '1. Agreement to Terms' },
  { id: 'bookings',     title: '2. Bookings & Confirmation' },
  { id: 'pricing',      title: '3. Pricing & Inclusions' },
  { id: 'cancel-you',   title: '4. Cancellation by You' },
  { id: 'cancel-us',    title: '5. Cancellation by Us' },
  { id: 'changes',      title: '6. Itinerary Changes' },
  { id: 'client',       title: '7. Client Responsibilities' },
  { id: 'insurance',    title: '8. Travel Insurance' },
  { id: 'liability',    title: '9. Limitation of Liability' },
  { id: 'health',       title: '10. Health & Safety' },
  { id: 'force',        title: '11. Force Majeure' },
  { id: 'complaints',   title: '12. Complaints' },
  { id: 'law',          title: '13. Governing Law' },
  { id: 'privacy-ref',  title: '14. Privacy' },
  { id: 'contact',      title: '15. Contact' },
]

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

export default function TermsPage() {
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
              Last updated: {EFFECTIVE_DATE}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Terms &amp; <span className="text-gold">Conditions</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Please read before booking. These terms govern all safaris, trekking expeditions, and travel experiences arranged by The Extreme Wilderness.
            </p>
          </div>

          {/* Notice pill */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 bg-gold/20 border border-gold/40 rounded-xl">
            <AlertTriangle className="w-4 h-4 text-gold flex-shrink-0" />
            <p className="text-white/90 text-xs">
              By making a booking you confirm you have read and agree to these Terms in full. Questions? Email{' '}
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
              <SectionHeading number="1" title="Agreement to Terms" icon={FileText} />
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern all bookings and services provided by The Extreme Wilderness ("we", "us", "our"), a safari operator registered in Tanzania. By making a booking or using our website, you ("the client") confirm that you have read, understood, and agree to be bound by these Terms in full.
              </p>
              <TipBox>
                These Terms constitute the entire agreement between you and us and supersede all prior agreements, representations, and understandings.
              </TipBox>
            </section>

            {/* 2. Bookings */}
            <section id="bookings" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="2" title="Bookings & Confirmation" icon={Users} />
                <p className="text-gray-700 leading-relaxed mb-5">
                  A booking is confirmed once we have received your signed booking form (or written confirmation via email) and the required deposit. We will issue a written confirmation within 48 hours.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-brand/10 text-center">
                    <p className="text-3xl font-black text-gold mb-1">30%</p>
                    <p className="text-brand font-bold text-sm">Deposit</p>
                    <p className="text-text-muted text-xs mt-1">Required to secure your booking</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-brand/10 text-center">
                    <p className="text-3xl font-black text-gold mb-1">60</p>
                    <p className="text-brand font-bold text-sm">Days Before</p>
                    <p className="text-text-muted text-xs mt-1">Final balance due date</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-brand/10 text-center">
                    <p className="text-3xl font-black text-gold mb-1">USD</p>
                    <p className="text-brand font-bold text-sm">Currency</p>
                    <p className="text-text-muted text-xs mt-1">Unless otherwise agreed</p>
                  </div>
                </div>

                <div className="mt-5">
                  <Callout>
                    For bookings made within 60 days of departure, full payment is required at the time of booking. We reserve the right to decline any booking at our sole discretion.
                  </Callout>
                </div>
              </div>
            </section>

            {/* 3. Pricing */}
            <section id="pricing" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="3" title="Pricing & Inclusions" icon={DollarSign} />
              <p className="text-gray-700 leading-relaxed mb-5">All prices are in USD unless stated otherwise, quoted per person based on your group size and itinerary.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-bold text-brand text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Typically included
                  </h3>
                  <GoldBulletList items={[
                    'Accommodation as specified',
                    'All game drives and listed activities',
                    'Park entrance fees and conservation levies',
                    'All meals as specified (FB / HB / BB)',
                    'Transfers between destinations',
                    'English-speaking guide / driver',
                    'Drinking water during game drives',
                  ]} />
                </div>
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-bold text-brand text-sm mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" /> Typically excluded
                  </h3>
                  <GoldBulletList items={[
                    'International and domestic flights',
                    'Visa fees and travel documents',
                    'Travel insurance (mandatory)',
                    'Personal expenses and gratuities',
                    'Alcoholic beverages (unless stated)',
                    'Optional activities outside itinerary',
                    'Medical expenses',
                  ]} />
                </div>
              </div>

              <TipBox>
                We reserve the right to adjust prices due to significant changes in park fees, fuel costs, or government levies. Confirmed bookings are only affected if such changes occur more than 30 days before departure.
              </TipBox>
            </section>

            {/* 4. Cancellation by client */}
            <section id="cancel-you" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="4" title="Cancellation by You" icon={XCircle} />
                <p className="text-gray-700 leading-relaxed mb-6">
                  All cancellations must be received in writing (email is acceptable). Fees are calculated from the date we receive your written notice:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-brand/10 bg-white">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand text-white">
                        <th className="text-left px-5 py-3.5 font-semibold rounded-tl-2xl">Notice before departure</th>
                        <th className="text-left px-5 py-3.5 font-semibold rounded-tr-2xl">Cancellation fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-5 py-4 text-gray-700">90+ days</td>
                        <td className="px-5 py-4 font-semibold text-green-700">Deposit only (30%)</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <td className="px-5 py-4 text-gray-700">60–89 days</td>
                        <td className="px-5 py-4 font-semibold text-amber-700">50% of total cost</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-5 py-4 text-gray-700">30–59 days</td>
                        <td className="px-5 py-4 font-semibold text-orange-700">75% of total cost</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="px-5 py-4 text-gray-700 font-medium rounded-bl-2xl">0–29 days</td>
                        <td className="px-5 py-4 font-bold text-red-700 rounded-br-2xl">100% — No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-5">
                  <Callout>
                    We strongly recommend purchasing comprehensive travel insurance that includes cancellation cover. These fees may be fully recoverable through your insurer.
                  </Callout>
                </div>
              </div>
            </section>

            {/* 5. Cancellation by us */}
            <section id="cancel-us" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="5" title="Cancellation by Us" icon={AlertTriangle} />
              <p className="text-gray-700 leading-relaxed mb-5">
                We will only cancel a confirmed booking in exceptional circumstances beyond our control (see Section 11: Force Majeure). In the unlikely event we must cancel, we will offer you:
              </p>
              <GoldBulletList items={[
                'A full refund of all monies paid to us, or',
                'An alternative trip of equivalent value, if available',
              ]} />
              <div className="mt-5">
                <Callout warning>
                  We are not liable for ancillary costs (flights, visas, vaccinations, etc.) incurred by you in the event of cancellation. This is one of the key reasons travel insurance is mandatory.
                </Callout>
              </div>
            </section>

            {/* 6. Itinerary changes */}
            <section id="changes" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="6" title="Itinerary Changes" icon={Edit3} />
                <p className="text-gray-700 leading-relaxed mb-4">
                  We plan itineraries carefully, but East African safari conditions can change rapidly. We reserve the right to alter itineraries, accommodation, or routes where necessary to ensure safety, or due to circumstances beyond our control — including road conditions, wildlife movement, weather, or park authority decisions.
                </p>
                <TipBox>
                  We will always endeavour to provide alternatives of equal or greater value. No refunds will be given for minor itinerary changes that do not materially affect the overall quality of your trip.
                </TipBox>
              </div>
            </section>

            {/* 7. Client responsibilities */}
            <section id="client" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="7" title="Client Responsibilities" icon={UserCheck} />
              <p className="text-gray-700 leading-relaxed mb-5">By booking with us, you confirm that:</p>
              <GoldBulletList items={[
                'You are physically fit and medically able to undertake the activities booked',
                'You have disclosed any medical conditions, dietary requirements, or disabilities that may affect your experience',
                'You hold a valid passport with at least 6 months validity beyond your return date, and all required visas',
                'You will follow the instructions of our guides and local park authority rangers at all times',
                'You accept that wildlife encounters are inherently unpredictable — we cannot guarantee specific sightings',
                'You will not harass or disturb wildlife, and will adhere to all park rules and regulations',
                'You take sole responsibility for any personal property lost, stolen, or damaged during the trip',
              ]} />
            </section>

            {/* 8. Insurance */}
            <section id="insurance" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="8" title="Travel Insurance" icon={Shield} />

                <div className="mb-5">
                  <Callout warning>
                    <strong>Travel insurance is mandatory for all clients.</strong> You must provide proof of cover before or at the start of your trip. We reserve the right to decline participation to any client without adequate insurance.
                  </Callout>
                </div>

                <p className="text-gray-700 leading-relaxed mb-5">Your policy must include, at minimum:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    ['Trip cancellation & curtailment', 'Covers fees if you cancel before departure'],
                    ['Emergency medical cover', 'Minimum USD 100,000'],
                    ['Emergency evacuation', 'Medical evacuation and repatriation coverage'],
                    ['Activity-specific cover', 'Trekking above 4,000m if applicable to your booking'],
                  ].map(([title, desc]) => (
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
              <SectionHeading number="9" title="Limitation of Liability" icon={Scale} />
              <p className="text-gray-700 leading-relaxed mb-5">
                The Extreme Wilderness acts as a tour operator arranging services on your behalf. While we take all reasonable precautions for your safety and wellbeing, we cannot accept liability for:
              </p>
              <GoldBulletList items={[
                'Personal injury, illness, death, or loss caused by events beyond our reasonable control',
                'Actions or omissions of third-party service providers (airlines, hotels, etc.)',
                'Theft, damage, or loss of personal belongings',
                'Natural disasters, civil unrest, government actions, or other force majeure events',
                'Failure to obtain required travel documents (visas, vaccinations, etc.)',
                'Loss of enjoyment or indirect consequential losses',
              ]} />
              <div className="mt-5">
                <Callout>
                  Where liability cannot be excluded by law, our total liability shall not exceed the total amount paid for the trip. Nothing in these Terms limits liability for death or personal injury caused by our proven negligence.
                </Callout>
              </div>
            </section>

            {/* 10. Health */}
            <section id="health" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="10" title="Health & Safety" icon={Star} />
                <p className="text-gray-700 leading-relaxed mb-4">
                  You are responsible for ensuring you are in adequate health to participate in your chosen activities. We recommend consulting your doctor or a travel health clinic before departure for vaccination and malaria prophylaxis advice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tanzania, Kenya, and Rwanda may require proof of yellow fever vaccination for entry from certain countries. Please verify current requirements with your doctor and the relevant embassies before travel.
                </p>
                <TipBox>
                  If you have pre-existing medical conditions, disabilities, or special requirements, please inform us at the time of booking. We will do our utmost to accommodate your needs, but cannot guarantee this in all cases.
                </TipBox>
              </div>
            </section>

            {/* 11. Force majeure */}
            <section id="force" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="11" title="Force Majeure" icon={CloudLightning} />
              <p className="text-gray-700 leading-relaxed mb-4">
                Neither party shall be liable for failure to perform obligations under these Terms if such failure results from circumstances beyond reasonable control, including but not limited to:
              </p>
              <GoldBulletList items={[
                'Natural disasters and extreme weather events',
                'Epidemics or pandemics',
                'War, civil unrest, or acts of terrorism',
                'Government restrictions or border closures',
                'Strikes or industrial action affecting travel infrastructure',
              ]} />
              <div className="mt-5">
                <TipBox>
                  In a force majeure situation, we will use reasonable endeavours to reschedule your trip or offer an alternative. If rescheduling is not possible, refunds will be subject to any non-recoverable costs already incurred on your behalf.
                </TipBox>
              </div>
            </section>

            {/* 12. Complaints */}
            <section id="complaints" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="12" title="Complaints" icon={MessageCircle} />
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have a complaint during your trip, please raise it immediately with your guide or our local representative. Complaints not raised during the trip are significantly harder to address after the fact.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If your complaint remains unresolved, submit it in writing to{' '}
                  <a href={`mailto:${EMAIL}`} className="text-brand font-semibold underline">{EMAIL}</a>{' '}
                  within 28 days of your return. We will acknowledge within 5 working days and aim to resolve within 28 days.
                </p>
              </div>
            </section>

            {/* 13. Governing law */}
            <section id="law" className="scroll-mt-28 py-10 border-b border-gray-100">
              <SectionHeading number="13" title="Governing Law" icon={Scale} />
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United Republic of Tanzania. Any disputes arising from these Terms shall first be subject to good-faith negotiation.
              </p>
              <Callout>
                If unresolved through negotiation, disputes shall be referred to arbitration in Arusha, Tanzania.
              </Callout>
            </section>

            {/* 14. Privacy ref */}
            <section id="privacy-ref" className="scroll-mt-28 py-10 border-b border-gray-100">
              <div className="bg-light-green rounded-2xl p-8">
                <SectionHeading number="14" title="Privacy" icon={Lock} />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your personal data is handled in accordance with our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Read our Privacy Policy
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* 15. Contact */}
            <section id="contact" className="scroll-mt-28 py-10">
              <SectionHeading number="15" title="Contact" icon={MessageCircle} />
              <p className="text-gray-700 leading-relaxed mb-6">
                For any questions about these Terms before or after making a booking, please contact us:
              </p>
              <div className="bg-brand rounded-2xl p-8 md:p-10 text-center">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
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
          <TableOfContents sections={sections} />
        </div>

        {/* Cross-link bar */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="text-brand hover:underline flex items-center gap-1">
            <ChevronRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>
          <Link href="/privacy" className="text-brand hover:underline flex items-center gap-1">
            Privacy Policy <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
