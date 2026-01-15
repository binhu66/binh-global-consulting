import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ArrowLeft, CheckCircle2, Globe, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const CaseDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, setContactOpen } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Determine which case to show based on URL param
    const caseData = id === 'ecommerce' ? t.caseStudies.items.ecommerce :
        id === 'robotics' ? t.caseStudies.items.robotics :
            t.caseStudies.items.catering;

    const images: Record<string, string> = {
        ecommerce: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        robotics: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
        catering: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    };

    const activeImage = images[id || 'ecommerce'] || images.ecommerce;

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/cases"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group"
                >
                    <div className="size-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary/30">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">{t.caseDetails.back}</span>
                </Link>

                {/* Hero Section */}
                <div className="relative rounded-[2.5rem] overflow-hidden mb-16 aspect-[21/9]">
                    <img
                        src={activeImage}
                        alt={caseData.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
                    <div className="absolute bottom-10 left-10">
                        <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                            {caseData.client}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                            {caseData.title}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Globe className="text-primary" size={24} />
                                {t.caseDetails.challenge}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {caseData.desc}
                                <br /><br />
                                {t.caseDetails.challengeDesc} {id === 'robotics' ? t.caseDetails.roboticsField : t.caseDetails.globalMarkets}
                            </p>
                        </section>

                        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <ShieldCheck className="text-primary" size={24} />
                                {t.caseDetails.strategy}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <TrendingUp size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900">{t.caseDetails.marketIntel}</h3>
                                    <p className="text-sm text-slate-600">{t.caseDetails.marketIntelDesc}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Zap size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900">{t.caseDetails.opsAgility}</h3>
                                    <p className="text-sm text-slate-600">{t.caseDetails.opsAgilityDesc}</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sticky top-32 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{t.caseDetails.outcomes}</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="text-slate-900 font-bold">{caseData.result}</p>
                                        <p className="text-[11px] text-slate-500 mt-1 font-medium">{t.caseDetails.impact}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-200">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{t.caseDetails.competencies}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {caseData.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wider shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        onClick={() => setContactOpen(true)}
                                        className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95"
                                    >
                                        {t.caseDetails.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
