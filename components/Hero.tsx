import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t, setContactOpen } = useLanguage();

  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.98) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 max-w-4xl">
          {t.hero.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
            {t.hero.title2}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={() => setContactOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px]"
          >
            {t.hero.cta1} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};