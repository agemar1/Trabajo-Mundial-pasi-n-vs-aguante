import React, { useState, useEffect } from 'react';
import { RuleItem } from '../types';
import { SolDeMayo } from './SolDeMayo';
import { X, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Music } from 'lucide-react';
import { launchCelesteConfetti } from '../utils/confetti';
import { playStadiumDrum } from '../utils/audio';

interface TvModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  rules: RuleItem[];
}

export const TvModeModal: React.FC<TvModeModalProps> = ({ isOpen, onClose, rules }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isOpen || !isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rules.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isOpen, isAutoPlay, rules.length]);

  if (!isOpen) return null;

  const currentRule = rules[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rules.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + rules.length) % rules.length);
  };

  const handleCelebrate = () => {
    launchCelesteConfetti();
    playStadiumDrum();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none">
      {/* Background celestial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/15 blur-[160px] rounded-full" />
      </div>

      {/* Top TV Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-sky-800/60 pb-6">
        <div className="flex items-center gap-4">
          <SolDeMayo size={52} className="filter drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-300 font-bold">
              <span>Modo TV Living</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400">★ ★ ★ 1978 · 1986 · 2022</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Código de Supervivencia Mundialista
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCelebrate}
            className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/50 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">¡Festejar!</span>
          </button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
            title={isAutoPlay ? 'Pausar rotación' : 'Reanudar rotación'}
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title="Cerrar modo TV (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Center Stage: Huge TV Typography */}
      <div className="relative z-10 max-w-5xl mx-auto text-center my-auto py-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-950 border border-sky-700/60 text-sky-300 text-sm font-bold uppercase tracking-wider mb-6">
          <span>Mandamiento #{currentRule.number} de 10</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-300">{currentRule.categoryLabel}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight">
          {currentRule.title}
        </h2>

        {/* Large Rule Text */}
        <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-sky-600/40 shadow-2xl backdrop-blur-md">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-sky-100 leading-relaxed italic">
            "{currentRule.text}"
          </p>
        </div>

        <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal max-w-3xl mx-auto">
          💡 <strong className="text-amber-400">En nuestro living:</strong> {currentRule.practicalTip}
        </p>
      </div>

      {/* Bottom Bar: Navigation and Progress Dots */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6">
        <div className="text-xs text-slate-400">
          "Ya ganamos la tercera, y ahora nos volvemos a ilusionar…"
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {rules.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-sky-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir a la regla ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next / Prev Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
