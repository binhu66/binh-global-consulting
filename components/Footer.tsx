import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

// WeChat icon (lucide doesn't include it)
const WeChatIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.601-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.063-6.122zm-3.74 3.35c.537 0 .972.44.972.982a.977.977 0 0 1-.972.983.977.977 0 0 1-.972-.983c0-.542.434-.982.972-.982zm5.42 0c.537 0 .972.44.972.982a.977.977 0 0 1-.972.983.977.977 0 0 1-.972-.983c0-.542.434-.982.972-.982z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <div className="flex items-center gap-3 text-primary mb-6">
            <div className="size-8 overflow-hidden rounded-lg">
              <img src="/logo.png" alt="Binh Global Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-black text-slate-900">Binh Global</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {t.footer.desc}
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="weixin://dl/chat?binhglobal" title="微信 WeChat: binhglobal" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
              <WeChatIcon size={18} />
            </a>
            <a href="mailto:info@binhglobal.com" title="info@binhglobal.com" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{t.footer.sectors}</h4>
          <ul className="space-y-3">
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.ecommerce.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.internet.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.catering.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.manufacturing.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.web3.title}</a></li>
            <li><a href="#sectors" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.businessSectors.blockchain.title}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{t.footer.company}</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.about}</Link></li>
            <li><Link to="/cases" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.cases}</Link></li>
            <li><Link to="/careers" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.careers}</Link></li>
            <li><Link to="/exhibitions" className="text-sm text-slate-600 hover:text-primary transition-colors">{t.nav.exhibitions}</Link></li>
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
              <p className="text-sm">info@binhglobal.com</p>
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
