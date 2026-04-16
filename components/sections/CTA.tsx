'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/utils'

export function CTA() {
  return (
    <section className="section-padding bg-accent relative overflow-hidden">
      {/* Topographic texture in accent */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='320'%3E%3Cellipse cx='240' cy='160' rx='220' ry='95' fill='none' stroke='rgba(255%2C255%2C255%2C0.5)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='175' ry='72' fill='none' stroke='rgba(255%2C255%2C255%2C0.5)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='130' ry='52' fill='none' stroke='rgba(255%2C255%2C255%2C0.5)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='85' ry='34' fill='none' stroke='rgba(255%2C255%2C255%2C0.5)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '480px 320px',
        }}
      />

      {/* Large decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[20vw] font-light text-white/5 whitespace-nowrap select-none leading-none">
          FREIGHT
        </span>
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center gap-8 lg:gap-10"
        >
          <div className="space-y-4 max-w-[640px]">
            <motion.span
              variants={fadeUp()}
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/60"
            >
              <span className="w-6 h-px bg-white/30" />
              Get started today
            </motion.span>
            <motion.h2
              variants={fadeUp(0.05)}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-balance"
            >
              Ready to move your freight?
            </motion.h2>
            <motion.p
              variants={fadeUp(0.1)}
              className="font-sans text-base text-white/70 leading-relaxed max-w-[480px] mx-auto"
            >
              Tell us what you need to move, when, and where — we&apos;ll get back to you within one business day with a clear, no-obligation quote.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp(0.15)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              variant="primary"
              size="lg"
              magnetic
              href="/contact"
              className="bg-white text-accent hover:bg-white/90 shadow-none hover:shadow-none"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Button>

            <a
              href={`tel:${SITE.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full px-9 py-4 text-lg border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={16} />
              {SITE.contact.phone}
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp(0.2)}
            className="flex flex-wrap items-center justify-center gap-6 pt-2"
          >
            {[
              'No lock-in contracts',
              'Same-day Auckland delivery',
              'Nationwide coverage',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                <span className="font-sans text-sm text-white/70">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
