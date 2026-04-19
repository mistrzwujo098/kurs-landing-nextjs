'use client'

import React, { useState, useEffect } from 'react';
import { throttle } from '@/utils/throttle';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'hero', name: 'Start' },
    { id: 'problems', name: 'Problem' },
    { id: 'solutions', name: 'Rozwiązanie' },
    { id: 'mechanism', name: 'Jak działa' },
    { id: 'course-content', name: 'Program' },
    { id: 'testimonials', name: 'Opinie' },
    { id: 'pricing', name: 'Cennik' },
    { id: 'faq', name: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Progress Bar — pojedyncza paulina-accent, bez gradientu */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-paulina-accent transition-[width] duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Navigation — cienkie kropki w pionowej linii (bez ikonek emoji) */}
      <nav
        aria-label="Nawigacja sekcji"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3 group"
                aria-label={`Przejdź do sekcji ${section.name}`}
              >
                <span
                  className={`inline-block h-[1px] transition-all ${
                    activeSection === section.id
                      ? 'w-10 bg-paulina-accent'
                      : 'w-5 bg-paulina-primary/30 group-hover:w-8 group-hover:bg-paulina-accent/70'
                  }`}
                />
                <span
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    activeSection === section.id
                      ? 'text-paulina-accent font-semibold opacity-100'
                      : 'text-paulina-primary/50 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {section.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ScrollProgress;
