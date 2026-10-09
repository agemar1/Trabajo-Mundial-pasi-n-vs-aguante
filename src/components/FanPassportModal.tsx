import React, { useState } from 'react';
import { X, Award, Check, Sparkles, Copy, Printer, Shield } from 'lucide-react';
import { SolDeMayo } from './SolDeMayo';
import { launchVictoryStreamers } from '../utils/confetti';
import { playSuccessChime } from '../utils/audio';

interface FanPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  pledgedCount: number;
  totalRules: number;
}

export const FanPassportModal: React.FC<FanPassportModalProps> = ({
  isOpen,
  onClose,
  pledgedCount,
  totalRules,
}) => {
  const [fanName, setFanName] = useState('Hincha de la Tercera');
  const [role, setRole] = useState('El Cebador Oficial de Mates');
  const [location, setLocation] = useState('Argentina');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const roles = [
    'El Cebador Oficial de Mates',
    'El Asador de la Scaloneta',
    'El de los Cánticos y el Bombo',
    'El Capitán del Sillón',
    'El que Sufre en Silencio',
    'El que no se Sienta por Cábala'
  ];

  const handleCopyBadge = () => {
    const text = `🇦🇷 CREDENCIAL OFICIAL DE HINCHA ARGENTINO 🇦🇷\nNombre: ${fanName}\nRol: ${role}\nUbicación: ${location}\nCompromiso: ${pledgedCount}/${totalRules} Mandamientos del Código de Supervivencia Mundialista jurados.\n"Ya ganamos la tercera, y ahora nos volvemos a ilusionar..." ⭐⭐⭐`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    launchVictoryStreamers();
    playSuccessChime();
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-sky-700/60 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Top Argentine Ribbon */}
        <div className="w-full flex h-2">
          <div className="flex-1 bg-sky-400" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-sky-400" />
        </div>

        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              Credencial Oficial de Hincha
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Customization controls */}
          <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              Personalizá tus datos
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Nombre o Apodo:</label>
                <input
                  type="text"
                  value={fanName}
                  onChange={(e) => setFanName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Ciudad / Barrio:</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Tu puesto en la previa:</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
              >
                {roles.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* The Digital Credential Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-sky-900/40 via-slate-950 to-slate-900 border-2 border-sky-400/80 p-5 shadow-xl print:border-black">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-3 border-b border-sky-700/50">
              <div className="flex items-center gap-2">
                <SolDeMayo size={32} />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-sky-300 font-bold block">
                    República Argentina
                  </span>
                  <span className="text-xs font-black text-white tracking-wide">
                    HINCHA DE BUENA LEY
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-amber-400 font-bold text-sm">★★★</span>
                <span className="text-[9px] text-slate-400 block">78 · 86 · 22</span>
              </div>
            </div>

            {/* Credential Content */}
            <div className="py-4 space-y-2">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Titular</span>
                <span className="text-lg font-black text-white uppercase">{fanName || 'Hincha Argentino'}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Rol en el Partido</span>
                  <span className="font-semibold text-sky-300">{role}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Ubicación</span>
                  <span className="font-semibold text-slate-200">{location || 'Argentina'}</span>
                </div>
              </div>

              {/* Pledge Status Stamp */}
              <div className="mt-3 p-3 rounded-xl bg-sky-950/70 border border-sky-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-bold text-white block">Código de Supervivencia</span>
                    <span className="text-[10px] text-slate-400">
                      {pledgedCount} de {totalRules} mandamientos jurados
                    </span>
                  </div>
                </div>
                <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md border border-amber-400/30">
                  {pledgedCount === totalRules ? 'COMPLETO' : 'EN CURSO'}
                </span>
              </div>
            </div>

            {/* Credential Footer */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <span>"Alentar al equipo, no odiar al rival"</span>
              <span className="text-sky-300 font-bold">#IlusiónMundialista</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-2">
          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Imprimir</span>
          </button>

          <button
            onClick={handleCopyBadge}
            className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition active:scale-95"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>¡Credencial copiada!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar y Compartir Credencial</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
