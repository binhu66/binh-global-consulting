import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t, setContactOpen } = useLanguage();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    const colors = [
      'rgba(5, 150, 105, ',  // Primary Green
      'rgba(16, 185, 129, ', // Emerald
      'rgba(14, 165, 233, ', // Sky Blue
      'rgba(20, 184, 166, ', // Teal
      'rgba(99, 102, 241, '  // Indigo
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (canvas) {
          if (this.x > canvas.width) this.x = 0;
          else if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          else if (this.y < 0) this.y = canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add colorful glow to particles
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color + '0.5)';
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0; // Reset shadow for lines

      // Draw lines between nearby particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = 1 - (distance / 180);
            ctx.strokeStyle = `rgba(5, 150, 105, ${opacity * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
      />

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight text-slate-900 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t.hero.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-teal-400">
            {t.hero.title2}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <button
            onClick={() => setContactOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group"
          >
            {t.hero.cta1}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};