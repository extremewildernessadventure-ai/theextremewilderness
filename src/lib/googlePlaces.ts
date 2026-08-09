// Live Google rating for the business, via the Places API (New) Place
// Details endpoint. Falls back to the last-known static figures (matching
// what's already hardcoded across Testimonials/TrustBar) whenever the API
// key isn't configured or the request fails — this must never break a page.
const PLACE_ID = 'ChIJnbSLRs8dNxgRpv1ntQKpCWs'
const FALLBACK = { rating: 4.9, reviewCount: 200 }

export interface GooglePlaceRating {
  rating: number
  reviewCount: number
}

export async function getGooglePlaceRating(): Promise<GooglePlaceRating> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return FALLBACK

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount`,
      {
        headers: { 'X-Goog-Api-Key': apiKey },
        // Ratings don't move minute-to-minute — daily revalidation keeps
        // this fresh without meaningful API cost.
        next: { revalidate: 86400 },
      }
    )
    if (!res.ok) return FALLBACK

    const data = await res.json() as { rating?: number; userRatingCount?: number }
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') return FALLBACK

    return { rating: data.rating, reviewCount: data.userRatingCount }
  } catch (err) {
    console.error('Google Places rating fetch failed:', err)
    return FALLBACK
  }
}
