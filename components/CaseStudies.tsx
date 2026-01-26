import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { ExternalLink, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudies: React.FC = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const cases = [
        {
            ...t.caseStudies.items.ecommerce,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
            color: "blue"
        },
        {
            ...t.caseStudies.items.robotics,
            image: "/images/aeon-robot.jpg",
            color: "purple"
        },
        {
            ...t.caseStudies.items.catering,
            image: "/images/food_processing.png",
            color: "orange"
        }
    ];

    return (
        <section id="partners" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">{t.caseStudies.badge}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                            {t.caseStudies.title}
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {t.caseStudies.subtitle}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { id: 'ecommerce', ...cases[0] },
                        { id: 'robotics', ...cases[1] },
                        { id: 'catering', ...cases[2] }
                    ].map((item, index) => (
                        <Link
                            key={index}
                            to={`/cases/${item.id}`}
                            className="group relative flex flex-col h-full bg-white border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>

                                {/* Overlay Client Header */}
                                <div className="absolute bottom-6 left-8 right-8">
                                    <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest mb-3">
                                        {item.client}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold text-slate-500 border border-slate-200 px-2 py-1 rounded-md uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {item.desc}
                                </p>

                                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[10px] uppercase font-black text-primary tracking-widest mb-1">{t.caseStudies.impactResults}</p>
                                            <p className="text-sm font-medium text-slate-900 leading-snug">{item.result}</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="flex items-center justify-between w-full group/btn py-4 border-t border-slate-100 mt-auto">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover/btn:text-primary transition-colors">
                                        {t.caseStudies.viewProject}
                                    </span>
                                    <div className="size-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all">
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                    </div>
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
