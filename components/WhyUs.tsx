import React from 'react';
import { Landmark, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const WhyUs: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    {t.why.title}
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    {t.why.subtitle}
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Local Depth Card */}
                <div className="glass-panel p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Landmark size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors group-hover:text-primary">
                        {t.why.localDepth.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors">
                        {t.why.localDepth.desc}
                    </p>
                </div>

                {/* Dual Understanding Card */}
                <div className="glass-panel p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Languages size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors group-hover:text-primary">
                        {t.why.dualUnderstanding.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors">
                        {t.why.dualUnderstanding.desc}
                    </p>
                </div>
            </div>
        </section>
    );
};
