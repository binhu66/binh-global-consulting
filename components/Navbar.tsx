import React, { useState } from 'react';
import { Menu, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'zh', label: '简体中文' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-white">Binh Global</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium text-white hover:text-primary transition-colors">{t.nav.home}</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.services}</a>
          <a href="#insights" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.insights}</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="hidden md:flex items-center gap-2 text-xs font-bold text-white bg-white/5 border border-white/10 px-3 py-2 rounded-lg hover:border-primary/50 transition-all"
            >
              <Globe size={14} className="text-primary" />
              <span className="uppercase">{language}</span>
              <ChevronDown size={12} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLangOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 glass-panel border border-white/10 rounded-xl overflow-hidden z-20 shadow-2xl animate-in fade-in zoom-in duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      {lang.label}
                      {language === lang.code && <Check size={14} className="text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
            {t.nav.contact}
          </button>
          <button className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};