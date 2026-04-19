'use client'

import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'Ponad 50h materiału video', standard: true, premium: true, expert: true },
    { name: '>60 lekcji video', standard: true, premium: true, expert: true },
    { name: '>1500 zadań z rozwiązaniami', standard: true, premium: true, expert: true },
    { name: 'Ściągi z działów', standard: true, premium: true, expert: true },
    { name: 'Rozwiązane zadania ze wszystkich egzaminów CKE', standard: true, premium: true, expert: true },
    { name: 'Nagroda + certyfikat za 100%', standard: true, premium: true, expert: true },
    { name: 'Ebook ze wzorami do egzaminu', standard: true, premium: true, expert: true },
    { name: 'Pakiet 5 nagrań z psychologiem', standard: true, premium: true, expert: true },
    { name: '3 Masterclass (stres, motywacja, planowanie)', standard: true, premium: true, expert: true },
    { name: 'Aplikacja iOS/Android', standard: true, premium: true, expert: true },
    { name: '9 próbnych arkuszy egzaminacyjnych', standard: true, premium: true, expert: true },
    { name: '9 spotkań online z rozwiązywaniem', standard: true, premium: true, expert: true },
    { name: '30 x 90-minutowych spotkań na żywo', standard: true, premium: true, expert: true },
    { name: 'Nagrania wszystkich spotkań', standard: true, premium: true, expert: true },
    { name: 'Dostęp na 12 miesięcy', standard: true, premium: true, expert: true },
    { name: 'Gwarancja satysfakcji 30 dni', standard: true, premium: true, expert: true },
    { name: 'Dostęp na 24 miesiące', standard: false, premium: true, expert: true },
    { name: 'Kurs 10 pewniaków', standard: false, premium: true, expert: true },
    { name: '10 autorskich arkuszy z rozwiązaniami', standard: false, premium: true, expert: true },
    { name: 'Wielka Powtórka Mistrzów', standard: false, premium: true, expert: true },
    { name: 'Ebook z ubiegłorocznymi zadaniami', standard: false, premium: true, expert: true },
    { name: 'Nagrania 30 lekcji z ubiegłego roku', standard: false, premium: false, expert: true },
    { name: 'Konsultacja indywidualna 45 min', standard: false, premium: false, expert: true },
    { name: 'Analiza 3 egzaminów z wskazówkami', standard: false, premium: false, expert: true },
  ];

  return (
    <section className="py-20 bg-[#fbf9f7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Pełne porównanie
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Co zawiera który&nbsp;pakiet
          </h2>
          <p className="text-lg text-gray-600">
            Wszystkie trzy pakiety dają tę samą wiedzę. Różnice dotyczą dostępu i dodatkowych materiałów.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-paulina-primary text-white">
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-semibold">Zawartość pakietu</th>
                  <th className="text-center p-3 sm:p-5 min-w-[80px] sm:min-w-[120px]">
                    <div className="font-bold text-xs sm:text-base">Standard</div>
                    <div className="text-xs sm:text-sm font-normal opacity-80">999 zł</div>
                  </th>
                  <th className="text-center p-3 sm:p-5 min-w-[80px] sm:min-w-[120px] bg-white/10">
                    <div className="font-bold text-xs sm:text-base">Premium</div>
                    <div className="text-xs sm:text-sm font-normal opacity-80">1499 zł</div>
                    <div className="text-[10px] sm:text-xs font-bold text-paulina-accent mt-1 tracking-wider">POLECANY</div>
                  </th>
                  <th className="text-center p-3 sm:p-5 min-w-[80px] sm:min-w-[120px]">
                    <div className="font-bold text-xs sm:text-base">Expert</div>
                    <div className="text-xs sm:text-sm font-normal opacity-80">2499 zł</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-700">
                      {feature.name}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {feature.standard ? (
                        <CheckCircle className="inline text-paulina-accent" size={16} />
                      ) : (
                        <X className="inline text-gray-300" size={16} />
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4 bg-paulina-accent/5">
                      {feature.premium ? (
                        <CheckCircle className="inline text-paulina-accent" size={16} />
                      ) : (
                        <X className="inline text-gray-300" size={16} />
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {feature.expert ? (
                        <CheckCircle className="inline text-paulina-accent" size={16} />
                      ) : (
                        <X className="inline text-gray-300" size={16} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-paulina-primary text-white font-bold py-3.5 px-8 rounded-full hover:bg-paulina-accent transition-colors duration-300"
          >
            Wybierz swój pakiet
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
