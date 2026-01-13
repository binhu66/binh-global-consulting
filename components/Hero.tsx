import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 25, 34, 0.7) 0%, rgba(16, 25, 34, 0.95) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white max-w-4xl">
          {t.hero.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            {t.hero.title2}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px]">
            {t.hero.cta1} <ArrowRight size={18} />
          </button>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold backdrop-blur-sm transition-all">
            <PlayCircle size={18} /> {t.hero.cta2}
          </button>
        </div>
      </div>
    </div>
  );
};