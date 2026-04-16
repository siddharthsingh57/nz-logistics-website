'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer } from '@/lib/utils'

/* ─── Simplified NZ Map SVG ──────────────────────────────────────────────── */
/**
 * Stylised, non-geographic NZ outline for decorative purposes only.
 * Replace or augment with a real map library (e.g. react-simple-maps)
 * if geographic accuracy is required.
 */
function NZMapDecoration() {
  return (
    <svg
      viewBox="0 0 200 340"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* North Island */}
      <motion.path
        d="M 120,12 C 136,18 144,30 140,46 C 136,62 144,76 138,94 C 132,112 122,128 110,140 C 98,152 86,156 80,148 C 74,140 78,126 82,112 C 86,98 82,84 78,68 C 74,52 80,32 96,20 Z"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      {/* South Island */}
      <motion.path
        d="M 55,190 C 36,192 22,200 18,212 C 14,224 20,236 38,248 C 56,260 82,268 106,262 C 130,256 148,240 152,224 C 156,208 144,194 126,190 C 108,186 78,188 55,190 Z"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
      />
      {/* Stewart Island hint */}
      <motion.ellipse
        cx="90"
        cy="290"
        rx="14"
        ry="10"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.8 }}
      />

      {/* Depot pins on major cities */}
      {/* Auckland */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.4, ease: 'backOut' }}
        style={{ transformOrigin: '110px 62px' }}
      >
        <circle cx="110" cy="62" r="4" fill="rgba(196,98,45,1)" />
        <circle cx="110" cy="62" r="9" fill="rgba(196,98,45,0.2)" />
      </motion.g>
      {/* Wellington */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.4, ease: 'backOut' }}
        style={{ transformOrigin: '83px 144px' }}
      >
        <circle cx="83" cy="144" r="4" fill="rgba(196,98,45,1)" />
        <circle cx="83" cy="144" r="9" fill="rgba(196,98,45,0.2)" />
      </motion.g>
      {/* Christchurch */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.4, ease: 'backOut' }}
        style={{ transformOrigin: '122px 218px' }}
      >
        <circle cx="122" cy="218" r="4" fill="rgba(196,98,45,1)" />
        <circle cx="122" cy="218" r="9" fill="rgba(196,98,45,0.2)" />
      </motion.g>
      {/* Hamilton */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.35, duration: 0.4, ease: 'backOut' }}
        style={{ transformOrigin: '96px 90px' }}
      >
        <circle cx="96" cy="90" r="3" fill="rgba(255,255,255,0.6)" />
      </motion.g>
      {/* Dunedin */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.0, duration: 0.4, ease: 'backOut' }}
        style={{ transformOrigin: '96px 250px' }}
      >
        <circle cx="96" cy="250" r="3" fill="rgba(255,255,255,0.6)" />
      </motion.g>
    </svg>
  )
}

/* ─── Coverage Section ───────────────────────────────────────────────────── */
export function Coverage() {
  const { coverage } = SITE

  return (
    <section className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-tl from-ocean/15 via-transparent to-transparent pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">

          {/* ─── Left — map ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-last lg:order-first flex justify-center"
          >
            <div className="relative w-full max-w-[220px] mx-auto" style={{ aspectRatio: '200/340' }}>
              <NZMapDecoration />
            </div>
          </motion.div>

          {/* ─── Right — content ─────────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8"
          >
            <div>
              <motion.span
                variants={fadeUp()}
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/80 mb-4"
              >
                <span className="w-6 h-px bg-accent/50" />
                {coverage.eyebrow}
              </motion.span>
              <motion.h2
                variants={fadeUp(0.04)}
                className="font-display text-4xl md:text-5xl font-light text-white tracking-tight"
              >
                {coverage.headline}
              </motion.h2>
              <motion.p
                variants={fadeUp(0.08)}
                className="font-sans text-base text-white/55 leading-relaxed mt-4 max-w-[420px]"
              >
                {coverage.body}
              </motion.p>
            </div>

            {/* Island columns */}
            <motion.div
              variants={staggerContainer(0.05, 0.15)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {/* North Island */}
              <motion.div variants={fadeUp()}>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                  North Island
                </p>
                <ul className="space-y-2.5">
                  {coverage.northIsland.map((region, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <MapPin size={11} className="text-accent/70 shrink-0" />
                      <span className="font-sans text-sm text-white/65">{region}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* South Island */}
              <motion.div variants={fadeUp(0.05)}>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                  South Island
                </p>
                <ul className="space-y-2.5">
                  {coverage.southIsland.map((region, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <MapPin size={11} className="text-accent/70 shrink-0" />
                      <span className="font-sans text-sm text-white/65">{region}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Callout */}
            <motion.div
              variants={fadeUp(0.2)}
              className="inline-flex items-center gap-3 bg-white/6 border border-white/10 rounded-2xl px-5 py-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <p className="font-sans text-sm text-white/60">
                <span className="font-semibold text-white">{SITE.stats[1].value} depots</span>
                {' '}— daily runs connecting every major centre
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
