import React, { useState } from 'react';
import { ExternalLink, Play, MessageCircle, Heart, ShieldAlert, Award } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=QbL3RkgFlVM";
  const embedUrl = "https://www.youtube-nocookie.com/embed/QbL3RkgFlVM?autoplay=1";

  return (
    <section className="py-14 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80" id="video-debate">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
          <span>Material de Reflexión</span>
          <span aria-hidden="true">·</span>
          <span>Educación y Convivencia</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
          Alentar vs. Agredir: Video Fundamental
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Un contenido imprescindible sobre discriminación en el deporte, el límite entre el folklore y la violencia, y cómo ser el mejor hincha del mundo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Video Embed Player */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-sky-800/40 shadow-2xl shadow-sky-950/60 aspect-video group">
            {isPlaying ? (
              <iframe
                src={embedUrl}
                title="Video sobre discriminación, alentar vs agredir en el fútbol"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 text-center p-6">
                {/* Visual Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-600/40 transition-transform duration-300 group-hover:scale-110 active:scale-95"
                    aria-label="Reproducir video"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>

                  <h3 className="mt-5 text-lg font-bold text-white max-w-md">
                    Discriminación, Alentar vs. Agredir y Convivencia en el Fútbol
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Hacé clic para reproducir o abrilo directamente en YouTube
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Quick link button below video */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>Enlace oficial del recurso educativo</span>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-2 transition"
            >
              <span>Ver en YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Analytical Reflections Box */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>¿Qué enseña este video?</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              El video analiza cómo ciertas conductas normalizadas en las tribunas (insultos basados en nacionalidad, raza u orientación) no son "picardía", sino agresiones que manchan la fiesta y provocan odio innecesario.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-sky-400" />
              <span>Alentar vs. Agredir: La Gran Diferencia</span>
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓ Alentar:</span>
                <span>Cantar por la camiseta, celebrar las jugadas, aplaudir el coraje del equipo y abrazarse en el gol.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✗ Agredir:</span>
                <span>Desear la desgracia del rival, humillarlo por su país o generar provocaciones que escalan a la violencia.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>3 Preguntas para la Previa del Asado</span>
            </h4>
            <div className="text-xs text-slate-300 space-y-2">
              <p>1. ¿Nuestros cánticos celebran lo nuestro o humillan al otro?</p>
              <p>2. ¿Cómo queremos que recuerden a los hinchas argentinos en el exterior?</p>
              <p>3. ¿Qué ejemplo le dejamos a los más chicos que miran el partido con nosotros?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
