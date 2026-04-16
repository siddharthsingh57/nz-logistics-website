'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer } from '@/lib/utils'

/* ─── Proof / Social proof section ──────────────────────────────────────── */
/**
 * CLIENT LOGOS: Replace the five grey rectangles below with real SVG/PNG logos.
 *   Recommended specs: 160×60px, transparent background, grey or brand colour.
 *   Keep the motion.div wrapper for the entrance animation.
 *
 * TESTIMONIAL: Replace the blockquote placeholder with a real customer quote.
 *   Format: 2–3 sentences, attributed to "First Name L., Title, Company".
 */
export function Proof() {
  const { proof } = SITE

  return (
    <section className="section-padding bg-surface border-y border-border-clr">
      <Container>
        {/* Logo strip */}
        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-10"
        >
          <motion.div
            variants={fadeUp()}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-12 h-px bg-border-clr" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted/60">
              {proof.eyebrow}
            </p>
            <span className="w-12 h-px bg-border-clr" />
          </motion.div>

          {/* Five client logo placeholders */}
          {/* Replace these grey rectangles with actual client logos */}
          <motion.div
            variants={staggerContainer(0.06, 0.05)}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={fadeUp()}
                className="w-[140px] h-[52px] rounded-lg bg-bg-alt border border-border-clr flex items-center justify-center"
                whileHover={{ opacity: 0.7, transition: { duration: 0.25 } }}
              >
                {/* Replace with: <img src="/clients/logo-name.svg" alt="Client name" className="max-h-8 w-auto opacity-50 hover:opacity-80 transition-opacity" /> */}
                <span className="font-sans text-[10px] text-muted/40 uppercase tracking-wider">
                  Client logo {i + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-16 max-w-[680px] mx-auto text-center"
        >
          <div className="relative">
            {/* Decorative quote mark */}
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-8xl text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/*
              TESTIMONIAL PLACEHOLDER
              Replace this blockquote with a real customer quote.
              Attribution: "First Name L., Job Title, Company — no full surnames for privacy"
            */}
            <blockquote className="relative z-10">
              <p className="font-display text-xl md:text-2xl font-light text-ink/70 leading-relaxed italic text-balance">
                [Add a real customer testimonial here — 2 to 3 sentences about reliability, on-time delivery, or service quality.]
              </p>
              <footer className="mt-5 font-sans text-sm text-muted">
                — [Client First Name L.], [Job Title], [Company Name]
              </footer>
            </blockquote>
          </div>
        </motion.div>

      </Container>
    </section>
  )
}
