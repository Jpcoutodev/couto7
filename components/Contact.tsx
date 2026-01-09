import React from 'react';
import { Mail, MessageSquare, Terminal, Zap, Share2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-dark">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-[0.4em] uppercase mb-2">
              <Zap className="w-4 h-4" /> {t.contact.category}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest max-w-lg">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/5519971453289"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative p-1 rounded-xl bg-gradient-to-br from-white/10 to-transparent hover:from-green-500/20 hover:to-green-500/5 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 bg-slate-900/90 backdrop-blur-xl p-6 rounded-lg border border-white/5 flex items-center space-x-6">
                <div className="p-4 rounded-full bg-green-500/10 text-green-500 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <MessageSquare size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{t.contact.whatsapp.title}</h3>
                  <p className="text-slate-400 font-light text-sm">{t.contact.whatsapp.description}</p>
                  <div className="pt-2 flex items-center gap-2 text-green-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    {t.contact.whatsapp.status}
                  </div>
                </div>
              </div>
            </a>

            <a
              href="mailto:coutodev7@gmail.com"
              className="group block relative p-1 rounded-xl bg-gradient-to-br from-white/10 to-transparent hover:from-primary/20 hover:to-primary/5 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 bg-slate-900/90 backdrop-blur-xl p-6 rounded-lg border border-white/5 flex items-center space-x-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{t.contact.email.title}</h3>
                  <p className="text-slate-400 font-light text-sm">{t.contact.email.description}</p>
                  <div className="pt-2 flex items-center gap-2 text-primary font-mono text-[10px] tracking-[0.2em] uppercase">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                    coutodev7@gmail.com
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="pt-12 border-t border-white/5 mt-12 flex flex-wrap gap-8 justify-center">
            {[
              { icon: Share2, label: t.contact.social, value: '@COUTODEV' },
              { icon: Terminal, label: t.contact.location, value: t.contact.locationValue }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <item.icon className="w-4 h-4 text-slate-600" />
                <div>
                  <p className="text-[9px] font-mono text-slate-500 tracking-widest">{item.label}</p>
                  <p className="text-xs font-bold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;