'use client'

import React from 'react';
import { Sparkles, Brain, Target, Clock, Trophy, Shield, Zap, Gift, Video, FileText, Smartphone, Users } from 'lucide-react';

const WhatYouDiscover: React.FC = () => {
  const discoveries = [
    {
      icon: Brain,
      title: "Metodę „Szybkich Ułamków”",
      description: "która sprawia, że najtrudniejsze działania stają się proste jak dodawanie"
    },
    {
      icon: Zap,
      title: "Trik „3 Kroki do Procentów”",
      description: "dzięki któremu każde zadanie z procentami zajmie max 2 minuty"
    },
    {
      icon: Target,
      title: "System „Pewniaki na Start”",
      description: "10 typów zadań, które zawsze są na egzaminie (i jak je rozwiązać)"
    },
    {
      icon: Clock,
      title: "Technikę „Time-Boxing”",
      description: "jak zarządzać czasem na egzaminie, żeby starczyło na sprawdzenie"
    },
    {
      icon: Trophy,
      title: "Algorytm „Zero Błędów”",
      description: "sprawdzony sposób na unikanie głupich pomyłek (strata 20% punktów)"
    },
    {
      icon: Shield,
      title: "Metodę „Anty-Stres”",
      description: "3 techniki oddechowe, które działają nawet podczas egzaminu"
    },
    {
      icon: Sparkles,
      title: "Wzory w pamięci długotrwałej",
      description: "system zapamiętywania, dzięki któremu wzory zostają w głowie na zawsze"
    },
    {
      icon: Gift,
      title: "Bonus: „Ściąga Legalna”",
      description: "jak zorganizować kartkę z obliczeniami, żeby nie zgubić punktów"
    }
  ];

  const extras = [
    { icon: FileText, text: '10 arkuszy egzaminacyjnych' },
    { icon: Target, text: '1000+ zadań z rozwiązaniami' },
    { icon: Video, text: '60+ lekcji video HD' },
    { icon: Smartphone, text: 'Aplikacja mobilna' },
    { icon: Users, text: 'Grupa wsparcia' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            W kursie
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paulina-primary mb-5 tracking-tight">
            Co <span className="italic text-paulina-accent font-normal">dokładnie</span> odkryje Twoje&nbsp;dziecko
          </h2>
          <p className="text-lg text-gray-600">
            Oto część z 67 technik, które sprawiają, że uczniowie mówią: <em>„Czemu nikt wcześniej mi tego nie pokazał?”</em>
          </p>
        </div>

        {/* Grid kart — bez border-l-4 accent, bez shadow-md, tylko czyste karty z subtelną obwódką */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {discoveries.map((discovery, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-paulina-accent/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Wariant ikony: kwadrat z obwódką zamiast kółko z tłem */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl border border-paulina-accent/30 flex items-center justify-center">
                  <discovery.icon className="text-paulina-accent" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-paulina-primary mb-1.5 leading-tight">
                    {discovery.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {discovery.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra — płaska lista zamiast "bg-yellow" boxa z emoji */}
        <div className="text-center max-w-4xl mx-auto pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-6">
            Oraz dodatki warte <span className="font-bold text-paulina-accent">2794 zł</span>:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-700">
            {extras.map((extra, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <extra.icon size={16} className="text-paulina-accent" />
                {extra.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouDiscover;
