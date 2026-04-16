'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    console.log('[Newsletter signup]', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-primary-dark text-white/80">
      {/* ─── Main footer grid ────────────────────────────────────────────── */}
      <Container className="pt-20 pb-12">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]"
        >
          {/* Col 1 — Brand */}
          <motion.div variants={fadeUp()} className="space-y-5">
            <Link
              href="/"
              className="font-display text-xl font-light text-white tracking-tight block hover:text-white/80 transition-colors"
            >
              {SITE.name}
            </Link>
            <p className="font-sans text-sm leading-relaxed text-white/55 max-w-[260px]">
              {SITE.footer.tagline}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={SITE.footer.social.linkedin}
                aria-label="LinkedIn"
                className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={SITE.footer.social.facebook}
                aria-label="Facebook"
                className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Facebook size={15} />
              </a>
              <a
                href={SITE.footer.social.instagram}
                aria-label="Instagram"
                className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
            </div>
          </motion.div>

          {/* Col 2 — Navigation */}
          <motion.div variants={fadeUp(0.05)}>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 3 — Services */}
          <motion.div variants={fadeUp(0.1)}>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {SITE.footer.servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact + Newsletter */}
          <motion.div variants={fadeUp(0.15)} className="space-y-7">
            {/* Contact */}
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
                Contact
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone size={13} className="text-accent mt-0.5 shrink-0" />
                  <a
                    href={`tel:${SITE.contact.phone}`}
                    className="font-sans text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {SITE.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={13} className="text-accent mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="font-sans text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {SITE.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={13} className="text-accent mt-1 shrink-0" />
                  <address className="not-italic font-sans text-sm text-white/55 leading-relaxed">
                    {SITE.contact.addressLine1}
                    <br />
                    {SITE.contact.addressLine2}
                    <br />
                    {SITE.contact.addressLine3}
                  </address>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
                Newsletter
              </p>
              <p className="font-sans text-xs text-white/40 mb-3 leading-relaxed">
                {SITE.footer.newsletterLabel}
              </p>
              {subscribed ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-sans text-sm text-accent"
                >
                  Thanks, you&apos;re subscribed!
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={SITE.footer.newsletterPlaceholder}
                    className="flex-1 bg-white/8 border border-white/12 rounded-xl px-3.5 py-2.5 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-accent hover:bg-accent-hover rounded-xl transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Bottom bar ──────────────────────────────────────────────────── */}
        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            {SITE.footer.copyright}
          </p>
          <p className="font-sans text-xs text-white/20">
            New Zealand-owned and operated
          </p>
        </div>
      </Container>
    </footer>
  )
}
