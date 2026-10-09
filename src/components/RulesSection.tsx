import React, { useState } from 'react';
import { RuleItem, RuleCategory } from '../types';
import {
  Flame,
  Globe,
  ShieldCheck,
  Flag,
  MessageSquareWarning,
  HeartHandshake,
  Sparkles,
  UserCheck,
  Users,
  Trophy,
  Check,
  Copy,
  Search,
  Filter
} from 'lucide-react';
import { launchCelesteConfetti } from '../utils/confetti';
import { playSuccessChime } from '../utils/audio';

interface RulesSectionProps {
  rules: RuleItem[];
  pledgedRules: number[];
  onTogglePledge: (id: number) => void;
}

export const RulesSection: React.FC<RulesSectionProps> = ({
  rules,
  pledgedRules,
  onTogglePledge,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<RuleCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const getIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-sky-400" };
    switch (name) {
      case 'Flame': return <Flame {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Flag': return <Flag {...props} />;
      case 'MessageSquareWarning': return <MessageSquareWarning {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Trophy': return <Trophy {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const handleCopy = (rule: RuleItem) => {
    navigator.clipboard.writeText(`${rule.title}\n\n"${rule.text}"\n\n— Código de Supervivencia Mundialista`);
    setCopiedId(rule.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePledgeClick = (id: number) => {
    const isNowPledged = !pledgedRules.includes(id);
    onTogglePledge(id);
    if (isNowPledged) {
      launchCelesteConfetti();
      playSuccessChime();
    }
  };

  const filteredRules = rules.filter(rule => {
    const matchesCategory = selectedCategory === 'todos' || rule.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === '' ||
      rule.title.toLowerCase().includes(query) ||
      rule.text.toLowerCase().includes(query) ||
      rule.categoryLabel.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const categories: { key: RuleCategory; label: string }[] = [
    { key: 'todos', label: 'Todos los 10 Mandamientos' },
    { key: 'aliento', label: 'Pasión y Aliento' },
    { key: 'respeto', label: 'Respeto e Inclusión' },
    { key: 'fairplay', label: 'Juego Limpio' },
    { key: 'arbitraje', label: 'Árbitro' },
    { key: 'redes', label: 'Redes y Memes' },
    { key: 'convivencia', label: 'En el Living / Tercer Tiempo' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto" id="reglas-codigo">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-1">
            <span>El Decálogo Oficial</span>
            <span aria-hidden="true">·</span>
            <span>Manual del Hincha Argentino</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Los 10 Mandamientos del Hincha
          </h2>
          <p className="mt-1 text-sm text-slate-400 max-w-xl">
            Cada punto define cómo alentar a la Selección con la pasión más grande del mundo, cuidando la convivencia y desterrando el odio.
          </p>
        </div>

        {/* Search input */}
        <div className="relative min-w-[260px] sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por palabra clave (árbitro, meme, trampa...)"
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Segmented Filter Bar (functional buttons) */}
      <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 mr-1" />
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-600/30 font-semibold'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Rules Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRules.map((rule) => {
          const isPledged = pledgedRules.includes(rule.id);
          const isCopied = copiedId === rule.id;

          return (
            <article
              key={rule.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
                isPledged
                  ? 'bg-gradient-to-b from-slate-900 to-sky-950/40 border border-sky-500/50 shadow-lg shadow-sky-950/50'
                  : 'bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header inside card */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center shrink-0">
                      {getIcon(rule.iconName)}
                    </div>
                    <div>
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
                        <span>Regla #{rule.number}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span>{rule.categoryLabel}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {rule.title}
                      </h3>
                    </div>
                  </div>

                  {/* Pledge checkmark badge */}
                  {isPledged && (
                    <span className="shrink-0 flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span>Jurado</span>
                    </span>
                  )}
                </div>

                {/* Main Quote / Rule Body */}
                <div className="mt-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-sm text-slate-200 leading-relaxed font-medium italic">
                    "{rule.text}"
                  </p>
                </div>

                {/* Takeaway & Tip */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <span className="font-semibold text-amber-400 shrink-0">El espíritu:</span>
                    <span className="text-slate-300">{rule.coreTakeaway}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-400">
                    <span className="font-semibold text-sky-300 shrink-0">En la cancha/living:</span>
                    <span>{rule.practicalTip}</span>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handlePledgeClick(rule.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition active:scale-95 ${
                    isPledged
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-sky-500/15 text-sky-300 border border-sky-500/30 hover:bg-sky-500/25'
                  }`}
                >
                  <Check className={`w-3.5 h-3.5 ${isPledged ? 'text-amber-400' : 'text-sky-400'}`} />
                  <span>{isPledged ? 'Mandamiento Jurado' : 'Me comprometo'}</span>
                </button>

                <button
                  onClick={() => handleCopy(rule)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
                  title="Copiar texto de la regla"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-xs">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-xs">Copiar regla</span>
                    </>
                  )}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {filteredRules.length === 0 && (
        <div className="mt-12 text-center p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-slate-400 text-sm">No encontramos reglas con la búsqueda "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('todos'); }}
            className="mt-3 text-xs text-sky-400 underline hover:text-sky-300"
          >
            Ver todos los 10 mandamientos
          </button>
        </div>
      )}
    </section>
  );
};
