'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { EXPO_OUT } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 44)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ─── Desktop + tablet bar ─────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-bg/94 backdrop-blur-xl border-b border-border-clr shadow-[0_1px_20px_-4px_rgba(26,26,24,0.06)]'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'font-display tracking-tight leading-none transition-all duration-500',
                'text-xl md:text-2xl',
                scrolled
                  ? 'font-light text-primary hover:opacity-75'
                  : 'font-normal text-white hover:text-white/85 drop-shadow-[0_1px_16px_rgba(0,0,0,0.55)]'
              )}
            >
              {SITE.name}
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-9">
              {SITE.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={cn(
                    'link-sweep font-sans text-sm font-medium transition-colors duration-500',
                    pathname === item.href
                      ? 'text-accent'
                      : scrolled
                        ? 'text-ink/65 hover:text-ink'
                        : 'text-white/75 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-2 font-sans text-sm font-medium rounded-full px-5 py-2.5',
                  'bg-accent text-white shadow-btn-accent transition-all duration-300',
                  'hover:bg-accent-hover hover:-translate-y-0.5'
                )}
              >
                Get a Quote
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                'md:hidden p-2 -mr-2 transition-colors duration-500',
                scrolled ? 'text-ink hover:text-accent' : 'text-white hover:text-white/70'
              )}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'block' }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'block' }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </Container>
      </header>

      {/* ─── Mobile full-screen overlay ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: EXPO_OUT }}
            className="fixed inset-0 z-40 bg-primary-dark flex flex-col"
          >
            {/* Subtle topo texture on overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='320'%3E%3Cellipse cx='240' cy='160' rx='220' ry='95' fill='none' stroke='rgba(255%2C255%2C255%2C0.15)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='170' ry='70' fill='none' stroke='rgba(255%2C255%2C255%2C0.15)' stroke-width='1'/%3E%3Cellipse cx='240' cy='160' rx='120' ry='48' fill='none' stroke='rgba(255%2C255%2C255%2C0.15)' stroke-width='1'/%3E%3C/svg%3E\")",
                backgroundSize: '480px 320px',
                backgroundRepeat: 'repeat',
              }}
            />

            <Container className="flex flex-col justify-center h-full gap-6 py-24 relative">
              {SITE.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.55,
                    ease: EXPO_OUT,
                  }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 font-display text-4xl text-white/80 hover:text-white transition-colors duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-sm font-sans text-white/30 group-hover:text-accent transition-colors w-6">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.55, ease: EXPO_OUT }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-accent-hover transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="font-sans text-sm text-white/30 mt-auto"
              >
                {SITE.contact.phone}
              </motion.p>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
