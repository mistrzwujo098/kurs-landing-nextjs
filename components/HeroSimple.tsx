'use client'

import React from 'react';
import Image from 'next/image';
import { Star, ChevronRight } from 'lucide-react';
import { tracking } from '@/lib/tracking';

const HeroSimple: React.FC = () => {
  const scrollToPricing = () => {
    tracking.viewContent('Hero CTA - Zobacz pakiety')
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const daysToExam = Math.ceil((new Date('2026-05-12').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section id="hero" className="relative bg-[#fbf9f7] pt-20 pb-16 px-4 sm:px-6 md:px-4 overflow-hidden">
      {/* Subtelny akcent tła — pojedyncze ciepłe światło, zamiast 3-kolorowego gradientu */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-paulina-bg-yellow/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Asymetryczny layout 7/5 zamiast 50/50 */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Lewa kolumna — 7/12 (większa, dominująca typografia) */}
          <div className="md:col-span-7 animate-fade-in-up">
            {/* Jeden malutki pretitle zamiast badge z gradientem */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-6">
              Program Ósmoklasisty · Edycja 2026
            </p>

            {/* Wielki headline z display fontem */}
            <h1 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] text-paulina-primary leading-[0.95] mb-8 tracking-tight">
              84% bez&nbsp;korepetycji.
              <span className="block italic text-paulina-accent font-normal">
                Metoda LAPS.
              </span>
            </h1>

            {/* Prosty subheadline, bez emoji, z typograficznym akcentem */}
            <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
              Sprawdzona przez <span className="font-semibold text-paulina-primary">24 000 ósmoklasistów</span> metoda,
              która sprawia, że dziecko samo siada do nauki.
              Wystarczy 20&nbsp;minut&nbsp;dziennie.
            </p>

            {/* CTA + minimalny proof inline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center gap-2 px-8 py-4 bg-paulina-primary text-white font-bold rounded-full hover:bg-paulina-accent transition-colors duration-300 active:scale-[0.98] group"
              >
                <span className="text-base">Zobacz pakiety i ceny</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-paulina-accent fill-current" size={14} />
                  ))}
                </div>
                <span>
                  <strong className="text-paulina-primary">4,9 / 5</strong> · 24 000+ uczniów
                </span>
              </div>
            </div>

            {/* Minimalny urgency — bez emoji, bez ramek */}
            <p className="text-sm text-gray-500 max-w-md">
              Do egzaminu zostało <span className="font-semibold text-paulina-primary">{daysToExam} dni</span>. Program wymaga min. 3 miesięcy pracy — im wcześniej start, tym lżej.
            </p>
          </div>

          {/* Prawa kolumna — 5/12 (mniejsze zdjęcie, offset) */}
          <div className="md:col-span-5 hidden md:block">
            <div className="relative">
              <Image
                src="https://paulinaodmatematyki.com/wp-content/uploads/2025/06/hero-1.webp"
                alt="Paulina od Matematyki"
                width={600}
                height={600}
                sizes="(max-width: 768px) 0px, (max-width: 1280px) 40vw, 480px"
                priority
                unoptimized
                className="rounded-2xl w-full max-w-md mx-auto shadow-lg"
              />

              {/* Jedna liczba jako element graficzny — duża typografia zamiast "stat badge" */}
              <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl px-6 py-5 shadow-xl border border-gray-100">
                <p className="display-numeral text-[5rem] text-paulina-primary">84%</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Średni wynik kursantów</p>
              </div>

              {/* Handwritten note — strzałka do zdjęcia, autorski touch */}
              <div className="absolute -top-4 -right-2 rotate-6 hidden lg:block">
                <p className="font-hand text-2xl text-paulina-accent leading-tight text-right max-w-[140px]">
                  cześć,
                  <span className="block">to ja!</span>
                </p>
                <svg
                  className="w-10 h-10 text-paulina-accent mt-1 ml-auto -rotate-45"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 20 Q 15 5, 35 20 M 28 15 L 35 20 L 30 27"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA — bez zmian, działa */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-4 shadow-lg" data-testid="sticky-cta">
        <button
          onClick={scrollToPricing}
          className="w-full py-3 bg-paulina-primary text-white font-bold text-lg rounded-full hover:bg-paulina-accent transition-colors duration-300"
        >
          Zobacz pakiety i ceny
        </button>
      </div>
    </section>
  );
};

export default HeroSimple;
