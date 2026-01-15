import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';

export const CaseList: React.FC = () => {
    const { t, setContactOpen } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cases = [
        {
            id: 'ecommerce',
            ...t.caseStudies.items.ecommerce,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
            category: "E-commerce"
        },
        {
            id: 'robotics',
            ...t.caseStudies.items.robotics,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
            category: "Robotics"
        },
        {
            id: 'catering',
            ...t.caseStudies.items.catering,
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
            category: "Catering"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className="inline-flex items-center gap-2 text-primary mb-6">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">{t.caseStudies.badge}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                    {t.caseStudies.title1} <br /><span className="text-primary italic">{t.caseStudies.title2}</span>
                </h1>
                <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
                    {t.caseStudies.description}
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {cases.map((item, index) => (
                        <Link
                            key={item.id}
                            to={`/cases/${item.id}`}
                            className={`group block relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 transition-all duration-500 hover:border-primary/30 shadow-sm hover:shadow-xl ${index === 0 ? 'md:col-span-2' : ''}`}
                        >
                            <div className={`flex flex-col ${index === 0 ? 'md:flex-row' : ''} h-full`}>
                                {/* Image side */}
                                <div className={`${index === 0 ? 'md:w-3/5' : 'w-full'} h-80 md:h-auto overflow-hidden relative`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                                </div>

                                {/* Content side */}
                                <div className={`p-10 flex flex-col justify-center ${index === 0 ? 'md:w-2/5' : 'w-full'}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-[10px] font-bold text-primary border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">{item.client}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-primary" />
                                            <span className="text-xs font-medium text-slate-700">{item.result.split('within')[0]}</span>
                                        </div>
                                        <div className="size-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA at Bottom */}
                <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">{t.caseStudies.ctaTitle}</h3>
                    <p className="text-slate-600 mb-10 max-w-xl mx-auto">{t.caseStudies.ctaSubtitle}</p>
                    <button
                        onClick={() => setContactOpen(true)}
                        className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20"
                    >
                        {t.caseDetails.cta}
                    </button>
                </div>
            </div>
        </div>
    );
};
