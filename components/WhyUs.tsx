'use client'

import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const WhyUs: React.FC = () => {
  const comparisons = [
    { feature: 'Czas nauki dziennie', others: '2–3 godziny męczarni', us: '20 minut efektywnej nauki' },
    { feature: 'Koszt miesięczny', others: '600 zł (4 korepetycje)', us: '150 zł (lub jednorazowo taniej)' },
    { feature: 'Kto się uczy', others: 'Rodzic musi pomagać', us: 'Dziecko uczy się samo' },
    { feature: 'Motywacja', others: 'Kłótnie i przymus', us: 'System nagród jak w grze' },
    { feature: 'Postępy', others: 'Nie wiesz co się dzieje', us: 'Stały dostęp rodziców do kursu' },
    { feature: 'Dostępność', others: 'Trzeba jeździć, czekać', us: '24 / 7 z każdego miejsca' },
    { feature: 'Gwarancja', others: 'Żadnej', us: '30 dni zwrotu pieniędzy' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Porównanie
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-5 tracking-tight">
            Dlaczego <span className="italic text-paulina-accent font-normal">24 000 rodziców</span> wybrało ten kurs
          </h2>
          <p className="text-lg text-gray-600">
            Porównaj sam i zobacz, dlaczego tradycyjne metody zawodzą.
          </p>
        </div>

        {/* Comparison Table - prostsza, bez zielonego/czerwonego w nagłówku */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 font-semibold text-sm border-b border-gray-200">
            <div className="p-4 text-gray-500 uppercase tracking-wider text-xs">Kryterium</div>
            <div className="p-4 text-gray-400 border-x border-gray-200 text-center uppercase tracking-wider text-xs">
              Korepetycje
            </div>
            <div className="p-4 text-paulina-primary text-center uppercase tracking-wider text-xs">
              Kurs Pauliny
            </div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-t border-gray-100 hover:bg-gray-50/50 transition-colors ${index === 0 ? 'border-t-0' : ''}`}
            >
              <div className="p-4 font-semibold text-gray-700">
                {item.feature}
              </div>
              <div className="p-4 text-center text-gray-500 border-x border-gray-100">
                <X className="inline-block text-gray-300 mb-1" size={16} />
                <span className="block text-sm">{item.others}</span>
              </div>
              <div className="p-4 text-center text-gray-700 font-semibold">
                <CheckCircle className="inline-block text-paulina-accent mb-1" size={16} />
                <span className="block text-sm">{item.us}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Unique Value Proposition - bez gradientu, z display fontem */}
        <div className="bg-paulina-primary text-white rounded-3xl p-10 md:p-14 max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4 text-center">
            Metoda LAPS
          </p>
          <h3 className="font-display text-3xl md:text-4xl mb-6 text-center tracking-tight">
            To nie jest kolejny kurs&nbsp;online.
          </h3>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-center leading-relaxed text-white/85">
            To kompletny system transformacji, który zamienia dziecko przerażone matematyką w pewnego siebie ucznia z&nbsp;wynikiem&nbsp;80%+.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-3">01 - Metoda</p>
              <h4 className="font-bold mb-2 text-lg">Oparta na neurobiologii</h4>
              <p className="text-sm text-white/75 leading-relaxed">
                System spaced-repetition i aktywne przypominanie. Pomaga zrozumieć zamiast wkuwać - bo wkuwane jednorazowo nie utrzymuje się do egzaminu.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-3">02 - Postępy</p>
              <h4 className="font-bold mb-2 text-lg">Panel rodzica + społeczność</h4>
              <p className="text-sm text-white/75 leading-relaxed">
                Widzisz, co dziecko robi i kiedy. Ono trafia do grupy rówieśników, którzy się wzajemnie motywują.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-3">03 - Wynik</p>
              <h4 className="font-bold mb-2 text-lg">Średnia 84% u moich kursantów</h4>
              <p className="text-sm text-white/75 leading-relaxed">
                Przy średniej krajowej E8 2025 na poziomie 50% (CKE). Większość moich kursantów kończy z wynikiem, z którego są dumni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
