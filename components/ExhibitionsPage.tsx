import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Calendar, MapPin, ArrowRight, Globe, Clock, CheckCircle } from 'lucide-react';

interface Exhibition {
  id: string;
  name: string;
  nameCn: string;
  date: string;
  location: string;
  country: string;
  industry: string;
  description: string;
  descriptionCn: string;
  highlights: string[];
  highlightsCn: string[];
  status: 'upcoming' | 'past';
  image?: string;
}

const exhibitions: Exhibition[] = [
  {
    id: 'ciie-2025',
    name: 'China International Import Expo (CIIE)',
    nameCn: '中国国际进口博览会',
    date: 'Nov 5–10, 2025',
    location: 'Shanghai, China',
    country: '🇨🇳',
    industry: '跨境贸易 · Cross-border Trade',
    description: 'The world\'s first national-level expo focused on imports, connecting global suppliers with Chinese buyers.',
    descriptionCn: '全球首个以进口为主题的国家级展会，助力企业开拓中国市场，连接全球优质供应商与中国采购商。',
    highlights: ['Enterprise matchmaking', 'Market entry consultation booth', 'Canada-China trade sessions'],
    highlightsCn: ['企业对接服务', '市场准入咨询台', '中加贸易专场'],
    status: 'upcoming',
  },
  {
    id: 'sial-canada-2025',
    name: 'SIAL Canada',
    nameCn: 'SIAL 加拿大食品展',
    date: 'May 2025',
    location: 'Montreal, Canada',
    country: '🇨🇦',
    industry: '食品行业 · Food & Beverage',
    description: 'North America\'s most international food innovation trade show, connecting global food companies to the Canadian market.',
    descriptionCn: '北美最具国际化的食品创新展，帮助中国食品企业进入加拿大及北美市场。',
    highlights: ['Buyer-seller meetings', 'Canada market entry briefing', 'Product localization strategy'],
    highlightsCn: ['买卖双方直接对接', '加拿大市场准入简报', '产品本土化策略咨询'],
    status: 'upcoming',
  },
  {
    id: 'canton-fair-2024',
    name: 'Canton Fair (China Import & Export Fair)',
    nameCn: '中国进出口商品交易会（广交会）',
    date: 'Oct 15–Nov 4, 2024',
    location: 'Guangzhou, China',
    country: '🇨🇳',
    industry: '综合贸易 · General Trade',
    description: 'China\'s largest and oldest trade fair with over 25,000 exhibitors from 200+ countries.',
    descriptionCn: '中国规模最大、历史最悠久的综合性贸易展会，逾2.5万家企业、200+国家参与。',
    highlights: ['Connected 30+ enterprises with Canadian buyers', 'Supply chain optimization workshop', 'Logistics solutions showcase'],
    highlightsCn: ['帮助30+企业对接加拿大采购商', '供应链优化工作坊', '物流解决方案展示'],
    status: 'past',
  },
  {
    id: 'toronto-global-2024',
    name: 'Toronto Global Forum',
    nameCn: '多伦多全球论坛',
    date: 'Sep 2024',
    location: 'Toronto, Canada',
    country: '🇨🇦',
    industry: '商业峰会 · Business Summit',
    description: 'A premier international business forum bringing together global investors, entrepreneurs, and policymakers.',
    descriptionCn: '汇聚全球投资者、企业家与政策制定者的顶级国际商业论坛，为企业出海提供战略方向。',
    highlights: ['Panel: China-Canada investment landscape', 'Enterprise networking reception', '1-on-1 investor meetings'],
    highlightsCn: ['圆桌：中加投资格局', '企业家交流晚宴', '一对一投资人会谈'],
    status: 'past',
  },
  {
    id: 'natural-products-2024',
    name: 'Natural Products Expo',
    nameCn: '天然产品博览会',
    date: 'Mar 2024',
    location: 'Anaheim, USA',
    country: '🇺🇸',
    industry: '健康产业 · Health & Wellness',
    description: 'The world\'s largest natural, organic, and healthy products trade show.',
    descriptionCn: '全球最大的天然、有机及健康产品展，为企业打入北美健康产业提供绝佳平台。',
    highlights: ['US market regulatory briefing', 'Brand localization consulting', 'Distributor network building'],
    highlightsCn: ['美国市场法规简报', '品牌本土化咨询', '经销商网络搭建'],
    status: 'past',
  },
];

export const ExhibitionsPage: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const isCn = language === 'zh';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = filter === 'all' ? exhibitions : exhibitions.filter(e => e.status === filter);
  const upcoming = exhibitions.filter(e => e.status === 'upcoming');
  const past = exhibitions.filter(e => e.status === 'past');

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-primary mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm font-bold uppercase tracking-[0.2em]">
              {isCn ? '展会动态' : 'Exhibitions & Events'}
            </span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            {isCn ? '全球展会' : 'Global Trade Shows'}
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            {isCn
              ? '我们深度参与全球主要贸易展会，帮助企业出海对接海外买家、投资人与合作伙伴。'
              : 'We actively participate in major global trade shows to connect enterprises with overseas buyers, investors, and partners.'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { num: `${past.length}+`, label: isCn ? '参加展会' : 'Past Events' },
            { num: `${upcoming.length}`, label: isCn ? '即将参加' : 'Upcoming' },
            { num: '200+', label: isCn ? '对接企业' : 'Enterprises Matched' },
          ].map((s, i) => (
            <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-4xl font-black text-primary mb-2">{s.num}</div>
              <div className="text-slate-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-3 mb-12">
          {(['all', 'upcoming', 'past'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                filter === f
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f === 'all' ? (isCn ? '全部' : 'All') : f === 'upcoming' ? (isCn ? '即将参加' : 'Upcoming') : (isCn ? '已参加' : 'Past')}
            </button>
          ))}
        </div>

        {/* Exhibition cards */}
        <div className="space-y-6">
          {filtered.map(ex => (
            <div
              key={ex.id}
              className="group bg-white border border-slate-100 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">

                {/* Status badge + icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${
                    ex.status === 'upcoming' ? 'bg-emerald-50' : 'bg-slate-100'
                  }`}>
                    {ex.country}
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      ex.status === 'upcoming'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {ex.status === 'upcoming'
                        ? (isCn ? '即将参加' : 'Upcoming')
                        : (isCn ? '已参加' : 'Past')}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{ex.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {isCn ? ex.nameCn : ex.name}
                  </h3>
                  {isCn && (
                    <p className="text-sm text-slate-400 mb-3">{ex.name}</p>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      {ex.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      {ex.location}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-5 leading-relaxed">
                    {isCn ? ex.descriptionCn : ex.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {(isCn ? ex.highlightsCn : ex.highlights).map((h, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-100">
                        <CheckCircle size={12} className="text-primary flex-shrink-0" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-emerald-50 rounded-3xl p-12 border border-primary/10">
          <Globe size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            {isCn ? '想一起参加展会？' : 'Join Us at the Next Show?'}
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            {isCn
              ? '我们提供展会参展全程服务，从展位规划、买家对接到市场准入策略，助力企业出海。'
              : 'We offer end-to-end trade show support — from booth planning and buyer matching to market entry strategy.'}
          </p>
          <a
            href="mailto:info@binhglobal.com"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            {isCn ? '联系我们' : 'Get in Touch'}
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
};
