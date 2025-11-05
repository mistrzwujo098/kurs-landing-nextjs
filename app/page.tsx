'use client'

import { useEffect } from 'react'
import HeroSimple from '@/components/HeroSimple'
import RegistrationDeadline from '@/components/RegistrationDeadline'
import ParentTestimonials from '@/components/ParentTestimonials'
import Problems from '@/components/Problems'
import MechanismExplanation from '@/components/MechanismExplanation'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'
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
import confetti from 'canvas-confetti'

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
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // User is leaving - show exit intent popup
        const shouldShow = localStorage.getItem('exitIntentShown')
        if (!shouldShow) {
          localStorage.setItem('exitIntentShown', 'true')
          // Trigger exit intent modal here
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

      {/* Social Proof */}
      <ParentTestimonials />

      {/* Problem & Solution */}
      <Problems />
      <Solutions />

      {/* What You Discover */}
      <WhatYouDiscover />

      {/* How it works */}
      <MechanismExplanation />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Course Content */}
      <CourseContent />

      {/* Testimonials */}
      <Testimonials />

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
