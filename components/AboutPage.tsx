import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { WhyUs } from './WhyUs';
import { Team } from './Team';
import { Globe, Target, Award, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
    const { t, setContactOpen } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -ml-48 -mb-48 opacity-50"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 text-primary mb-8 animate-fade-in">
                        <span className="w-12 h-[1px] bg-primary"></span>
                        <span className="text-sm font-bold uppercase tracking-[0.3em]">{t.nav.about}</span>
                        <span className="w-12 h-[1px] bg-primary"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                        {t.aboutPage.heroTitle1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">{t.aboutPage.heroTitle2}</span>
                    </h1>
                    <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                        {t.aboutPage.heroDesc}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: <Target className="size-5" />, label: t.aboutPage.stats.strategy },
                            { icon: <Globe className="size-5" />, label: t.aboutPage.stats.reach },
                            { icon: <Award className="size-5" />, label: t.aboutPage.stats.tech },
                            { icon: <Users className="size-5" />, label: t.aboutPage.stats.experts }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-sm">
                                <div className="text-primary">{item.icon}</div>
                                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section (Integrated) */}
            <div className="border-t border-slate-100">
                <WhyUs />
            </div>

            {/* Mission/Philosophy */}
            <section className="py-24 px-6 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.aboutPage.philosophyTitle}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {t.aboutPage.philosophyDesc1}
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {t.aboutPage.philosophyDesc2}
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
                                alt="AI Technology Visualization"
                                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Integrated) */}
            <div className="border-t border-slate-100">
                <Team />
            </div>

            {/* CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto p-12 rounded-[3.5rem] bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 shadow-sm">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">{t.aboutPage.ctaTitle}</h3>
                    <p className="text-slate-600 mb-10">{t.aboutPage.ctaDesc}</p>
                    <button
                        onClick={() => setContactOpen(true)}
                        className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all"
                    >
                        {t.caseDetails.cta}
                    </button>
                </div>
            </section>
        </div>
    );
};
