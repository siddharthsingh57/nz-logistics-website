'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Truck,
  Warehouse,
  PackageCheck,
  Thermometer,
  FileCheck,
  Check,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SITE, SERVICES_DETAIL } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'
import { cn } from '@/lib/utils'

/* ─── Icon map ───────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
  Truck,
  Warehouse,
  PackageCheck,
  Thermometer,
  FileCheck,
}

/* ─── Services page ──────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* ─── Page hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-primary-dark overflow-hidden">
        {/* Topo texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='320'%3E%3Cellipse cx='240' cy='160' rx='220' ry='95' fill='none' stroke='rgba(255%2C255%2C255%2C0.3)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='175' ry='72' fill='none' stroke='rgba(255%2C255%2C255%2C0.3)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='130' ry='52' fill='none' stroke='rgba(255%2C255%2C255%2C0.3)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='85' ry='34' fill='none' stroke='rgba(255%2C255%2C255%2C0.3)' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '480px 320px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/80 pointer-events-none" />

        <Container className="relative">
          <motion.div
            variants={staggerContainer(0.09, 0.2)}
            initial="hidden"
            animate="visible"
            className="max-w-[640px]"
          >
            <motion.nav
              variants={fadeUp()}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-sans text-white/40 mb-6"
            >
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Services</span>
            </motion.nav>

            <motion.span
              variants={fadeUp(0.04)}
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/80 mb-4"
            >
              <span className="w-6 h-px bg-accent/50" />
              What we offer
            </motion.span>

            <motion.h1
              variants={fadeUp(0.08)}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]"
            >
              Complete logistics solutions for New Zealand businesses.
            </motion.h1>

            <motion.p
              variants={fadeUp(0.12)}
              className="font-sans text-base md:text-lg text-white/55 leading-relaxed mt-5 max-w-[500px]"
            >
              From full-load freight to customs clearance, every service is designed around what New Zealand businesses actually need — reliability, transparency, and zero surprises.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ─── Service nav strip ─────────────────────────────────────────── */}
      <div className="sticky top-[72px] z-40 bg-surface border-b border-border-clr shadow-sm">
        <Container>
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {SERVICES_DETAIL.map((s) => {
              const Icon = ICON_MAP[s.icon] ?? Truck
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 font-sans text-sm text-ink/60 hover:text-ink px-4 py-2 rounded-full hover:bg-bg transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <Icon size={14} strokeWidth={1.8} />
                  {s.title}
                </a>
              )
            })}
          </div>
        </Container>
      </div>

      {/* ─── Service detail sections ───────────────────────────────────── */}
      {SERVICES_DETAIL.map((service, idx) => {
        const Icon = ICON_MAP[service.icon] ?? Truck
        const isEven = idx % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={cn(
              'section-padding',
              isEven ? 'bg-bg topo-texture' : 'bg-bg-alt'
            )}
          >
            <Container>
              <div
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center',
                  !isEven && 'lg:direction-rtl'
                )}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: EXPO_OUT }}
                  className={cn(
                    'flex flex-col gap-6',
                    !isEven && 'lg:order-2'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.6} className="text-primary" />
                    </div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent/70">
                      {service.title}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-light text-ink tracking-tight leading-[1.1]">
                    {service.headline}
                  </h2>

                  <p className="font-sans text-base text-muted leading-relaxed max-w-[440px]">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: EXPO_OUT }}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <span className="font-sans text-sm text-ink/75 leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Button variant="primary" size="md" magnetic href="/contact">
                      Get a quote for {service.title.toLowerCase()}
                      <ArrowRight size={15} />
                    </Button>
                  </div>
                </motion.div>

                {/* Image placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, ease: EXPO_OUT, delay: 0.1 }}
                  className={cn(!isEven && 'lg:order-1')}
                >
                  <div
                    className="relative w-full rounded-2xl overflow-hidden bg-bg-alt border border-border-clr"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Replace with: <img src="..." alt="[descriptive alt text]" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                      <Icon size={40} strokeWidth={1} className="text-primary/20" />
                      <p className="font-sans text-xs text-muted/40 max-w-[200px] leading-relaxed">
                        {/* Image placeholder — aspect ratio 4:3 */}
                        {service.imagePlaceholder
                          .replace('/* Replace with ', '')
                          .replace(' */', '')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>
        )
      })}

      {/* ─── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-ocean/30 pointer-events-none" />
        <Container className="relative">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-[560px]">
              <motion.h2
                variants={fadeUp()}
                className="font-display text-3xl md:text-4xl font-light text-white tracking-tight"
              >
                Not sure which service fits your needs?
              </motion.h2>
              <motion.p
                variants={fadeUp(0.05)}
                className="font-sans text-base text-white/55"
              >
                Our team can help you build the right freight solution. Tell us what you need to move.
              </motion.p>
            </div>
            <motion.div variants={fadeUp(0.1)} className="shrink-0">
              <Button
                variant="primary"
                size="lg"
                magnetic
                href="/contact"
                className="whitespace-nowrap"
              >
                Talk to our team
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
