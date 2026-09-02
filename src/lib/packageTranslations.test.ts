import { describe, it, expect } from 'vitest'
import type { SafariPackage } from '@/data/packages'
import { extractTranslationPayload, mergeTranslation } from './packageTranslations'

describe('extractTranslationPayload / mergeTranslation', () => {
  const en: SafariPackage = {
    slug: 'extract-merge-safari',
    name: 'Extract Merge Safari',
    duration: 3,
    destinations: ['serengeti'],
    type: 'wildlife',
    priceFrom: 1500,
    groupSize: { min: 2, max: 6 },
    highlights: ['Big Five', 'Hot air balloon'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        description: 'Fly in and transfer',
        accommodation: 'Camp',
        meals: 'D',
        insiderFact: 'Best light at dawn',
        location: 'Serengeti',
        accommodationByTier: {
          trail: { name: 'Trail Camp', image: '/trail.jpg', amenities: ['wifi'] },
          sovereign: { name: 'Sovereign Camp', image: '/sov.jpg', amenities: ['butler'] },
        },
      },
      { day: 2, title: 'Game drive', description: 'Full day drive', accommodation: 'Camp', meals: 'B,L,D' },
    ],
    included: ['Guide', 'Park fees'],
    excluded: ['Flights'],
    heroImage: '/hero.jpg',
    heroImageAlt: 'Lions on the plains',
    gallery: [{ src: '/g1.jpg', alt: 'Gallery one' }, { src: '/g2.jpg', alt: 'Gallery two' }],
    bestFor: ['Couples'],
    faq: [{ q: 'Malaria risk?', a: 'Yes.' }],
    tagline: 'The classic circuit',
    bestTimeToTravel: 'Jun-Oct',
    whyDifferent: { heading: 'Why this trip', paragraphs: ['Reason one'] },
    destinationHighlights: { heading: 'Where you go', items: [{ title: 'Serengeti', text: 'Endless plains' }] },
    includedCategorized: { transfers: ['Airport pickup'] },
    excludedCategorized: ['Tips'],
    notes: ['Prices in USD'],
    overview: ['Overview line'],
    metaTitle: 'Meta title',
    metaDescription: 'Meta description',
  }

  // A hand-translated "locale" file always has the same structural shape
  // (same slug/duration/images/pricing/day count/tier lodging) as the
  // English source -- only text differs. Modeled here the same way.
  const fr: SafariPackage = {
    ...en,
    name: 'Safari Extraire Fusionner',
    highlights: ['Big Five (FR)', 'Montgolfière'],
    itinerary: [
      {
        ...en.itinerary[0],
        title: 'Arrivée',
        description: 'Vol puis transfert',
        insiderFact: 'Meilleure lumière au lever du jour',
        location: 'Serengeti (FR)',
        accommodationByTier: {
          trail: { name: 'Camp Trail (FR)', image: '/trail.jpg', amenities: ['wifi (FR)'] },
          sovereign: { name: 'Camp Sovereign (FR)', image: '/sov.jpg', amenities: ['majordome'] },
        },
      },
      { ...en.itinerary[1], title: 'Randonnée', description: 'Journée complète' },
    ],
    included: ['Guide (FR)', 'Frais de parc'],
    excluded: ['Vols'],
    heroImageAlt: 'Lions dans la plaine',
    gallery: [{ src: '/g1.jpg', alt: 'Galerie un' }, { src: '/g2.jpg', alt: 'Galerie deux' }],
    bestFor: ['Couples (FR)'],
    faq: [{ q: 'Risque de paludisme ?', a: 'Oui.' }],
    tagline: 'Le circuit classique',
    whyDifferent: { heading: 'Pourquoi ce voyage', paragraphs: ['Raison un'] },
    destinationHighlights: { heading: 'Où vous allez', items: [{ title: 'Serengeti', text: 'Plaines infinies' }] },
    includedCategorized: { transfers: ["Prise en charge à l'aéroport"] },
    excludedCategorized: ['Pourboires'],
    notes: ['Prix en USD (FR)'],
    overview: ['Ligne de présentation'],
    metaTitle: 'Titre meta',
    metaDescription: 'Description meta',
  }

  it('extractTranslationPayload pulls only text fields, not structural ones', () => {
    const payload = extractTranslationPayload(fr)
    expect(payload.name).toBe('Safari Extraire Fusionner')
    expect(payload.gallery).toEqual([{ alt: 'Galerie un' }, { alt: 'Galerie deux' }])
    expect(payload.itinerary[0].accommodationByTier?.trail).toEqual({ name: 'Camp Trail (FR)', amenities: ['wifi (FR)'] })
    // no `src`/`image`/`day`/slug/duration/etc. anywhere on the payload
    expect(payload).not.toHaveProperty('slug')
    expect(payload).not.toHaveProperty('heroImage')
  })

  it('mergeTranslation(en, extractTranslationPayload(fr)) reproduces fr exactly', () => {
    const payload = extractTranslationPayload(fr)
    const remerged = mergeTranslation(en, payload)
    expect(remerged).toEqual(fr)
  })

  it('mergeTranslation falls back to English content for a locale missing an optional field', () => {
    const partial = extractTranslationPayload(fr)
    delete partial.tagline
    delete partial.whyDifferent
    const remerged = mergeTranslation(en, partial)
    expect(remerged.tagline).toBe(en.tagline)
    expect(remerged.whyDifferent).toEqual(en.whyDifferent)
    // everything else still comes from the translation
    expect(remerged.name).toBe('Safari Extraire Fusionner')
  })
})
