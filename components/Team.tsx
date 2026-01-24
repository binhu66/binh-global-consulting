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
      image: '/images/team-leader.jpg'
    },
    {
      id: '2',
      name: t.team.members.ops.name,
      role: t.team.members.ops.role,
      description: t.team.members.ops.desc,
      image: '/images/team-ops.jpg'
    },
    {
      id: '3',
      name: t.team.members.finance.name,
      role: t.team.members.finance.role,
      description: t.team.members.finance.desc,
      image: '/images/team-finance.png'
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{t.team.title}</h2>
          <span className="text-slate-500 font-medium hidden md:block">{t.team.badge}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-lg">
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
                  <h4 className="text-slate-900 font-bold text-xl">{expert.name}</h4>
                  <p className="text-primary font-semibold text-sm">{expert.role}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
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