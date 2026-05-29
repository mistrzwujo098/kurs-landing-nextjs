'use client'

import React, { useState } from 'react';
import { Brain, Target, Zap, Award, ArrowRight } from 'lucide-react';

const MechanismExplanation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const lapsSteps = [
    {
      letter: 'L',
      name: 'Learn',
      title: 'Uczenie przez zrozumienie',
      icon: Brain,
      duration: '5 min',
      description: 'Nie pamięciowo - głębokie rozumienie.',
      howItWorks: 'Zamiast suchego tłumaczenia wzorów pokazuję, dlaczego tak się dzieje. Dziecko nie uczy się „a² + b² = c²” - rozumie, dlaczego Pitagoras to odkrył.',
      childExperiences: [
        'Moment „aha!” gdy wszystko staje się jasne',
        'Widzi logiczne połączenia między tematami',
        'Pewność, że matematyka ma sens',
        'Radość z odkrywania, nie męczenie się'
      ],
      parentSees: '„Teraz rozumiem!” zamiast „nie wiem jak”',
      science: 'Neuroplastyczność - gdy rozumiemy mechanizm, mózg tworzy silniejsze połączenia neuronowe.'
    },
    {
      letter: 'A',
      name: 'Apply',
      title: 'Zastosowanie w praktyce',
      icon: Target,
      duration: '5 min',
      description: 'Od teorii do pewności w działaniu.',
      howItWorks: 'Każda lekcja kończy się praktyką. To nie bezmyślne rozwiązywanie - to inteligentne zastosowanie zrozumianych zasad w różnych sytuacjach.',
      childExperiences: [
        'Satysfakcja z samodzielnego rozwiązywania',
        'Pewność, że poradzi sobie z każdym zadaniem',
        'Budowanie śmiałości w podejściu do problemów',
        'Rozpoznawanie wzorców w zadaniach'
      ],
      parentSees: 'Dziecko samo bierze się za zadania domowe, bez przypominania',
      science: 'Teoria flow - gdy umiejętności są proporcjonalne do wyzwania, osiągamy stan optymalnej koncentracji.'
    },
    {
      letter: 'P',
      name: 'Practice',
      title: 'Praktyka z systemem',
      icon: Zap,
      duration: '3 min',
      description: 'Automatyzacja przez inteligentne powtarzanie.',
      howItWorks: 'System LAPS wie, kiedy dziecko potrzebuje powtórki. Nie za wcześnie (nudzi się), nie za późno (zapomina). Dokładnie wtedy, gdy mózg jest gotowy utrwalić.',
      childExperiences: [
        'Naturalne przechodzenie od świadomego myślenia do automatyzmu',
        'Radość z tego, że „już to potrafię”',
        'Pewność przed każdą klasówką',
        'Brak stresu przy rozwiązywaniu zadań'
      ],
      parentSees: 'Rozwiązuje zadania coraz szybciej i z coraz większą pewnością',
      science: 'Krzywa zapominania Ebbinghausa - optymalne odstępy czasowe maksymalizują retencję.'
    },
    {
      letter: 'S',
      name: 'Succeed',
      title: 'Sukces i pewność siebie',
      icon: Award,
      duration: '2 min',
      description: 'Budowanie trwałej pewności siebie.',
      howItWorks: 'Każdy sukces jest celebrowany. System pokazuje dziecku postępy, przypomina o małych zwycięstwach. To buduje pozytywne skojarzenia z matematyką.',
      childExperiences: [
        'Dumę z własnych osiągnięć',
        'Wiarę, że może pokonać każde wyzwanie',
        'Radość z uczenia się nowych rzeczy',
        'Motywację do dalszej nauki'
      ],
      parentSees: 'Dziecko samo opowiada o postępach i prosi o trudniejsze zadania',
      science: 'Teoria samoskuteczności Bandury - wiara we własne możliwości zwiększa rzeczywistą skuteczność.'
    }
  ];

  const current = lapsSteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="mechanism" className="py-24 bg-[#fbf9f7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent-text mb-4">
            Metoda
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-5 tracking-tight">
            Jak działa system <span className="italic text-paulina-accent-text font-normal">LAPS</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To nie jest magia. To nauka o tym, jak mózg dziecka najłatwiej przyswaja matematykę.
            <span className="block text-paulina-primary font-semibold mt-2">20 minut dziennie. 4 kroki. Metoda sprawdzona z 24 000 kursantami.</span>
          </p>
        </div>

        {/* LAPS Tabs - prosta nawigacja 4 literkami, bez tęczy */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-2xl mx-auto">
            {lapsSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-baseline gap-3 px-6 py-4 rounded-2xl transition-colors duration-300 ${
                  index === activeStep
                    ? 'bg-paulina-primary text-white'
                    : 'bg-white text-paulina-primary border border-gray-200 hover:border-paulina-accent/50'
                }`}
              >
                <span className="display-numeral text-3xl leading-none">
                  {step.letter}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider">
                  {step.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content - dwie kolumny: tekst + szczegóły */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Lewa strona - nagłówek kroku */}
            <div className="md:col-span-5">
              <p className="display-numeral text-[9rem] md:text-[11rem] text-paulina-accent/90 leading-none mb-3">
                {current.letter}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                Krok {activeStep + 1} / 4 · {current.duration}
              </p>
              <h3 className="font-display text-3xl text-paulina-primary tracking-tight mb-4">
                {current.title}
              </h3>
              <p className="text-gray-600 italic">
                {current.description}
              </p>
            </div>

            {/* Prawa strona - opis */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Jak to działa
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {current.howItWorks}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Co czuje dziecko
                </p>
                <ul className="space-y-1.5">
                  {current.childExperiences.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="text-paulina-accent mt-1.5 text-xs">●</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Widzisz u dziecka
                  </p>
                  <p className="text-sm text-paulina-primary italic leading-relaxed">
                    „{current.parentSees}”
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Nauka za tym
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {current.science}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA prosty, bez gradientów, bez borderów neon */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="font-display text-3xl text-paulina-primary tracking-tight mb-3">
            Teraz znasz mechanizm.
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sprawdzone z 24 000 kursantami. Średnia 84% z ankiet kursantów po otrzymaniu wyniku. 30 dni gwarancji zwrotu, gdyby coś nie pasowało.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-paulina-primary text-white font-bold py-3.5 px-8 rounded-full hover:bg-paulina-accent transition-colors duration-300"
          >
            Chcę, żeby moje dziecko skorzystało
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MechanismExplanation;
