import React, { useState } from 'react';
import { SolDeMayo } from './SolDeMayo';
import { Sparkles, Tv, Music, Award, HelpCircle } from 'lucide-react';
import { WORLD_CUP_PREAMBLE } from '../data/rulesData';
import { launchCelesteConfetti, launchVictoryStreamers } from '../utils/confetti';
import { playStadiumDrum, playSuccessChime } from '../utils/audio';

interface HeaderProps {
  pledgedCount: number;
  totalRules: number;
  onOpenTest: () => void;
  onOpenPassport: () => void;
  onOpenTvMode: () => void;
  onScrollToVideo: () => void;
}

export const ArgentineHeader: React.FC<HeaderProps> = ({
  pledgedCount,
  totalRules,
  onOpenTest,
  onOpenPassport,
  onOpenTvMode,
  onScrollToVideo,
}) => {
  const [drumBeats, setDrumBeats] = useState(0);

  const handleConfettiClick = () => {
    launchVictoryStreamers();
    playSuccessChime();
  };

  const handleDrumClick = () => {
    playStadiumDrum();
    setDrumBeats(prev => prev + 1);
    if ((drumBeats + 1) % 5 === 0) {
      launchCelesteConfetti();
    }
  };

  return (
    <header className="relative w-full overflow-hidden border-b border-sky-800/40 bg-slate-950">
      {/* Decorative Argentine Flag Ribbons */}
      <div className="w-full flex h-2.5">
        <div className="flex-1 bg-sky-400" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-sky-400" />
      </div>

      {/* Ambient background glow & stadium lights */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/30 blur-[120px] rounded-full" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-400/10 blur-[90px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-10">
        {/* Top Badges / Star Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <SolDeMayo size={36} className="filter drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-200">
              <span className="text-amber-400 font-bold">AFA</span>
              <span className="text-slate-600">/</span>
              <span>Edición Hinchada Argentina</span>
              <span className="text-slate-600">/</span>
              <span className="text-amber-400 flex items-center gap-0.5">
                ★ ★ ★ <span className="text-[10px] text-amber-300 ml-1">1978 · 1986 · 2022</span>
              </span>
            </div>
          </div>

          {/* Quick interactive utility buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDrumClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950/70 border border-sky-700/50 hover:bg-sky-900/60 text-sky-200 text-xs font-medium transition active:scale-95"
              title="Tocá el bombo con platillo"
            >
              <Music className="w-3.5 h-3.5 text-sky-400" />
              <span>Bombo ({drumBeats})</span>
            </button>

            <button
              onClick={handleConfettiClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 text-amber-300 text-xs font-medium transition active:scale-95"
              title="¡Lluvia de papelitos albicelestes!"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>¡Tirar Papelitos!</span>
            </button>

            <button
              onClick={onOpenTvMode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 text-slate-200 text-xs font-medium transition"
              title="Modo pantalla para poner en la TV del living"
            >
              <Tv className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">Modo TV</span>
            </button>
          </div>
        </div>

        {/* Hero title & statement */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          {/* Subtle three stars emblem */}
          <div className="inline-flex items-center gap-1.5 mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-700/40 shadow-inner">
            <span className="text-amber-400 text-sm">★★★</span>
            <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
              Ya ganamos la tercera, y ahora nos volvemos a ilusionar…
            </span>
            <span className="text-amber-400 text-sm">★★★</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
            Código de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-300 drop-shadow-[0_2px_15px_rgba(56,189,248,0.4)]">Supervivencia</span> Mundialista
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {WORLD_CUP_PREAMBLE.subtitle}
          </p>

          <p className="mt-2 text-sm text-sky-400 font-medium">
            Alentar con el corazón, respetar con la cabeza. La guía definitiva para hinchas, amigos e invitados en cada partido.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenPassport}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/30 transition active:scale-95"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Mi Credencial de Hincha</span>
              <span className="ml-1 px-1.5 py-0.5 rounded bg-black/25 text-xs text-sky-100">
                {pledgedCount}/{totalRules}
              </span>
            </button>

            <button
              onClick={onOpenTest}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 font-medium text-sm transition"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Test: Termómetro del Hincha</span>
            </button>

            <button
              onClick={onScrollToVideo}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-950/60 hover:bg-sky-900/60 border border-sky-800/60 text-sky-200 text-sm font-medium transition"
            >
              <span>Ver Video Formativo</span>
            </button>
          </div>
        </div>

        {/* Pledge Progress Meter */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
            <span className="font-semibold text-sky-300 flex items-center gap-1.5">
              <span>Juramento del Hincha Albiceleste</span>
              <span className="text-slate-500 font-normal">· Compromiso con los 10 mandamientos</span>
            </span>
            <span className="font-bold text-amber-400">
              {Math.round((pledgedCount / totalRules) * 100)}% Completado
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-sky-300 to-amber-400 transition-all duration-500 rounded-full"
              style={{ width: `${(pledgedCount / totalRules) * 100}%` }}
            />
          </div>

          <p className="mt-2 text-[11px] text-slate-400 text-center">
            {pledgedCount === totalRules
              ? '🎉 ¡Completaste todos los mandamientos! Ya podés descargar tu Credencial Oficial de Hincha Campeón.'
              : `Has jurado ${pledgedCount} de ${totalRules} mandamientos. Tocá "Me comprometo" en cada regla para completar tu pasaporte.`}
          </p>
        </div>
      </div>
    </header>
  );
};
