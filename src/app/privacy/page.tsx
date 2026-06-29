import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Extreme Wilderness',
  description: 'Privacy Policy for The Extreme Wilderness — how we collect, use and protect your personal data.',
}

const EFFECTIVE_DATE = '1 July 2026'
const COMPANY = 'The Extreme Wilderness'
const EMAIL = 'info@theextremewilderness.com'
const ADDRESS = 'Arusha, Tanzania'

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    body: [
      `${COMPANY} ("we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains what data we collect when you visit our website or enquire about our safari services, how we use it, and your rights under applicable data protection laws — including the EU General Data Protection Regulation (GDPR) and the UK GDPR.`,
      `By using our website or submitting an enquiry, you agree to the collection and use of information in accordance with this policy.`,
    ],
  },
  {
    id: 'who-we-are',
    title: '2. Who We Are',
    body: [
      `${COMPANY} is a Tanzania-registered safari operator based in ${ADDRESS}. We design and operate custom safaris, Kilimanjaro climbs, and wildlife experiences across Tanzania, Kenya, and Rwanda.`,
      `For data protection enquiries, contact us at: ${EMAIL}`,
    ],
  },
  {
    id: 'data-we-collect',
    title: '3. Data We Collect',
    subsections: [
      {
        heading: 'Information you provide directly',
        items: [
          'Full name, email address, phone number',
          'Passport details (required only for booking confirmation)',
          'Travel dates, group size, dietary requirements, and medical conditions relevant to your safari',
          'Payment information (processed securely via our payment provider — we do not store card details)',
          'Correspondence with our team via email, contact forms, or chat',
        ],
      },
      {
        heading: 'Information collected automatically',
        items: [
          'IP address, browser type, and device information',
          'Pages visited, time spent on site, and referring URLs (via analytics tools)',
          'Cookie data (see Section 9)',
        ],
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '4. How We Use Your Data',
    intro: 'We use your personal information to:',
    items: [
      'Respond to safari enquiries and prepare personalised itineraries',
      'Process bookings and issue travel documents',
      'Communicate pre-trip details, updates, and post-trip follow-ups',
      'Send promotional emails and newsletters (only where you have opted in)',
      'Comply with legal obligations (e.g. Tanzania Tourism Authority reporting)',
      'Improve our website and services through anonymised analytics',
    ],
    legal: 'Our legal bases under GDPR are: contract performance (booking processing), legitimate interests (customer service and business improvement), and consent (marketing communications).',
  },
  {
    id: 'sharing',
    title: '5. Sharing Your Data',
    body: [
      'We do not sell your personal data. We share it only with trusted third parties necessary to deliver your safari:',
    ],
    items: [
      'Partner lodges, camps, and hotels — to confirm your accommodation',
      'Local ground operators and guides — to facilitate activities',
      'Airlines and transfer services — where booked through us',
      'Payment processors — to handle transactions securely',
      'Analytics providers (e.g. Google Analytics) — using anonymised data only',
      'Regulatory authorities — where required by Tanzanian or other applicable law',
    ],
    footer: 'All third parties are contractually required to protect your data and use it only for the stated purpose.',
  },
  {
    id: 'international',
    title: '6. International Transfers',
    body: [
      'As a Tanzania-based company serving global clients, your data may be transferred to and processed in countries outside the European Economic Area (EEA). Where this occurs, we take steps to ensure appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission.',
    ],
  },
  {
    id: 'retention',
    title: '7. Data Retention',
    body: [
      'We retain your personal data for as long as is necessary to fulfil the purposes described in this policy, or as required by law. Booking records are typically retained for 7 years for accounting and tax compliance. Marketing data is retained until you unsubscribe.',
    ],
  },
  {
    id: 'rights',
    title: '8. Your Rights',
    body: [
      'Depending on your location, you may have the following rights regarding your personal data:',
    ],
    items: [
      'Access — request a copy of the data we hold about you',
      'Rectification — ask us to correct inaccurate or incomplete data',
      'Erasure — request deletion of your data ("right to be forgotten")',
      'Restriction — ask us to limit how we process your data',
      'Portability — receive your data in a structured, machine-readable format',
      'Objection — object to processing based on legitimate interests or for direct marketing',
      'Withdraw consent — for any processing based on consent, at any time',
    ],
    footer: `To exercise any of these rights, email us at ${EMAIL}. We will respond within 30 days. You also have the right to lodge a complaint with your national data protection authority.`,
  },
  {
    id: 'cookies',
    title: '9. Cookies',
    body: [
      'Our website uses cookies to improve your experience and analyse site traffic. We use:',
    ],
    items: [
      'Essential cookies — necessary for the website to function correctly',
      'Analytics cookies — to understand how visitors interact with the site (Google Analytics, anonymised)',
      'Preference cookies — to remember your settings',
    ],
    footer: 'You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.',
  },
  {
    id: 'children',
    title: '10. Children\'s Privacy',
    body: [
      'Our website is not directed at children under 16. We do not knowingly collect personal data from children without parental consent. If you believe we have inadvertently collected data from a child, please contact us and we will delete it promptly.',
    ],
  },
  {
    id: 'security',
    title: '11. Security',
    body: [
      'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our website uses HTTPS encryption for all data transmissions.',
    ],
  },
  {
    id: 'changes',
    title: '12. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The effective date at the top of this page will reflect the most recent revision. We encourage you to review this page periodically. Continued use of our website after changes are posted constitutes acceptance of the updated policy.',
    ],
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    body: [
      `If you have any questions about this Privacy Policy or how we handle your data, please contact us:`,
    ],
    contact: true,
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-brand text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Jump links */}
        <nav className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Contents</p>
          <ol className="space-y-1.5 text-sm text-brand">
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

              {'intro' in s && s.intro && (
                <p className="text-gray-600 leading-relaxed mb-3 text-sm">{s.intro}</p>
              )}

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

              {'legal' in s && s.legal && (
                <p className="text-gray-500 text-xs italic bg-gray-50 rounded-lg p-3 border border-gray-100">{s.legal}</p>
              )}

              {'footer' in s && s.footer && (
                <p className="text-gray-600 leading-relaxed mt-3 text-sm">{s.footer}</p>
              )}

              {'contact' in s && s.contact && (
                <div className="bg-brand/5 rounded-xl p-5 border border-brand/10 text-sm text-gray-700 space-y-1">
                  <p><span className="font-semibold text-brand">{COMPANY}</span></p>
                  <p>{ADDRESS}</p>
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
          <Link href="/terms" className="text-brand hover:underline">Terms & Conditions →</Link>
        </div>
      </div>
    </main>
  )
}
