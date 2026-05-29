'use client'

import React from 'react';
import { Star, Quote } from 'lucide-react';

const RealTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Monika Mączyńska",
      role: "mama",
      rating: 5,
      quote: "Kursy są rewelacyjne! Moja córka uczyła się sama w trybie edukacji domowej korzystając tylko z kursu pani Pauliny (żadnych dodatkowych korepetycji!) i zdała egzamin ósmoklasisty na tak wysokim poziomie, że dostała się do jednego z najlepszych liceów w mieście. Szczerze polecam!",
      result: "Dostała się do najlepszego liceum w mieście",
    },
    {
      name: "Anna",
      role: "mama",
      rating: 5,
      quote: "Kurs matematyki E8 u Pani Pauliny to absolutny strzał w dziesiątkę! Zajęcia prowadzone są w niezwykle przystępny sposób - Pani Paulina potrafi tłumaczyć nawet najtrudniejsze zagadnienia w sposób prosty, zrozumiały i... ciekawy! Dzięki niej moja córka nie tylko nadrobiła zaległości, ale też zaczęła wierzyć w siebie i polubiła matematykę.",
      result: "Z 48% na 100%",
      highlight: true
    },
    {
      name: "Iwona Zaremska",
      role: "mama",
      rating: 5,
      quote: "Syn podniósł wynik z 23% na 83%, włożył ogrom pracy, dzięki pani bardzo się przyłożył, skrupulatnie rozwiązywał zadania. Skorzysta w przyszłym roku z pani kursu. Dziękujemy!",
      result: "Z 23% na 83%",
    },
    {
      name: "Rodzic ucznia z dysleksją",
      role: "mama / tata",
      rating: 5,
      quote: "Syn uzyskał super wynik z egzaminu ósmoklasisty 77% (mimo dysleksji to wspaniałe osiągnięcie). Bardzo się cieszymy i jesteśmy z niego dumni. Jeszcze raz dziękujemy za wszystko.",
      result: "77% mimo dysleksji",
    },
    {
      name: "Uczennica klasy 8",
      role: "uczennica",
      rating: 5,
      quote: "Z e8 z matematyki uzyskałam 80%! Chcę Pani bardzo podziękować za kurs przygotowawczy z matematyki, ponieważ to dzięki niemu uzyskałam tak wysoki wynik. Na początku roku szkolnego moje wyniki z próbnych egzaminów wynosiły zaledwie 30%, czasem 23%, a teraz aż 80%.",
      result: "Z 23-30% na 80%",
    },
    {
      name: "Urszula Godlewska",
      role: "mama",
      rating: 5,
      quote: "Egzamin ósmoklasisty to świetny kurs. Moja córka w ciągu zaledwie 1 miesiąca nauki z tym kursem z 30% na egzaminach próbnych zdała egzamin ósmoklasisty na 85%.",
      result: "1 miesiąc: 30% → 85%",
      highlight: true
    },
    {
      name: "Magda M.",
      role: "mama",
      rating: 5,
      quote: "Kupiłam kurs ósmoklasisty dla mojej córki. Uczyła się przy moim wsparciu, a razem uczestniczyłyśmy również w spotkaniach na żywo. Pani Paulina w sposób bardzo klarowny tłumaczy zagadnienia, z szacunkiem podchodzi do uczniów i nigdy nie okazuje poirytowania ani zniecierpliwienia. Taka atmosfera zdecydowanie sprzyja efektywnej nauce. Kurs znacząco pomógł w przygotowaniach do egzaminu - wynik to aż 96%.",
      result: "Egzamin na 96%",
    },
    {
      name: "Anna Surmiak",
      role: "mama",
      rating: 5,
      quote: "Polecam kurs bardzo gorąco, córka przeszła cały kurs przygotowujący do egzaminu z matematyki i napisała egzamin ósmoklasisty na 100%. To chyba najlepsza opinia :)",
      result: "100% na egzaminie",
      highlight: true
    },
    {
      name: "Katarzyna Kwiecińska",
      role: "mama",
      rating: 5,
      quote: "Pani Paulino, serdecznie dziękujemy za przygotowanie córki do egzaminu. Pierwszy test z matematyki rozwiązywany we wrześniu napisała na niespełna 40%, po Pani kursach, nie wierzyłam, ale tak na 100%. Serdecznie polecam, wiem że wrócimy do Pani :)",
      result: "Z 40% na 100%",
    },
    {
      name: "Anna Kupper",
      role: "mama",
      rating: 5,
      quote: "Polecam jako matka dziecka. Na początku podejście mojej córki było „a po co, przecież my to już przerabialiśmy”, za to po dwóch lekcjach zupełnie wszystko się zmieniło. Jak zapytałam - no i jak? Dostałam odpowiedź, że nawet spoko i że pokazane były ciekawe sposoby na rozwiązywanie zadań, o których w szkole się nie mówi lub po prostu nie pokazuje.",
      result: "Zmiana nastawienia po 2 lekcjach",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent-text mb-4">
            Opinie
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-4 tracking-tight">
            Co mówią rodzice i&nbsp;uczniowie
          </h2>
          <p className="text-lg text-gray-600">
            Prawdziwe wyniki, prawdziwe imiona. Losowa próbka z&nbsp;tysięcy opinii.
          </p>
        </div>

        {/* Masonry - CSS columns z różnymi wysokościami kart (editorial, Pinterest-style) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`mb-6 break-inside-avoid rounded-2xl p-7 relative border transition-colors duration-300 ${
                testimonial.highlight
                  ? 'bg-paulina-primary text-white border-paulina-primary'
                  : 'bg-white border-gray-200 hover:border-paulina-accent/40'
              }`}
            >
              <Quote
                className={`absolute top-5 right-5 ${
                  testimonial.highlight ? 'text-white/15' : 'text-paulina-accent/15'
                }`}
                size={36}
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={testimonial.highlight ? 'text-paulina-accent fill-current' : 'text-paulina-accent fill-current'}
                    size={14}
                  />
                ))}
              </div>

              {/* Result - typograficznie, bez pastylki */}
              {testimonial.result && (
                <p className={`font-display text-xl md:text-2xl mb-4 tracking-tight leading-tight ${
                  testimonial.highlight ? 'text-white' : 'text-paulina-primary'
                }`}>
                  {testimonial.result}
                </p>
              )}

              {/* Quote */}
              <p className={`text-sm leading-relaxed mb-5 ${
                testimonial.highlight ? 'text-white/90' : 'text-gray-700'
              }`}>
                „{testimonial.quote}”
              </p>

              {/* Author */}
              <div className={`pt-4 border-t ${
                testimonial.highlight ? 'border-white/15' : 'border-gray-100'
              }`}>
                <p className={`font-bold text-sm ${
                  testimonial.highlight ? 'text-white' : 'text-paulina-primary'
                }`}>
                  {testimonial.name}
                </p>
                <p className={`text-xs mt-0.5 ${
                  testimonial.highlight ? 'text-white/60' : 'text-gray-500'
                }`}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom - typograficzny stat zamiast box */}
        <div className="text-center mt-14 max-w-2xl mx-auto">
          <p className="display-numeral text-[6rem] md:text-[8rem] text-paulina-accent leading-none mb-2">
            98%
          </p>
          <p className="text-lg text-paulina-primary font-semibold mb-1">
            rodziców poleca kurs znajomym
          </p>
          <p className="text-sm text-gray-500">
            To nie są wybrane opinie - to losowa próbka z tysięcy otrzymanych w ostatnim roku.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealTestimonials;
