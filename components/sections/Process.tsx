'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'

export function Process() {
  const { process } = SITE

  return (
    <section className="section-padding bg-bg topo-texture">
      <Container>
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-[560px] mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp()}
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/80 mb-4"
          >
            <span className="w-6 h-px bg-accent/50" />
            {process.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="font-display text-4xl md:text-5xl font-light text-ink tracking-tight"
            style={{ whiteSpace: 'pre-line' }}
          >
            {process.headline}
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-clr to-transparent" />

          <motion.div
            variants={staggerContainer(0.12, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp()}
                className="relative flex flex-col gap-5"
              >
                {/* Step number */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <motion.div
                    className="relative w-[72px] h-[72px] rounded-2xl bg-surface border border-border-clr shadow-card flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    {/* Background line connector on desktop */}
                    {i < process.steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-px bg-border-clr" />
                    )}
                    <span className="stat-number font-display text-2xl font-light text-primary/40">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                <div className="flex flex-col gap-2 lg:mt-6">
                  <h3 className="font-sans text-base font-semibold text-ink leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps — mobile/tablet only */}
                {i < process.steps.length - 1 && (
                  <div className="flex lg:hidden items-center justify-center mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-muted/30 rotate-90 md:rotate-0"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
