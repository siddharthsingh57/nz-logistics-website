'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroBackgroundVideoProps {
  /** Path to the mp4 video — relative to /public, e.g. /videos/nzlogistics.mp4 */
  src: string
  /** Poster image shown instantly while video loads, and as fallback */
  poster: string
}

/**
 * HeroBackgroundVideo
 *
 * Full-bleed background video for the hero section.
 *
 * Features:
 * - Autoplay / muted / loop / playsInline (iOS autoplay requirement)
 * - preload="auto" desktop, preload="metadata" mobile (bandwidth saving)
 * - Poster image shows instantly; video fades in on canplaythrough (300ms)
 * - timeupdate listener resets to t=0 at duration-0.1s → prevents loop flash
 * - prefers-reduced-motion: skips video entirely, shows static poster
 * - Video load error: falls back to poster image silently
 * - aria-hidden="true" — decorative, screen readers skip it
 * - will-change: transform promotes to compositor layer
 * - disablePictureInPicture prevents mobile UI interruptions
 */
export function HeroBackgroundVideo({ src, poster }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  /* ── Detect prefers-reduced-motion and mobile on mount ─────────────────── */
  useEffect(() => {
    const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(motionMql.matches)
    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    motionMql.addEventListener('change', onMotionChange)

    const mobileMql = window.matchMedia('(max-width: 767px)')
    setIsMobile(mobileMql.matches)
    const onMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mobileMql.addEventListener('change', onMobileChange)

    return () => {
      motionMql.removeEventListener('change', onMotionChange)
      mobileMql.removeEventListener('change', onMobileChange)
    }
  }, [])

  /* ── Video event listeners ──────────────────────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    /**
     * Seamless loop — resets currentTime slightly before the natural loop
     * point to prevent the 1-frame white/black flash some browsers show.
     */
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0
        // Re-trigger play in case the reset paused it on some browsers
        video.play().catch(() => {})
      }
    }

    /** Fade the video in once the browser has enough data to play smoothly */
    const handleCanPlayThrough = () => setVideoReady(true)

    /**
     * On any load error, keep videoReady=false so the poster stays visible.
     * No console noise — this is an expected graceful fallback.
     */
    const handleError = () => setVideoReady(false)

    /**
     * Some mobile browsers pause autoplay after the tab goes to background.
     * Resume on visibility change.
     */
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        video.play().catch(() => {})
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [reducedMotion])

  /* ── prefers-reduced-motion: static poster only ─────────────────────────── */
  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          overflow: 'hidden',
        }}
      />
    )
  }

  /* ── Video background ───────────────────────────────────────────────────── */
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        // Poster image visible instantly as the initial frame
        backgroundImage: `url(${poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        // Not setting controls prop = no controls rendered (React omits false booleans)
        preload={isMobile ? 'metadata' : 'auto'}
        poster={poster}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          // Promote to compositor layer for smooth playback
          willChange: 'transform',
          // Fade in from 0 → 1 once canplaythrough fires
          opacity: videoReady ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback: poster image is already showing via parent div background */}
      </video>
    </div>
  )
}
