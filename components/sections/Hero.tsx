'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { HeroBackgroundVideo } from '@/components/sections/HeroBackgroundVideo'
import { fadeUp, staggerContainer } from '@/lib/utils'

/* ─── Hero Section ───────────────────────────────────────────────────────── */
export function Hero() {
  const { hero } = SITE

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── 1. Full-bleed video background (z-0) ─────────────────────────── */}
      {/**
       * VIDEO BACKGROUND
       * Source: /public/videos/nzlogistics.mp4
       * Poster: /public/images/nzlogistics.jpg
       *
       * To swap the video: replace the files in /public/videos/ and /public/images/
       * and update the src/poster props below.
       */}
      <HeroBackgroundVideo
        src="/videos/nzlogistics.mp4"
        poster="/images/nzlogistics.jpg"
      />

      {/* ── 2. Gradient overlay (z-10) ───────────────────────────────────── */}
      {/**
       * Two-axis gradient:
       *   • Top→bottom: light at top, darker at bottom — keeps CTA strip readable
       *   • Left→transparent: adds extra contrast behind the headline text column
       * Adjust the rgba values here if the video is particularly light or dark.
       */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.18) 0%,
              rgba(0,0,0,0.28) 55%,
              rgba(0,0,0,0.48) 100%
            ),
            linear-gradient(
              to right,
              rgba(0,0,0,0.38) 0%,
              rgba(0,0,0,0.10) 55%,
              rgba(0,0,0,0.00) 100%
            )
          `,
        }}
      />

      {/* ── 3. Topographic texture overlay (z-15) ────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[15] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='320'%3E%3Cellipse cx='240' cy='160' rx='220' ry='95' fill='none' stroke='white' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='175' ry='72' fill='none' stroke='white' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='130' ry='52' fill='none' stroke='white' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='85' ry='34' fill='none' stroke='white' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='42' ry='16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '480px 320px',
        }}
      />

      {/* ── 4. Hero content (z-20) ───────────────────────────────────────── */}
      <Container className="relative z-20 w-full py-20 pt-[calc(72px+5rem)]">
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:gap-7 max-w-[640px]"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp()}>
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              <ChevronRight size={11} strokeWidth={2.5} className="text-accent" />
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.05)}
            className="font-display text-[2.8rem] leading-[1.05] tracking-tight text-white md:text-[3.8rem] lg:text-[4.4rem] xl:text-[5rem] text-balance"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp(0.1)}
            className="font-sans text-base leading-relaxed text-white/70 max-w-[480px] md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.15)}
            className="flex flex-col sm:flex-row gap-3 pt-1"
          >
            <Button variant="primary" size="lg" magnetic href={hero.cta1Href}>
              {hero.cta1Label}
              <ArrowRight size={16} />
            </Button>

            {/* Secondary CTA — outline style adapted for dark background */}
            <Link
              href={hero.cta2Href}
              className="inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full text-lg px-9 py-4 border border-white/35 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              {hero.cta2Label}
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp(0.2)}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2"
          >
            {hero.trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                {item.value ? (
                  <span className="font-sans text-sm text-white/60">
                    <span className="font-semibold text-white">{item.value}</span>
                    {' '}{item.label}
                  </span>
                ) : (
                  <span className="font-sans text-sm text-white/60">{item.label}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── HERO ANIMATION SLOT ────────────────────────────────────────── */}
        {/**
         * ╔══════════════════════════════════════════════════════════════╗
         * ║  HERO ANIMATION SLOT                                         ║
         * ║                                                              ║
         * ║  The full-bleed video now serves as the primary hero visual. ║
         * ║  This slot is reserved for an optional foreground overlay    ║
         * ║  animation (e.g. route lines, data viz, Lottie) if needed.   ║
         * ║                                                              ║
         * ║  To add a foreground animation:                              ║
         * ║  • Uncomment the div below                                   ║
         * ║  • Add your animation component inside it                    ║
         * ║  • It will float bottom-right over the video on desktop      ║
         * ╚══════════════════════════════════════════════════════════════╝
         *
         * <div
         *   id="hero-animation-slot"
         *   className="hidden lg:block absolute bottom-12 right-16 w-[320px] aspect-[4/3] z-20"
         *   aria-hidden="true"
         * >
         *   {/* Your foreground animation here *\/}
         * </div>
         */}
      </Container>

      {/* ── 5. Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="font-sans text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/25"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
