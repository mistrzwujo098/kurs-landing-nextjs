'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, BookOpen } from 'lucide-react';

const SESSION_KEY = 'exitPopupShown_stronykursy_session';
const STORAGE_KEY = 'exitPopupShown_stronykursy';

const ExitPopup: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Already shown - skip (desktop persists, mobile is per-session)
    if (isMobile) {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } else {
      if (localStorage.getItem(STORAGE_KEY)) return;
    }

    const mountTime = Date.now();
    let scrollHandler: (() => void) | null = null;
    let mouseLeaveHandler: ((e: MouseEvent) => void) | null = null;

    if (isMobile) {
      // Mobile: scroll-based trigger - >60% scroll AND >30s on page
      scrollHandler = () => {
        const elapsed = Date.now() - mountTime;
        if (elapsed < 30000) return;
        const scrolled = window.scrollY;
        const threshold = document.body.scrollHeight * 0.6;
        if (scrolled > threshold) {
          setShow(true);
          sessionStorage.setItem(SESSION_KEY, 'true');
          if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
        }
      };
      window.addEventListener('scroll', scrollHandler, { passive: true });
    } else {
      // Desktop: exit-intent (mouse leaves top of viewport)
      mouseLeaveHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setShow(true);
          localStorage.setItem(STORAGE_KEY, 'true');
        }
      };
      const timer = setTimeout(() => {
        if (mouseLeaveHandler) document.addEventListener('mouseleave', mouseLeaveHandler);
      }, 5000);

      return () => {
        clearTimeout(timer);
        if (mouseLeaveHandler) document.removeEventListener('mouseleave', mouseLeaveHandler);
      };
    }

    return () => {
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // Esc-to-close
  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-paulina-primary/40 hover:text-paulina-primary transition-colors"
            >
              <X size={24} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-paulina-bg-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-paulina-accent" size={32} />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-paulina-primary text-center mb-3">
              Zanim wyjdziesz...
            </h3>
            <p className="text-paulina-primary/70 text-center mb-6">
              Może zacznij od mniejszego kroku? Minikursy od 97 zł to świetny sposób,
              żeby zobaczyć czy metoda Pauliny działa - przejdziesz szybciej materiał
              i szybciej zauważysz efekty.
            </p>

            {/* CTA Button */}
            <a
              href="https://paulinaodmatematyki.com/pewniaki"
              className="flex items-center justify-center gap-2 w-full py-4 bg-paulina-accent hover:bg-paulina-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Zobacz minikursy od 97 zł
              <ChevronRight size={20} />
            </a>

            {/* Secondary action */}
            <button
              onClick={() => setShow(false)}
              className="block w-full text-center mt-4 text-sm text-paulina-primary/50 hover:text-paulina-primary transition-colors"
            >
              Wracam do strony
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitPopup;
