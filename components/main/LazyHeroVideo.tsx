'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

type LazyHeroVideoProps = {
  src: string
  autoLoad?: boolean
}

export function LazyHeroVideo({ src, autoLoad = false }: LazyHeroVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!autoLoad) return

    const wrapper = wrapperRef.current
    if (!wrapper) return

    let loadTimer: ReturnType<typeof setTimeout> | undefined
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string }
      }
    ).connection

    const shouldSkipAutoload =
      connection?.saveData ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g'

    const queueVideoLoad = () => {
      if (shouldSkipAutoload) return
      loadTimer = setTimeout(() => setShouldLoad(true), 2500)
    }

    if (!('IntersectionObserver' in window)) {
      queueVideoLoad()
      return () => {
        if (loadTimer) clearTimeout(loadTimer)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        queueVideoLoad()
        observer.disconnect()
      },
      { rootMargin: '0px' },
    )

    observer.observe(wrapper)

    return () => {
      observer.disconnect()
      if (loadTimer) clearTimeout(loadTimer)
    }
  }, [autoLoad])

  useEffect(() => {
    if (!shouldLoad) return

    const video = videoRef.current
    if (!video) return

    video.load()
    video.play().catch(() => undefined)
  }, [shouldLoad])

  return (
    <div ref={wrapperRef} className="relative w-full aspect-video bg-[#09094C]">
      <video
        ref={videoRef}
        autoPlay={shouldLoad}
        muted
        loop
        playsInline
        preload="none"
        className="w-full aspect-video object-cover block"
      >
        {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      </video>

      {!shouldLoad ? (
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setShouldLoad(true)}
          className="absolute inset-0 flex items-center justify-center bg-[#09094C]"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#09094C] shadow-lg transition-transform hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
          </span>
        </button>
      ) : null}
    </div>
  )
}
