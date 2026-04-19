'use client'

import React from 'react';
import { Shield, Lock, Star, CheckCircle, ChevronRight } from 'lucide-react';
import { tracking } from '@/lib/tracking';

const PricingSimple: React.FC = () => {
  const packages = [
    {
      name: 'Standard',
      price: 999,
      originalPrice: 1497,
      popular: false,
      features: [
        'Ponad 50h materiału video',
        '>60 lekcji video HD',
        '>1500 zadań z rozwiązaniami',
        '9 próbnych arkuszy egzaminacyjnych',
        '9 spotkań online z rozwiązywaniem',
        '30 x 90-minutowych spotkań na żywo',
        'Dostęp na 12 miesięcy',
        'Gwarancja satysfakcji 30 dni',
        '+ 3 bonusy (591 zł wartości)',
      ],
      notIncluded: [
        'Konsultacje indywidualne',
        'Dostęp na 24 miesiące',
      ]
    },
    {
      name: 'Premium',
      price: 1499,
      originalPrice: 2297,
      popular: true,
      features: [
        'Wszystko z pakietu Standard',
        '10 autorskich arkuszy z rozwiązaniami',
        'Kurs "10 pewniaków na egzamin"',
        'Wielka Powtórka Mistrzów',
        '30 x 90-minutowych spotkań na żywo',
        'Dostęp na 24 miesiące',
        'Ebook z ubiegłorocznymi zadaniami',
      ],
      notIncluded: [
        'Konsultacje indywidualne',
      ]
    },
    {
      name: 'Expert',
      price: 2499,
      originalPrice: 3497,
      popular: false,
      features: [
        'Wszystko z pakietu Premium',
        'Konsultacja indywidualna 45 min',
        'Analiza 3 egzaminów z wskazówkami',
        'Nagrania 30 lekcji z ubiegłego roku',
        '30 x 90-minutowych spotkań na żywo',
        'Priorytetowe wsparcie',
        'Dostęp na 24 miesiące',
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header — prostszy, bez gradientów */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Pakiety
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Wybierz pakiet dla swojego&nbsp;dziecka
          </h2>
          <p className="text-lg text-gray-600">
            Każdy pakiet zawiera gwarancję 30 dni. Bez ryzyka.
          </p>

          {/* Trust row — ikony bez tła, minimalistycznie */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2">
              <Shield className="text-paulina-primary" size={18} />
              30 dni gwarancji
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock className="text-paulina-primary" size={18} />
              Bezpieczna płatność
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="text-paulina-accent fill-current" size={18} />
              4,9 / 5 ocena
            </span>
          </div>
        </div>

        {/* Pricing Cards — jedno emphasis na polecanym (border accent + badge), bez ring+scale+shadow stack */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-shadow duration-300 ${
                pkg.popular
                  ? 'border-2 border-paulina-accent shadow-md hover:shadow-lg'
                  : 'border border-gray-200 hover:shadow-md'
              }`}
            >
              {/* Subtelny badge — bez animate-pulse, bez gradientu */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-paulina-accent text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                    Najczęściej wybierany
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-2xl text-paulina-primary mb-6 tracking-tight">{pkg.name}</h3>

                {/* Price — display font na głównej kwocie */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-5xl text-paulina-primary tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500">zł</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-sm text-gray-400 line-through">{pkg.originalPrice} zł</span>
                    <span className="text-sm text-paulina-accent font-semibold">
                      −{pkg.originalPrice - pkg.price} zł
                    </span>
                  </div>
                </div>

                {/* Payment options — bez emoji, prosty tekst */}
                <div className="text-sm text-gray-500 space-y-0.5 pt-4 border-t border-gray-100">
                  <p>lub <span className="font-semibold text-gray-700">{Math.round(pkg.price / 10)} zł/mies.</span> (10 rat 0%)</p>
                  <p className="text-paulina-accent">
                    {(pkg.price / 365).toFixed(2).replace('.', ',')} zł dziennie
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
                {pkg.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 opacity-40">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5 text-lg leading-none">—</span>
                    <span className="text-sm text-gray-500 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  tracking.initiateCheckout(pkg.price, `Pakiet ${pkg.name}`)
                  const urls = [
                    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195091&price-id=1',
                    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195826',
                    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195828'
                  ];
                  setTimeout(() => {
                    window.location.href = urls[index];
                  }, 300);
                }}
                className={`w-full py-3.5 px-6 rounded-full font-bold transition-colors duration-300 ${
                  pkg.popular
                    ? 'bg-paulina-primary text-white hover:bg-paulina-accent'
                    : 'bg-transparent text-paulina-primary border border-paulina-primary hover:bg-paulina-primary hover:text-white'
                }`}
              >
                {pkg.popular ? 'Wybieram ten pakiet' : 'Wybierz pakiet'}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4 italic">
                „Najlepsza inwestycja w edukację mojego dziecka”
              </p>
            </div>
          ))}
        </div>

        {/* Savings callout — editorial, bez emoji, bez gradientów */}
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-white border border-gray-200 rounded-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4 text-center">
            Porównanie
          </p>
          <h3 className="font-display text-2xl text-paulina-primary mb-6 text-center tracking-tight">
            Mniej niż dwa miesiące&nbsp;korepetycji
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Korepetycje (4 mies. × 4h × 150 zł)</span>
              <span className="font-bold line-through text-gray-400">2400 zł</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Kurs Pauliny (pakiet Standard)</span>
              <span className="font-bold text-paulina-primary">{packages[0].price} zł</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="font-bold text-lg text-paulina-primary">Twoja oszczędność</span>
              <span className="font-display text-3xl text-paulina-accent tracking-tight">
                {2400 - packages[0].price} zł
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-paulina-primary text-white font-bold rounded-full hover:bg-paulina-accent transition-colors duration-300"
          >
            <span>Zapisz dziecko teraz</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSimple;
