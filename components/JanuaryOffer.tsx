'use client'

import React from 'react';
import { Gift, CheckCircle, ChevronRight, Star } from 'lucide-react';
import { tracking } from '@/lib/tracking';

const JanuaryOffer: React.FC = () => {
  const scrollToPricing = () => {
    tracking.viewContent('January Offer CTA - Zobacz pakiet Standard');
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const bonuses = [
    {
      name: 'Program Ósmoklasisty 2026',
      value: 1997,
      highlight: true,
      features: [
        'Ponad 60 lekcji video HD z teorią i zadaniami',
        'Ponad 1500 zadań z rozwiązaniami krok po kroku',
        '9 próbnych arkuszy egzaminacyjnych',
        '30 spotkań live z rozwiązywaniem zadań',
        'Dostęp na 12 miesięcy'
      ]
    },
    {
      name: 'Video Onboarding „Jak zacząć”',
      value: 297,
      highlight: false,
      features: [
        'Nagranie z instrukcją krok po kroku',
        'Jak zaplanować naukę przed egzaminem',
        'Najczęstsze błędy i jak ich unikać',
        'Plan nauki dopasowany do czasu dziecka'
      ]
    },
    {
      name: 'Progress Tracker PDF',
      value: 97,
      highlight: false,
      features: [
        'Interaktywny tracker postępów do wydruku',
        'Lista wszystkich tematów do opanowania',
        'Miejsce na notatki i własne cele',
        'Motywacja wizualna - zaznaczaj postępy'
      ]
    },
    {
      name: '„Rodzic w Spokoju” Video Guide',
      value: 197,
      highlight: false,
      features: [
        'Poradnik video dla rodziców',
        'Jak wspierać dziecko bez stresu i kłótni',
        'Kiedy pomagać, a kiedy dać spokój',
        'Jak rozmawiać o wynikach i postępach'
      ]
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => acc + bonus.value, 0);
  const price = 999;
  const savings = totalValue - price;
  const savingsPercent = Math.round((savings / totalValue) * 100);

  return (
    <section id="january-offer" className="py-24 bg-paulina-bg-yellow/50 relative overflow-hidden">
      {/* Ornament - wielki symbol gwiazdy/ozdobnika po stronie */}
      <div
        className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-paulina-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header - bez 3-kolorowego gradientu, bez sparkli */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Zawartość programu
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Co dokładnie dostajesz
          </h2>
          <p className="text-lg text-gray-600">
            Kompletny zestaw materiałów, który przygotuje Twoje dziecko do egzaminu ósmoklasisty.
          </p>
        </div>

        {/* Bonuses list - czyste karty bez cieni neonu */}
        <div className="space-y-4 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 border ${
                bonus.highlight
                  ? 'border-paulina-accent bg-[#fbf9f7]'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    bonus.highlight
                      ? 'border-paulina-accent bg-white'
                      : 'border-gray-200 bg-white'
                  }`}>
                    {bonus.highlight ? (
                      <Star className="text-paulina-accent" size={18} fill="currentColor" />
                    ) : (
                      <Gift className="text-paulina-primary" size={18} />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-paulina-accent mb-1">
                        {bonus.highlight ? 'Kurs główny' : `Bonus ${index}`}
                      </p>
                      <h3 className="font-display text-xl md:text-2xl text-paulina-primary tracking-tight">
                        {bonus.name}
                      </h3>
                    </div>
                    <span className="font-display text-xl text-paulina-accent flex-shrink-0">
                      {bonus.value} zł
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {bonus.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className="text-paulina-accent mt-1.5 text-xs">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value summary - ciemna karta paulina-primary, bez gradientu */}
        <div className="bg-paulina-primary text-white rounded-3xl p-10 md:p-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-6">
              Podsumowanie
            </p>

            {/* Side-by-side z typografią */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Łączna wartość</p>
                <p className="display-numeral text-4xl text-white/50 line-through">
                  {totalValue} zł
                </p>
              </div>
              <div className="text-white/30 text-3xl hidden sm:block">→</div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/80 mb-2">Twoja cena</p>
                <p className="display-numeral text-[5rem] text-white leading-none">
                  {price} zł
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-8">
              <CheckCircle size={16} className="text-paulina-accent" />
              <span className="text-sm">Oszczędzasz <strong className="text-paulina-accent">{savings} zł ({savingsPercent}% taniej)</strong></span>
            </div>

            <div>
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center gap-2 px-8 py-4 bg-paulina-accent text-white font-bold rounded-full hover:bg-white hover:text-paulina-primary transition-colors duration-300"
              >
                <span>Zobacz pakiet Standard z bonusami</span>
                <ChevronRight size={18} />
              </button>
              <p className="text-sm text-white/60 mt-4">
                lub {Math.round(price / 10)} zł/mies. (10 rat 0%)
              </p>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <div className="text-center mt-8">
          <p className="font-bold text-paulina-primary mb-1">30 dni bezwarunkowej gwarancji</p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Jeśli w ciągu 30 dni uznasz, że kurs nie pomaga Twojemu dziecku - oddamy każdą złotówkę. Bez pytań.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JanuaryOffer;
