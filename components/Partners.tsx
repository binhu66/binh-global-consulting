import React from 'react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Partners: React.FC = () => {
    const { t } = useLanguage();

    const partners = [
        { name: 'Huawei', color: 'text-white' },
        { name: 'Dicos', color: 'text-white' },
        { name: 'TikTok', color: 'text-white' },
        { name: 'Temu', color: 'text-white' },
        { name: 'Shein', color: 'text-white' },
        { name: 'Meizhou Dongpo', color: 'text-white' },
        { name: 'Unitree Robotics', color: 'text-white' }
    ];

    return (
        <section id="partners" className="py-20 px-6 bg-[#0a0f16]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{t.partners.title}</h2>
                        <p className="text-slate-400 font-medium">{t.partners.subtitle}</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        {t.partners.viewCaseStudies} <ArrowRight size={20} />
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4 mt-8 opacity-60">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="bg-white/5 px-8 py-4 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-default"
                        >
                            <span className={`text-lg font-bold tracking-tight ${partner.color}`}>
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
