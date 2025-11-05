'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, RefreshCw, Phone, Mail, Clock, Award, Heart, Zap, DollarSign, Users, Star, ArrowRight, AlertTriangle, Gift, TrendingUp } from 'lucide-react';

const RiskReversal: React.FC = () => {
  const [activeGuarantee, setActiveGuarantee] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 33 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const guarantees = [
    {
      id: 'satisfaction',
      title: 'GWARANCJA SATYSFAKCJI',
      subtitle: '30 dni na zwrot bez pytań',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      promise: 'Jeśli przez pierwsze 30 dni nie będziesz w 100% zadowolona z kursu, zwrócimy Ci każdą złotówkę',
      details: [
        'Bez zbędnych pytań czy wywierania presji',
        'Zwrot w ciągu 24-48 godzin na Twoje konto',
        'Możesz zatrzymać wszystkie materiały jako podziękowanie',
        'Wystarczy jeden email lub telefon'
      ],
      testimonial: '"Byłam sceptyczna, ale gwarancja mnie przekonała. Na szczęście nie musiałam z niej korzystać - efekty były od pierwszego tygodnia!"',
      author: 'Anna K., mama Zosi',
      risk_removed: 'ZERO ryzyka finansowego'
    },
    {
      id: 'results',
      title: 'GWARANCJA WYNIKÓW',
      subtitle: 'Poprawa ocen lub zwrot pieniędzy',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      promise: 'Jeśli ocena dziecka z matematyki nie poprawi się o minimum 1 stopień w ciągu 60 dni, zwrócimy pełną kwotę',
      details: [
        'Wystarczy przesłać zdjęcie dzienniczka przed i po',
        'Regularne korzystanie (15 min dziennie) daje najlepsze rezultaty',
        'Działa w 94% przypadków - ale jeśli nie u Ciebie, zwracamy pieniądze',
        'Bez żadnych wykrętów czy drobnego druku'
      ],
      testimonial: '"Tomek poprawił się z 2 na 4+ w jeden semestr. Teraz już nie martwię się o jego przyszłość."',
      author: 'Magda W., mama Tomka',
      risk_removed: 'ZERO ryzyka braku efektów'
    },
    {
      id: 'support',
      title: 'GWARANCJA WSPARCIA',
      subtitle: 'Nie zostaniesz sama ze swoimi wątpliwościami',
      icon: Users,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      promise: 'Masz bezpośredni dostęp do Pauliny i zespołu przez cały czas kursu',
      details: [
        'Odpowiadamy na każde pytanie w ciągu 24 godzin',
        '5 osobistych konsultacji z Pauliną (wartość 1000 zł)',
        'Dostęp do grupy rodziców na Facebooku',
        'Miesięczne webinary Q&A na żywo'
      ],
      testimonial: '"Kiedy miałam wątpliwości, Paulina osobiście zadzwoniła i wszystko wyjaśniła. Czułam się zaopiekowana."',
      author: 'Ewa L., mama Kacpra',
      risk_removed: 'ZERO ryzyka pozostania bez pomocy'
    },
    {
      id: 'lifetime',
      title: 'GWARANCJA DOSTĘPU',
      subtitle: 'Dożywotni dostęp do kursu i aktualizacji',
      icon: RefreshCw,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      promise: 'Płacisz raz, korzystasz zawsze - nawet gdy podstawa programowa się zmieni',
      details: [
        'Kurs pozostaje aktualny dzięki regularnym aktualizacjom',
        'Młodsze rodzeństwo też może korzystać bez dodatkowych opłat',
        'Dostęp ze wszystkich urządzeń, 24/7',
        'Możliwość powrotu do materiałów nawet po latach'
      ],
      testimonial: '"Młodszy syn też będzie korzystał za 3 lata. To inwestycja na lata, nie jednorazowy wydatek."',
      author: 'Tomasz R., tata bliźniaków',
      risk_removed: 'ZERO ryzyka utraty dostępu'
    }
  ];

  const bonusGuarantees = [
    {
      icon: Gift,
      title: 'BONUS: Gdyby nie działało...',
      description: 'Oprócz zwrotu pieniędzy, oferujemy 3 miesiące korepetycji 1 na 1 GRATIS',
      value: 'Wartość: 2400 zł'
    },
    {
      icon: Heart,
      title: 'BONUS: Rodzinna gwarancja',
      description: 'Jeśli kurs nie działa na jedno dziecko, pozostałe rodzeństwo ma dostęp dożywotnio',
      value: 'Wartość: bezcenna'
    },
    {
      icon: Award,
      title: 'BONUS: Gwarancja egzaminu',
      description: 'Jeśli dziecko nie zda egzaminu, zwracamy 200% ceny kursu',
      value: 'To już nasza pewność'
    }
  ];

  const trustBuilders = [
    {
      icon: Users,
      stat: '20,847',
      label: 'zadowolonych rodzin',
      subtext: 'w całej Polsce'
    },
    {
      icon: Star,
      stat: '4.9/5',
      label: 'średnia ocena rodziców',
      subtext: 'z ponad 3000 opinii'
    },
    {
      icon: RefreshCw,
      stat: '0.6%',
      label: 'zwrotów',
      subtext: 'najniższy wskaźnik w branży'
    },
    {
      icon: TrendingUp,
      stat: '94%',
      label: 'poprawia oceny',
      subtext: 'w pierwszym miesiącu'
    }
  ];

  const currentGuarantee = guarantees[activeGuarantee];
  const GuaranteeIcon = currentGuarantee.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eliminujemy <span className="text-red-600">każde</span> ryzyko
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Rozumiemy Twoje obawy. Dlatego przejęliśmy na siebie <span className="font-bold text-green-600">całe ryzyko</span>.
            <br />
            Ty zyskujesz sukces dziecka. My ponosimy konsekwencje, jeśli nie dotrzymamy słowa.
          </p>
        </motion.div>

        {/* Urgency Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 text-center mb-12 max-w-2xl mx-auto shadow-xl"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="animate-pulse" size={24} />
            <span className="font-bold">UWAGA: Te gwarancje obowiązują tylko do:</span>
          </div>
          <div className="flex justify-center gap-4 text-3xl font-bold">
            <div className="bg-white/20 rounded-lg p-2 min-w-[60px]">
              {timeLeft.hours.toString().padStart(2, '0')}
              <div className="text-xs text-red-200">godz</div>
            </div>
            <div className="self-center">:</div>
            <div className="bg-white/20 rounded-lg p-2 min-w-[60px]">
              {timeLeft.minutes.toString().padStart(2, '0')}
              <div className="text-xs text-red-200">min</div>
            </div>
            <div className="self-center">:</div>
            <div className="bg-white/20 rounded-lg p-2 min-w-[60px]">
              {timeLeft.seconds.toString().padStart(2, '0')}
              <div className="text-xs text-red-200">sek</div>
            </div>
          </div>
          <p className="text-sm text-red-200 mt-3">
            Po tym czasie wracamy do standardowych warunków
          </p>
        </motion.div>

        {/* Main Guarantee Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Guarantee Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nasze 4 Gwarancje Bezpieczeństwa:
            </h3>
            
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <motion.button
                  key={guarantee.id}
                  onClick={() => setActiveGuarantee(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeGuarantee === index
                      ? `${guarantee.bgColor} ${guarantee.borderColor} shadow-lg`
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      activeGuarantee === index 
                        ? `bg-gradient-to-r ${guarantee.color} text-white` 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {guarantee.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {guarantee.subtitle}
                      </p>
                      {activeGuarantee === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3"
                        >
                          <p className="text-green-700 font-semibold text-sm">
                            ✓ {guarantee.risk_removed}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detailed Guarantee */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGuarantee}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentGuarantee.color} text-white p-8 text-center`}>
                <GuaranteeIcon size={64} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{currentGuarantee.title}</h3>
                <p className="text-xl opacity-90">{currentGuarantee.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Promise */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="text-green-600" size={20} />
                    Nasze zobowiązanie:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed font-semibold bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
                    {currentGuarantee.promise}
                  </p>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    Jak to działa w praktyce:
                  </h4>
                  <ul className="space-y-2">
                    {currentGuarantee.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <blockquote className="text-gray-700 italic mb-2">
                    {currentGuarantee.testimonial}
                  </blockquote>
                  <cite className="text-sm text-gray-500 font-semibold">
                    — {currentGuarantee.author}
                  </cite>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bonus Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            I jeszcze więcej - nasze <span className="text-purple-600">bonusowe gwarancje</span>:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bonusGuarantees.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-200 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{bonus.title}</h4>
                  <p className="text-gray-700 mb-3 leading-relaxed">{bonus.description}</p>
                  <p className="text-purple-600 font-bold">{bonus.value}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Dlaczego możemy oferować takie gwarancje?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {trustBuilders.map((builder, index) => {
              const Icon = builder.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <Icon className="text-yellow-300 mx-auto mb-4" size={48} />
                  <div className="text-4xl font-bold text-yellow-300 mb-2">{builder.stat}</div>
                  <div className="font-semibold mb-1">{builder.label}</div>
                  <div className="text-sm text-gray-300">{builder.subtext}</div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Moja gwarancja to <span className="text-yellow-300 font-bold">pewność oparta na latach doświadczenia i tysiącach sukcesów</span>.
              <br />
              Wiem, że mój system działa, więc mogę podjąć całe ryzyko.
            </p>
          </div>
        </motion.div>

        {/* Contact & Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16 border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Masz pytania o nasze gwarancje?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Zadzwoń bezpośrednio</h4>
                <p className="text-green-600 font-semibold">+48 123 456 789</p>
                <p className="text-sm text-gray-600">Pn-Pt 9:00-20:00</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Napisz do nas</h4>
                <p className="text-blue-600 font-semibold">gwarancje@paulina.pl</p>
                <p className="text-sm text-gray-600">Odpowiedź w 2h</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <Clock className="text-yellow-600 mx-auto mb-3" size={32} />
            <p className="text-gray-700">
              <span className="font-bold">Ważne:</span> Te rozszerzone gwarancje obowiązują tylko przez następne{' '}
              <span className="font-bold text-red-600">{timeLeft.hours}h {timeLeft.minutes}min</span>.
              <br />
              Potem wracamy do standardowych warunków.
            </p>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              Teraz już wiesz - ryzyko jest ZEROWE
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Wszystkie obawy zostały wyeliminowane. Wszystkie ryzyka przejęliśmy na siebie.
              <br />
              <span className="font-bold text-yellow-300">Jedyne ryzyko to przeoczenie tej okazji.</span>
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 font-bold py-5 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <Shield size={28} />
                Zaczynam z pełną ochroną gwarancji
                <ArrowRight size={24} />
              </motion.button>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>30 dni gwarancji satysfakcji</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>Gwarancja wyników</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>Dożywotnie wsparcie</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>Zwrot 200% przy braku zdania</span>
                </div>
              </div>
              
              <p className="text-yellow-200 font-semibold">
                ⏰ Te gwarancje obowiązują tylko przez następne {timeLeft.hours}h {timeLeft.minutes}min {timeLeft.seconds}s
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskReversal;
