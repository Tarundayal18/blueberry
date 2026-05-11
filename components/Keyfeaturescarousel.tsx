'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Result {
  title: string
  description: string
}

interface Feature {
  results?: Result[]
}

interface KeyFeaturesCarouselProps {
  features: Feature[]
}

export function KeyFeaturesCarousel({ features }: KeyFeaturesCarouselProps) {
  const allResults: Result[] = features.flatMap((f) => f.results ?? [])
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (animating) return
      setDirection(dir)
      setAnimating(true)
      setTimeout(() => {
        setCurrent(index)
        setAnimating(false)
      }, 300)
    },
    [animating]
  )

  const prev = () => {
    const index = (current - 1 + allResults.length) % allResults.length
    goTo(index, 'left')
  }

  const next = () => {
    const index = (current + 1) % allResults.length
    goTo(index, 'right')
  }

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const index = (current + 1) % allResults.length
      goTo(index, 'right')
    }, 4000)
    return () => clearInterval(timer)
  }, [current, allResults.length, goTo])

  if (allResults.length === 0) return null

  const result = allResults[current]

  return (
    <div className="flex flex-col">
      {/* Result Card */}
      <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden relative min-h-[160px]">
        <h3 className="text-2xl font-bold mb-4" style={{ color: '#09094C' }}>
          Results
        </h3>

        {/* Slide container */}
        <div
          key={current}
          style={{
            animation: animating
              ? 'none'
              : direction === 'right'
              ? 'slideInRight 0.35s ease forwards'
              : 'slideInLeft 0.35s ease forwards',
          }}
          className="flex items-start gap-3"
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
            style={{ background: '#464196' }}
          />
          <p className="text-base leading-relaxed" style={{ color: '#09094C' }}>
            <strong style={{ color: '#464196' }}>{result.title}:</strong>{' '}
            {result.description}
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5"
          style={{ background: '#B9B9FF', width: '100%' }}
        >
          <div
            key={`bar-${current}`}
            className="h-full"
            style={{
              background: '#464196',
              animation: 'progressBar 4s linear forwards',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4 px-1">
        {/* Prev Button */}
        <button
          onClick={prev}
          aria-label="Previous result"
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            border: '1px solid #E5E7EB',
            color: '#464196',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = '#464196'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#464196'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#464196'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E7EB'
          }}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {allResults.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'right' : 'left')}
              aria-label={`Go to result ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? '20px' : '8px',
                background: i === current ? '#464196' : '#D1D5DB',
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next result"
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            border: '1px solid #E5E7EB',
            color: '#464196',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = '#464196'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#464196'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#464196'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E7EB'
          }}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Counter */}
      <p
        className="text-center text-xs mt-2"
        style={{ color: '#9CA3AF' }}
      >
        {current + 1} / {allResults.length}
      </p>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}