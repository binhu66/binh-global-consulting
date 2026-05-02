import React, { useState } from 'react';
import { Menu, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, setContactOpen } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'zh', label: '简体中文' },
    { code: 'vi', label: 'Tiếng Việt' }
  ];

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/cases", label: t.nav.cases },
    { href: "/exhibitions", label: t.nav.exhibitions },
    { href: "/careers", label: t.nav.careers },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-12 overflow-hidden rounded-lg">
            <img src="/logo.png" alt="Binh Global Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">{t.nav.brandName}</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href + link.label} to={link.href} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-2 rounded-lg hover:border-primary/50 transition-all"
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
                <div className="absolute right-0 mt-2 w-40 glass-panel border border-slate-200 rounded-xl overflow-hidden z-20 shadow-2xl animate-in fade-in zoom-in duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                    >
                      {lang.label}
                      {language === lang.code && <Check size={14} className="text-primary" />}
                    </button>
                  ))}
                  <div className="h-px bg-slate-100 mx-4 my-1"></div>
                  <button
                    onClick={() => {
                      setContactOpen(true);
                      setIsLangOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-primary hover:bg-slate-50 transition-colors"
                  >
                    <Globe size={14} />
                    {t.nav.moreLanguages}
                  </button>
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 hidden md:block"
          >
            {t.nav.contact}
          </button>

          <button
            className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-900 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400 capitalize">{t.nav.languageLabel}</span>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-bold ${language === lang.code ? 'text-primary' : 'text-slate-400'}`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-px bg-slate-100 my-2"></div>
            <button
              onClick={() => {
                setContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 text-sm font-bold text-primary"
            >
              <Globe size={16} />
              {t.nav.moreLanguages}
            </button>
            <button
              onClick={() => {
                setContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-primary/20 mt-4"
            >
              {t.nav.contact}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};