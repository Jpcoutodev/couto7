import React from 'react';
import { Smartphone, LayoutDashboard, Globe, Rocket, Bot, Workflow } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Smartphone, LayoutDashboard, Globe, Rocket, Bot, Workflow];
const techs = [
  ['Flutter', 'FlutterFlow', 'Nativo'],
  ['Supabase', 'React', 'SaaS'],
  ['SEO', 'Responsivo', 'Branding'],
  ['Alta Conversão', 'Analytics', 'Marketing'],
  ['Gemini', 'OpenAI', 'Agentes'],
  ['n8n', 'WhatsApp', 'Supabase'],
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="w-12 h-1 bg-primary/40"></div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{t.services.title} <span className="text-gradient">{t.services.titleHighlight}</span></h2>
          <p className="text-slate-500 font-mono text-sm max-w-xl uppercase tracking-widest">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-primary/10 hover:shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex p-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 group-hover:text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {techs[index].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/10 group-hover:border-primary/40"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;