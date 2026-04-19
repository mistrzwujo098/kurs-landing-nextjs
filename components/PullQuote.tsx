'use client'

import React from 'react';

const PullQuote: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 bg-paulina-primary text-white overflow-hidden">
      {/* Subtelny ornament — wielki cudzysłów jako element graficzny */}
      <div
        className="absolute top-6 left-4 md:left-16 font-display text-[14rem] md:text-[22rem] text-white/5 leading-none pointer-events-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-paulina-accent mb-8">
          Opinia rodzica
        </p>

        {/* Cytat — ogromny, Fraunces italic, pełna szerokość sekcji */}
        <blockquote className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] italic text-white mb-12 text-balance">
          Kurs nauczył moją córkę, że matematyka ma sens.
          Po 3 miesiącach z 48% na 100% na egzaminie. Dopiero wtedy zrozumiałam,
          że problem nie leżał w dziecku.
        </blockquote>

        {/* Author z handwritten accentem */}
        <div className="inline-flex flex-col items-center gap-1">
          <span className="font-hand text-3xl md:text-4xl text-paulina-accent leading-none">
            Anna
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">
            mama Kasi, 8 klasa
          </span>
        </div>
      </div>
    </section>
  );
};

export default PullQuote;
