import React from 'react';
import { useLanguage } from '../LanguageContext';
import { TeamMember } from '../types';

export const Team: React.FC = () => {
  const { t } = useLanguage();

  const experts: TeamMember[] = [
    {
      id: '1',
      name: t.team.members.leadership.name,
      role: t.team.members.leadership.role,
      description: t.team.members.leadership.desc,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '2',
      name: t.team.members.ops.name,
      role: t.team.members.ops.role,
      description: t.team.members.ops.desc,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '3',
      name: t.team.members.finance.name,
      role: t.team.members.finance.role,
      description: t.team.members.finance.desc,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="insights" className="py-24 px-6 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12">
          <h2 className="text-3xl font-bold text-white">{t.team.title}</h2>
          <span className="text-slate-500 font-medium hidden md:block">{t.team.badge}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="group bg-background rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-white font-bold text-xl">{expert.name}</h4>
                  <p className="text-primary font-semibold text-sm">{expert.role}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};