'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { reviews } from '@/data/reviews'
import { formatDate } from '@/lib/utils'

interface ReviewsSliderProps {
  title?: string
  serviceSlug?: string
  locationName?: string
}

export function ReviewsSlider({
  title = "What London Says About Us",
  serviceSlug,
  locationName,
}: ReviewsSliderProps) {
  const filteredReviews = serviceSlug
    ? reviews.filter((r) => r.service === serviceSlug)
    : locationName
    ? reviews.filter((r) => r.location.toLowerCase() === locationName.toLowerCase())
    : reviews

  const displayReviews = filteredReviews.length > 0 ? filteredReviews : reviews
  const [current, setCurrent] = useState(0)
  const itemsPerPage = 3

  const totalPages = Math.ceil(displayReviews.length / itemsPerPage)
  const visibleReviews = displayReviews.slice(
    current * itemsPerPage,
    current * itemsPerPage + itemsPerPage
  )

  return (
    <section className="py-16 px-4 bg-[#060E1A]/50" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Real Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <span className="text-white font-bold text-lg">4.9</span>
              <span className="text-slate-400 text-sm">· 847 verified Google reviews</span>
            </div>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-gray-600 disabled:opacity-30 transition-all"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-slate-500 text-sm">{current + 1}/{totalPages}</span>
              <button
                onClick={() => setCurrent(Math.min(totalPages - 1, current + 1))}
                disabled={current === totalPages - 1}
                className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-gray-600 disabled:opacity-30 transition-all"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{review.author}</div>
                      <div className="text-slate-500 text-xs">{review.location}</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {review.verified && (
                    <div className="flex items-center gap-1 text-green-400 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                  <div className="text-slate-600 text-xs mt-0.5">{formatDate(review.date)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            All reviews from verified customers via{' '}
            <a
              href="https://g.page/londonlocksmithpro/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300"
            >
              Google Reviews
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
