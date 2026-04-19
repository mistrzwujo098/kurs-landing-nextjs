'use client'

import { Target, Sparkles, Clock, ArrowRight, Check } from 'lucide-react'

interface QualifierGateProps {
  onShowFullPage: () => void
  courseType: 'egzamin' | 'matura' | 'rozszerzenie'
}

const courseNames = {
  egzamin: 'Program Ósmoklasisty',
  matura: 'Program Matura Podstawa',
  rozszerzenie: 'Program Matura Rozszerzenie'
}

const courseTargets = {
  egzamin: 'egzaminie ósmoklasisty',
  matura: 'maturze podstawowej',
  rozszerzenie: 'maturze rozszerzonej'
}

export default function QualifierGate({ onShowFullPage, courseType }: QualifierGateProps) {
  const courseName = courseNames[courseType]
  const courseTarget = courseTargets[courseType]

  return (
    <div className="min-h-screen bg-[#fbf9f7] flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Chwila
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-paulina-primary mb-5 tracking-tight leading-[1]">
            Zanim pójdziesz&nbsp;dalej…
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
            Chcę się upewnić, że wybierasz opcję najlepszą dla siebie.
          </p>
        </div>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Option 1: Full Course */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-paulina-primary/20 hover:border-paulina-primary transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl border border-paulina-primary/30 flex items-center justify-center">
                <Target className="w-5 h-5 text-paulina-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-primary">
                Kurs główny
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-paulina-primary tracking-tight mb-3">
              {courseName}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kompleksowe przygotowanie do {courseTarget}.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                <span>Wynik powyżej <strong>80%</strong> bez drogich korepetycji</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                <span>Pełna ścieżka nauki krok po kroku</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                <span>Wymaga <strong>regularnej pracy</strong> przez kilka miesięcy</span>
              </li>
            </ul>

            <div className="flex items-center gap-2.5 text-sm text-gray-600 bg-[#fbf9f7] p-3 rounded-lg mb-6">
              <Clock className="w-4 h-4 flex-shrink-0 text-paulina-accent" />
              <span>Najlepszy wybór, jeśli masz czas na systematyczną naukę</span>
            </div>

            <button
              onClick={onShowFullPage}
              className="w-full py-3.5 px-6 bg-paulina-primary hover:bg-paulina-accent text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 group"
            >
              Tak, chcę kurs główny
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Option 2: Minikursy */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-paulina-accent transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl border border-paulina-accent/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-paulina-accent" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent">
                Minikursy
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-paulina-primary tracking-tight mb-3">
              Krótkie, celowane
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kursy skupione na konkretnych umiejętnościach i technikach egzaminacyjnych.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                <span>Szybkie efekty — dodaj <strong>10–20%</strong> do wyniku</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                <span>Pewniaki, Strategie Strzelania, Arkusze</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                <span>Idealne, gdy <strong>mało czasu</strong> do egzaminu</span>
              </li>
            </ul>

            <div className="flex items-center gap-2.5 text-sm text-gray-600 bg-[#fbf9f7] p-3 rounded-lg mb-6">
              <Sparkles className="w-4 h-4 flex-shrink-0 text-paulina-accent" />
              <span>Już od 97 zł — szybki start bez dużego zobowiązania</span>
            </div>

            <a
              href="https://paulinaodmatematyki.com/"
              className="w-full py-3.5 px-6 bg-transparent text-paulina-primary border border-paulina-primary hover:bg-paulina-primary hover:text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 group"
            >
              Sprawdź minikursy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-500 mt-10">
          Nie wiesz, co wybrać? Napisz do mnie na{' '}
          <a href="mailto:kontakt@paulinaodmatematyki.com" className="text-paulina-primary hover:underline">
            kontakt@paulinaodmatematyki.com
          </a>
        </p>
      </div>
    </div>
  )
}
