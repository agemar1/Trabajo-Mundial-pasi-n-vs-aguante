/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RULES_DATA, WORLD_CUP_PREAMBLE } from './data/rulesData';
import { ArgentineHeader } from './components/ArgentineHeader';
import { RulesSection } from './components/RulesSection';
import { VideoSection } from './components/VideoSection';
import { HinchaTestModal } from './components/HinchaTestModal';
import { FanPassportModal } from './components/FanPassportModal';
import { TvModeModal } from './components/TvModeModal';
import { SolDeMayo } from './components/SolDeMayo';
import { Sparkles, Music, Award, HelpCircle, Heart, Shield, CheckCircle2, Tv } from 'lucide-react';
import { launchCelesteConfetti, launchVictoryStreamers } from './utils/confetti';
import { playStadiumDrum, playSuccessChime } from './utils/audio';

export default function App() {
  const [pledgedRules, setPledgedRules] = useState<number[]>([1, 6, 9]); // Start with 3 pledged as encouragement
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [isTvModeOpen, setIsTvModeOpen] = useState(false);

  // Load saved pledges from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mundial_pledged_rules');
      if (saved) {
        setPledgedRules(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleTogglePledge = (id: number) => {
    let updated: number[];
    if (pledgedRules.includes(id)) {
      updated = pledgedRules.filter(rId => rId !== id);
    } else {
      updated = [...pledgedRules, id];
    }
    setPledgedRules(updated);
    try {
      localStorage.setItem('mundial_pledged_rules', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handlePledgeAll = () => {
    const allIds = RULES_DATA.map(r => r.id);
    setPledgedRules(allIds);
    try {
      localStorage.setItem('mundial_pledged_rules', JSON.stringify(allIds));
    } catch {
      // Ignore
    }
    launchVictoryStreamers();
    playSuccessChime();
  };

  const scrollToVideo = () => {
    const elem = document.getElementById('video-debate');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Header */}
      <ArgentineHeader
        pledgedCount={pledgedRules.length}
        totalRules={RULES_DATA.length}
        onOpenTest={() => setIsTestOpen(true)}
        onOpenPassport={() => setIsPassportOpen(true)}
        onOpenTvMode={() => setIsTvModeOpen(true)}
        onScrollToVideo={scrollToVideo}
      />

      {/* Main Body */}
      <main className="flex-1">
        {/* Banner with 10 rules commitment summary */}
        <section className="bg-gradient-to-r from-sky-950/80 via-slate-900 to-sky-950/80 border-b border-sky-800/40 py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <SolDeMayo size={32} />
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Compromiso de Honor Celeste y Blanco
                </h3>
                <p className="text-xs text-sky-300">
                  Jurá los 10 mandamientos para obtener tu credencial oficial y compartirla con tus invitados.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {pledgedRules.length < RULES_DATA.length && (
                <button
                  onClick={handlePledgeAll}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow transition active:scale-95 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Jurar todos juntos</span>
                </button>
              )}
              <button
                onClick={() => setIsPassportOpen(true)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              >
                Ver mi credencial ({pledgedRules.length}/10)
              </button>
            </div>
          </div>
        </section>

        {/* The 10 Commandments */}
        <RulesSection
          rules={RULES_DATA}
          pledgedRules={pledgedRules}
          onTogglePledge={handleTogglePledge}
        />

        {/* Video & Educational Debate Section */}
        <VideoSection />

        {/* Comparative Guide: Folklore vs. Odio */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
              Guía Rápida de Convivencia
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Folklore Argentino vs. Discriminación
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Cantar, saltar y gastar a un amigo es parte de nuestra identidad. Lo que jamás puede pasar es cruzar al odio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sano */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-sky-950/40 to-slate-900 border border-sky-600/40">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider mb-3">
                <Heart className="w-4 h-4 text-sky-400" />
                <span>Esto Sí es Pasión y Folklore Argentino</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Cantar "Muchachos" y dejar la garganta en cada centro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Tirar papelitos celestes y blancos cuando sale el equipo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Una gastada graciosa con un amigo de toda la vida, sabiendo que hay confianza y cariño.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Abrazar al que tenés al lado en el gol, sea familiar, amigo o un desconocido en la calle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Bancar a los jugadores en los momentos difíciles sin insultar.</span>
                </li>
              </ul>
            </div>

            {/* No cruzar la línea */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-rose-950/20 to-slate-900 border border-rose-800/40">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider mb-3">
                <Shield className="w-4 h-4 text-rose-400" />
                <span>Esto es Agresión y Queda Afuera de la Cancha</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Cánticos o memes que se burlen de la nacionalidad, pobreza, raza u origen del rival.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Agredir física o verbalmente al árbitro o a los jueces de línea.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Cargar a un invitado extranjero haciéndolo sentir excluido o inseguro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Romper mobiliario público o privado durante los festejos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Justificar la trampa descarada solo porque nos beneficia.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Quick Action Bar */}
      <div className="sticky bottom-4 z-40 max-w-fit mx-auto px-4">
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-sky-600/50 shadow-2xl backdrop-blur-md">
          <button
            onClick={() => {
              playStadiumDrum();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 text-sky-200 text-xs font-semibold border border-sky-800/80 transition active:scale-95"
            title="Tocá el bombo"
          >
            <Music className="w-3.5 h-3.5 text-sky-400" />
            <span>Bombo</span>
          </button>

          <button
            onClick={() => {
              launchVictoryStreamers();
              playSuccessChime();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/40 transition active:scale-95"
            title="Tirar papelitos"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Papelitos</span>
          </button>

          <button
            onClick={() => setIsPassportOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition active:scale-95 shadow-md"
            title="Ver credencial"
          >
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Credencial</span>
            <span className="px-1 py-0.2 rounded bg-black/25 text-[10px]">
              {pledgedRules.length}/10
            </span>
          </button>

          <button
            onClick={() => setIsTvModeOpen(true)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            title="Modo pantalla TV"
          >
            <Tv className="w-3.5 h-3.5 text-sky-300" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-sky-900/40 bg-slate-950 py-10 px-4 sm:px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <SolDeMayo size={36} />
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
                <span>★★★ 1978 · 1986 · 2022</span>
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-tight">
                Código de Supervivencia Mundialista
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                "Ya ganamos la tercera, y ahora nos volvemos a ilusionar…"
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-400 space-y-1">
            <p>La pasión se vive con el corazón. El respeto nos hace grandes.</p>
            <p className="text-slate-500">
              Hecho para hinchas, familias y amigos de toda la República Argentina.
            </p>
          </div>
        </div>

        {/* Decorative Flag Stripe at very bottom */}
        <div className="w-full flex h-1.5 mt-8">
          <div className="flex-1 bg-sky-400" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-sky-400" />
        </div>
      </footer>

      {/* Modals */}
      <HinchaTestModal
        isOpen={isTestOpen}
        onClose={() => setIsTestOpen(false)}
      />

      <FanPassportModal
        isOpen={isPassportOpen}
        onClose={() => setIsPassportOpen(false)}
        pledgedCount={pledgedRules.length}
        totalRules={RULES_DATA.length}
      />

      <TvModeModal
        isOpen={isTvModeOpen}
        onClose={() => setIsTvModeOpen(false)}
        rules={RULES_DATA}
      />
    </div>
  );
}
