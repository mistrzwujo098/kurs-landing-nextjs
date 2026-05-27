'use client'

import React from 'react';
import { X } from 'lucide-react';

const Problems: React.FC = () => {
  const columns = [
    {
      label: 'Przed egzaminem',
      items: [
        'Odkładanie nauki „na później”',
        'Nieefektywne metody uczenia się',
        'Problemy z organizacją materiału',
        'Narastający stres i presja',
        'Konflikty rodzic-dziecko o naukę',
        'Brak systematyczności',
        'Marnowanie czasu na złe metody',
        'Rosnąca frustracja',
        'Chaos w notatkach',
        'Brak planu działania'
      ]
    },
    {
      label: 'W trakcie egzaminu',
      items: [
        'Paraliżujący stres',
        '„Pusty umysł” przy zadaniach',
        'Złe zarządzanie czasem',
        'Panika przy trudnych zadaniach',
        'Problemy z koncentracją',
        'Niezrozumienie poleceń',
        'Gubienie punktów na głupich błędach',
        'Zapominanie wzorów',
        'Problemy z liczeniem',
        'Brak pewności przy odpowiedziach'
      ]
    },
    {
      label: 'Po egzaminie',
      items: [
        'Rozczarowanie wynikiem',
        'Żal do siebie i innych',
        'Stracone szanse',
        'Gorszy start w liceum',
        'Nadszarpnięte relacje w rodzinie'
      ]
    }
  ];

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Diagnoza
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-5 tracking-tight">
            Czy Twoje dziecko też <span className="italic text-paulina-accent font-normal">to&nbsp;ma</span>?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Większość rodziców nie umie pomóc dziecku z matematyką. Każdy dzień zwlekania to większy stres przed egzaminem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, idx) => (
            <div key={idx} className="bg-[#fbf9f7] rounded-2xl p-7 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
                {col.label}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <X className="text-gray-400 flex-shrink-0 mt-1" size={14} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
