'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, X } from 'lucide-react'
import { SITE } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input, Select, Textarea } from '@/components/ui/FormElements'
import { fadeUp, staggerContainer, EXPO_OUT } from '@/lib/utils'

/* ─── Form types ─────────────────────────────────────────────────────────── */
interface FormValues {
  name: string
  company: string
  pickup: string
  destination: string
  freightType: string
  message: string
}

interface FormErrors {
  name?: string
  pickup?: string
  destination?: string
  freightType?: string
}

const EMPTY_FORM: FormValues = {
  name: '',
  company: '',
  pickup: '',
  destination: '',
  freightType: '',
  message: '',
}

/* ─── Toast notification ─────────────────────────────────────────────────── */
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      transition={{ duration: 0.4, ease: EXPO_OUT }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 bg-primary text-white px-5 py-3.5 rounded-2xl shadow-card-hover max-w-[420px] w-[calc(100%-2rem)]"
      role="alert"
    >
      <CheckCircle size={18} className="text-accent shrink-0" />
      <p className="font-sans text-sm flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-white/50 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </motion.div>
  )
}

/* ─── Contact page ───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const { contact } = SITE

  /* Validation */
  function validate(): boolean {
    const errs: FormErrors = {}
    if (!values.name.trim()) errs.name = 'Name is required'
    if (!values.pickup.trim()) errs.pickup = 'Pickup location is required'
    if (!values.destination.trim()) errs.destination = 'Destination is required'
    if (!values.freightType) errs.freightType = 'Please select a freight type'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  /* Submit handler — no backend, logs to console + shows toast */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    // Simulate async submission
    setTimeout(() => {
      console.log('[Quote request submitted]', values)
      setLoading(false)
      setValues(EMPTY_FORM)
      setErrors({})
      setToast("Thanks! We've received your enquiry and will be in touch within one business day.")
      setTimeout(() => setToast(null), 6000)
    }, 800)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((er) => ({ ...er, [name]: undefined }))
    }
  }

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>

      {/* ─── Page hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-bg topo-texture overflow-hidden">
        <Container>
          <motion.div
            variants={staggerContainer(0.09, 0.2)}
            initial="hidden"
            animate="visible"
            className="max-w-[560px]"
          >
            <motion.nav
              variants={fadeUp()}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-sans text-muted/60 mb-6"
            >
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
              <span>/</span>
              <span className="text-muted/80">Contact</span>
            </motion.nav>

            <motion.span
              variants={fadeUp(0.04)}
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent/80 mb-4"
            >
              <span className="w-6 h-px bg-accent/50" />
              {contact.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp(0.08)}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight leading-[1.08]"
              style={{ whiteSpace: 'pre-line' }}
            >
              {contact.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.12)}
              className="font-sans text-base text-muted leading-relaxed mt-5 max-w-[400px]"
            >
              {contact.body}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ─── Main content — form + info ────────────────────────────────── */}
      <section className="section-padding bg-bg-alt">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">

            {/* ─── Quote form ────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: EXPO_OUT }}
            >
              <div className="bg-surface rounded-3xl p-8 md:p-10 border border-border-clr shadow-card">
                <h2 className="font-display text-2xl font-light text-ink tracking-tight mb-7">
                  Request a quote
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Row: Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your name *"
                      name="name"
                      id="name"
                      placeholder="Jane Smith"
                      value={values.name}
                      onChange={handleChange}
                      error={errors.name}
                      autoComplete="name"
                    />
                    <Input
                      label="Company (optional)"
                      name="company"
                      id="company"
                      placeholder="Smith Exports Ltd"
                      value={values.company}
                      onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>

                  {/* Row: Pickup + Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Pickup location *"
                      name="pickup"
                      id="pickup"
                      placeholder="e.g. Auckland CBD"
                      value={values.pickup}
                      onChange={handleChange}
                      error={errors.pickup}
                    />
                    <Input
                      label="Destination *"
                      name="destination"
                      id="destination"
                      placeholder="e.g. Christchurch depot"
                      value={values.destination}
                      onChange={handleChange}
                      error={errors.destination}
                    />
                  </div>

                  {/* Freight type */}
                  <Select
                    label="Freight type *"
                    name="freightType"
                    id="freightType"
                    value={values.freightType}
                    onChange={handleChange}
                    error={errors.freightType}
                  >
                    <option value="" disabled>Select freight type…</option>
                    {contact.freightTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Select>

                  {/* Message */}
                  <Textarea
                    label="Additional details (optional)"
                    name="message"
                    id="message"
                    placeholder="Tell us about dimensions, weight, special handling requirements, timing, or anything else we should know…"
                    value={values.message}
                    onChange={handleChange}
                    className="min-h-[130px]"
                  />

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full px-8 py-4 text-base bg-accent text-white hover:bg-accent-hover shadow-btn-accent transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send enquiry
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-sans text-xs text-muted/60 text-center">
                    We respond within one business day. No spam, ever.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* ─── Contact info ───────────────────────────────────────────── */}
            <motion.div
              variants={staggerContainer(0.09, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8 lg:pt-4"
            >
              {/* Depot info */}
              <motion.div variants={fadeUp()} className="space-y-5">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted/50">
                  Get in touch
                </h3>

                <div className="space-y-4">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/14 transition-colors">
                      <Phone size={16} strokeWidth={1.8} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-muted mb-0.5">Phone</p>
                      <p className="font-sans text-base font-medium text-ink group-hover:text-accent transition-colors">
                        {contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/14 transition-colors">
                      <Mail size={16} strokeWidth={1.8} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-muted mb-0.5">Email</p>
                      <p className="font-sans text-base font-medium text-ink group-hover:text-accent transition-colors">
                        {contact.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                      <MapPin size={16} strokeWidth={1.8} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-muted mb-0.5">Head Office</p>
                      <address className="not-italic font-sans text-base font-medium text-ink leading-relaxed">
                        {contact.addressLine1}
                        <br />
                        {contact.addressLine2}
                        <br />
                        {contact.addressLine3}
                      </address>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div variants={fadeUp(0.05)} className="h-px bg-border-clr" />

              {/* Hours */}
              <motion.div variants={fadeUp(0.08)} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={16} strokeWidth={1.8} className="text-primary" />
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted/50">
                    Operating Hours
                  </h3>
                </div>

                <dl className="space-y-2.5">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-sans text-sm text-muted">{contact.hours.weekdays}</dt>
                    <dd className="font-sans text-sm font-medium text-ink">{contact.hours.weekdayHours}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-sans text-sm text-muted">{contact.hours.saturday}</dt>
                    <dd className="font-sans text-sm font-medium text-ink">{contact.hours.saturdayHours}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-sans text-sm text-muted">{contact.hours.sunday}</dt>
                    <dd className="font-sans text-sm font-medium text-muted">{contact.hours.sundayHours}</dd>
                  </div>
                </dl>
              </motion.div>

              {/* Divider */}
              <motion.div variants={fadeUp(0.1)} className="h-px bg-border-clr" />

              {/* NZ-wide note */}
              <motion.div
                variants={fadeUp(0.12)}
                className="bg-primary/6 border border-primary/10 rounded-2xl p-5 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-accent mt-1 shrink-0" />
                <p className="font-sans text-sm text-primary/80 leading-relaxed">
                  <span className="font-semibold">Serving all of New Zealand</span> — our depot network covers both islands, with daily runs to every major centre. Wherever your freight needs to go, we can get it there.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
