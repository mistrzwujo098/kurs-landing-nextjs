'use client'

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useWarmDetect } from '@/lib/useWarmDetect';

const insiderFaqs = [
  {
    question: 'Czy materiały z poprzedniej edycji zostają dostępne po kupnie nowej?',
    answer: 'Tak. Dostęp do poprzedniej edycji nie wygasa. Nowa edycja 2026/27 to osobny dostęp z nowymi spotkaniami LIVE (nowe daty na rok szkolny 2026/27), zaktualizowanymi arkuszami próbnymi i aktualizacjami materiału po egzaminie 2025/2026.'
  },
  {
    question: 'Co konkretnie zmieniło się w edycji 2026/27 vs poprzednia?',
    answer: '30 nowych spotkań LIVE (nowe daty na rok 2026/27), zaktualizowane arkusze próbne po egzaminie 2025 (najświeższe wzorce CKE), drobne aktualizacje materiałów po zmianach podstawy programowej. Lekcje video - te same sprawdzone.'
  },
  {
    question: 'Czy platforma pamięta gdzie poprzednia edycja się skończyła?',
    answer: 'Tak. Przy zakupie nowej edycji możesz kontynuować od miejsca, w którym skończyliście. Nie zaczynacie od początku.'
  },
  {
    question: 'Czy Live Q&A jest nagrywane jeśli nie będę mógł uczestniczyć?',
    answer: 'Tak. Nagranie dostępne dla wszystkich uczestników w ciągu 48h. Pytanie możesz przesłać wcześniej formularzem - zostanie uwzględnione nawet jeśli nie będziesz na żywo.'
  },
  {
    question: 'Czy mam zniżkę jako aktywny kursant z poprzedniej edycji?',
    answer: 'W oknie pre-launch cena wstępna dostępna jest przed otwarciem dla wszystkich nowych. Jeśli macie kod zniżkowy z maila, wpiszcie go w koszyku.'
  }
];

const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([1]));
  const isWarm = useWarmDetect();

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const faqs = [
    {
      question: 'Jak długo mam dostęp do kursu?',
      answer: 'Masz dostęp do kursu przez 12 miesięcy (pakiet Standard) lub 24 miesiące (pakiet Premium i Expert). To wystarczająco dużo czasu, aby przerobić wszystkie materiały i powracać do nich przed egzaminem.'
    },
    {
      question: 'Co jeśli kurs mi się nie spodoba?',
      answer: 'Napisz mail. Bez warunków, bez pytań, bez wyjaśniania. 30 dni od zakupu - pełny zwrot.'
    },
    {
      question: 'Co jeśli moje dziecko nie będzie chciało się uczyć?',
      answer: 'System LAPS został zaprojektowany jak gra - z poziomami, nagrodami i wyzwaniami. Dziecko samo będzie chciało wracać do nauki. Dodatkowo lekcje trwają tylko 20 minut, więc nie zdążą się znudzić.'
    },
    {
      question: 'Nie mam czasu, żeby siedzieć z dzieckiem nad lekcjami.',
      answer: 'To właśnie zaleta tego kursu - nie musisz siedzieć z dzieckiem. System jest w 100% samodzielny. W razie czego masz stały dostęp do platformy i możesz kontrolować postępy.'
    },
    {
      question: 'Czy to dla dziecka, które ma słabą ocenę z matematyki (2-3)?',
      answer: 'Tak. 40% moich uczniów zaczynało z oceną 2-3. Metoda LAPS jest stworzona właśnie dla dzieci, które „nie kumają matmy”. Zaczynasz od podstaw, małymi krokami. Przykład: Kasia miała 2,5 przez cały rok. Po 5 miesiącach w kursie - egzamin na 78%. Możliwe, bo rozumie mechanizm, nie wkuwa na pamięć.'
    },
    {
      question: 'Czy kurs jest zgodny z aktualną podstawą programową?',
      answer: 'Tak. Kurs jest zawsze aktualizowany zgodnie z najnowszą podstawą programową CKE. Wszystkie materiały są dostosowane do wymagań egzaminu ósmoklasisty.'
    },
    {
      question: 'Ile czasu dziennie trzeba poświęcić na naukę?',
      answer: 'Wystarczy 20 minut dziennie systematycznej nauki. Jeśli masz więcej czasu, możesz uczyć się dłużej i szybciej przerobić materiał.'
    },
    {
      question: 'Czy mogę płacić w ratach?',
      answer: 'Tak. Oferuję rozłożenie na 10 rat 0% (od 100 zł miesięcznie, w zależności od pakietu). Bez dodatkowych odsetek.'
    },
    {
      question: 'Czy dostęp do kursu jest natychmiastowy?',
      answer: 'Tak. Zaraz po płatności dostajesz mail z danymi do logowania i możesz od razu zacząć naukę.'
    },
    {
      question: 'Jak to się ma do korepetycji?',
      answer: 'Korepetycje: 150 zł/h, raz w tygodniu, dziecko musi czekać na następne spotkanie (łącznie ~3600 zł za 6 miesięcy).\n\nKurs: 1499 zł (cały rok), dostęp 24/7, dziecko uczy się wtedy, kiedy chce. Pytanie ma o 22:00? Zadaje w grupie, odpowiedź w 10 minut.\n\nNajlepszy wynik: kurs + korepetycje 1×/miesiąc - najskuteczniejsza kombinacja, jeśli dziecko potrzebuje indywidualnego wsparcia.'
    },
    {
      question: 'Co jeśli dziecko nie skończy kursu?',
      answer: 'Nie każdy kończy kurs w 100% - to normalne. Kluczowe jest systematyczne przerabianie materiału: im więcej przerobisz, tym lepszy wynik.\n\nJak zwiększyć szansę, że dziecko skończy? (1) Wspólne oglądanie pierwszych 3 lekcji, (2) progress tracker do odhaczania, (3) spotkania live co tydzień.\n\nA jeśli nie zadziała - 30-dniowa gwarancja zwrotu bez pytań.'
    }
  ];

  const allFaqs = isWarm ? [...insiderFaqs, ...faqs] : faqs;

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#fbf9f7]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Pytania i wątpliwości
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Rozumiem Twoje&nbsp;wątpliwości
          </h2>
          <p className="text-lg text-gray-600">
            Oto odpowiedzi na najczęstsze pytania rodziców.
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {allFaqs.map((faq, index) => {
            const isOpen = openIndices.has(index);
            return (
              <div key={index}>
                <button
                  onClick={(e) => {
                    toggleIndex(index);
                    if (!isOpen) {
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full py-5 text-left flex items-center justify-between gap-6 hover:text-paulina-accent transition-colors group focus-visible:outline-2 focus-visible:outline-paulina-accent focus-visible:outline-offset-2"
                >
                  <h3 className="font-semibold text-lg text-paulina-primary group-hover:text-paulina-accent transition-colors">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <Minus className="text-paulina-accent flex-shrink-0" size={20} />
                  ) : (
                    <Plus className="text-paulina-primary flex-shrink-0" size={20} />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="pb-6 pr-10 text-gray-700 leading-relaxed space-y-3"
                  >
                    {faq.answer.split('\n').filter(p => p.trim()).map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
