export type Language = 'en' | 'fr' | 'zh';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    insights: string;
    contact: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  services: {
    badge: string;
    title: string;
    description: string;
    viewAll: string;
    items: {
      marketAnalysis: { title: string; desc: string };
      logistics: { title: string; desc: string };
      aiExpansion: { title: string; desc: string };
    };
  };
  team: {
    title: string;
    badge: string;
    members: {
      leadership: { name: string; role: string; desc: string };
      ops: { name: string; role: string; desc: string };
      finance: { name: string; role: string; desc: string };
    };
  };
  footer: {
    desc: string;
    sectors: string;
    company: string;
    contact: string;
    rights: string;
  };
  why: {
    title: string;
    subtitle: string;
    localDepth: { title: string; desc: string };
    dualUnderstanding: { title: string; desc: string };
  };
  partners: {
    title: string;
    subtitle: string;
    viewCaseStudies: string;
  };
  chat: {
    welcome: string;
    placeholder: string;
    typing: string;
    error: string;
    aiName: string;
    aiRole: string;
    tooltip: string;
    chips: {
      strategy: string;
      tax: string;
      logistics: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      insights: "Insights",
      contact: "Contact Us"
    },
    hero: {
      badge: "Global Consulting Excellence",
      title1: "Bridging Markets,",
      title2: "Powering Growth.",
      description: "Senior Canadian strategy for enterprises expanding across Canada, USA, and Southeast Asia. Innovation-driven consulting for a borderless world.",
      cta1: "Get Started",
      cta2: "Watch Showreel"
    },
    services: {
      badge: "Technological Edge",
      title: "AI Expansion",
      description: "We leverage proprietary AI frameworks to navigate regulatory landscapes, analyze market sentiment, and optimize international operations.",
      viewAll: "View All Services",
      items: {
        marketAnalysis: {
          title: "Market Analysis",
          desc: "Deep data insights using predictive AI to identify high-conversion demographics in North America and SEA."
        },
        logistics: {
          title: "Global Logistics",
          desc: "Smart supply chain optimization and AI-powered demand forecasting to minimize overhead in global expansion."
        },
        aiExpansion: {
          title: "AI Expansion (AI出海)",
          desc: "Leveraging proprietary frameworks to navigate regulatory landscapes and analyze market sentiment automatically."
        }
      }
    },
    team: {
      title: "Our Team of Experts",
      badge: "Global Network. Local Presence.",
      members: {
        leadership: {
          name: "Strategic Leadership Team",
          role: "Huawei Ex-Executives",
          desc: "Global strategy veterans with deep experience in scaling multinational operations."
        },
        ops: {
          name: "Operations & Infrastructure",
          role: "IT & Real Estate Experts",
          desc: "Specialists in operational scaling, technical infrastructure, and commercial real estate."
        },
        finance: {
          name: "Financial Compliance",
          role: "Federal Bank Background",
          desc: "Expertise in banking regulations, international monetary flow, and risk management."
        }
      }
    },
    footer: {
      desc: "Helping Canadian excellence go global. Providing expert strategic consulting across e-commerce, tech, food, and manufacturing.",
      sectors: "Sectors",
      company: "Company",
      contact: "Contact",
      rights: "© 2024 Binh Global Services. All rights reserved. Made in Canada."
    },
    why: {
      title: "Why Binh Global?",
      subtitle: "Strategically positioned to navigate complex international landscapes through specialized expertise.",
      localDepth: {
        title: "Local Depth",
        desc: "Our firm maintains deep-rooted government and chamber of commerce connections across Canada and international hubs, ensuring a frictionless market entry strategy for our clients."
      },
      dualUnderstanding: {
        title: "Dual Understanding",
        desc: "We specialize in bridging the gap between dynamic technology ecosystems, specifically China's rapid tech sector, and North American regulatory frameworks and compliance standards."
      }
    },
    partners: {
      title: "Our Strategic Partners",
      subtitle: "Trusted by global leaders in E-commerce, Tech, and Robotics.",
      viewCaseStudies: "View Case Studies"
    },
    chat: {
      welcome: "Hello! I'm your Binh Global expansion assistant. I can help you with market entry strategies, tax compliance, or logistics planning.\n\nHow can I help you navigate international markets today?",
      placeholder: "Ask about market entry, regulations...",
      typing: "Binh AI is thinking...",
      error: "I apologize, but I'm having trouble connecting to the global network right now. Please try again later.",
      aiName: "Binh Global AI",
      aiRole: "Global Expansion Concierge • Online",
      tooltip: "Ask Binh Global AI Assistant",
      chips: {
        strategy: "Market Entry Strategy",
        tax: "Tax Compliance",
        logistics: "Logistics"
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      insights: "Insights",
      contact: "Contactez-nous"
    },
    hero: {
      badge: "Excellence du Conseil Mondial",
      title1: "Relier les Marchés,",
      title2: "Propulser la Croissance.",
      description: "Stratégie canadienne de haut niveau pour les entreprises en expansion au Canada, aux États-Unis et en Asie du Sud-Est. Conseil axé sur l'innovation pour un monde sans frontières.",
      cta1: "Commencer",
      cta2: "Voir la démo"
    },
    services: {
      badge: "Avance Technologique",
      title: "Expansion IA",
      description: "Nous exploitons des cadres d'IA exclusifs pour naviguer dans les paysages réglementaires, analyser le sentiment du marché et optimiser les opérations internationales.",
      viewAll: "Voir tous les services",
      items: {
        marketAnalysis: {
          title: "Analyse de Marché",
          desc: "Des informations approfondies utilisant l'IA prédictive pour identifier les segments à forte conversion en Amérique du Nord et en Asie du Sud-Est."
        },
        logistics: {
          title: "Logistique Mondiale",
          desc: "Optimisation intelligente de la chaîne d'approvisionnement et prévision de la demande par l'IA pour minimiser les coûts."
        },
        aiExpansion: {
          title: "Expansion IA (AI出海)",
          desc: "Navigation dans les paysages réglementaires et analyse automatique des sentiments du marché grâce à nos solutions propriétaires."
        }
      }
    },
    team: {
      title: "Notre Équipe d'Experts",
      badge: "Réseau Mondial. Présence Locale.",
      members: {
        leadership: {
          name: "Équipe de Direction Stratégique",
          role: "Ex-cadres de Huawei",
          desc: "Vétérans de la stratégie mondiale avec une expérience approfondie dans le passage à l'échelle des opérations multinationales."
        },
        ops: {
          name: "Opérations et Infrastructure",
          role: "Experts IT & Immobilier",
          desc: "Spécialistes de la mise à l'échelle opérationnelle, de l'infrastructure technique et de l'immobilier commercial."
        },
        finance: {
          name: "Conformité Financière",
          role: "Expérience en Banque Fédérale",
          desc: "Expertise en réglementation bancaire, flux monétaires internationaux et gestion des risques."
        }
      }
    },
    footer: {
      desc: "Aider l'excellence canadienne à s'internationaliser. Conseil stratégique expert en e-commerce, technologie, agroalimentaire et industrie.",
      sectors: "Secteurs",
      company: "Entreprise",
      contact: "Contact",
      rights: "© 2024 Services Binh Global. Tous droits réservés. Fait au Canada."
    },
    why: {
      title: "Pourquoi Binh Global ?",
      subtitle: "Positionné stratégiquement pour naviguer dans des paysages internationaux complexes grâce à une expertise spécialisée.",
      localDepth: {
        title: "Profondeur Locale",
        desc: "Notre cabinet entretient des liens profonds avec les gouvernements et les chambres de commerce au Canada et dans les carrefours internationaux, assurant une stratégie d'entrée sur le marché sans friction."
      },
      dualUnderstanding: {
        title: "Double Compréhension",
        desc: "Nous nous spécialisons dans le rapprochement entre les écosystèmes technologiques dynamiques, spécifiquement le secteur technologique rapide de la Chine, et les cadres réglementaires et normes de conformité nord-américains."
      }
    },
    partners: {
      title: "Nos Partenaires Stratégiques",
      subtitle: "Approuvé par des leaders mondiaux du e-commerce, de la technologie et de la robotique.",
      viewCaseStudies: "Voir les Études de Cas"
    },
    chat: {
      welcome: "Bonjour ! Je suis votre assistant d'expansion Binh Global. Je peux vous aider avec les stratégies d'entrée sur le marché, la conformité fiscale ou la planification logistique.\n\nComment puis-je vous aider à naviguer sur les marchés internationaux aujourd'hui ?",
      placeholder: "Posez vos questions sur le marché...",
      typing: "Binh AI réfléchit...",
      error: "Je m'excuse, mais j'ai des difficultés à me connecter au réseau mondial en ce moment. Veuillez réessayer plus tard.",
      aiName: "Binh Global AI",
      aiRole: "Concierge d'Expansion Mondiale • En ligne",
      tooltip: "Demander à l'assistant IA Binh Global",
      chips: {
        strategy: "Stratégie d'entrée",
        tax: "Conformité fiscale",
        logistics: "Logistique"
      }
    }
  },
  zh: {
    nav: {
      home: "主页",
      about: "关于我们",
      services: "业务服务",
      insights: "行业洞察",
      contact: "联系我们"
    },
    hero: {
      badge: "全球咨询卓越成就",
      title1: "桥接全球市场，",
      title2: "驱动业务增长。",
      description: "为在加拿大、美国和东南亚扩张的企业提供资深加拿大专家级战略咨询。在无界世界中，以创新驱动咨询。",
      cta1: "立即开始",
      cta2: "观看视频"
    },
    services: {
      badge: "技术领先优势",
      title: "AI 驱动出海",
      description: "我们利用专有 AI 框架协助应对监管环境、分析市场情绪并优化国际化运营流程。",
      viewAll: "查看所有服务",
      items: {
        marketAnalysis: {
          title: "市场分析",
          desc: "利用预测性 AI 深度洞察数据，精准识别北美和东南亚的高转化人群。"
        },
        logistics: {
          title: "全球物流",
          desc: "智能供应链优化与 AI 驱动的需求预测，助力全球扩张业务降低成本。"
        },
        aiExpansion: {
          title: "AI 出海扩增",
          desc: "通过自主研发框架自动应对监管限制、深度析市场情绪，实现业务智能化出海。"
        }
      }
    },
    team: {
      title: "专家顾问团队",
      badge: "全球网络。本地服务。",
      members: {
        leadership: {
          name: "战略领导团队",
          role: "华为前高管团队",
          desc: "拥有多年全球化战略布局背景，在跨国业务规模化运营方面具备极深造诣。"
        },
        ops: {
          name: "运营与基础设施",
          role: "IT 与房地产专家",
          desc: "擅长企业运营规模化扩展、技术底座构建及商业地产战略选址。"
        },
        finance: {
          name: "金融合规审计",
          role: "联邦银行背景",
          desc: "精通各国银行监管规则、国际货币流转及企业跨境金融风险管理。"
        }
      }
    },
    footer: {
      desc: "助力加拿大卓越企业走向全球。在电子商务、科技、食品和制造业领域提供专业的战略咨询服务。",
      sectors: "业务板块",
      company: "公司信息",
      contact: "联系方式",
      rights: "© 2024 Binh Global Services。保留所有权利。加拿大制造。"
    },
    why: {
      title: "为什么选择 Binh Global？",
      subtitle: "凭借专业的专业知识，战略性地定位于应对复杂的国际环境。",
      localDepth: {
        title: "本地深度",
        desc: "我们公司与加拿大及国际中心的政府和商会保持着根深蒂固的联系，确保为客户提供无障碍的市场进入战略。"
      },
      dualUnderstanding: {
        title: "双重理解",
        desc: "我们专注于弥合动态技术生态系统之间的差距，特别是中国快速发展的科技行业，与北美监管框架和合规标准之间的差距。"
      }
    },
    partners: {
      title: "我们的战略合作伙伴",
      subtitle: "深受电子商务、科技和机器人领域全球领导者的信任。",
      viewCaseStudies: "查看案例研究"
    },
    chat: {
      welcome: "您好！我是您的 Binh Global 出海助手。我可以为您提供市场准入战略、税务合规或物流规划方面的咨询。\n\n今天我该如何协助您拓展国际市场？",
      placeholder: "咨询关于市场进入、合规规则等...",
      typing: "Binh AI 正在思考...",
      error: "抱歉，目前连接全球网络时出现问题，请稍后重试。",
      aiName: "Binh Global AI",
      aiRole: "全球扩张特别助理 • 在线",
      tooltip: "咨询 Binh Global AI 助手",
      chips: {
        strategy: "市场准入战略",
        tax: "税务合规",
        logistics: "物流规划"
      }
    }
  }
};
