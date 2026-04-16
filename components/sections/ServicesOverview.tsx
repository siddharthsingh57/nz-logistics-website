'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Warehouse, PackageCheck, Thermometer, FileCheck, ArrowRight } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Truck,
  Warehouse,
  PackageCheck,
  Thermometer,
  FileCheck,
}

export function ServicesOverview() {
  const { servicesOverview } = SITE

  return (
    <section className="section-padding bg-bg-alt relative overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-14"
        >
          <div>
            <motion.span
              variants={fadeUp()}
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/80 mb-4"
            >
              <span className="w-6 h-px bg-accent/50" />
              What we do
            </motion.span>
            <motion.h2
              variants={fadeUp(0.05)}
              className="font-display text-4xl md:text-5xl font-light text-ink tracking-tight text-balance"
            >
              End-to-end logistics,<br className="hidden md:block" /> across both islands.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp(0.1)} className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary hover:text-accent transition-colors duration-300 link-sweep"
            >
              View all services
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {servicesOverview.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Truck
            const isLast = i === servicesOverview.length - 1
            const isSecondLast = i === servicesOverview.length - 2

            return (
              <motion.div
                key={service.id}
                variants={fadeUp()}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: EXPO_OUT } }}
                className={cn(
                  'group relative bg-surface rounded-2xl p-6 border border-border-clr shadow-card hover:shadow-card-hover transition-shadow duration-400 cursor-pointer flex flex-col gap-4',
                  // Last item on xl spans 2 cols if odd count
                  isLast && servicesOverview.length % 2 !== 0 && 'sm:col-span-2 lg:col-span-1'
                )}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/14 transition-colors duration-300">
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                    className="text-primary group-hover:text-primary transition-colors"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-sans text-base font-semibold text-ink mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn more */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-accent opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn more <ArrowRight size={11} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
