import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Heart, Rocket } from 'lucide-react';

export const CareersPage: React.FC = () => {
    const { t, setContactOpen } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefitIcons = [<Star size={24} />, <Heart size={24} />, <Rocket size={24} />];

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 text-primary mb-6">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        <span className="text-sm font-bold uppercase tracking-[0.2em]">{t.careersPage.badge}</span>
                        <span className="w-8 h-[2px] bg-primary"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                        {t.careersPage.title}
                    </h1>
                    <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
                        {t.careersPage.subtitle}
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">{t.careersPage.whyJoin}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.careersPage.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 p-10 rounded-3xl hover:border-primary/30 transition-all group shadow-sm">
                                <div className="text-primary mb-6 group-hover:scale-110 transition-transform bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                                    {benefitIcons[idx]}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Open Positions */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">{t.careersPage.openPositionsTitle}</h2>
                        <span className="bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold text-slate-500">
                            {t.careersPage.openings.length} {t.careersPage.positionsCount}
                        </span>
                    </div>

                    <div className="space-y-4">
                        {t.careersPage.openings.map((job, idx) => (
                            <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-slate-100 rounded-3xl hover:border-primary/20 hover:bg-slate-50 animation-shadow shadow-sm transition-all hover:shadow-lg">
                                <div className="mb-6 md:mb-0">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                                        <div className="flex items-center gap-1.5">
                                            <Briefcase size={14} className="text-primary" />
                                            {job.department}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-primary" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-primary" />
                                            {job.type}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setContactOpen(true)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-primary text-slate-700 hover:text-white text-sm font-bold rounded-xl transition-all"
                                >
                                    {t.careersPage.applyNow} <ArrowRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-500 text-sm">
                            {t.careersPage.noPositions}
                        </p>
                        <a href="mailto:hr@binhglobal.com" className="inline-block mt-4 text-primary font-bold hover:underline">
                            hr@binhglobal.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
