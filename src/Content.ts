import {
  MapPin,
  Clock,
  Wifi,
  Car,
  ShowerHead,
  Lock,
  Users,
  Calendar,
  Instagram,
  Facebook,
  Youtube,
  Ban,
  BatteryLow,
  Frown
} from 'lucide-react';
import { ContentConfig } from './types';

// ==================================================================================
// CENTRALIZAÇÃO DE IMAGENS
// ==================================================================================
const images = {
  logo: "/images/logo.png", // Se não existir, o ícone será usado
  heroDesktop: "/images/hero-desktop.webp", // 1920x1080
  heroMobile: "/images/hero-mobile.webp", // 800x1200 (Vertical)
  solution: "/images/solution.webp", // 800x800
  team: "/images/team1.webp", // 800x600 (Geral)
  ctaBackground: "/images/cta-background.png", // 1920x600

  // Services (400x300)
  service1: "/images/service1.webp",
  service2: "/images/service2.webp",
  service3: "/images/service3.webp",
  service4: "/images/service4.webp",

  // Testimonials (100x100)
  testimonial1: "/images/testimonial1.webp",
  testimonial2: "/images/testimonial2.webp",
  testimonial3: "/images/testimonial3.webp",

  // Team (400x500)
  team1: "/images/team1.webp",
  team2: "/images/team2.webp",
  team3: "/images/team3.webp",
  team4: "/images/team4.webp",
};

export const content: ContentConfig = {
  // ==================================================================================
  // 1. CONFIGURAÇÕES GERAIS E CORES
  // ==================================================================================

  // Cores da aplicação (Use códigos Hex)
  colors: {
    primary: '#D96601',      // Cor principal (Botões, destaques, ícones)
    primaryDark: '#ffffffff',  // Cor principal escura (Hover)
    primaryHighlight: '#D96601', // Cor para textos destacados e ícones soltos (Pode ser igual a primary ou ajustada)
    textOnPrimary: '#000000ff',    // Cor do texto sobre fundos primários (Preto para contraste com amarelo)
    secondary: '#18181B',    // Cor secundária (Fundos escuros)
    background: '#09090b',   // Cor de fundo geral da página
    text: '#f4f4f5',         // Cor do texto principal
    textMuted: '#a1a1aa',    // Cor do texto secundário
    success: '#4DE03B',      // Cor de sucesso
  },

  // Fontes (Apenas informativo para referência, a importação é feita no HTML)
  fonts: {
    display: 'Oswald, sans-serif', // Títulos
    body: 'Inter, sans-serif',     // Textos corridos
  },

  // ==================================================================================
  // 2. SEO E METADADOS
  // ==================================================================================
  seo: {
    title: "Movimento Do Corpo Academia - Começe 2026 Em Forma: Garanta Sua Matrícula Com Desconto",
    description: "Treinos inovadores, profissionais qualificados e um ambiente acolhedor",
    domain: "https://movimentodocorpo.netlify.app", // URL do site (sem barra no final)
    path: "/",
    themeColor: "#D96601", // Cor do tema (barra de endereço mobile)
    keywords: "academia, musculação, fitness, saúde, treino, jiu jitsu, muay thai, fit dance, lutas, funcional, campinas, academia perto de mim, pilates, kangoo, spinning, ginástica, boxe chinês",
    og: {
      title: "Movimento Do Corpo Academia - Começe 2026 Em Forma: Garanta Sua Matrícula Com Desconto",
      description: "Treinos inovadores, profissionais qualificados e um ambiente acolhedor",
      type: "website",
      siteName: "Movimento Do Corpo Academia",
      image: "/images/preview.webp", // Caminho da imagem de preview (1200x630 recomendado)
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
    },
  },

  // ==================================================================================
  // 3. INFORMAÇÕES BÁSICAS DA EMPRESA
  // ==================================================================================
  infos: {
    name: "Movimento Do Corpo Academia",
    cnpj: "00.000.000/0001-00",
    phone: "(19) 99421-3710",
    whatsapp: "5519994213710", // Apenas números, com código do país (55) e DDD
    email: "contato@movimentodocorpo.com.br",
    address: "Rua Silvio Rizzardo, 1214 - Jardim Campos Eliseos, Campinas - SP",
    mapsLink: "https://maps.app.goo.gl/7MSj2G85Au7T6QQ78", // Link para abrir no Google Maps
    // Iframe do Google Maps (Copiar do Google Maps -> Compartilhar -> Incorporar um mapa)
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7349.464153216078!2d-47.11517620642089!3d-22.923251000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c85ed43f9909%3A0x5b27ac410bb7e2e4!2sAcademia%20Movimento%20do%20Corpo!5e0!3m2!1spt-BR!2sbr!4v1764766156447!5m2!1spt-BR!2sbr",
  },

  // ==================================================================================
  // 4. IMAGENS (Use caminhos da pasta public/images ou URLs externas)
  // ==================================================================================
  images: images,

  // ==================================================================================
  // 5. SEÇÕES DA PÁGINA
  // ==================================================================================

  // --- BANNER TOPO ---
  banner: {
    enabled: true, // true = aparece, false = esconde
    message: "PROMOÇÃO DE FIM DE ANO | 40% de Desconto no Plano Anual por Tempo Limitado!",
    highlightText: "PROMOÇÃO DE FIM DE ANO ", // Parte do texto que pode ter cor diferente (opcional)
    endDate: "2025-12-31T23:59:59", // Data fim do countdown (Formato ISO: YYYY-MM-DDTHH:mm:ss)
    styles: {
      backgroundColor: "#000000",
      textColor: "#ffffff",
      highlightColor: "#ff0000ff"
    }
  },

  // --- NAVBAR ---
  navbar: {
    enabled: true,
    logoText: "MOVIMENTO ",
    logoTextHighlight: "DO CORPO",
    ctaButtonText: "Matricule-se",
    menuItems: [
      { label: 'Início', href: '#hero' },
      { label: 'Modalidades', href: '#services' },
      { label: 'Equipe', href: '#about' },
      { label: 'Localização', href: '#location' },
      { label: 'Planos', href: '#pricing' },
    ]
  },

  // --- HERO SECTION (Principal) ---
  hero: {
    enabled: true,
    badge: "Jd. Campos Eliseos, Campinas/SP", //Nova unidade aberta"
    headline: {
      part1: "TRANSFORME SEU CORPO,", // Primeira linha
      part2: "RENOVE SUA",            // Segunda linha
      highlight: "ENERGIA"            // Texto destacado (cor principal)
    },
    subheadline: {
      text: "Treinos completos, estrutura moderna e profissionais que", //Estrutura completa, profissionais qualificados e o ambiente perfeito para você superar seus
      highlight: "acompanham você de verdade."
    },
    ctaPrimary: {
      text: "Conheça Nossos Planos",
      link: "#pricing"
    },
    ctaSecondary: {
      text: "Agende Sua Aula Experimental",
      whatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma aula experimental."
    },
  },

  // --- STATS (Prova Social) ---
  stats: {
    enabled: true,
    items: [
      {
        value: "4.9/5.0",
        label: "Avaliações no Google",
        icon: "Star" // Nome do ícone (lógica no componente)
      },
      {
        value: "+500",
        label: "Alunos Ativos",
        icon: Users
      },
      {
        value: "Desde 2002",
        label: "Transformando Vidas",
        icon: Calendar
      }
    ]
  },

  // --- PROBLEM SECTION (Dores) ---
  problem: {
    enabled: true,
    headline: "Por que você não evolui",
    headlineHighlight: "como gostaria?",
    description: "A maioria das academias falha nos pontos que mais importam para o seu progresso.",
    cards: [
      {
        icon: Ban,
        title: "Suporte de Verdade Faz Falta",
        description: "Instrutores ausentes, treinos genéricos e zero acompanhamento atrapalham sua evolução."
      },
      {
        icon: BatteryLow,
        title: "Ambiente Que Desmotiva",
        description: "Equipamentos antigos, calor excessivo e um clima sem energia dificultam manter o ritmo."
      },
      {
        icon: Frown,
        title: "Resultados Lentos ou Inexistentes",
        description: "Você treina, paga todo mês… mas o espelho não mostra a transformação que você espera."
      }
    ]
  },

  // --- SOLUTION SECTION (Solução) ---
  solution: {
    enabled: true,
    label: "A Forma Inteligente de Evoluir",
    headline: "Aqui, você treina do jeito que",
    headlineHighlight: "realmente gera resultado",
    image: images.solution,
    features: [
      {
        title: "Acompanhamento Real",
        description: "Instrutores atentos, correção de movimento e ajustes constantes conforme seu avanço."
      },
      {
        title: "Estrutura Premium",
        description: "Equipamentos modernos, ambiente climatizado e vestiários confortáveis para treinar melhor, sempre."
      },
      {
        title: "Metodologia Exclusiva",
        description: "Periodização estratégica focada em progresso contínuo — semana após semana."
      }
    ]
  },

  // --- SERVICES (Modalidades) ---
  services: {
    enabled: true,
    headline: "Nossas",
    headlineHighlight: "Modalidades",
    items: [
      {
        id: 1,
        title: 'Musculação',
        description: 'Hipertrofia, força e definição com treinos completos e equipamentos topo de linha.',
        image: images.service1,
      },
      {
        id: 2,
        title: 'Artes Marciais',
        description: 'Condicionamento, autoconfiança e explosão física com treinos práticos e intensos.',
        image: images.service2,
      },
      {
        id: 3,
        title: 'FitDance',
        description: 'Queime calorias rápido enquanto se diverte em aulas leves e energizantes.',
        image: images.service3,
      },
      {
        id: 4,
        title: 'Pilates',
        description: 'Flexibilidade, postura e alívio do estresse com movimentos controlados.',
        image: images.service4,
      },
    ]
  },

  // --- TESTIMONIALS (Depoimentos) ---
  testimonials: {
    enabled: true,
    label: "Depoimentos",
    headline: "QUEM TREINA,",
    headlineHighlight: "APROVA",
    items: [
      {
        id: 1,
        name: 'Carlos Silva',
        role: 'Aluno há 1 ano',
        content: 'Já perdi 7kg desde que entrei! Os professores acompanham cada treino e motivam demais. Academia top!',
        rating: 5,
        image: images.testimonial1,
      },
      {
        id: 2,
        name: 'Mariana Costa',
        role: 'Aluna há 6 meses',
        content: 'Finalmente me sinto confortável para treinar! Ambiente acolhedor e professores que realmente se importam.',
        rating: 5,
        image: images.testimonial3,
      },
      {
        id: 3,
        name: 'Pedro Alves',
        role: 'Aluno há 2 anos',
        content: 'Melhor academia da região. Tudo sempre limpo, equipamentos bons e preço justo. Recomendo!',
        rating: 5,
        image: images.testimonial2,
      },
    ]
  },

  // --- TEAM (Sobre/Equipe) ---
  team: {
    enabled: true,
    headline: "CONHEÇA NOSSA",
    headlineHighlight: "EQUIPE",
    members: [
      {
        name: "Alex Ferreira",
        role: "Head Coach",
        image: images.team3,
        instagram: "#"
      },
      {
        name: "Sarah Costa",
        role: "Instrutora de Pilates",
        image: images.team2,
        instagram: "#"
      },
      {
        name: "Bruno Santos",
        role: "Mestre de Artes Marciais",
        image: images.team1,
        instagram: "#"
      },
      {
        name: "Júlia Lima",
        role: "Professora de Zumba",
        image: images.team4,
        instagram: "#"
      }
    ]
  },

  // --- LOCATION (Localização) ---
  location: {
    enabled: true,
    headline: "LOCALIZAÇÃO",
    hours: [
      { label: "Seg - Qui", time: "05:00 - 23:00" },
      { label: "Sex", time: "05:00 - 22:00" },
      { label: "Sab", time: "08:00 - 14:00" },
      { label: "Dom", time: "08:00 - 12:00" }
    ],
    facilities: [
      { icon: Wifi, text: "Wi-Fi Grátis" },
      { icon: Car, text: "Estacionamento" },
      { icon: ShowerHead, text: "Chuveiros" },
      { icon: Lock, text: "Armários" }
    ]
  },

  // --- PRICING (Planos) ---
  pricing: {
    enabled: true,
    headline: "ESCOLHA SEU",
    headlineHighlight: "PLANO",
    subtitle: "Sem taxas escondidas. Cancele quando quiser.",
    plans: [
      {
        name: 'Anual',
        price: '89,99',
        period: '/mês',
        features: ['Musculação + Aulas (FitDance, Jump, Cross, Pilates e Artes Marciais)', 'Menor preço garantido', '12x no cartão', 'Fidelidade 12 meses'],
        highlighted: true,
        badgeText: "MAIS ESCOLHIDO",
        discountText: "40% de desconto",
        buttonText: "Quero o Anual",
        whatsappMessage: "Olá, tenho interesse no plano Anual."
      },
      {
        name: 'Semestral',
        price: '99,99',
        period: '/mês',
        features: ['Musculação + Aulas completas', 'Ótimo custo-benefício', '6x no cartão', 'Fidelidade 6 meses'],
        highlighted: false,
        badgeText: null,
        discountText: "-20% no semestral",
        buttonText: "Quero o Semestral",
        whatsappMessage: "Olá, tenho interesse no plano Semestral."
      },
      {
        name: 'Trimestral',
        price: '109,99',
        period: '/mês',
        features: ['Musculação + Aulas completas', 'Economia no curto prazo', '3x no cartão', 'Fidelidade 3 meses'],
        highlighted: false,
        badgeText: null,
        discountText: null,
        buttonText: "Quero o Trimestral",
        whatsappMessage: "Olá, tenho interesse no plano Trimestral."
      },
      {
        name: 'Mensal',
        price: '149,99',
        period: '/mês',
        features: ['Musculação + Aulas completas', 'Sem fidelidade', 'Renovação mensal', 'Pagamento flexível'],
        highlighted: false,
        badgeText: null,
        discountText: null,
        buttonText: "Quero o Mensal",
        whatsappMessage: "Olá, tenho interesse no plano Mensal."
      },
    ]
  },

  // --- FAQ (Perguntas Frequentes) ---
  faq: {
    enabled: true,
    headline: "DÚVIDAS",
    headlineHighlight: "FREQUENTES",
    items: [
      {
        question: 'Preciso pagar taxa de matrícula?',
        answer: 'Não! Nos 4 planos estamos com isenção total de matrícula por tempo limitado.',
      },
      {
        question: 'Posso trancar meu plano?',
        answer: 'Sim, você tem direito a trancar seu plano por até 30 dias a cada ano de contrato, sem custo adicional.',
      },
      {
        question: 'Quais as formas de pagamento?',
        answer: 'Aceitamos cartão de crédito (recorrência sem ocupar limite), débito e PIX mensal.',
      },
      {
        question: 'Tenho direito a levar convidado?',
        answer: 'Nos planos Anual e Semestral, você pode levar um convidado até 2 vezes por mês para treinar com você.',
      },
      {
        question: 'Vocês aceitam TotalPass, Gympass e Wellhub?',
        answer: 'Sim! Trabalhamos com as três plataformas e aceitamos a partir das categorias Basic/TP1 em diante.',
      },
    ]
  },

  // --- FINAL CTA (Chamada Final) ---
  finalCta: {
    enabled: true,
    headline: "A SUA MELHOR VERSÃO SÓ DEPENDE",
    headlineHighlight: "DO PRIMEIRO PASSO",
    subtitle: "Não espere a próxima segunda-feira. As vagas com isenção de matrícula estão acabando.",
    buttonText: "QUERO COMEÇAR HOJE",
    whatsappMessage: "Olá! Decidi começar hoje. Como faço minha matrícula?"
  },

  // --- FOOTER (Rodapé) ---
  footer: {
    enabled: true,
    description: "Treine melhor, evolua mais, sinta a diferença. Aqui, resultado não é promessa — é processo.",
    socialLinks: {
      instagram: "https://www.instagram.com/movimentodocorpo",
      facebook: "https://www.facebook.com/academiamovimentodocorpooficial",
      youtube: "https://youtube.com/movimentodocorpo"
    },
    quickLinks: [
      { label: 'Início', href: '#hero' },
      { label: 'Nossa Equipe', href: '#about' },
      { label: 'Modalidades', href: '#services' },
      { label: 'Planos', href: '#pricing' },
    ],
    policies: [
      { label: 'Termos de Uso', href: '#' },
      { label: 'Privacidade', href: '#' },
    ],
    copyright: "Todos os direitos reservados.",
    developedBy: "Desenvolvido com ♥ e disciplina pela ",
    developerName: "TAKOA",
    developerUrl: "https://takoadigital.com.br" //https://takoadigital.com.br
  },

  // --- COOKIE BANNER (LGPD) ---
  cookieBanner: {
    enabled: true, // true = aparece, false = esconde
    message: "Nosso site usa cookies para garantir que você tenha a melhor experiência. Ao acessá-lo, entenderemos que concorda com a nossa Política de Privacidade.",
    acceptButtonText: "Aceitar",
    privacyButtonText: "Política de Privacidade"
  }
};