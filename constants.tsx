import { Smartphone, LayoutDashboard, Globe, Rocket, Bot, Workflow } from 'lucide-react';
import { NavItem, Service, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre Mim', href: '#hero' },
  { label: 'O Que Faço', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Aplicativos Nativos',
    description: 'Desenvolvimento de apps mobile de alta performance para iOS e Android. Fluidez, design premium e funcionalidades offline.',
    icon: Smartphone,
    techs: ['Flutter', 'FlutterFlow', 'Nativo']
  },
  {
    title: 'Sistemas & Backend',
    description: 'Dashboards administrativos e arquiteturas de banco de dados escaláveis para gerir seu negócio.',
    icon: LayoutDashboard,
    techs: ['Supabase', 'React', 'SaaS']
  },
  {
    title: 'Sites Institucionais',
    description: 'Presença digital profissional para empresas. Design responsivo e otimizado para todos os dispositivos.',
    icon: Globe,
    techs: ['SEO', 'Responsivo', 'Branding']
  },
  {
    title: 'Landing Pages',
    description: 'Páginas focadas em conversão e vendas. Velocidade extrema e design persuasivo para suas campanhas.',
    icon: Rocket,
    techs: ['Alta Conversão', 'Analytics', 'Marketing']
  },
  {
    title: 'Automações com IA',
    description: 'Implementação de Inteligência Artificial para análise de dados, criação de conteúdo e processos inteligentes.',
    icon: Bot,
    techs: ['Gemini', 'OpenAI', 'Agentes']
  },
  {
    title: 'Automações & WhatsApp',
    description: 'Bots de WhatsApp e integração de sistemas (CRM, Email) via n8n para eliminar trabalho manual.',
    icon: Workflow,
    techs: ['n8n', 'WhatsApp', 'Supabase']
  }
];

export const PROJECTS: Project[] = [
  {
    title: "StrideUp Fit",
    category: "Health & Fitness",
    description: "Plataforma completa de fitness e saúde. Um ecossistema digital para transformar vidas através do movimento.",
    image: "assets/strideup-fit.jpg",
    stats: [
      { label: "Plataforma", value: "Web/App" },
      { label: "Link", value: "https://home.strideup-fit.app/" }
    ]
  },
  {
    title: "Par Cristão",
    category: "Social & Dating",
    description: "Aplicativo de relacionamento focado em conectar pessoas com os mesmos propósitos e valores.",
    image: "assets/par-cristao.png",
    stats: [
      { label: "Categoria", value: "Relacionamento" },
      { label: "Link", value: "parcristao.app" }
    ]
  },
  {
    title: "Automações Corporativas",
    category: "Sistemas & n8n",
    description: "Fluxos de automação complexos desenvolvidos para otimizar processos empresariais utilizando n8n e APIs diversas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "Eficiência", value: "+300%" },
      { label: "Tech", value: "n8n" }
    ]
  }
];