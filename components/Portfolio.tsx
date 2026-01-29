import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const projects = [
  {
    title: "StrideUp Fit",
    category: "Health & Fitness",
    image: "assets/strideup-fit.jpg",
    stats: [
      { label: "Plataforma", value: "Web/App" },
      { label: "Link", value: "https://home.strideup-fit.app/" }
    ]
  },

  {
    title: "Automações Corporativas",
    category: "Sistemas & n8n",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "Eficiência", value: "+300%" },
      { label: "Tech", value: "n8n" }
    ]
  }
];

const descriptions = {
  pt: [
    "Plataforma completa de fitness e saúde. Um ecossistema digital para transformar vidas através do movimento.",

    "Fluxos de automação complexos desenvolvidos para otimizar processos empresariais utilizando n8n e APIs diversas."
  ],
  en: [
    "Complete fitness and health platform. A digital ecosystem to transform lives through movement.",

    "Complex automation flows developed to optimize business processes using n8n and various APIs."
  ],
  es: [
    "Plataforma completa de fitness y salud. Un ecosistema digital para transformar vidas a través del movimiento.",

    "Flujos de automatización complejos desarrollados para optimizar procesos empresariales usando n8n y diversas APIs."
  ]
};

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-32 relative bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-[0.4em] uppercase">
              <Terminal className="w-4 h-4" /> {t.portfolio.category}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">{t.portfolio.title} <span className="text-gradient">{t.portfolio.titleHighlight}</span></h2>
          </div>
          <p className="text-slate-500 font-mono text-xs max-w-xs uppercase leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>

                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-primary/30">
                  <div className="h-10 bg-slate-800/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-red-500/50 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-yellow-500/50 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-green-500/50 transition-colors"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      {t.portfolio.viewProject}{index + 1} <div className="w-2 h-2 bg-green-500/50 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden scanline-effect bg-white/90">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                      }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 lg:right-6 glass p-4 rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] font-mono text-primary mb-1 tracking-widest">{t.portfolio.deployStatus}</p>
                  <p className="text-white font-bold text-xs uppercase">{t.portfolio.stable}</p>
                </div>
              </div>

              <div className="w-full lg:w-2/5 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.3em]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-5xl font-black text-white tracking-tighter group-hover:text-gradient transition-all">{project.title}</h3>
                </div>

                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  {descriptions[language][index]}
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-slate-500 text-[10px] uppercase font-mono tracking-widest">{stat.label}</div>
                      <div className="text-white font-bold text-xl group-hover:text-primary transition-colors truncate" title={stat.value}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  {project.stats.find(s => s.label.toLowerCase().includes('link'))?.value && (
                    <a
                      href={(() => {
                        const linkValue = project.stats.find(s => s.label.toLowerCase().includes('link'))?.value || '';
                        return linkValue.startsWith('http') ? linkValue : `https://${linkValue}`;
                      })()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-mono text-sm border border-white/10 rounded-sm transition-all group/btn"
                    >
                      {t.portfolio.accessBtn}
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;