export type Language = 'en' | 'fr' | 'zh' | 'vi';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    careers: string;
    contact: string;
    moreLanguages: string;
    languageLabel: string;
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
    privacyPolicy: string;
    termsOfService: string;
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
    poweredBy: string;
    you: string;
    visitor: string;
    aiAssistant: string;
    shiftEnter: string;
    chips: {
      strategy: string;
      tax: string;
      logistics: string;
    };
  };
  businessSectors: {
    title: string;
    subtitle: string;
    ecommerce: { title: string; desc: string };
    internet: { title: string; desc: string };
    catering: { title: string; desc: string };
    manufacturing: { title: string; desc: string };
  };
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    ctaTitle: string;
    ctaSubtitle: string;
    impactResults: string;
    viewProject: string;
    items: {
      ecommerce: {
        title: string;
        client: string;
        desc: string;
        result: string;
        tags: string[];
      };
      robotics: {
        title: string;
        client: string;
        desc: string;
        result: string;
        tags: string[];
      };
      catering: {
        title: string;
        client: string;
        desc: string;
        result: string;
        tags: string[];
      };
    };
  };
  careersPage: {
    title: string;
    subtitle: string;
    badge: string;
    whyJoin: string;
    benefits: { title: string; desc: string }[];
    openings: { title: string; department: string; location: string; type: string }[];
    openPositionsTitle: string;
    positionsCount: string;
    applyNow: string;
    noPositions: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    successDesc: string;
    error: string;
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
  };
  caseDetails: {
    back: string;
    challenge: string;
    challengeDesc: string;
    roboticsField: string;
    globalMarkets: string;
    strategy: string;
    marketIntel: string;
    marketIntelDesc: string;
    opsAgility: string;
    opsAgilityDesc: string;
    outcomes: string;
    impact: string;
    competencies: string;
    cta: string;
  };
  aboutPage: {
    heroTitle1: string;
    heroTitle2: string;
    heroDesc: string;
    stats: {
      strategy: string;
      reach: string;
      tech: string;
      experts: string;
    };
    philosophyTitle: string;
    philosophyDesc1: string;
    philosophyDesc2: string;
    ctaTitle: string;
    ctaDesc: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      cases: "Case Studies",
      careers: "Careers",
      contact: "Contact Us",
      moreLanguages: "More Languages",
      languageLabel: "Language"
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
          title: "AI Expansion",
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
      desc: "Empowering Chinese enterprises for global strategic expansion. Providing expert strategic consulting across e-commerce, tech, food, and manufacturing.",
      sectors: "Sectors",
      company: "Company",
      contact: "Contact",
      rights: "© 2024 Binh Global Services. All rights reserved. Made in Canada.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
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
      poweredBy: "Powered by Gemini 3 • Professional Translation",
      you: "You",
      visitor: "Visitor",
      aiAssistant: "Binh Assistant",
      shiftEnter: "Shift + Enter for new line",
      chips: {
        strategy: "Market Entry Strategy",
        tax: "Tax Compliance",
        logistics: "Logistics"
      }
    },
    caseStudies: {
      badge: "Success Stories",
      title: "Client Case Studies",
      subtitle: "Helping global leaders navigate complex markets and achieve sustainable growth.",
      title1: "Innovating for",
      title2: "Global impact.",
      description: "Explore how we've helped industry leaders navigate complex international landscapes and achieve sustainable growth.",
      ctaTitle: "Ready to write your success story?",
      ctaSubtitle: "Join our network of globally successful enterprise clients today.",
      impactResults: "Impact & Results",
      viewProject: "View Case Details",
      items: {
        ecommerce: {
          title: "North America Expansion Strategy",
          client: "Global E-commerce Giant",
          desc: "Full-scale market entry strategy including regulatory compliance, logistics network design, and local talent acquisition.",
          result: "+45% YoY growth in North American market share within 18 months.",
          tags: ["E-commerce", "Strategy", "Logistics"]
        },
        robotics: {
          title: "AI & Robotics Compliance",
          client: "Unitree Robotics",
          desc: "Navigating complex safety certifications and intellectual property frameworks for North American distribution.",
          result: "Successfully cleared all regulatory hurdles for US and Canadian retail launch.",
          tags: ["Robotics", "Compliance", "Tech"]
        },
        catering: {
          title: "Global Supply Chain Optimization",
          client: "Top Chinese Restaurant Group",
          desc: "Establishing a localized supply chain and central kitchen infrastructure to maintain quality during scale-up.",
          result: "Reduced operational overhead by 30% while maintaining 98% supply consistency.",
          tags: ["Catering", "Supply Chain", "Scale-up"]
        }
      }
    },
    businessSectors: {
      title: "Core Business Sectors",
      subtitle: "Driving innovation and excellence across key global industries.",
      ecommerce: {
        title: "Cross-border E-commerce",
        desc: "Specialized logistics and market analysis for North American and SEA expansions."
      },
      internet: {
        title: "Internet & Technology",
        desc: "End-to-end consulting for IT infrastructure and digital transformation."
      },
      catering: {
        title: "Food & Beverage",
        desc: "Scaling restaurant concepts and supply chains in international markets."
      },
      manufacturing: {
        title: "Advanced Manufacturing",
        desc: "Strategic advisory for global production and supply chain optimization."
      }
    },
    careersPage: {
      title: "Join Our Mission",
      subtitle: "Work alongside global experts to shape the future of cross-border consulting.",
      badge: "Careers",
      whyJoin: "Why Join Binh Global?",
      benefits: [
        { title: "Global Perspective", desc: "Work on international projects and gain insights into top overseas markets." },
        { title: "Rapid Growth", desc: "Coached by former Huawei executives to accumulate practical industry experience." },
        { title: "Flexible Work", desc: "Support for global collaborative work with a results-oriented flexible schedule." }
      ],
      openings: [
        { title: "Strategic Consultant", department: "Strategy", location: "Toronto / Remote", type: "Full-time" },
        { title: "Growth Specialist", department: "Marketing", location: "Toronto / Shenzhen", type: "Full-time" },
        { title: "Compliance Officer", department: "Legal", location: "Toronto", type: "Contract" }
      ],
      openPositionsTitle: "Open Positions",
      positionsCount: "Positions",
      applyNow: "Apply Now",
      noPositions: "Don't see a fit? Send your CV to our HR email, we're always looking for talent."
    },
    contactForm: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's discuss your global expansion strategy.",
      name: "Full Name",
      email: "Work Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent successfully.",
      successDesc: "Our team will get back to you shortly.",
      error: "Oops! Something went wrong. Please try again later.",
      placeholders: {
        name: "John Doe",
        email: "john@company.com",
        subject: "Inquiry about market entry strategy",
        message: "How can we help you?"
      }
    },
    caseDetails: {
      back: "Back to Overview",
      challenge: "Project Challenge",
      challengeDesc: "Our engagement focused on identifying critical bottlenecks in international scaling, specifically addressing regulatory silos and operational inefficiencies that often hinder rapid growth in",
      roboticsField: "highly technical fields.",
      globalMarkets: "competitive global markets.",
      strategy: "Strategic Approach",
      marketIntel: "Market Intelligence",
      marketIntelDesc: "Deep-dive analysis into local consumer behavior and competitive landscape patterns.",
      opsAgility: "Operational Agility",
      opsAgilityDesc: "Restructuring supply chain nodes to ensure maximum flexibility and reduced lead times.",
      outcomes: "Key Outcomes",
      impact: "Direct business impact",
      competencies: "Core Competencies",
      cta: "Schedule a Consultation"
    },
    aboutPage: {
      heroTitle1: "Empowering Global",
      heroTitle2: "Ambitions.",
      heroDesc: "Binh Global is a premier strategic consulting firm dedicated to bridging the gap between North American markets and the rapidly evolving global tech landscape.",
      stats: {
        strategy: "Strategy First",
        reach: "Global Reach",
        tech: "Ex-Huawei Tech",
        experts: "Local Experts"
      },
      philosophyTitle: "Our Philosophy",
      philosophyDesc1: "We believe that international expansion isn't just about moving capital; it's about navigating cultures, regulations, and technologies. Our team combines high-level corporate experience with deep local insights to ensure our clients don't just enter markets—they thrive in them.",
      philosophyDesc2: "Our background in global tech giants like Huawei gives us a unique perspective on scaling operations and implementing AI-driven frameworks that minimize risks and maximize conversion.",
      ctaTitle: "Ready to expand your horizon?",
      ctaDesc: "Our consultants are ready to discuss your next strategic move in the international arena."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      cases: "Études de cas",
      careers: "Carrières",
      contact: "Contactez-nous",
      moreLanguages: "Plus de langues",
      languageLabel: "Langue"
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
      desc: "Accompagner les entreprises chinoises dans leur expansion stratégique mondiale. Conseil stratégique expert en e-commerce, technologie, agroalimentaire et industrie.",
      sectors: "Secteurs",
      company: "Entreprise",
      contact: "Contact",
      rights: "© 2024 Services Binh Global. Tous droits réservés. Fait au Canada.",
      privacyPolicy: "Politique de confidentialité",
      termsOfService: "Conditions d'utilisation"
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
      poweredBy: "Propulsé par Gemini 3 • Traduction professionnelle",
      you: "Vous",
      visitor: "Visiteur",
      aiAssistant: "Assistant Binh",
      shiftEnter: "Shift + Entrée pour une nouvelle ligne",
      chips: {
        strategy: "Stratégie d'entrée",
        tax: "Conformité fiscale",
        logistics: "Logistics"
      }
    },
    caseStudies: {
      badge: "Histoires de Réussite",
      title: "Études de Cas Clients",
      subtitle: "Aider les leaders mondiaux à naviguer sur des marchés complexes.",
      title1: "Innover pour un",
      title2: "impact mondial.",
      description: "Découvrez comment nous avons aidé les leaders de l'industrie à naviguer dans des paysages internationaux complexes et à atteindre une croissance durable.",
      ctaTitle: "Prêt à écrire votre propre succès ?",
      ctaSubtitle: "Rejoignez notre réseau de clients entreprises prospères à travers le monde dès aujourd'hui.",
      impactResults: "Impact & Résultats",
      viewProject: "Détails du Projet",
      items: {
        ecommerce: {
          title: "Stratégie d'Expansion en Amérique du Nord",
          client: "Géant de l'E-commerce",
          desc: "Stratégie d'entrée complète incluant la conformité, la logistique et le recrutement local.",
          result: "+45% de croissance annuelle de la part de marché en 18 mois.",
          tags: ["E-commerce", "Stratégie", "Logistique"]
        },
        robotics: {
          title: "Conformité IA et Robotique",
          client: "Unitree Robotics",
          desc: "Navigation dans les certifications de sécurité pour la distribution nord-américaine.",
          result: "Levée de tous les obstacles réglementaires pour le lancement aux USA et Canada.",
          tags: ["Robotique", "Conformité", "Tech"]
        },
        catering: {
          title: "Optimisation de la Chaîne d'Approvisionnement",
          client: "Groupe de Restauration Leader",
          desc: "Mise en place d'une infrastructure logistique locale pour maintenir la qualité à l'échelle.",
          result: "Réduction des coûts de 30% avec une maintenance de qualité constante.",
          tags: ["Restauration", "Logistique", "Échelle"]
        }
      }
    },
    businessSectors: {
      title: "Secteurs d'Activité",
      subtitle: "Favoriser l'innovation et l'excellence dans les industries mondiales clés.",
      ecommerce: {
        title: "E-commerce Transfrontalier",
        desc: "Logistique spécialisée et analyse de marché pour les expansions en Amérique du Nord et en Asie du Sud-Est."
      },
      internet: {
        title: "Internet et Technologie",
        desc: "Conseil de bout en bout pour l'infrastructure informatique et la transformation numérique."
      },
      catering: {
        title: "Restauration",
        desc: "Développement de concepts de restauration et de chaînes d'approvisionnement sur les marchés internationaux."
      },
      manufacturing: {
        title: "Industrie Manufacturière",
        desc: "Conseil stratégique pour la production mondiale et l'optimisation de la chaîne d'approvisionnement."
      }
    },
    careersPage: {
      title: "Rejoignez Notre Mission",
      subtitle: "Travaillez avec des experts mondiaux pour façonner l'avenir du conseil transfrontalier.",
      badge: "Carrières",
      whyJoin: "Pourquoi rejoindre Binh Global ?",
      benefits: [
        { title: "Perspective Mondiale", desc: "Travaillez sur des projets internationaux et découvrez les marchés étrangers." },
        { title: "Croissance Rapide", desc: "Encadré par d'anciens cadres de Huawei pour acquérir une expérience pratique." },
        { title: "Travail Flexible", desc: "Soutien au travail collaboratif mondial avec un horaire flexible axé sur les résultats." }
      ],
      openings: [
        { title: "Consultant Stratégique", department: "Stratégie", location: "Toronto / À distance", type: "Temps plein" },
        { title: "Spécialiste Croissance", department: "Marketing", location: "Toronto / Shenzhen", type: "Temps plein" },
        { title: "Officier de Conformité", department: "Juridique", location: "Toronto", type: "Contrat" }
      ],
      openPositionsTitle: "Postes Ouverts",
      positionsCount: "Postes",
      applyNow: "Postuler",
      noPositions: "Rien ne vous correspond ? Envoyez votre CV, nous cherchons toujours des talents."
    },
    contactForm: {
      title: "Contactez-nous",
      subtitle: "Un projet en tête ? Discutons de votre stratégie internationale.",
      name: "Nom complet",
      email: "Email professionnel",
      subject: "Sujet",
      message: "Votre message",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Merci ! Votre message a été envoyé avec succès.",
      successDesc: "Notre équipe vous répondra sous peu.",
      error: "Oups ! Une erreur est survenue. Veuillez réessayer plus tard.",
      placeholders: {
        name: "Jean Dupont",
        email: "jean@entreprise.com",
        subject: "Demande sur la stratégie d'entrée",
        message: "Comment pouvons-nous vous aider ?"
      }
    },
    caseDetails: {
      back: "Retour à l'aperçu",
      challenge: "Défi du projet",
      challengeDesc: "Notre engagement s'est concentré sur l'identification des goulots d'étranglement critiques dans la mise à l'échelle internationale, en traitant spécifiquement les silos réglementaires et les inefficacités opérationnelles qui entravent souvent la croissance rapide dans",
      roboticsField: "des domaines hautement techniques.",
      globalMarkets: "des marchés mondiaux compétitifs.",
      strategy: "Approche stratégique",
      marketIntel: "Intelligence du marché",
      marketIntelDesc: "Analyse approfondie du comportement des consommateurs locaux et des modèles de paysage concurrentiel.",
      opsAgility: "Agilité opérationnelle",
      opsAgilityDesc: "Restructuration des nœuds de la chaîne d'approvisionnement pour assurer une flexibilité maximale.",
      outcomes: "Résultats clés",
      impact: "Impact commercial direct",
      competencies: "Compétences clés",
      cta: "Prendre rendez-vous"
    },
    aboutPage: {
      heroTitle1: "Propulser vos",
      heroTitle2: "ambitions mondiales.",
      heroDesc: "Binh Global est un cabinet de conseil stratégique de premier plan dédié à combler le fossé entre les marchés nord-américains et le paysage technologique mondial en évolution rapide.",
      stats: {
        strategy: "La stratégie d'abord",
        reach: "Portée mondiale",
        tech: "Ex-Huawei Tech",
        experts: "Experts locaux"
      },
      philosophyTitle: "Notre Philosophie",
      philosophyDesc1: "Nous pensons que l'expansion internationale n'est pas seulement une question de capital ; il s'agit de naviguer entre les cultures, les réglementations et les technologies. Notre équipe combine une expérience en entreprise de haut niveau avec des connaissances locales approfondies pour garantir que nos clients ne se contentent pas d'entrer sur les marchés, mais qu'ils y prospèrent.",
      philosophyDesc2: "Notre expérience au sein de géants mondiaux de la technologie comme Huawei nous donne une perspective unique sur la mise à l'échelle des opérations et la mise en œuvre de cadres basés sur l'IA qui minimisent les risques et maximisent la conversion.",
      ctaTitle: "Prêt à élargir votre horizon ?",
      ctaDesc: "Nos consultants sont prêts à discuter de votre prochaine décision stratégique sur la scène internationale."
    }
  },
  zh: {
    nav: {
      home: "主页",
      about: "关于我们",
      services: "业务服务",
      cases: "客户案例",
      careers: "人才招聘",
      contact: "联系我们",
      moreLanguages: "更多语种",
      languageLabel: "语言"
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
      desc: "助力中国企业出海全球布局。在电子商务、科技、食品和制造业领域提供专业的战略咨询服务。",
      sectors: "业务板块",
      company: "公司信息",
      contact: "联系方式",
      rights: "© 2024 Binh Global Services。保留所有权利。加拿大制造。",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款"
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
      poweredBy: "由 Gemini 3 提供支持 • 专业翻译",
      you: "您",
      visitor: "访客",
      aiAssistant: "Binh 智囊",
      shiftEnter: "Shift + Enter 换行",
      chips: {
        strategy: "市场准入战略",
        tax: "税务合规",
        logistics: "物流规划"
      }
    },
    caseStudies: {
      badge: "标杆案例",
      title: "客户成功案例",
      subtitle: "助力全球领军企业应对复杂市场挑战，实现跨越式增长。",
      title1: "创新赋能，",
      title2: "智领全球。",
      description: "探索我们如何助力行业领袖应对复杂的国际局势，实现可持续增长。",
      ctaTitle: "准备好开启您的成功之旅了吗？",
      ctaSubtitle: "立即加入我们的全球成功企业客户网络。",
      impactResults: "影响与成果",
      viewProject: "查看项目详情",
      items: {
        ecommerce: {
          title: "北美市场全链路出海战略",
          client: "某头部跨境电商平台",
          desc: "提供包含监管合规、物流网络规划及本地化人才招聘的全方位入场策略。",
          result: "18个月内北美市场份额同比激增 45%。",
          tags: ["跨境电商", "战略咨询", "物流规划"]
        },
        robotics: {
          title: "智能机器人合规与市场准入",
          client: "宇树科技 (Unitree Robotics)",
          desc: "协助处理复杂的安全认证、知识产权框架及北美分销体系构建。",
          result: "成功扫清美加零售市场准入的所有监管障碍。",
          tags: ["机器人", "技术合规", "高新科技"]
        },
        catering: {
          title: "中餐品牌全球供应链优化",
          client: "某知名餐饮集团",
          desc: "建立本地化供应链中心及中央厨房基础设施，确保规模化扩张中的品质一致性。",
          result: "运营成本降低 30%，供应链稳定性维持在 98% 以上。",
          tags: ["餐饮业", "供应链", "全球扩张"]
        }
      }
    },
    businessSectors: {
      title: "核心业务板块",
      subtitle: "在全球关键行业推动创新与卓越表现。",
      ecommerce: {
        title: "跨境电商",
        desc: "深耕北美与东南亚市场，提供专业物流选筹与全链路市场分析咨询。"
      },
      internet: {
        title: "互联网科技",
        desc: "为出海企业提供端到端的 IT 基础设施建设与数字化转型战略支持。"
      },
      catering: {
        title: "餐饮/预制菜",
        desc: "助力餐饮巨头与新锐品牌布局全球连锁网络及海外供应链体系。"
      },
      manufacturing: {
        title: "智能制造",
        desc: "提供全球产能布局方案，助力制造业企业实现跨境生产与供应链优化。"
      }
    },
    careersPage: {
      title: "加入我们",
      subtitle: "与全球顶尖专家并肩，共创跨境咨询的未来。",
      badge: "人才招募",
      whyJoin: "为什么加入 Binh Global?",
      benefits: [
        { title: "全球视野", desc: "参与跨国项目，接触顶尖海外市场动态。" },
        { title: "快速成长", desc: "由华为前高管导师亲自指导，快速积累行业实战经验。" },
        { title: "弹性办公", desc: "支持全球协同办公，结果导向的弹性工作制。" }
      ],
      openings: [
        { title: "战略咨询顾问", department: "战略咨询部", location: "多伦多 / 远程", type: "全职" },
        { title: "出海增长专家", department: "市场营销部", location: "多伦多 / 深圳", type: "全职" },
        { title: "跨境税务合规专员", department: "法务合规部", location: "多伦多", type: "合约制" }
      ],
      openPositionsTitle: "招聘职位",
      positionsCount: "个职位",
      applyNow: "立即申请",
      noPositions: "目前没有适合您的职位？发送简历到 HR 邮箱，我们随时欢迎优秀的人才。"
    },
    contactForm: {
      title: "联系我们",
      subtitle: "如有项目合作意向或咨询需求，请填写下表，专家团队将尽快与您联系。",
      name: "姓名",
      email: "电子邮箱",
      subject: "咨询主题",
      message: "留言内容",
      send: "发送留言",
      sending: "正在发送...",
      success: "发送成功！我们将尽快回复您的咨询。",
      successDesc: "我们的团队将很快与您取得联系。",
      error: "抱歉，发送失败，请稍后重试。",
      placeholders: {
        name: "中文姓名",
        email: "example@company.com",
        subject: "市场进入战略咨询",
        message: "我们能为您做些什么？"
      }
    },
    caseDetails: {
      back: "回到概览",
      challenge: "项目挑战",
      challengeDesc: "我们的工作重点是识别国际化规模扩展中的关键瓶颈，特别是处理监管孤岛和运营低效问题，这些问题通常会阻碍业务在",
      roboticsField: "高精尖技术领域。",
      globalMarkets: "竞争激烈的全球市场。",
      strategy: "战略方法",
      marketIntel: "市场情报",
      marketIntelDesc: "深入分析当地消费者行为和竞争格局模式。",
      opsAgility: "运营敏捷性",
      opsAgilityDesc: "优化供应链节点，确保最大灵活性并缩短交付周期。",
      outcomes: "关键成果",
      impact: "直接业务影响",
      competencies: "核心能力",
      cta: "预约专业咨询"
    },
    aboutPage: {
      heroTitle1: "助推全球",
      heroTitle2: "远大抱负。",
      heroDesc: "Binh Global 是一家顶尖的战略咨询公司，致力于弥合北美市场与快速扩张的全球科技景观之间的鸿沟。",
      stats: {
        strategy: "战略先行",
        reach: "全球触达",
        tech: "华为前高管背景",
        experts: "本地专家"
      },
      philosophyTitle: "我们的理念",
      philosophyDesc1: "我们相信，国际化扩张不仅仅是资本的流动；更是对文化、监管和技术的驾驭。我们的团队将高水平的企业经验与深厚的本地洞察相结合，确保我们的客户不仅是进入市场，而是在市场中蓬勃发展。",
      philosophyDesc2: "我们在华为等全球科技巨头的背景，使我们在扩大运营规模和实施 AI 驱动框架方面拥有独特视角，从而最大程度降低风险并提高转化率。",
      ctaTitle: "准备好拓展业务版图了吗？",
      ctaDesc: "我们的顾问随时为您提供国际化扩张战略建议。"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      services: "Dịch vụ",
      cases: "Case Study",
      careers: "Tuyển dụng",
      contact: "Liên hệ",
      moreLanguages: "Thêm ngôn ngữ",
      languageLabel: "Ngôn ngữ"
    },
    hero: {
      badge: "Tư vấn Toàn cầu Xuất sắc",
      title1: "Kết nối Thị trường,",
      title2: "Thúc đẩy Tăng trưởng.",
      description: "Chiến lược tư vấn cao cấp từ Canada cho các doanh nghiệp mở rộng sang Canada, Mỹ và Đông Nam Á. Tư vấn hướng tới đổi mới cho một thế giới không biên giới.",
      cta1: "Bắt đầu ngay",
      cta2: "Xem Video"
    },
    services: {
      badge: "Lợi thế Công nghệ",
      title: "Mở rộng AI",
      description: "Chúng tôi tận dụng các khung AI độc quyền để điều hướng bối cảnh pháp lý, phân tích tâm lý thị trường và tối ưu hóa các hoạt động quốc tế.",
      viewAll: "Xem tất cả dịch vụ",
      items: {
        marketAnalysis: {
          title: "Phân tích Thị trường",
          desc: "Thông tin chi tiết dữ liệu sâu bằng AI dự đoán để xác định nhân khẩu học chuyển đổi cao ở Bắc Mỹ và SEA."
        },
        logistics: {
          title: "Logistics Toàn cầu",
          desc: "Tối ưu hóa chuỗi cung ứng thông minh và dự báo nhu cầu bằng AI để giảm thiểu chi phí trong mở rộng toàn cầu."
        },
        aiExpansion: {
          title: "Mở rộng AI",
          desc: "Tận dụng các khung độc quyền để tự động điều hướng bối cảnh pháp lý và phân tích tâm lý thị trường."
        }
      }
    },
    team: {
      title: "Đội ngũ Chuyên gia",
      badge: "Mạng lưới Toàn cầu. Hiện diện Địa phương.",
      members: {
        leadership: {
          name: "Đội ngũ Lãnh đạo Chiến lược",
          role: "Cựu Lãnh đạo Huawei",
          desc: "Những chuyên gia chiến lược toàn cầu với kinh nghiệm sâu rộng trong việc mở rộng quy mô hoạt động đa quốc gia."
        },
        ops: {
          name: "Vận hành & Cơ sở hạ tầng",
          role: "Chuyên gia IT & Bất động sản",
          desc: "Chuyên gia về mở rộng quy mô vận hành, hạ tầng kỹ thuật và bất động sản thương mại."
        },
        finance: {
          name: "Tuân thủ Tài chính",
          role: "Nền tảng Ngân hàng Liên bang",
          desc: "Chuyên môn về các quy định ngân hàng, dòng tiền quốc tế và quản lý rủi ro."
        }
      }
    },
    footer: {
      desc: "Hỗ trợ các doanh nghiệp Trung Quốc vươn ra thị trường chiến lược toàn cầu. Cung cấp tư vấn chiến lược chuyên gia về thương mại điện tử, công nghệ, thực phẩm và sản xuất.",
      sectors: "Lĩnh vực",
      company: "Công ty",
      contact: "Liên hệ",
      rights: "© 2024 Binh Global Services. Bảo lưu mọi quyền. Sản xuất tại Canada.",
      privacyPolicy: "Chính sách Bảo mật",
      termsOfService: "Điều khoản Dịch vụ"
    },
    why: {
      title: "Tại sao chọn Binh Global?",
      subtitle: "Vị trí chiến lược để điều hướng các bối cảnh quốc tế phức tạp thông qua chuyên môn chuyên biệt.",
      localDepth: {
        title: "Chiều sâu Địa phương",
        desc: "Công ty chúng tôi duy trì các mối quan hệ sâu sắc với chính phủ và phòng thương mại trên khắp Canada và các trung tâm quốc tế, đảm bảo chiến lược thâm nhập thị trường không ma sát."
      },
      dualUnderstanding: {
        title: "Hiểu biết Kép",
        desc: "Chúng tôi chuyên kết nối khoảng cách giữa các hệ sinh thái công nghệ năng động, đặc biệt là lĩnh vực công nghệ phát triển nhanh của Trung Quốc, với các khung pháp lý và tiêu chuẩn tuân thủ Bắc Mỹ."
      }
    },
    partners: {
      title: "Đối tác Chiến lược",
      subtitle: "Được tin tưởng bởi các nhà lãnh đạo toàn cầu về Thương mại điện tử, Công nghệ và Robot.",
      viewCaseStudies: "Xem Case Study"
    },
    chat: {
      welcome: "Xin chào! Tôi là trợ lý mở rộng Binh Global. Tôi có thể giúp bạn về chiến lược thâm nhập thị trường, tuân thủ thuế hoặc lập kế hoạch logistics.\n\nLàm thế nào tôi có thể giúp bạn điều hướng thị trường quốc tế hôm nay?",
      placeholder: "Hỏi về thâm nhập thị trường, quy định...",
      typing: "Binh AI đang suy nghĩ...",
      error: "Tôi xin lỗi, nhưng tôi đang gặp sự cố khi kết nối với mạng toàn cầu. Vui lòng thử lại sau.",
      aiName: "Binh Global AI",
      aiRole: "Quản gia Mở rộng Toàn cầu • Trực tuyến",
      tooltip: "Hỏi Trợ lý AI Binh Global",
      poweredBy: "Hỗ trợ bởi Gemini 3 • Dịch thuật Chuyên nghiệp",
      you: "Bạn",
      visitor: "Khách",
      aiAssistant: "Trợ lý Binh",
      shiftEnter: "Shift + Enter để xuống dòng",
      chips: {
        strategy: "Chiến lược Thâm nhập",
        tax: "Tuân thủ Thuế",
        logistics: "Logistics"
      }
    },
    caseStudies: {
      badge: "Câu chuyện Thành công",
      title: "Case Study Khách hàng",
      subtitle: "Giúp các nhà lãnh đạo toàn cầu điều hướng thị trường phức tạp và đạt tăng trưởng bền vững.",
      title1: "Đổi mới vì",
      title2: "Tác động Toàn cầu.",
      description: "Khám phá cách chúng tôi giúp các nhà lãnh đạo ngành điều hướng bối cảnh quốc tế phức tạp và đạt được sự tăng trưởng bền vững.",
      ctaTitle: "Sẵn sàng viết câu chuyện thành công của bạn?",
      ctaSubtitle: "Gia nhập mạng lưới các khách hàng doanh nghiệp thành công toàn cầu của chúng tôi ngay hôm nay.",
      impactResults: "Tác động & Kết quả",
      viewProject: "Xem Chi tiết",
      items: {
        ecommerce: {
          title: "Chiến lược Mở rộng Bắc Mỹ",
          client: "Người khổng lồ TMĐT Toàn cầu",
          desc: "Chiến lược thâm nhập thị trường đầy đủ bao gồm tuân thủ pháp lý, thiết kế mạng lưới logistics và tuyển dụng tài năng địa phương.",
          result: "+45% tăng trưởng YoY về thị phần Bắc Mỹ trong vòng 18 tháng.",
          tags: ["TMĐT", "Chiến lược", "Logistics"]
        },
        robotics: {
          title: "Tuân thủ AI & Robot",
          client: "Unitree Robotics",
          desc: "Điều hướng các chứng nhận an toàn phức tạp và khung sở hữu trí tuệ để phân phối tại Bắc Mỹ.",
          result: "Vượt qua thành công mọi rào cản pháp lý để ra mắt bán lẻ tại Mỹ và Canada.",
          tags: ["Robot", "Tuân thủ", "Công nghệ"]
        },
        catering: {
          title: "Tối ưu hóa Chuỗi cung ứng Toàn cầu",
          client: "Tập đoàn Nhà hàng hàng đầu Trung Quốc",
          desc: "Thiết lập chuỗi cung ứng địa phương hóa và hạ tầng bếp trung tâm để duy trì chất lượng khi mở rộng quy mô.",
          result: "Giảm 30% chi phí vận hành trong khi duy trì 98% tính nhất quán về nguồn cung.",
          tags: ["Catering", "Chuỗi cung ứng", "Mở rộng quy mô"]
        }
      }
    },
    businessSectors: {
      title: "Các Lĩnh vực Cốt lõi",
      subtitle: "Thúc đẩy đổi mới và xuất sắc trong các ngành công nghiệp toàn cầu trọng yếu.",
      ecommerce: {
        title: "TMĐT xuyên biên giới",
        desc: "Logistics chuyên biệt và phân tích thị trường cho việc mở rộng tại Bắc Mỹ và Đông Nam Á."
      },
      internet: {
        title: "Internet & Công nghệ",
        desc: "Tư vấn trọn gói cho hạ tầng IT và chuyển đổi số."
      },
      catering: {
        title: "Thực phẩm & Đồ uống",
        desc: "Mở rộng quy mô khái niệm nhà hàng và chuỗi cung ứng tại thị trường quốc tế."
      },
      manufacturing: {
        title: "Sản xuất Tiên tiến",
        desc: "Tư vấn chiến lược cho sản xuất toàn cầu và tối ưu hóa chuỗi cung ứng."
      }
    },
    careersPage: {
      title: "Tham gia Sứ mệnh",
      subtitle: "Làm việc cùng các chuyên gia toàn cầu để định hình tương lai của tư vấn xuyên biên giới.",
      badge: "Tuyển dụng",
      whyJoin: "Tại sao nên gia nhập Binh Global?",
      benefits: [
        { title: "Tầm nhìn Toàn cầu", desc: "Làm việc trong các dự án quốc tế và hiểu rõ hơn về các thị trường hàng đầu nước ngoài." },
        { title: "Tăng trưởng Nhanh chóng", desc: "Được huấn luyện bởi các cựu lãnh đạo Huawei để tích lũy kinh nghiệm thực tế trong ngành." },
        { title: "Làm việc Linh hoạt", desc: "Hỗ trợ làm việc cộng tác toàn cầu với lịch trình linh hoạt theo kết quả." }
      ],
      openings: [
        { title: "Cố vấn Chiến lược", department: "Chiến lược", location: "Toronto / Từ xa", type: "Toàn thời gian" },
        { title: "Chuyên gia Tăng trưởng", department: "Marketing", location: "Toronto / Thâm Quyến", type: "Toàn thời gian" },
        { title: "Chuyên viên Tuân thủ", department: "Pháp lý", location: "Toronto", type: "Hợp đồng" }
      ],
      openPositionsTitle: "Vị trí Đang tuyển",
      positionsCount: "Vị trí",
      applyNow: "Ứng tuyển ngay",
      noPositions: "Không tìm thấy vị trí phù hợp? Gửi CV của bạn cho chúng tôi, chúng tôi luôn tìm kiếm tài năng."
    },
    contactForm: {
      title: "Liên hệ",
      subtitle: "Bạn có một dự án? Hãy thảo luận về chiến lược mở rộng toàn cầu của bạn.",
      name: "Họ và tên",
      email: "Email công việc",
      subject: "Chủ đề",
      message: "Tin nhắn của bạn",
      send: "Gửi tin nhắn",
      sending: "Đang gửi...",
      success: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.",
      successDesc: "Đội ngũ của chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.",
      error: "Rất tiếc! Đã xảy ra sự cố. Vui lòng thử lại sau.",
      placeholders: {
        name: "Nguyễn Văn A",
        email: "a@congty.com",
        subject: "Yêu cầu tư vấn chiến lược thâm nhập",
        message: "Chúng tôi có thể giúp gì cho bạn?"
      }
    },
    caseDetails: {
      back: "Quay lại",
      challenge: "Thách thức Dự án",
      challengeDesc: "Sự hợp tác của chúng tôi tập trung vào việc xác định các điểm nghẽn quan trọng trong việc mở rộng quy mô quốc tế, cụ thể là giải quyết các rào cản pháp lý và sự kém hiệu quả trong vận hành thường cản trở sự tăng trưởng nhanh chóng trong",
      roboticsField: "các lĩnh vực kỹ thuật cao.",
      globalMarkets: "thị trường toàn cầu cạnh tranh.",
      strategy: "Cách tiếp cận Chiến lược",
      marketIntel: "Thông tin Thị trường",
      marketIntelDesc: "Phân tích sâu về hành vi người tiêu dùng địa phương và mô hình bối cảnh cạnh tranh.",
      opsAgility: "Vận hành Linh hoạt",
      opsAgilityDesc: "Tái cấu trúc các nút chuỗi cung ứng để đảm bảo tính linh hoạt tối đa và giảm thời gian thực hiện.",
      outcomes: "Kết quả Chính",
      impact: "Tác động kinh doanh trực tiếp",
      competencies: "Năng lực Cốt lõi",
      cta: "Lên lịch Tư vấn"
    },
    aboutPage: {
      heroTitle1: "Thúc đẩy Tham vọng",
      heroTitle2: "Toàn cầu.",
      heroDesc: "Binh Global là công ty tư vấn chiến lược hàng đầu chuyên xóa bỏ khoảng cách giữa các thị trường Bắc Mỹ và bối cảnh công nghệ toàn cầu đang phát triển nhanh chóng.",
      stats: {
        strategy: "Chiến lược Ưu tiên",
        reach: "Tiếp cận Toàn cầu",
        tech: "Cựu Lãnh đạo Huawei",
        experts: "Chuyên gia Địa phương"
      },
      philosophyTitle: "Triết lý của Chúng tôi",
      philosophyDesc1: "Chúng tôi tin rằng việc mở rộng quốc tế không chỉ là về việc chuyển vốn; đó là về việc điều hướng các nền văn hóa, quy định và công nghệ. Đội ngũ của chúng tôi kết hợp kinh nghiệm doanh nghiệp cấp cao với những hiểu biết sâu sắc về địa phương để đảm bảo khách hàng không chỉ thâm nhập thị trường mà còn phát triển mạnh mẽ trong đó.",
      philosophyDesc2: "Nền tảng của chúng tôi tại các tập đoàn công nghệ toàn cầu như Huawei mang lại cho chúng tôi góc nhìn độc đáo về việc mở rộng quy mô hoạt động và triển khai các khung xử lý bằng AI giúp giảm thiểu rủi ro và tối ưu hóa việc chuyển đổi.",
      ctaTitle: "Sẵn sàng mở rộng tầm nhìn của bạn?",
      ctaDesc: "Các tư vấn viên của chúng tôi đã sẵn sàng để thảo luận về bước đi chiến lược tiếp theo của bạn trên đấu trường quốc tế."
    }
  }
};
