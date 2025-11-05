'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Jak długo mam dostęp do kursu?',
      answer: 'Masz dostęp do kursu przez 12 miesięcy (pakiet Standard) lub 24 miesiące (pakiet Premium i Expert). To wystarczająco dużo czasu, aby przerobić wszystkie materiały i powracać do nich przed egzaminem.'
    },
    {
      question: 'Co jeśli kurs mi się nie spodoba?',
      answer: 'Masz 30-dniową bezwarunkową gwarancję zwrotu pieniędzy. Jeśli uznasz, że kurs nie spełnia Twoich oczekiwań, wystarczy napisać, a zwrócimy Ci pieniądze bez zadawania pytań.'
    },
    {
      question: 'Czy kurs jest zgodny z aktualną podstawą programową?',
      answer: 'Tak! Kurs jest zawsze aktualizowany zgodnie z najnowszą podstawą programową CKE. Wszystkie materiały są dostosowane do wymagań egzaminu ósmoklasisty.'
    },
    {
      question: 'Ile czasu dziennie trzeba poświęcić na naukę?',
      answer: 'Wystarczy 15 minut dziennie systematycznej nauki. Oczywiście, jeśli masz więcej czasu, możesz uczyć się dłużej i szybciej przerobić materiał.'
    },
    {
      question: 'Czy mogę płacić w ratach?',
      answer: 'Tak! Oferuję możliwość rozpłaty na 5 rat 0% (200 zł miesięcznie przez 5 miesięcy). Nie płacisz żadnych dodatkowych odsetek.'
    },
    {
      question: 'Czy dostęp do kursu jest natychmiastowy?',
      answer: 'Tak! Zaraz po dokonaniu płatności otrzymasz e-mail z danymi do logowania i możesz od razu zacząć naukę.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Najczęściej zadawane pytania
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-paulina-bg-purple rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-paulina-bg-purple/80 transition-colors"
              >
                <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-paulina-primary" />
                ) : (
                  <ChevronDown className="text-paulina-primary" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
