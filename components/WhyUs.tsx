import React from 'react';
import { Landmark, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const WhyUs: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t.why.title}
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                    {t.why.subtitle}
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Local Depth Card */}
                <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Landmark size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {t.why.localDepth.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                        {t.why.localDepth.desc}
                    </p>
                </div>

                {/* Dual Understanding Card */}
                <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Languages size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {t.why.dualUnderstanding.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                        {t.why.dualUnderstanding.desc}
                    </p>
                </div>
            </div>
        </section>
    );
};
