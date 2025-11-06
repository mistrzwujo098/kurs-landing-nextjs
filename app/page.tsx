'use client'

import { useEffect } from 'react'
import HeroSimple from '@/components/HeroSimple'
import RegistrationDeadline from '@/components/RegistrationDeadline'
import ParentTestimonials from '@/components/ParentTestimonials'
import Problems from '@/components/Problems'
import MechanismExplanation from '@/components/MechanismExplanation'
import Solutions from '@/components/Solutions'
import CourseContent from '@/components/CourseContent'
import ObjectionHandling from '@/components/ObjectionHandling'
import PricingSimple from '@/components/PricingSimple'
import ComparisonTable from '@/components/ComparisonTable'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import ScrollProgress from '@/components/ScrollProgress'
import WhatYouDiscover from '@/components/WhatYouDiscover'
import WhyUs from '@/components/WhyUs'
// New components
import PossibilityInWorld from '@/components/PossibilityInWorld'
// import HowItWorks from '@/components/HowItWorks' // Disabled - duplicates MechanismExplanation
import RealTestimonials from '@/components/RealTestimonials'
import BlackFridayOffer from '@/components/BlackFridayOffer'
import RiskReversal from '@/components/RiskReversal'

export default function Home() {
  // Track user engagement
  useEffect(() => {
    // Track time on page
    const startTime = Date.now()

    const handleUnload = () => {
      const timeSpent = Date.now() - startTime
      // Send to analytics
      console.log(`User spent ${Math.floor(timeSpent / 1000)}s on page`)
    }

    window.addEventListener('beforeunload', handleUnload)

    // Exit intent detection
    const handleMouseLeave = async (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // User is leaving - show exit intent popup
        const shouldShow = localStorage.getItem('exitIntentShown')
        if (!shouldShow) {
          localStorage.setItem('exitIntentShown', 'true')
          // Lazy load confetti only when needed
          const confetti = (await import('canvas-confetti')).default
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#571A47', '#EC9A4F', '#06AEEF']
          })
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="App">
      {/* Scroll Progress & Navigation */}
      <ScrollProgress />

      {/* Registration Deadline Notice */}
      <RegistrationDeadline />

      {/* Hero Section */}
      <HeroSimple />

      {/* Possibility in World - Belief Shift Step 1 */}
      <PossibilityInWorld />

      {/* Social Proof */}
      <ParentTestimonials />

      {/* Problem & Solution */}
      <Problems />
      <Solutions />

      {/* How It Works - LAPS Method - DISABLED (duplicates MechanismExplanation) */}
      {/* <HowItWorks /> */}

      {/* What You Discover */}
      <WhatYouDiscover />

      {/* Mechanism Explanation */}
      <MechanismExplanation />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Course Content */}
      <CourseContent />

      {/* Real Testimonials - 11 authentic reviews */}
      <RealTestimonials />

      {/* Black Friday Offer - Value Stacking + Countdown */}
      <BlackFridayOffer />

      {/* Risk Reversal - 30 Day Guarantee */}
      <RiskReversal />

      {/* Pricing */}
      <PricingSimple />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Objections & FAQ */}
      <ObjectionHandling />
      <FAQ />

      {/* Footer & Persistent CTA */}
      <Footer />
      <CTAButton />
    </div>
  )
}
