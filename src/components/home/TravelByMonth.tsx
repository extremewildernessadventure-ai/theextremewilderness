const months = [
  { name: 'Jan', rating: 4, bestFor: ['Zanzibar', 'Serengeti calving'] },
  { name: 'Feb', rating: 5, bestFor: ['Calving season', 'Ngorongoro'] },
  { name: 'Mar', rating: 3, bestFor: ['Budget safari', 'Fewer crowds'] },
  { name: 'Apr', rating: 2, bestFor: ['Green season', 'Photography'] },
  { name: 'May', rating: 2, bestFor: ['Green season', 'Bird watching'] },
  { name: 'Jun', rating: 4, bestFor: ['Migration begins', 'Masai Mara'] },
  { name: 'Jul', rating: 5, bestFor: ['Great Migration', 'River crossings'] },
  { name: 'Aug', rating: 5, bestFor: ['Peak Migration', 'Mara crossings'] },
  { name: 'Sep', rating: 5, bestFor: ['Migration south', 'Best weather'] },
  { name: 'Oct', rating: 4, bestFor: ['Serengeti', 'Kilimanjaro'] },
  { name: 'Nov', rating: 3, bestFor: ['Short rains', 'Good value'] },
  { name: 'Dec', rating: 4, bestFor: ['Zanzibar', 'Festive season'] },
]

// Kilimanjaro trekking data — based on actual rainfall & summit success rates
// Jan–Feb: dry, snowy summit, 90%+ success | Mar: rains mid-month, declining
// Apr–May: long rains, muddy trails, ~60% success | Jun: clearing, cold nights
// Jul–Sep: peak dry season, 95%+ success | Oct: good, quieter crowds
// Nov: short rains begin | Dec: dries again, scenic snowy summit
const kiliData = [
  { name: 'Jan', rating: 5, note: 'Dry & clear, snowy summit' },
  { name: 'Feb', rating: 5, note: 'Best month — low rain, 90%+ success' },
  { name: 'Mar', rating: 3, note: 'Rains start mid-month' },
  { name: 'Apr', rating: 1, note: 'Long rains, muddy trails' },
  { name: 'May', rating: 1, note: 'Long rains, lowest success rates' },
  { name: 'Jun', rating: 3, note: 'Rains clearing, cold summit nights' },
  { name: 'Jul', rating: 5, note: 'Peak season — 95%+ success rate' },
  { name: 'Aug', rating: 5, note: 'Excellent — dry trails, clear skies' },
  { name: 'Sep', rating: 5, note: 'Dry & warm days, very high success' },
  { name: 'Oct', rating: 4, note: 'Good conditions, quieter crowds' },
  { name: 'Nov', rating: 2, note: 'Short rains begin' },
  { name: 'Dec', rating: 4, note: 'Dry again, scenic snowy summit' },
]

function ratingLabel(r: number) {
  if (r >= 5) return 'Peak'
  if (r === 4) return 'Great'
  if (r === 3) return 'Good'
  if (r === 2) return 'Low'
  return 'Avoid'
}

function safariBarColor(r: number) {
  if (r >= 5) return 'bg-brand'
  if (r === 4) return 'bg-brand/60'
  if (r === 3) return 'bg-brand/30'
  return 'bg-gray-100 border border-gray-200'
}

// Kilimanjaro uses a warm amber/stone palette to visually distinguish it
function kiliBarColor(r: number) {
  if (r >= 5) return 'bg-gold'
  if (r === 4) return 'bg-gold/60'
  if (r === 3) return 'bg-gold/30'
  if (r === 2) return 'bg-gray-200'
  return 'bg-gray-100 border border-gray-200'
}

export default function TravelByMonth() {
  return (
    <section className="py-20 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            Plan Your Timing
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
            When to Safari in East Africa
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            Every month offers something special — here's your guide to timing your visit perfectly.
          </p>
        </div>

        {/* Month grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {months.map((month) => (
            <div
              key={month.name}
              className={`bg-white rounded-xl p-4 border transition-all duration-200 hover:border-gold hover:shadow-md cursor-default ${
                month.rating >= 5 ? 'border-gold/40' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-brand text-sm">{month.name}</span>
                <span
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                    month.rating >= 5
                      ? 'bg-gold/15 text-gold'
                      : month.rating === 4
                      ? 'bg-brand/10 text-brand'
                      : 'bg-gray-100 text-text-muted'
                  }`}
                >
                  {ratingLabel(month.rating)}
                </span>
              </div>

              {/* Rating dots */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    className={`w-2.5 h-2.5 rounded-full ${j < month.rating ? 'bg-gold' : 'bg-gray-200'}`}
                  />
                ))}
              </div>

              {/* Best-for tags */}
              <div className="flex flex-col gap-0.5">
                {month.bestFor.map((tag) => (
                  <span key={tag} className="text-xs text-text-muted leading-tight">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trackers — side by side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Great Migration tracker */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="mb-4">
              <span className="text-gold font-semibold text-xs uppercase tracking-widest">
                Great Migration Tracker
              </span>
              <p className="text-xs text-text-muted mt-0.5">Approximate herd activity &amp; location by month</p>
            </div>

            <div className="flex gap-1">
              {months.map((month) => (
                <div key={month.name} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded h-8 transition-colors ${safariBarColor(month.rating)}`}
                    title={`${month.name}: ${ratingLabel(month.rating)} season`}
                  />
                  <span className="text-xs text-text-muted">{month.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-brand" />
                <span>Peak migration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-brand/60" />
                <span>Great conditions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-brand/30" />
                <span>Good value</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gray-100 border border-gray-200" />
                <span>Low season</span>
              </div>
            </div>

            {/* Key insight callout */}
            <div className="mt-4 px-3 py-2.5 bg-light-green rounded-lg border border-brand/10">
              <p className="text-xs text-brand leading-snug">
                <span className="font-semibold">Best windows:</span> Jul–Oct for river crossings &amp; peak drama. Jan–Feb for calving season in Ngorongoro. Avoid Apr–May (long rains).
              </p>
            </div>
          </div>

          {/* Kilimanjaro trekking tracker */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="mb-4">
              <span className="text-gold font-semibold text-xs uppercase tracking-widest">
                Kilimanjaro Trekking Tracker
              </span>
              <p className="text-xs text-text-muted mt-0.5">Summit success likelihood &amp; trail conditions by month</p>
            </div>

            <div className="flex gap-1">
              {kiliData.map((month) => (
                <div key={month.name} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded h-8 transition-colors ${kiliBarColor(month.rating)}`}
                    title={`${month.name}: ${month.note}`}
                  />
                  <span className="text-xs text-text-muted">{month.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gold" />
                <span>95%+ success rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gold/60" />
                <span>Good conditions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gold/30" />
                <span>Variable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gray-100 border border-gray-200" />
                <span>Rainy / avoid</span>
              </div>
            </div>

            {/* Key insight callout */}
            <div className="mt-4 px-3 py-2.5 bg-light-green rounded-lg border border-brand/10">
              <p className="text-xs text-brand leading-snug">
                <span className="font-semibold">Best windows:</span> Jan–Feb &amp; Jul–Sep. Avoid Apr–May (long rains) — muddy trails reduce summit success to ~60%.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
