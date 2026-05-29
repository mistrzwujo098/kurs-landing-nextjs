'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroSimple from '@/components/HeroSimple'
import WarmReciprocity from '@/components/WarmReciprocity'
import PossibilityInWorld from '@/components/PossibilityInWorld'
import Problems from '@/components/Problems'
import MechanismExplanation from '@/components/MechanismExplanation'
import Solutions from '@/components/Solutions'
import CourseContent from '@/components/CourseContent'
import PricingSimple from '@/components/PricingSimple'
import FAQ from '@/components/FAQ'
import CTAButton from '@/components/CTAButton'
import ScrollProgress from '@/components/ScrollProgress'
import WhatYouDiscover from '@/components/WhatYouDiscover'
import WhyUs from '@/components/WhyUs'
import WhosItFor from '@/components/WhosItFor'

// Lazy load components below fold for better LCP
const SectionPlaceholder = () => <div className="min-h-[400px]" />;
const PullQuote = dynamic(() => import('@/components/PullQuote'), { loading: SectionPlaceholder })
const PlatformShowcase = dynamic(() => import('@/components/PlatformShowcase'), { loading: SectionPlaceholder })
const RealTestimonials = dynamic(() => import('@/components/RealTestimonials'), { loading: SectionPlaceholder })
const RiskReversal = dynamic(() => import('@/components/RiskReversal'), { loading: SectionPlaceholder })
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), { loading: SectionPlaceholder })
const Footer = dynamic(() => import('@/components/Footer'), { loading: SectionPlaceholder })
// ExitPopup wyłączony 2026-05-29: downsell do minikursów kanibalizował sprzedaż 999 zł i nie zbierał maila.
// Wróci jako opt-in z lead magnetem (faza opt-in / lead-magnety). Odkomentuj import + <ExitPopup /> niżej, by przywrócić.
// const ExitPopup = dynamic(() => import('@/components/ExitPopup'))

export default function Home() {
  // Track user engagement
  useEffect(() => {
    const startTime = Date.now()

    const handleUnload = () => {
      const timeSpent = Date.now() - startTime
      if (process.env.NODE_ENV === 'development') {
        console.log(`User spent ${Math.floor(timeSpent / 1000)}s on page`)
      }
    }

    window.addEventListener('beforeunload', handleUnload)

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [])

  return (
    <div className="App">
      <ScrollProgress />

      <main>
      {/* Hero */}
      <HeroSimple />

      {/* Warm-only: reciprocity dla byłych kursantów (renderowane tylko gdy ?warm=1 lub ?utm_source=email) */}
      <WarmReciprocity variant="exclusive" />

      {/* Liczby + „Dlaczego teraz" */}
      <PossibilityInWorld />

      {/* Pull quote - przerwa rytmu, głos rodzica */}
      <PullQuote />

      {/* Diagnoza problemu */}
      <Problems />

      {/* Transformacja - co osiągnie dziecko */}
      <Solutions />

      {/* Co konkretnie odkryje */}
      <WhatYouDiscover />

      {/* Jak działa metoda LAPS */}
      <MechanismExplanation />

      {/* Porównanie z korepetycjami */}
      <WhyUs />

      {/* Zawartość kursu */}
      <CourseContent />

      {/* Opinie - masonry */}
      <RealTestimonials />

      {/* Gwarancja (risk reversal) */}
      <RiskReversal />

      {/* Dla kogo / dla kogo nie */}
      <WhosItFor />

      {/* Image-heavy preview platformy - oddech wizualny przed ofertą */}
      <PlatformShowcase />

      {/* Pricing */}
      <PricingSimple />

      {/* Pełne porównanie pakietów */}
      <ComparisonTable />

      {/* FAQ (scalone z Objection Handling) */}
      <FAQ />
      </main>

      <Footer />
      <CTAButton />
      {/* <ExitPopup /> wyłączony 2026-05-29 - patrz komentarz przy imporcie */}
    </div>
  )
}
