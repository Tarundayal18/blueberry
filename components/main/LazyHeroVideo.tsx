'use client'

import { useEffect, useRef, useState } from 'react'

type LazyHeroVideoProps = {
  src: string
}

export function LazyHeroVideo({ src }: LazyHeroVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let loadTimer: ReturnType<typeof setTimeout> | undefined

    const queueVideoLoad = () => {
      loadTimer = setTimeout(() => setShouldLoad(true), 800)
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
      { rootMargin: '300px' },
    )

    observer.observe(wrapper)

    return () => {
      observer.disconnect()
      if (loadTimer) clearTimeout(loadTimer)
    }
  }, [])

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
    </div>
  )
}
