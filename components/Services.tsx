import React from 'react';
import { TrendingUp, Globe, Box, Cpu } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Service } from '../types';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesList: Service[] = [
    {
      id: '1',
      title: t.services.items.marketAnalysis.title,
      description: t.services.items.marketAnalysis.desc,
      icon: 'TrendingUp',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '2',
      title: t.services.items.logistics.title,
      description: t.services.items.logistics.desc,
      icon: 'Box',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '3',
      title: t.services.items.aiExpansion.title,
      description: t.services.items.aiExpansion.desc,
      icon: 'Cpu',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Globe size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">{t.services.badge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.services.description}
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            {t.services.viewAll} <ArrowIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="group relative h-[400px] rounded-2xl overflow-hidden border border-slate-200 bg-surface hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const renderIcon = (name: string) => {
  switch (name) {
    case 'TrendingUp': return <TrendingUp size={24} />;
    case 'Box': return <Box size={24} />;
    case 'Cpu': return <Cpu size={24} />;
    default: return <Globe size={24} />;
  }
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);