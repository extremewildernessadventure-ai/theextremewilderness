import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Extreme Wilderness',
  description: 'Terms and Conditions for booking safaris, trekking expeditions, and travel experiences with The Extreme Wilderness.',
}

const EFFECTIVE_DATE = '1 July 2026'
const COMPANY = 'The Extreme Wilderness'
const EMAIL = 'info@theextremewilderness.com'

const sections = [
  {
    id: 'agreement',
    title: '1. Agreement to Terms',
    body: [
      `These Terms and Conditions ("Terms") govern all bookings and services provided by ${COMPANY} ("we", "us", "our"), a safari operator registered in Tanzania. By making a booking or using our website, you ("the client") confirm that you have read, understood, and agree to be bound by these Terms.`,
      'These Terms constitute the entire agreement between you and us relating to the subject matter herein and supersede all prior agreements, representations, and understandings.',
    ],
  },
  {
    id: 'bookings',
    title: '2. Bookings & Confirmation',
    body: [
      'A booking is confirmed once we have received your signed booking form (or written confirmation via email) and the required deposit. We will issue a written confirmation of your booking within 48 hours of receipt.',
      'We reserve the right to decline any booking at our sole discretion.',
    ],
    items: [
      'Deposit: 30% of the total trip cost is required to secure your booking',
      'Final payment: the remaining balance is due 60 days before departure',
      'For bookings made within 60 days of departure: full payment is required at the time of booking',
      'All payments must be made in USD unless otherwise agreed in writing',
    ],
  },
  {
    id: 'pricing',
    title: '3. Pricing & Inclusions',
    body: [
      'All quoted prices are in US Dollars (USD) unless otherwise stated. Prices are per person based on the group size and itinerary specified in your quote.',
    ],
    subsections: [
      {
        heading: 'Prices typically include:',
        items: [
          'Accommodation as specified in the itinerary',
          'All game drives and wildlife activities listed in the itinerary',
          'Park entrance fees and conservation levies',
          'All meals as specified (FB, HB, or BB)',
          'Transfers between destinations within the itinerary',
          'Services of an English-speaking guide/driver',
          'Drinking water during game drives',
        ],
      },
      {
        heading: 'Prices typically exclude:',
        items: [
          'International and domestic flights (unless explicitly quoted)',
          'Visa fees and travel documents',
          'Travel insurance (mandatory — see Section 8)',
          'Personal expenses: laundry, telephone, gratuities',
          'Alcoholic beverages unless stated',
          'Optional activities not listed in the itinerary',
          'Medical expenses',
        ],
      },
    ],
    footer: 'We reserve the right to adjust prices due to significant changes in park fees, fuel costs, or government-imposed levies. Confirmed bookings will be affected only if such changes occur more than 30 days before departure.',
  },
  {
    id: 'cancellation-client',
    title: '4. Cancellation by the Client',
    body: [
      'All cancellations must be received in writing (email is acceptable). Cancellation fees are calculated from the date we receive your written notice:',
    ],
    table: [
      { col1: '90+ days before departure', col2: 'Loss of deposit only (30%)' },
      { col1: '60–89 days before departure', col2: '50% of total trip cost' },
      { col1: '30–59 days before departure', col2: '75% of total trip cost' },
      { col1: '0–29 days before departure', col2: '100% of total trip cost (no refund)' },
    ],
    footer: 'We strongly recommend purchasing comprehensive travel insurance that includes cancellation cover. Cancellation fees may be recoverable through your insurer.',
  },
  {
    id: 'cancellation-us',
    title: '5. Cancellation or Changes by Us',
    body: [
      `We will only cancel a confirmed booking in exceptional circumstances beyond our control (force majeure — see Section 11). In the unlikely event we must cancel your trip, we will offer you:`,
    ],
    items: [
      'A full refund of all monies paid to us, or',
      'An alternative trip of equivalent value, if available',
    ],
    footer: 'We are not liable for any ancillary costs (flights, visas, etc.) incurred by the client in the event of cancellation. This is why travel insurance is mandatory.',
  },
  {
    id: 'changes',
    title: '6. Itinerary Changes',
    body: [
      'We plan itineraries carefully, but East African safari conditions can change rapidly. We reserve the right to alter itineraries, accommodation, or routes where necessary to ensure safety, or due to circumstances beyond our control (road conditions, wildlife movement, weather, park authority decisions).',
      'We will always endeavour to provide alternatives of equal or greater value. No refunds will be given for minor itinerary changes that do not materially affect the overall quality of the trip.',
    ],
  },
  {
    id: 'responsibility',
    title: '7. Client Responsibilities',
    body: [
      'By booking with us, you confirm that:',
    ],
    items: [
      'You are physically fit and medically able to undertake the activities booked',
      'You have disclosed any medical conditions, dietary requirements, or disabilities that may affect your experience',
      'You hold a valid passport (with at least 6 months validity beyond your return date) and all required visas',
      'You will follow the instructions of our guides and local park authority rangers at all times',
      'You accept that wildlife encounters are inherently unpredictable and we cannot guarantee specific sightings',
      'You will not harass or disturb wildlife, and will adhere to all park rules and regulations',
      'You take sole responsibility for any personal property lost, stolen, or damaged during the trip',
    ],
  },
  {
    id: 'insurance',
    title: '8. Travel Insurance',
    body: [
      'Comprehensive travel insurance is mandatory for all clients. Your policy must include, at minimum:',
    ],
    items: [
      'Trip cancellation and curtailment cover',
      'Emergency medical cover (minimum USD 100,000)',
      'Emergency medical evacuation and repatriation',
      'Cover for the specific activities booked (e.g. trekking above 4,000m if applicable)',
    ],
    footer: 'You must provide proof of insurance before or at the start of your trip. We reserve the right to decline participation to any client without adequate insurance cover. We accept no liability for costs arising from inadequate insurance.',
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    body: [
      `${COMPANY} acts as a tour operator arranging services on your behalf. While we take all reasonable precautions for your safety and wellbeing, we cannot accept liability for:`,
    ],
    items: [
      'Personal injury, illness, death, or loss caused by events beyond our reasonable control',
      'Actions or omissions of third-party service providers (airlines, hotels, etc.)',
      'Theft, damage, or loss of personal belongings',
      'Natural disasters, civil unrest, government actions, or other force majeure events',
      'Failure to obtain required travel documents (visas, vaccinations, etc.)',
      'Loss of enjoyment or indirect consequential losses',
    ],
    footer: 'Where liability cannot be excluded by law, our total liability to you shall not exceed the total amount paid for the trip. Nothing in these Terms limits liability for death or personal injury caused by our negligence.',
  },
  {
    id: 'health',
    title: '10. Health, Safety & Special Requirements',
    body: [
      'You are responsible for ensuring you are in adequate health to participate in your chosen activities. We recommend consulting your doctor or a travel health clinic before departure for advice on vaccinations and malaria prophylaxis.',
      'Tanzania, Kenya, and Rwanda may require proof of yellow fever vaccination for entry from certain countries. Please verify current requirements with your doctor and the relevant embassies.',
      'If you have any pre-existing medical conditions, disabilities, or special requirements, please inform us at the time of booking. We will do our best to accommodate your needs but cannot guarantee this in all cases.',
    ],
  },
  {
    id: 'force-majeure',
    title: '11. Force Majeure',
    body: [
      'Neither party shall be liable for failure to perform obligations under these Terms if such failure results from circumstances beyond reasonable control, including but not limited to: natural disasters, epidemics or pandemics, war, civil unrest, acts of terrorism, government restrictions, strikes, or extreme weather events.',
      'In a force majeure situation, we will use reasonable endeavours to reschedule your trip or offer an alternative. If rescheduling is not possible, refunds will be subject to any non-recoverable costs already incurred on your behalf.',
    ],
  },
  {
    id: 'complaints',
    title: '12. Complaints',
    body: [
      'If you have a complaint during your trip, please raise it immediately with your guide or our local representative so we can resolve it promptly. Complaints not raised during the trip are significantly harder to address after the fact.',
      `If your complaint remains unresolved, please submit it in writing to ${EMAIL} within 28 days of your return date. We will acknowledge your complaint within 5 working days and aim to resolve it within 28 days.`,
    ],
  },
  {
    id: 'law',
    title: '13. Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of the United Republic of Tanzania. Any disputes arising from these Terms shall first be subject to good-faith negotiation. If unresolved, disputes shall be referred to arbitration in Arusha, Tanzania.',
    ],
  },
  {
    id: 'privacy-link',
    title: '14. Privacy',
    body: [
      'Your personal data is handled in accordance with our Privacy Policy, which is incorporated into these Terms by reference.',
    ],
    linkPrivacy: true,
  },
  {
    id: 'contact',
    title: '15. Contact',
    body: [
      'For any questions about these Terms, please contact us:',
    ],
    contact: true,
  },
]

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-brand text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white/70 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Notice banner */}
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-10 text-sm text-gray-700">
          <span className="font-semibold text-brand">Please read carefully.</span> By making a booking with The Extreme Wilderness, you agree to these Terms in full. If you have any questions before booking, contact us at{' '}
          <a href={`mailto:${EMAIL}`} className="text-brand underline">{EMAIL}</a>.
        </div>

        {/* Jump links */}
        <nav className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Contents</p>
          <ol className="space-y-1.5 text-sm text-brand columns-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:underline">{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-brand mb-4 pb-2 border-b border-gray-100">{s.title}</h2>

              {'body' in s && s.body?.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">{p}</p>
              ))}

              {'subsections' in s && s.subsections?.map((sub) => (
                <div key={sub.heading} className="mb-5">
                  <p className="font-semibold text-gray-800 text-sm mb-2">{sub.heading}</p>
                  <ul className="space-y-1.5 ml-4">
                    {sub.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {'items' in s && s.items && (
                <ul className="space-y-1.5 mb-4 ml-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {'table' in s && s.table && (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-brand text-white">
                        <th className="text-left px-4 py-2.5 font-semibold rounded-tl-lg">Notice Period</th>
                        <th className="text-left px-4 py-2.5 font-semibold rounded-tr-lg">Cancellation Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.col1}</td>
                          <td className="px-4 py-3 text-gray-700 border-b border-gray-100 font-medium">{row.col2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {'footer' in s && s.footer && (
                <p className="text-gray-500 text-xs italic bg-gray-50 rounded-lg p-3 border border-gray-100 mt-2">{s.footer}</p>
              )}

              {'linkPrivacy' in s && s.linkPrivacy && (
                <Link href="/privacy" className="inline-flex items-center gap-1 text-sm text-brand hover:underline mt-1">
                  View our Privacy Policy →
                </Link>
              )}

              {'contact' in s && s.contact && (
                <div className="bg-brand/5 rounded-xl p-5 border border-brand/10 text-sm text-gray-700 space-y-1">
                  <p><span className="font-semibold text-brand">{COMPANY}</span></p>
                  <p>Arusha, Tanzania</p>
                  <p>
                    Email:{' '}
                    <a href={`mailto:${EMAIL}`} className="text-brand hover:underline">{EMAIL}</a>
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between text-sm">
          <Link href="/" className="text-brand hover:underline">← Back to Home</Link>
          <Link href="/privacy" className="text-brand hover:underline">Privacy Policy →</Link>
        </div>
      </div>
    </main>
  )
}
