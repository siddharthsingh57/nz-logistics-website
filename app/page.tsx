import { Hero } from '@/components/sections/Hero'
import { Proof } from '@/components/sections/Proof'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyUs } from '@/components/sections/WhyUs'
import { Coverage } from '@/components/sections/Coverage'
import { Process } from '@/components/sections/Process'
import { CTA } from '@/components/sections/CTA'

/**
 * Home page ( / )
 *
 * Section order:
 *   Hero → Proof strip → Services overview → Why Us (stats) →
 *   Coverage (NZ map) → Process (how it works) → CTA
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Proof />
      <ServicesOverview />
      <WhyUs />
      <Coverage />
      <Process />
      <CTA />
    </>
  )
}
