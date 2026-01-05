'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const CourseContent: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
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
      title: 'MODUŁ 1. Działania na ułamkach i liczbach', 
      content: `- Podział i nazwy liczb
- Kolejność wykonywania działań
- Działania pisemne (dodawanie, odejmowanie, mnożenie, dzielenie)
- Cechy podzielności liczb
- Dodawanie i odejmowanie ułamków zwykłych
- Mnożenie, dzielenie i potęgowanie ułamków zwykłych
- Działania na ułamkach dziesiętnych
- Działania na liczbach ujemnych
- NWD i NWW
- Cyfry rzymskie
- Zapis liczb wymiernych na osi liczbowej
- Zaokrąglanie liczb
- Ułamki okresowe
- Ułamek z liczby, zadania tekstowe
- Przykładowe zadania egzaminacyjne` 
    },
    { 
      title: 'MODUŁ 2. Potęgi i pierwiastki', 
      content: `- Potęgowanie liczb wymiernych
- Działania na potęgach
- Notacja wykładnicza
- Pierwiastek kwadratowy i sześcienny
- Działania na pierwiastkach
- Przykładowe zadania egzaminacyjne` 
    },
    { 
      title: 'MODUŁ 3. Wyrażenia algebraiczne i równania, procenty', 
      content: `- Działania na wyrażeniach algebraicznych, porządkowanie
- Nawiasy w wyrażeniach algebraicznych
- Rozwiązywanie równań
- Przekształcanie wzorów
- Procenty, podwyżki i obniżki, proporcja
- Zadania tekstowe z równaniami
- Przykładowe zadania egzaminacyjne` 
    },
    { 
      title: 'MODUŁ 4. Matematyka w życiu, statystyka, prawdopodobieństwo', 
      content: `- Zamiana jednostek długości, pól i objętości
- Zamiana jednostek wagi i czasu
- Kalendarz
- Zamiana jednostek prędkości
- Skala
- Wykresy i diagramy, średnia arytmetyczna
- Kombinatoryka i prawdopodobieństwo
- Zauważanie schematów, zależności
- Przykładowe zadania egzaminacyjne` 
    },
    { 
      title: 'MODUŁ 5. Geometria', 
      content: `- Pojęcia wstępne w geometrii
- Rodzaje kątów i ich własności
- Rodzaje trójkątów, nierówność trójkąta
- Twierdzenie Pitagorasa
- Trójkąty równoboczne
- Trójkąty prostokątne o kątach 30 i 60 stopni, oraz 45 i 45 stopni
- Pola figur cz. I
- Pola figur cz. II
- Obliczanie ilości przekątnych w wielokątach i miary kątów w figurach foremnych
- Przystawanie trójkątów
- Dowodzenie
- Przykładowe zadania egzaminacyjne` 
    },
    { 
      title: 'MODUŁ 6. Układ współrzędnych', 
      content: `- Podstawowe wiadomości o układzie współrzędnych
- Długości odcinków w układzie współrzędnych
- Środek odcinka
- Obliczanie pól i obwodów figur
- Sprawdzanie czy trójkąt jest prostokątny
- Przykładowe zadania egzaminacyjne` 
    },
    { 
      title: 'MODUŁ 7. Bryły', 
      content: `- Podstawowe informacje z brył
- Obliczanie ilości ścian, krawędzi i wierzchołków
- Obliczanie pól i objętości na podstawie siatek brył
- Sześcian
- Prostopadłościan
- Pola powierzchni i objętości graniastosłupów
- Pola powierzchni i objętości ostrosłupów
- Zadania egzaminacyjne` 
    },
  ];

  const additionalContent = [
    { icon: '🔴', title: 'Aplikacja na smartfony', description: 'Możesz przyjść z dowolnym zadaniem matematycznym z którym masz problem', value: '797 zł' },
    { icon: '🎬', title: 'Ponad 60 lekcji', description: 'W formie video, masz do nich dostęp cały czas, 24 godziny na dobę 7 dni w tygodniu.', value: '997 zł' },
    { icon: '📓', title: '1000 zadań z rozwiązaniami', description: 'Strategicznie dopasowane, aby ułatwić Ci zrozumienie danego zagadnienia', value: '200 zł' },
    { icon: '🛟', title: 'Grupa kursantów', description: 'W każdej chwili możesz zadać nurtujące Cię pytanie ANONIMOWO i szybko uzyskać odpowiedź.', value: '300 zł' },
    { icon: '❤️', title: '30-dniowa gwarancja zwrotu pieniędzy', description: 'Gwarancja 30-dniowa jest bezwarunkowa.', value: 'Bezcenne' },
    { icon: '🧠', title: 'Dla Rodziców!', description: 'Cykl pięciu spotkań o stresie dla Rodziców ósmoklasistów z fantastyczną Panią psycholog', value: '500 zł' },
  ];

  return (
    <section id="course-content" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wszystko, co otrzymasz w kursie
          </h2>
          <p className="text-gray-600">(kliknij by rozwijać)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-paulina-bg-purple transition-colors"
                >
                  <span className="font-semibold text-gray-800">{module.title}</span>
                  {expandedModule === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <div className="text-gray-600 whitespace-pre-line">{module.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={platformImages[currentImageIndex]}
                alt="Widok platformy kursu"
                className="rounded-xl shadow-xl w-full"
              />
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + platformImages.length) % platformImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % platformImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {platformImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-paulina-accent w-6'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Widok z wnętrza platformy, do której dostajesz dostęp od razu po dołączeniu:
            </p>
            <p className="text-center mt-2 text-sm text-gray-500">
              👉 Kliknij strzałki lub kropki aby zobaczyć więcej zdjęć platformy
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Co jeszcze znajdę w kursie?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-paulina-accent font-semibold">Wartość: {item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseContent;
