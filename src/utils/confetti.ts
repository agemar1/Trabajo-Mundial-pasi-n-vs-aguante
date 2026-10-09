// Native canvas confetti generator with zero external dependencies

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const COLORS = ['#75AADB', '#38BDF8', '#FFFFFF', '#F59E0B', '#FDE047'];

function createParticle(x: number, y: number, angleMin: number, angleMax: number): Particle {
  const angle = (angleMin + Math.random() * (angleMax - angleMin)) * (Math.PI / 180);
  const velocity = 8 + Math.random() * 14;
  return {
    x,
    y,
    vx: Math.cos(angle) * velocity,
    vy: Math.sin(angle) * velocity,
    size: 6 + Math.random() * 8,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 12,
    opacity: 1,
  };
}

export function launchCelesteConfetti() {
  if (typeof window === 'undefined') return;

  let canvas = document.getElementById('mundial-confetti-canvas') as HTMLCanvasElement | null;
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'mundial-confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: Particle[] = [];
  const startX = canvas.width / 2;
  const startY = canvas.height * 0.7;

  for (let i = 0; i < 70; i++) {
    particles.push(createParticle(startX, startY, 220, 320));
  }

  let animationFrameId: number;
  const gravity = 0.45;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vy += gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.012;

      if (p.opacity <= 0 || p.y > canvas.height) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      ctx.restore();
    }

    if (particles.length > 0) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  };

  animate();
}

export function launchVictoryStreamers() {
  launchCelesteConfetti();
  setTimeout(() => launchCelesteConfetti(), 250);
}
