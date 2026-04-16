'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'

/* ─── Count-up hook ──────────────────────────────────────────────────────── */
function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    // Extract numeric part and suffix like "+" or "%"
    const numericMatch = target.match(/^(\d+)/)
    const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : null

    if (numericPart === null || target.includes('[')) {
      // Placeholder value — just display as-is
      setDisplay(target)
      return
    }

    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * numericPart)
      setDisplay(String(current))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(String(numericPart))
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return { display, ref }
}

/* ─── Stat counter block ─────────────────────────────────────────────────── */
function StatBlock({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const { display, ref } = useCountUp(value)

  return (
    <div className="flex flex-col gap-1">
      <span
        ref={ref}
        className="stat-number font-display text-5xl md:text-6xl font-light text-white leading-none"
      >
        {display}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="font-sans text-sm text-white/50 mt-1">{label}</span>
    </div>
  )
}

/* ─── Why Us Section ─────────────────────────────────────────────────────── */
export function WhyUs() {
  const { whyUs, stats } = SITE

  return (
    <section className="section-padding bg-primary relative overflow-hidden topo-texture">
      {/* Topo texture already applied via class; add extra depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-transparent to-primary-light/20 pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">

          {/* ─── Left — headline & differentiators ──────────────────────── */}
          <motion.div
            variants={staggerContainer(0.09, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                variants={fadeUp()}
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/90"
              >
                <span className="w-6 h-px bg-accent/50" />
                {whyUs.eyebrow}
              </motion.span>

              <motion.h2
                variants={fadeUp(0.04)}
                className="font-display text-4xl md:text-5xl font-light text-white tracking-tight"
                style={{ whiteSpace: 'pre-line' }}
              >
                {whyUs.headline}
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp(0.08)}
              className="font-sans text-base leading-relaxed text-white/60 max-w-[440px]"
            >
              {whyUs.body}
            </motion.p>

            {/* Key points */}
            <motion.ul
              variants={staggerContainer(0.07, 0.12)}
              className="space-y-4"
            >
              {whyUs.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp()}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={2}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-sans text-sm font-semibold text-white/90 leading-snug">
                      {point.title}
                    </p>
                    <p className="font-sans text-sm text-white/45 leading-relaxed mt-0.5">
                      {point.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ─── Right — count-up stats grid ────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Stats 2×2 bento */}
            <div className="grid grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp()}
                  className="bg-primary/80 backdrop-blur-sm p-8 flex flex-col justify-between gap-3"
                >
                  <StatBlock value={stat.value} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>

            {/* "Image placeholder" below the stats grid */}
            <motion.div
              variants={fadeUp(0.3)}
              className="mt-5 rounded-2xl overflow-hidden bg-primary-light/30 border border-white/8"
              style={{ aspectRatio: '16/7' }}
            >
              {/* Replace with image of [fleet of trucks at an Auckland depot, dawn light] */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="font-sans text-xs text-white/20 text-center px-8 leading-relaxed">
                  {/* Replace with image of [trucks on SH1 or at a depot — golden-hour light] */}
                  Image placeholder — aspect ratio 16:7
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
