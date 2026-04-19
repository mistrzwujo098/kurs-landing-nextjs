'use client'

import React from 'react';
import { Check, X } from 'lucide-react';

const WhosItFor: React.FC = () => {
  const forWhom = [
    'Ma braki z podstaw i nie wie, od czego zacząć',
    'Uczy się, ale wyniki nie rosną tak, jak powinny',
    'Odkłada naukę na ostatnią chwilę',
    'Potrzebuje struktury i planu, a nie kolejnych korepetycji',
    'Chce się przygotować samodzielnie, ale potrzebuje dobrego materiału'
  ];

  const notForWhom = [
    'Już radzi sobie świetnie i zdobywa 90%+ na sprawdzianach',
    'Szuka cudownego rozwiązania bez własnej pracy'
  ];

  return (
    <section className="py-20 md:py-24 bg-[#fbf9f7]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Dla kogo
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Czy to rozwiązanie&nbsp;dla Was?
          </h2>
          <p className="text-lg text-gray-600">
            Sprawdź, zanim kupisz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For whom */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="display-numeral text-4xl text-paulina-accent mb-6 leading-none">
              TAK
            </p>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-paulina-primary mb-5">
              Kurs sprawdzi się, jeśli dziecko
            </p>
            <ul className="space-y-3">
              {forWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-paulina-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for whom */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="display-numeral text-4xl text-gray-300 mb-6 leading-none">
              NIE
            </p>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500 mb-5">
              Kurs nie jest dla dziecka, które
            </p>
            <ul className="space-y-3">
              {notForWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="text-gray-300 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500 italic leading-relaxed">
              Jeśli Twoje dziecko pasuje do lewej kolumny — ten program może zmienić wszystko.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhosItFor;
