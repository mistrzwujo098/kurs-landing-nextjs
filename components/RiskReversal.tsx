'use client'

import React from 'react';
import { Shield } from 'lucide-react';

const RiskReversal: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Piszesz jedno zdanie',
      description: 'Mail na kontakt@… z jednym zdaniem: „Chcę zwrot środków”. Nie musisz tłumaczyć dlaczego.'
    },
    {
      num: '02',
      title: 'Dostajesz potwierdzenie w 24-48h',
      description: 'Osobiście czytam każdy taki mail. Odpowiadam szybko, bez prób przekonywania.'
    },
    {
      num: '03',
      title: 'Pieniądze wracają w 3-5 dni',
      description: 'Przelew na to samo konto, z którego zapłaciłeś. Kwota 1:1, bez potrąceń.'
    }
  ];

  return (
    <section id="guarantee" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header - bez wielkiej zielonej ikony, display font */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent-text mb-4">
            Gwarancja
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-6 tracking-tight">
            30 dni na decyzję.
            <span className="block italic text-paulina-accent-text font-normal">Zero ryzyka dla Ciebie.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kupujesz kurs. Przez 30 dni testujesz. Jeśli nie pasuje - piszesz jedno zdanie i dostajesz 100% pieniędzy z powrotem.
          </p>
        </div>

        {/* Główna obietnica - karta, ale bez border-4 zielony */}
        <div className="bg-[#fbf9f7] rounded-3xl p-8 md:p-12 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                Dlaczego mogę to zaoferować
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Szczerze: wiem, że kurs działa. <strong className="text-paulina-primary">98% rodziców poleca go znajomym.</strong> Zwroty zdarzają się rzadko (poniżej 2%).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ci, co zwracają, i tak by z kursu nie skorzystali - oszczędzam czas na wsparciu dla niezadowolonych, a Ty masz spokój, że nie ryzykujesz pieniędzy.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-gray-200">
                <Shield className="text-paulina-primary" size={24} />
                <div>
                  <p className="text-sm font-bold text-paulina-primary">Gwarancja honorowana od 2019</p>
                  <p className="text-xs text-gray-500">Zero problemów ze zwrotami</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 kroki - z DUŻYMI typograficznymi numerami (display font) zamiast emoji */}
        <div className="mb-12">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-10">
            Jak wygląda proces zwrotu
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <p className="display-numeral text-[5.5rem] text-paulina-accent/90 mb-2 leading-none">
                  {step.num}
                </p>
                <h3 className="font-bold text-paulina-primary text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement - pojedyncza, mocna linia + podpis Pauliny */}
        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl text-paulina-primary tracking-tight italic">
            Ty nie ryzykujesz nic.
            <span className="not-italic block text-base text-gray-500 mt-2 font-sans tracking-normal">
              Całe ryzyko biorę na siebie.
            </span>
          </p>

          {/* Handwritten signature - Paulina osobiście */}
          <div className="mt-10 inline-flex flex-col items-center">
            <span className="font-hand text-5xl md:text-6xl text-paulina-accent leading-none -rotate-3">
              Paulina
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-2">
              Autorka kursu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
