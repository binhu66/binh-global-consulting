import React from 'react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Partners: React.FC = () => {
    const { t, language } = useLanguage();
    const isCn = language === 'zh';

    const clients = [
        { name: 'Dicos', nameCn: '德克士' },
        { name: 'TikTok', nameCn: 'TikTok' },
        { name: 'Temu', nameCn: 'Temu' },
        { name: 'Shein', nameCn: 'Shein' },
        { name: 'Meizhou Dongpo', nameCn: '眉州东坡' },
        { name: 'Unitree Robotics', nameCn: '宇树科技' },
    ];

    const institutions = [
        { name: 'Deloitte', nameCn: '德勤', tag: isCn ? '四大会计' : 'Big 4' },
        { name: 'PwC', nameCn: '普华永道', tag: isCn ? '四大会计' : 'Big 4' },
        { name: 'EY', nameCn: '安永', tag: isCn ? '四大会计' : 'Big 4' },
        { name: 'KPMG', nameCn: '毕马威', tag: isCn ? '四大会计' : 'Big 4' },
        { name: 'HKEX', nameCn: '香港交易所', tag: isCn ? '交易所' : 'Exchange' },
        { name: 'NYSE', nameCn: '纽交所', tag: isCn ? '交易所' : 'Exchange' },
        { name: 'NASDAQ', nameCn: '纳斯达克', tag: isCn ? '交易所' : 'Exchange' },
        { name: 'TSX', nameCn: '多伦多交易所', tag: isCn ? '交易所' : 'Exchange' },
        { name: 'SSE', nameCn: '上交所', tag: isCn ? '交易所' : 'Exchange' },
    ];

    return (
        <section id="partners" className="py-20 px-6 bg-[#0a0f16]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{t.partners.title}</h2>
                        <p className="text-slate-400 font-medium">{t.partners.subtitle}</p>
                    </div>
                    <a href="/cases" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        {t.partners.viewCaseStudies} <ArrowRight size={20} />
                    </a>
                </div>

                {/* Client brands */}
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4 mb-10 opacity-60">
                    {clients.map((c) => (
                        <div
                            key={c.name}
                            className="bg-white/5 px-8 py-4 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-default"
                        >
                            <span className="text-lg font-bold tracking-tight text-white">
                                {isCn ? c.nameCn : c.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        {isCn ? '合作机构' : 'Partner Institutions'}
                    </span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Institutions: Big 4 + Exchanges */}
                <div className="flex flex-wrap items-center justify-center gap-4 opacity-50">
                    {institutions.map((inst) => (
                        <div
                            key={inst.name}
                            className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-default"
                        >
                            <span className="text-base font-extrabold tracking-tight text-white">
                                {isCn ? inst.nameCn : inst.name}
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                                {inst.tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
