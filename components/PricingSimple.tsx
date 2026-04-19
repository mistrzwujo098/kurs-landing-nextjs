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
        '30 x 90-min spotkań na żywo',
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
        'Kurs „10 pewniaków na egzamin"',
        'Wielka Powtórka Mistrzów',
        '30 x 90-min spotkań na żywo',
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
        '30 x 90-min spotkań na żywo',
        'Priorytetowe wsparcie',
        'Dostęp na 24 miesiące',
      ],
      notIncluded: []
    }
  ];

  const urls = [
    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195091&price-id=1',
    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195826',
    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195828'
  ];

  const handleCheckout = (index: number, pkgName: string, price: number) => {
    tracking.initiateCheckout(price, `Pakiet ${pkgName}`);
    setTimeout(() => {
      window.location.href = urls[index];
    }, 300);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Pakiety
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Wybierz pakiet dla swojego&nbsp;dziecka
          </h2>
          <p className="text-lg text-gray-600">
            Każdy pakiet zawiera gwarancję 30 dni. Bez ryzyka.
          </p>

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

        {/* ASYMETRYCZNY grid: Standard (3) | Premium (5, wystający) | Expert (4) */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center max-w-6xl mx-auto">

          {/* Standard — po lewej, mniejszy, lekko przyciemniony */}
          <div className="md:col-span-3 md:order-1 order-2 relative bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-3">
                Minimum
              </p>
              <h3 className="font-display text-xl text-paulina-primary mb-5 tracking-tight">{packages[0].name}</h3>

              <div className="mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-paulina-primary tracking-tight">
                    {packages[0].price}
                  </span>
                  <span className="text-sm text-gray-500">zł</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-gray-400 line-through">{packages[0].originalPrice} zł</span>
                  <span className="text-xs text-paulina-accent font-semibold">
                    −{packages[0].originalPrice - packages[0].price} zł
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500 pt-3 border-t border-gray-100">
                {Math.round(packages[0].price / 10)} zł/mies. (10 rat 0%)
              </p>
            </div>

            <div className="space-y-2 mb-6">
              {packages[0].features.slice(0, 5).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={14} />
                  <span className="text-xs text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 italic pl-5">+ {packages[0].features.length - 5} więcej</p>
            </div>

            <button
              onClick={() => handleCheckout(0, packages[0].name, packages[0].price)}
              className="w-full py-3 px-5 rounded-full font-bold text-sm transition-colors duration-300 bg-transparent text-paulina-primary border border-paulina-primary hover:bg-paulina-primary hover:text-white"
            >
              Wybierz
            </button>
          </div>

          {/* Premium — w środku, WYSTAJĄCY, dominujący */}
          <div className="md:col-span-5 md:order-2 order-1 relative bg-white rounded-3xl p-10 border-2 border-paulina-accent shadow-2xl md:-my-8 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-paulina-accent text-white px-7 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                Najczęściej wybierany
              </div>
            </div>

            <div className="mb-8 mt-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-3">
                Polecany dla większości
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-paulina-primary mb-6 tracking-tight">
                {packages[1].name}
              </h3>

              <div className="mb-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl md:text-7xl text-paulina-primary tracking-tight leading-none">
                    {packages[1].price}
                  </span>
                  <span className="text-xl text-gray-500">zł</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-base text-gray-400 line-through">{packages[1].originalPrice} zł</span>
                  <span className="text-base text-paulina-accent font-semibold">
                    −{packages[1].originalPrice - packages[1].price} zł
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-500 space-y-1 pt-4 border-t border-gray-100">
                <p>lub <span className="font-semibold text-gray-700">{Math.round(packages[1].price / 10)} zł/mies.</span> (10 rat 0%)</p>
                <p className="text-paulina-accent font-semibold">
                  to {(packages[1].price / 365).toFixed(2).replace('.', ',')} zł dziennie przez rok
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {packages[1].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-gray-800 leading-relaxed">{feature}</span>
                </div>
              ))}
              {packages[1].notIncluded.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 opacity-40">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5 text-lg leading-none">—</span>
                  <span className="text-sm text-gray-500 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleCheckout(1, packages[1].name, packages[1].price)}
              className="w-full py-4 px-6 rounded-full font-bold text-base transition-colors duration-300 bg-paulina-primary text-white hover:bg-paulina-accent inline-flex items-center justify-center gap-2"
            >
              Wybieram ten pakiet
              <ChevronRight size={18} />
            </button>

            <p className="font-hand text-lg text-paulina-accent text-center mt-5 leading-tight">
              najlepszy stosunek jakości do ceny
            </p>
          </div>

          {/* Expert — po prawej, normalny */}
          <div className="md:col-span-4 md:order-3 order-3 relative bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-3">
                Maksimum
              </p>
              <h3 className="font-display text-2xl text-paulina-primary mb-5 tracking-tight">{packages[2].name}</h3>

              <div className="mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-paulina-primary tracking-tight">
                    {packages[2].price}
                  </span>
                  <span className="text-base text-gray-500">zł</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-gray-400 line-through">{packages[2].originalPrice} zł</span>
                  <span className="text-xs text-paulina-accent font-semibold">
                    −{packages[2].originalPrice - packages[2].price} zł
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500 pt-3 border-t border-gray-100">
                {Math.round(packages[2].price / 10)} zł/mies. (10 rat 0%)
              </p>
            </div>

            <div className="space-y-2 mb-6">
              {packages[2].features.slice(0, 5).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={14} />
                  <span className="text-xs text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 italic pl-5">+ {packages[2].features.length - 5} więcej</p>
            </div>

            <button
              onClick={() => handleCheckout(2, packages[2].name, packages[2].price)}
              className="w-full py-3 px-5 rounded-full font-bold text-sm transition-colors duration-300 bg-transparent text-paulina-primary border border-paulina-primary hover:bg-paulina-primary hover:text-white"
            >
              Wybierz
            </button>
          </div>
        </div>

        {/* Savings callout — pełna szerokość, pastelowe tło */}
        <div className="max-w-3xl mx-auto mt-20 p-10 bg-paulina-bg-yellow rounded-3xl border border-paulina-accent/20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-primary mb-3 text-center">
            Porównanie z korepetycjami
          </p>
          <h3 className="font-display text-3xl text-paulina-primary mb-8 text-center tracking-tight">
            Mniej niż 2 miesiące&nbsp;korepetycji.
          </h3>
          <div className="space-y-3 mb-6 max-w-xl mx-auto">
            <div className="flex items-center justify-between py-2 border-b border-paulina-primary/10">
              <span className="text-gray-700">Korepetycje (4 mies. × 4h × 150 zł)</span>
              <span className="font-bold line-through text-gray-400">2 400 zł</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-paulina-primary/10">
              <span className="text-gray-700">Kurs Pauliny (pakiet Standard)</span>
              <span className="font-bold text-paulina-primary">{packages[0].price} zł</span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="font-bold text-lg text-paulina-primary">Twoja oszczędność</span>
              <span className="font-display text-4xl text-paulina-accent tracking-tight">
                {2400 - packages[0].price} zł
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSimple;
