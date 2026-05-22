'use client'

import React from 'react';
import Image from 'next/image';

/**
 * Image-heavy sekcja przed Pricingiem - łamie rytm „pretitle + H2 + tekst".
 * Asymetryczny grid zdjęć platformy z nadmiernym whitespace dla editorial feel.
 */
const PlatformShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fbf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Nagłówek - asymetryczny, po lewej, nie wycentrowany */}
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
              Wnętrze kursu
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-paulina-primary tracking-tight leading-[1.05]">
              Zobacz jak&nbsp;to&nbsp;wygląda
              <span className="block italic text-paulina-accent font-normal mt-1">
                od środka
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-4">
            <p className="text-gray-600 leading-relaxed md:text-lg">
              Platforma na komputerze, tablecie i telefonie. Wszystko, co dziecko ma pod ręką 24/7 - bez instalowania niczego.
            </p>
          </div>
        </div>

        {/* Asymetryczny grid - 1 duży + 2 mniejsze z offsetami */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {/* Lewy duży */}
          <div className="md:col-span-7 md:row-span-2 rounded-3xl overflow-hidden border border-gray-200 relative group">
            <Image
              src="https://paulinaodmatematyki.com/wp-content/uploads/2024/07/CleanShot-2024-07-18-at-16.03.35.png"
              alt="Widok lekcji w kursie"
              width={900}
              height={700}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-hand text-2xl text-white leading-tight">
                &ldquo;Wszystko krok po kroku&rdquo;
              </p>
            </div>
          </div>

          {/* Prawy górny - lista tematów (obraz natywnie panoramiczny) */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-4 aspect-[5/2] md:aspect-auto md:min-h-[140px]">
            <Image
              src="https://paulinaodmatematyki.com/wp-content/uploads/2024/12/11fe3aae32f1e20994207d29fef4679257073333.webp"
              alt="Widok listy tematów"
              width={600}
              height={70}
              className="max-w-full h-auto object-contain"
              unoptimized
            />
          </div>

          {/* Prawy dolny - z cytatem zamiast zdjęcia, breaks the image grid rhythm */}
          <div className="md:col-span-5 rounded-3xl p-8 md:p-10 bg-paulina-bg-yellow border border-paulina-accent/20 flex flex-col justify-center">
            <p className="display-numeral text-5xl text-paulina-primary leading-none mb-3">
              1 500+
            </p>
            <p className="font-bold text-paulina-primary mb-1">
              zadań do rozwiązania
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Każde z rozwiązaniem krok po kroku. Dziecko rozwiązuje, klika „sprawdź", od razu wie czy dobrze.
            </p>
          </div>
        </div>

        {/* Drugi rząd - jeden pełny obraz + dwa małe */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6 mt-6">
          {/* Paulina - natywnie landscape, kontener landscape żeby nie ucinać twarzy */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-gray-200 bg-white aspect-[4/3]">
            <Image
              src="https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-2-1.webp"
              alt="Paulina prowadząca lekcję"
              width={1263}
              height={827}
              className="w-full h-full object-cover object-top"
              unoptimized
            />
          </div>
          {/* Platforma na różnych urządzeniach - natywnie szeroka, contain żeby nic nie uciąć */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden border border-gray-200 bg-[#fbf9f7] flex items-center justify-center p-4 aspect-[16/9] md:aspect-auto">
            <Image
              src="https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-1-1.webp"
              alt="Platforma kursu na różnych urządzeniach"
              width={1241}
              height={635}
              className="max-w-full h-auto object-contain"
              unoptimized
            />
          </div>
          <div className="md:col-span-3 rounded-3xl p-8 bg-paulina-primary text-white flex flex-col justify-between">
            <div>
              <p className="font-hand text-2xl text-paulina-accent mb-2 leading-tight">
                Dostęp 24/7
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Logowanie z komputera, telefonu albo tabletu. Tam, gdzie dziecko ma ochotę usiąść.
              </p>
            </div>
            <p className="display-numeral text-4xl text-white mt-8">
              ∞
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
