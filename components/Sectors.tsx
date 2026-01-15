import React from 'react';
import { ShoppingBag, Globe, Coffee, Factory, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Sectors: React.FC = () => {
    const { t } = useLanguage();

    const sectorList = [
        {
            title: t.businessSectors.ecommerce.title,
            desc: t.businessSectors.ecommerce.desc,
            icon: <ShoppingBag className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: t.businessSectors.internet.title,
            desc: t.businessSectors.internet.desc,
            icon: <Globe className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
            color: "from-purple-500/20 to-blue-500/20"
        },
        {
            title: t.businessSectors.catering.title,
            desc: t.businessSectors.catering.desc,
            icon: <Coffee className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
            color: "from-orange-500/20 to-red-500/20"
        },
        {
            title: t.businessSectors.manufacturing.title,
            desc: t.businessSectors.manufacturing.desc,
            icon: <Factory className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
            color: "from-emerald-500/20 to-teal-500/20"
        }
    ];

    return (
        <section id="sectors" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                        {t.footer.sectors}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        {t.businessSectors.title}
                    </h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.businessSectors.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectorList.map((sector, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-xl"
                        >
                            {/* Image Header */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={sector.image}
                                    alt={sector.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} mix-blend-overlay`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {sector.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {sector.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                                    {sector.desc}
                                </p>

                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all mt-auto border-t border-slate-100 pt-6 w-full">
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
