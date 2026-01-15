import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <div className="flex items-center gap-3 text-primary mb-6">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-xl font-black text-slate-900">Binh Global</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.footer.desc}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{t.footer.sectors}</h4>
          <ul className="space-y-3">
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.ecommerce.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.internet.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.catering.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.manufacturing.title}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{t.footer.company}</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.about}</Link></li>
            <li><Link to="/cases" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.cases}</Link></li>
            <li><Link to="/careers" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.careers}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{t.footer.contact}</h4>
          <div className="space-y-4">
            <div className="flex gap-3 text-slate-600">
              <MapPin size={18} className="text-primary shrink-0" />
              <p className="text-sm">Markham, Toronto, Canada</p>
            </div>
            <div className="flex gap-3 text-slate-600">
              <Phone size={18} className="text-primary shrink-0" />
              <p className="text-sm">+1 647 769 2368</p>
            </div>
            <div className="flex gap-3 text-slate-600">
              <Mail size={18} className="text-primary shrink-0" />
              <p className="text-sm">contact@binhglobal.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          {t.footer.rights}
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-slate-500 hover:text-primary">{t.footer.privacyPolicy}</a>
          <a href="#" className="text-xs text-slate-500 hover:text-primary">{t.footer.termsOfService}</a>
        </div>
      </div>
    </footer>
  );
};
