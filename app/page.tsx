'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import HeroSimple from '@/components/HeroSimple'
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
import JanuaryOffer from '@/components/JanuaryOffer'
import WhosItFor from '@/components/WhosItFor'
import QualifierGate from '@/components/QualifierGate'

// Lazy load components below fold for better LCP
const SectionPlaceholder = () => <div className="min-h-[400px]" />;
const PullQuote = dynamic(() => import('@/components/PullQuote'), { loading: SectionPlaceholder })
const PlatformShowcase = dynamic(() => import('@/components/PlatformShowcase'), { loading: SectionPlaceholder })
const RealTestimonials = dynamic(() => import('@/components/RealTestimonials'), { loading: SectionPlaceholder })
const RiskReversal = dynamic(() => import('@/components/RiskReversal'), { loading: SectionPlaceholder })
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), { loading: SectionPlaceholder })
const Footer = dynamic(() => import('@/components/Footer'), { loading: SectionPlaceholder })
const ExitPopup = dynamic(() => import('@/components/ExitPopup'))

export default function Home() {
  const [showFullPage, setShowFullPage] = useState(false)

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

  if (!showFullPage) {
    return <QualifierGate onShowFullPage={() => setShowFullPage(true)} courseType="egzamin" />
  }

  return (
    <div className="App">
      <ScrollProgress />

      {/* Hero */}
      <HeroSimple />

      {/* Liczby + „Dlaczego teraz" */}
      <PossibilityInWorld />

      {/* Pull quote — przerwa rytmu, głos rodzica */}
      <PullQuote />

      {/* Diagnoza problemu */}
      <Problems />

      {/* Transformacja — co osiągnie dziecko */}
      <Solutions />

      {/* Co konkretnie odkryje */}
      <WhatYouDiscover />

      {/* Jak działa metoda LAPS */}
      <MechanismExplanation />

      {/* Porównanie z korepetycjami */}
      <WhyUs />

      {/* Zawartość kursu */}
      <CourseContent />

      {/* Opinie — masonry */}
      <RealTestimonials />

      {/* Gwarancja (risk reversal) */}
      <RiskReversal />

      {/* Dla kogo / dla kogo nie */}
      <WhosItFor />

      {/* Image-heavy preview platformy — oddech wizualny przed ofertą */}
      <PlatformShowcase />

      {/* Wartość oferty / bonusy */}
      <JanuaryOffer />

      {/* Pricing */}
      <PricingSimple />

      {/* Pełne porównanie pakietów */}
      <ComparisonTable />

      {/* FAQ (scalone z Objection Handling) */}
      <FAQ />

      <Footer />
      <CTAButton />
      <ExitPopup />
    </div>
  )
}
