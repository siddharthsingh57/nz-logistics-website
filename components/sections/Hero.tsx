'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'

/* ─── Animated hero placeholder ──────────────────────────────────────────── */
/**
 * ANIMATION SLOT PLACEHOLDER
 *
 * This component renders inside <div id="hero-animation-slot">.
 * Replace its contents entirely with your custom animation.
 * The outer wrapper div preserves the layout — do NOT remove it.
 *
 * Recommended replacement: a Lottie, Three.js canvas, or custom SVG animation
 * that communicates logistics / movement / NZ geography.
 */
function HeroAnimationPlaceholder() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 hero-gradient-mesh opacity-95" />

      {/* Topographic overlay lines */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='320'%3E%3Cellipse cx='240' cy='160' rx='220' ry='95' fill='none' stroke='rgba(255%2C255%2C255%2C0.4)' stroke-width='0.8'/%3E%3Cellipse cx='240' cy='160' rx='175' ry='72' fill='none' stroke='rgba(255%2C255%2C255%2C0.4)' stroke-width='0.8'/%3E%3Cellipse cx='240' cy='160' rx='130' ry='52' fill='none' stroke='rgba(255%2C255%2C255%2C0.4)' stroke-width='0.8'/%3E%3Cellipse cx='240' cy='160' rx='85' ry='34' fill='none' stroke='rgba(255%2C255%2C255%2C0.4)' stroke-width='0.8'/%3E%3Cellipse cx='240' cy='160' rx='42' ry='16' fill='none' stroke='rgba(255%2C255%2C255%2C0.4)' stroke-width='0.8'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '480px 320px',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,98,45,0.8) 0%, transparent 70%)',
          top: '-10%',
          right: '-5%',
        }}
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27,77,110,0.9) 0%, transparent 70%)',
          bottom: '5%',
          left: '10%',
        }}
        animate={{ x: [0, -18, 0], y: [0, 15, 0], scale: [1, 0.94, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* SVG route line animation */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 540 420"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Main route path — draws itself on load */}
        <motion.path
          d="M 40,360 C 90,320 130,280 180,240 C 230,200 260,170 310,145 C 360,120 410,110 480,80"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="700"
          initial={{ strokeDashoffset: 700 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.8, ease: EXPO_OUT, delay: 0.3 }}
        />
        {/* Secondary branch */}
        <motion.path
          d="M 180,240 C 160,260 140,290 120,310 C 100,330 80,345 55,360"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="300"
          initial={{ strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.2, ease: EXPO_OUT, delay: 1.2 }}
        />
        {/* Route nodes — depot markers */}
        {[
          { cx: 40, cy: 360, delay: 0.2 },
          { cx: 180, cy: 240, delay: 0.85 },
          { cx: 310, cy: 145, delay: 1.4 },
          { cx: 480, cy: 80, delay: 2.0 },
        ].map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="5"
              fill="rgba(196,98,45,0.95)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 0.4, ease: 'backOut' }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill="none"
              stroke="rgba(196,98,45,0.3)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.5, 1.4, 1], opacity: [0, 0.7, 0] }}
              transition={{
                delay: node.delay + 0.2,
                duration: 1.2,
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: 3,
              }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
          </g>
        ))}
      </svg>

      {/* Simplified NZ outline — decorative, bottom-right corner */}
      {/* Replace with image of [NZ map with depot pins] */}
      <motion.svg
        className="absolute bottom-6 right-6 opacity-20"
        width="72"
        height="120"
        viewBox="0 0 72 120"
        fill="none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        {/* North Island — approximate silhouette */}
        <path
          d="M 44,4 C 52,8 56,16 54,26 C 52,36 56,44 52,56 C 48,68 42,78 36,86 C 30,94 24,96 22,90 C 20,84 24,76 26,66 C 28,56 24,46 22,36 C 20,26 24,14 34,8 Z"
          fill="rgba(255,255,255,0.35)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
        />
        {/* South Island — approximate silhouette */}
        <path
          d="M 16,100 C 8,100 4,106 5,112 C 6,118 14,120 28,118 C 42,116 54,110 56,103 C 58,96 50,93 40,96 C 30,99 22,100 16,100 Z"
          fill="rgba(255,255,255,0.35)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Floating stat callouts */}
      <motion.div
        className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease: EXPO_OUT }}
        style={{ animation: 'float 7s ease-in-out 3s infinite' }}
      >
        <p className="font-display text-2xl font-light text-white leading-none">
          {SITE.stats[1].value}
        </p>
        <p className="font-sans text-xs text-white/60 mt-0.5">
          depots nationwide
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6, ease: EXPO_OUT }}
        style={{ animation: 'float 9s ease-in-out 1s infinite' }}
      >
        <p className="font-display text-2xl font-light text-white leading-none">
          {SITE.stats[2].value}
          {SITE.stats[2].suffix}
        </p>
        <p className="font-sans text-xs text-white/60 mt-0.5">
          on-time delivery
        </p>
      </motion.div>
    </div>
  )
}

/* ─── Hero Section ───────────────────────────────────────────────────────── */
export function Hero() {
  const { hero } = SITE

  return (
    <section className="relative min-h-[100dvh] flex items-center topo-texture bg-bg pt-[72px]">
      <Container className="w-full py-16 lg:py-0 lg:min-h-[100dvh] lg:flex lg:items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* ─── Left column — content ───────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-7 lg:pr-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp()}>
              <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/90">
                <ChevronRight size={11} strokeWidth={2.5} />
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="font-display text-[2.6rem] leading-[1.06] tracking-tight text-ink md:text-[3.5rem] lg:text-[4rem] xl:text-[4.6rem] text-balance"
            >
              {hero.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(0.1)}
              className="font-sans text-base leading-relaxed text-muted max-w-[480px] md:text-lg"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp(0.15)}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <Button variant="primary" size="lg" magnetic href={hero.cta1Href}>
                {hero.cta1Label}
                <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="lg" href={hero.cta2Href}>
                {hero.cta2Label}
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp(0.2)}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2"
            >
              {hero.trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                  {item.value ? (
                    <span className="font-sans text-sm text-ink/60">
                      <span className="font-semibold text-ink">{item.value}</span>
                      {' '}
                      {item.label}
                    </span>
                  ) : (
                    <span className="font-sans text-sm text-ink/60">{item.label}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right column — ANIMATION SLOT ───────────────────────────── */}
          {/**
           * ╔══════════════════════════════════════════════════════════╗
           * ║  HERO ANIMATION SLOT                                     ║
           * ║                                                          ║
           * ║  To replace the placeholder with your custom animation:  ║
           * ║  1. Keep this outer <div id="hero-animation-slot">        ║
           * ║  2. Remove <HeroAnimationPlaceholder /> entirely          ║
           * ║  3. Mount your animation inside the div                  ║
           * ║                                                          ║
           * ║  Layout specs (do not change):                           ║
           * ║  • Desktop: aspect-ratio 4/3, fills grid column          ║
           * ║  • Mobile:  aspect-ratio 16/9, full width                ║
           * ║  • min-height: 300px (mobile), auto (desktop)            ║
           * ║  • border-radius: rounded-2xl (mobile) rounded-3xl (lg)  ║
           * ╚══════════════════════════════════════════════════════════╝
           */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EXPO_OUT, delay: 0.15 }}
            className="order-first lg:order-last"
          >
            <div
              id="hero-animation-slot"
              className="relative w-full aspect-video min-h-[300px] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden"
              aria-label="Hero animation — replace with custom animation"
            >
              <HeroAnimationPlaceholder />
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="font-sans text-xs text-muted/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-muted/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
