'use client'

import React, { useState } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight, Smartphone, Video, Book, Users, Shield, Brain } from 'lucide-react';

const CourseContent: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const platformImages = [
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/e8-okladka.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/07/CleanShot-2024-07-18-at-16.03.35.png',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/11fe3aae32f1e20994207d29fef4679257073333.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-2-1.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-1-1.webp'
  ];

  const modules = [
    {
      title: 'Działania na ułamkach i liczbach',
      topics: [
        'Podział i nazwy liczb',
        'Kolejność wykonywania działań',
        'Działania pisemne (dodawanie, odejmowanie, mnożenie, dzielenie)',
        'Cechy podzielności liczb',
        'Dodawanie i odejmowanie ułamków zwykłych',
        'Mnożenie, dzielenie i potęgowanie ułamków zwykłych',
        'Działania na ułamkach dziesiętnych',
        'Działania na liczbach ujemnych',
        'NWD i NWW',
        'Cyfry rzymskie',
        'Zapis liczb wymiernych na osi liczbowej',
        'Zaokrąglanie liczb',
        'Ułamki okresowe',
        'Ułamek z liczby, zadania tekstowe',
        'Przykładowe zadania egzaminacyjne'
      ]
    },
    {
      title: 'Potęgi i pierwiastki',
      topics: [
        'Potęgowanie liczb wymiernych',
        'Działania na potęgach',
        'Notacja wykładnicza',
        'Pierwiastek kwadratowy i sześcienny',
        'Działania na pierwiastkach',
        'Przykładowe zadania egzaminacyjne'
      ]
    },
    {
      title: 'Wyrażenia algebraiczne i równania, procenty',
      topics: [
        'Działania na wyrażeniach algebraicznych, porządkowanie',
        'Nawiasy w wyrażeniach algebraicznych',
        'Rozwiązywanie równań',
        'Przekształcanie wzorów',
        'Procenty, podwyżki i obniżki, proporcja',
        'Zadania tekstowe z równaniami',
        'Przykładowe zadania egzaminacyjne'
      ]
    },
    {
      title: 'Matematyka w życiu, statystyka, prawdopodobieństwo',
      topics: [
        'Zamiana jednostek długości, pól i objętości',
        'Zamiana jednostek wagi i czasu',
        'Kalendarz',
        'Zamiana jednostek prędkości',
        'Skala',
        'Wykresy i diagramy, średnia arytmetyczna',
        'Kombinatoryka i prawdopodobieństwo',
        'Zauważanie schematów, zależności',
        'Przykładowe zadania egzaminacyjne'
      ]
    },
    {
      title: 'Geometria',
      topics: [
        'Pojęcia wstępne w geometrii',
        'Rodzaje kątów i ich własności',
        'Rodzaje trójkątów, nierówność trójkąta',
        'Twierdzenie Pitagorasa',
        'Trójkąty równoboczne',
        'Trójkąty prostokątne o kątach 30 / 60° i 45 / 45°',
        'Pola figur - cz. I i II',
        'Przekątne w wielokątach i miary kątów figur foremnych',
        'Przystawanie trójkątów',
        'Dowodzenie',
        'Przykładowe zadania egzaminacyjne'
      ]
    },
    {
      title: 'Układ współrzędnych',
      topics: [
        'Podstawy układu współrzędnych',
        'Długości odcinków',
        'Środek odcinka',
        'Obliczanie pól i obwodów',
        'Sprawdzanie, czy trójkąt jest prostokątny',
        'Przykładowe zadania egzaminacyjne'
      ]
    },
    {
      title: 'Bryły',
      topics: [
        'Podstawowe informacje o bryłach',
        'Ściany, krawędzie, wierzchołki',
        'Pola i objętości z siatek brył',
        'Sześcian, prostopadłościan',
        'Graniastosłupy - pole i objętość',
        'Ostrosłupy - pole i objętość',
        'Zadania egzaminacyjne'
      ]
    }
  ];

  const additionalContent = [
    { icon: Smartphone, title: 'Aplikacja na smartfony', description: 'Możesz przyjść z dowolnym zadaniem matematycznym, z którym masz problem.', value: '797 zł' },
    { icon: Video, title: 'Ponad 60 lekcji video', description: 'Masz do nich dostęp 24/7.', value: '997 zł' },
    { icon: Book, title: '1000 zadań z rozwiązaniami', description: 'Strategicznie dopasowane, by ułatwić zrozumienie tematu.', value: '200 zł' },
    { icon: Users, title: 'Grupa kursantów', description: 'W każdej chwili możesz zadać pytanie anonimowo i szybko dostać odpowiedź.', value: '300 zł' },
    { icon: Shield, title: '30-dniowa gwarancja zwrotu', description: 'Bezwarunkowa gwarancja - bez pytań, bez tłumaczeń.', value: 'Bezcenne' },
    { icon: Brain, title: 'Dla rodziców', description: '5 spotkań o stresie z psycholożką, specjalnie dla rodziców ósmoklasistów.', value: '500 zł' },
  ];

  return (
    <section id="course-content" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Program
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Wszystko, co otrzymasz
          </h2>
          <p className="text-sm text-gray-500">Kliknij moduł, aby rozwinąć listę tematów.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto">
          {/* Moduły - akordeon */}
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {modules.map((module, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 hover:text-paulina-accent transition-colors group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="display-numeral text-xl text-paulina-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-paulina-primary group-hover:text-paulina-accent transition-colors">
                      {module.title}
                    </span>
                  </div>
                  {expandedModule === index ? (
                    <Minus className="text-paulina-accent flex-shrink-0" size={18} />
                  ) : (
                    <Plus className="text-paulina-primary flex-shrink-0" size={18} />
                  )}
                </button>
                {expandedModule === index && (
                  <div className="pb-5 pl-10 pr-4">
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-paulina-accent mt-1.5 text-xs">●</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Platform screenshot */}
          <div className="relative self-start md:sticky md:top-24">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200">
              <img
                src={platformImages[currentImageIndex]}
                alt="Widok platformy kursu"
                className="w-full"
              />
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + platformImages.length) % platformImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-paulina-accent hover:text-white transition-colors shadow-sm"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % platformImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-paulina-accent hover:text-white transition-colors shadow-sm"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {platformImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-paulina-accent w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                  aria-label={`Zdjęcie ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-center mt-4 text-sm text-gray-500">
              Widok z wnętrza platformy, do której dostajesz dostęp od razu po zakupie.
            </p>
          </div>
        </div>

        {/* Dodatki w kursie - płaskie karty */}
        <div className="max-w-5xl mx-auto pt-12 border-t border-gray-200">
          <h3 className="font-display text-2xl md:text-3xl text-paulina-primary tracking-tight mb-10 text-center">
            Co jeszcze znajdziesz w kursie
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalContent.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-paulina-accent/40 transition-colors"
              >
                {/* Ikona w kwadracie z obwódką - wariant */}
                <div className="w-10 h-10 rounded-xl border border-paulina-accent/30 flex items-center justify-center mb-4">
                  <item.icon className="text-paulina-accent" size={18} />
                </div>
                <h4 className="font-bold text-paulina-primary mb-2 leading-tight">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-paulina-accent">
                  Wartość {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
