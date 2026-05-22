'use client'

import React from 'react';
import { Check } from 'lucide-react';

const Solutions: React.FC = () => {
  const groups = [
    {
      label: 'Po pierwszych lekcjach',
      items: [
        'Zaczyna rozumieć matematykę, nie tylko pamięta wzory',
        'Widzi logiczne połączenia między tematami',
        'Przestaje bać się pytać',
        'Odzyskuje wiarę w swoje możliwości',
        'Zaczyna systematycznie pracować',
        'Pierwszy raz czuje, że „matematyka może być prosta”',
        'Zauważa pierwsze sukcesy',
        'Lepiej radzi sobie na klasówkach',
        'Ma uporządkowane notatki',
        'Czuje wsparcie grupy'
      ]
    },
    {
      label: 'Po przerobieniu całego kursu',
      items: [
        'Opanowało wszystkie kluczowe zagadnienia',
        'Ma wypracowany system nauki',
        'Potrafi rozwiązać każdy typ zadania',
        'Zna wszystkie wymagane wzory',
        'Umie zarządzać czasem podczas nauki',
        'Ma pewność siebie w matematyce',
        'Rozumie, gdzie może stracić punkty',
        'Wie, jak sprawdzać swoje rozwiązania',
        'Ma techniki na radzenie sobie ze stresem',
        'Jest przygotowane na każdą sytuację'
      ]
    },
    {
      label: 'W trakcie i po egzaminie',
      items: [
        'Spokojnie podchodzi do arkusza',
        'Wie, od czego zacząć',
        'Rozpoznaje wszystkie typy zadań',
        'Efektywnie zarządza czasem',
        'Sprawnie rozwiązuje zadania',
        'Ma czas na sprawdzenie',
        'Wychodzi z uśmiechem',
        'Osiąga wynik powyżej 80%',
        'Dostaje się do wymarzonej szkoły',
        'Czuje dumę z osiągniętego sukcesu'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#fbf9f7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Co osiągnie Twoje dziecko
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-5 tracking-tight">
            Trzy etapy transformacji
          </h2>
        </div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-baseline gap-5 mb-6">
                <span className="display-numeral text-[3.5rem] text-paulina-accent leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-paulina-primary tracking-tight">
                  {group.label}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-paulina-accent flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement - editorial typography */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="font-display text-3xl md:text-4xl text-paulina-primary mb-3 tracking-tight italic">
            Wysoki wynik na egzaminie.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Osiągalny dla każdego dziecka, które systematycznie przerabia materiał.
            30-dniowa gwarancja zwrotu chroni Twoją inwestycję.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
