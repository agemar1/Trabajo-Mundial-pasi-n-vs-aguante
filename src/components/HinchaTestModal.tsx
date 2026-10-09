import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/rulesData';
import { X, Award, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck } from 'lucide-react';
import { launchVictoryStreamers } from '../utils/confetti';
import { playSuccessChime } from '../utils/audio';

interface HinchaTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HinchaTestModal: React.FC<HinchaTestModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (qIndex: number, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: optionIdx }));
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
      launchVictoryStreamers();
      playSuccessChime();
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  // Calculate score
  const totalPoints = Object.entries(selectedAnswers).reduce((sum, [qIdx, optIdx]) => {
    const q = QUIZ_QUESTIONS[Number(qIdx)];
    if (!q) return sum;
    const opt = q.options[optIdx];
    return sum + (opt ? opt.points : 0);
  }, 0);

  const maxPoints = QUIZ_QUESTIONS.length * 2;
  const isPerfect = totalPoints === maxPoints;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-sky-800/60 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Flag Ribbons */}
        <div className="w-full flex h-2">
          <div className="flex-1 bg-sky-400" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-sky-400" />
        </div>

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
                Dilemas del Código Mundialista
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                Termómetro del Hincha de Ley
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!showResult ? (
            <>
              {/* Progress counter */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Situación {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="text-sky-400 font-bold">
                  {Math.round(((currentStep) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>

              {/* Question title & scenario */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  {currentQ.title}
                </span>
                <p className="text-sm text-slate-100 font-medium leading-relaxed">
                  {currentQ.scenario}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentStep] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentStep, optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-sky-950/80 border-sky-500 text-white shadow-lg shadow-sky-950'
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {option.label}
                        </span>
                        <div>
                          <p className="text-xs sm:text-sm font-medium leading-snug">
                            {option.description}
                          </p>
                          {isSelected && (
                            <p className="mt-2 text-xs text-sky-300 italic pt-2 border-t border-sky-800/60">
                              💡 {option.feedback}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            /* Result Screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-sky-400 tracking-wider">
                  Resultado de Convivencia
                </span>
                <h4 className="text-2xl font-black text-white uppercase mt-1">
                  {isPerfect
                    ? '¡Hincha Campeón del Mundo con Honor!'
                    : totalPoints >= 5
                    ? '¡Gran Hincha de Buena Ley!'
                    : 'A repasar el Código de Supervivencia'}
                </h4>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Obtuviste <strong className="text-amber-400">{totalPoints}</strong> de {maxPoints} puntos en el termómetro.
                  {isPerfect
                    ? ' Tenés la camiseta puesta y el respeto intacto. ¡Sos un embajador del folklore sano!'
                    : ' Entendés la pasión mundialista. Recordá siempre que la cargada sana une y que el odio arruina la fiesta.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-left text-xs text-slate-300 space-y-2">
                <span className="font-bold text-amber-400 block mb-1">
                  Recordatorio del Código:
                </span>
                <p>• La rivalidad dura 90 minutos adentro de la cancha; afuera, todos somos personas.</p>
                <p>• Los memes se comparten para reírse con amigos, no para humillar por país o cultura.</p>
                <p>• En la mesa argentina, el mate y el abrazo siempre son para todos.</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          {!showResult ? (
            <>
              <button
                onClick={handleRestart}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentStep] === undefined}
                className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs flex items-center gap-1.5 transition active:scale-95"
              >
                <span>{currentStep === QUIZ_QUESTIONS.length - 1 ? 'Ver Resultado' : 'Siguiente'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <button
                onClick={handleRestart}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Volver a intentar</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                ¡Listo, entendidísimo!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
