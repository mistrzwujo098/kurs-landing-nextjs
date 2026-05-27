'use client'

import React from 'react';
import { Check, X } from 'lucide-react';

const PossibilityInWorld: React.FC = () => {
  const stats = [
    { number: '24 000+', label: 'Uczniów przeszło przez kursy', detail: 'od 2019 roku' },
    { number: '50%', label: 'Średnia krajowa E8 z matematyki', detail: 'CKE 2025 (modalna 17%)' },
    { number: '~84%', label: 'Średnia moich kursantów (E8)', detail: 'raportowane przez rodziców' },
    { number: '16 lat', label: 'Uczę matematyki online', detail: '93 000 subskrybentów YouTube' },
  ];

  return (
    <section id="possibility" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Liczby
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-5 tracking-tight">
            To nie jest teoria.
            <span className="block italic text-paulina-accent font-normal">To działa teraz.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Metoda małych kroków + systematyczność = wyniki, które były niemożliwe 5 lat temu.
          </p>
        </div>

        {/* Stats - wielkie typograficzne liczby zamiast kart z ikonami */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-20 border-t border-b border-gray-200 py-14">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <p className="display-numeral text-[4.5rem] md:text-[5.5rem] text-paulina-primary leading-none mb-3">
                {stat.number}
              </p>
              <p className="text-sm font-semibold text-paulina-primary mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Content box - bez gradientu, jedna karta z dwukolumnowym layoutem */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-3xl md:text-4xl text-paulina-primary mb-10 tracking-tight text-center">
            Dlaczego nauka na ostatnią chwilę&nbsp;nie&nbsp;działa?
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Negatywny kontrast */}
            <div className="bg-[#fbf9f7] rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <X className="text-gray-400" size={20} />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Na ostatnią chwilę
                </p>
              </div>
              <h4 className="font-bold text-lg text-paulina-primary mb-3">
                Uczenie się „jak do egzaminu”
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Widziałam setki uczniów, którzy zaczynali miesiąc przed egzaminem. Stres ogromny, efekty słabe. Wiedza „wpycha się” do głowy, ale nie zostaje. Po egzaminie - puste.
              </p>
            </div>

            {/* Pozytywny kontrast */}
            <div className="bg-paulina-primary text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Check className="text-paulina-accent" size={20} />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent">
                  Systematycznie
                </p>
              </div>
              <h4 className="font-bold text-lg mb-3">
                20 minut dziennie przez 6-8 miesięcy
              </h4>
              <p className="text-white/85 leading-relaxed">
                Mózg ma czas na zrozumienie. Wiedza buduje się powoli, ale zostaje na lata. Większość uczniów po roku pamięta więcej niż ci, którzy wkuwali.
              </p>
            </div>
          </div>

          {/* Dlaczego online vs korepetycje - lista prosta, bez boxa z gradientem */}
          <div className="border-t border-gray-200 pt-12">
            <h4 className="font-display text-2xl text-paulina-primary tracking-tight mb-8 text-center">
              Co daje kurs online ponad korepetycje
            </h4>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto">
              {[
                { title: 'Dostęp 24/7', description: 'Dziecko uczy się wtedy, kiedy ma ochotę - nie czeka tygodnia na następne spotkanie.' },
                { title: 'Natychmiastowa odpowiedź', description: 'Rozwiązujesz zadanie i od razu wiesz, czy dobrze. Bez czekania 3 dni na sprawdzenie.' },
                { title: 'Śledzenie postępów', description: 'Widzisz, co już umiesz. Motywacja rośnie, bo widzisz liczby przed sobą.' },
                { title: 'Nauka jak gra', description: 'Odhaczanie tematów daje satysfakcję. Wyzwanie, które chcesz ukończyć.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="display-numeral text-3xl text-paulina-accent flex-shrink-0 leading-none">
                    0{i + 1}
                  </span>
                  <div>
                    <h5 className="font-bold text-paulina-primary mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PossibilityInWorld;
