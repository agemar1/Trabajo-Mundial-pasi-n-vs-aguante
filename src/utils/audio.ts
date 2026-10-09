// Synthesized authentic stadium audio generator using Web Audio API

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playStadiumDrum() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // 1. Deep Bass Drum (Bombo de cancha con cuero)
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(140, now);
  osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);

  gain.gain.setValueAtTime(1.0, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.46);

  // 2. Click / Beater punch (Golpe seco del mazo)
  const clickOsc = ctx.createOscillator();
  const clickGain = ctx.createGain();
  clickOsc.type = 'triangle';
  clickOsc.frequency.setValueAtTime(220, now);
  clickOsc.frequency.exponentialRampToValueAtTime(30, now + 0.05);

  clickGain.gain.setValueAtTime(0.6, now);
  clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  clickOsc.connect(clickGain);
  clickGain.connect(ctx.destination);

  clickOsc.start(now);
  clickOsc.stop(now + 0.09);

  // 3. Murga / Cancha Cymbal (Platillo metálico)
  try {
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(4500, now);

    const cymbalGain = ctx.createGain();
    cymbalGain.gain.setValueAtTime(0.35, now);
    cymbalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    noise.connect(filter);
    filter.connect(cymbalGain);
    cymbalGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.23);
  } catch {
    // Graceful fallback if noise buffer fails
  }
}

export function playWhistle() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // Whistle pulse 1
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(2600, now);
  osc1.frequency.exponentialRampToValueAtTime(2900, now + 0.12);
  gain1.gain.setValueAtTime(0.3, now);
  gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(now);
  osc1.stop(now + 0.13);

  // Whistle pulse 2 (short staccato)
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(2700, now + 0.14);
  osc2.frequency.exponentialRampToValueAtTime(3100, now + 0.35);
  gain2.gain.setValueAtTime(0.4, now + 0.14);
  gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(now + 0.14);
  osc2.stop(now + 0.36);
}

export function playSuccessChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Fanfare)

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);

    gain.gain.setValueAtTime(0.25, now + idx * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.08);
    osc.stop(now + idx * 0.08 + 0.32);
  });
}
