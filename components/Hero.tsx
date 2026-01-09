import React from 'react';
import { ArrowRight, ChevronDown, Github, Linkedin, Monitor, Cpu, Terminal } from 'lucide-react';
import TypewriterText from './TypewriterText';
import FloatingParticles from './FloatingParticles';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const userPhotoUrl = "assets/foto-perfil.jpg";
  const fallbackUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-dark">
      <FloatingParticles count={40} opacity={0.4} maxSize={2} speed={0.3} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 left-10 text-[10px] font-mono text-primary/30 space-y-1 hidden lg:block">
          <p>FRAME_RATE: 60FPS</p>
          <p>LATENCY: 12MS</p>
          <p>ENCRYPTION: AES-256</p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 relative">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-sm bg-primary/10 border-l-2 border-primary backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
            <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-[0.3em] uppercase">{t.hero.status}</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white tracking-tighter">
              JOÃO PAULO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500 hover:animate-glitch cursor-default">
                DO COUTO
              </span>
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent"></div>

            <div className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light font-mono h-24">
              <span className="text-primary">&gt; </span>
              <TypewriterText
                text={t.hero.description}
                speed={30}
                cursorClassName="text-primary font-bold"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://wa.me/5519971453289"
              target="_blank"
              className="group relative px-8 py-4 bg-primary text-white font-bold rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center shadow-[0_0_30px_rgba(14,165,233,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Terminal className="w-5 h-5" />
                {t.hero.ctaBtn}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>

            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-sm hover:bg-white/5 transition-all hover:border-white/30 flex items-center group font-mono text-sm"
            >
              {t.hero.portfolioBtn}
            </a>
          </div>

          <div className="flex items-center gap-8 pt-10">
            {[
              { icon: Github, url: 'https://github.com/Jpcoutodev' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/jo%C3%A3o-paulo-do-couto-740b50a5/' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                className="text-slate-500 hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-violet-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative z-20 w-80 h-80 lg:w-[480px] lg:h-[480px] group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-white to-violet-600 rounded-3xl opacity-20 group-hover:opacity-60 blur-xl transition-all duration-700"></div>

            <div className="relative h-full w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={userPhotoUrl}
                alt="João Paulo do Couto"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackUrl) {
                    target.src = fallbackUrl;
                  }
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>

              <div className="absolute top-6 right-6 flex flex-col items-end space-y-1">
                <div className="w-8 h-1 bg-cyan-500 shadow-[0_0_10px_#0ea5e9]"></div>
                <span className="text-[8px] font-mono text-cyan-400">{t.hero.bioSync}: 98%</span>
              </div>

              <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/50 space-y-1">
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {t.hero.flutterEngine}</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {t.hero.webServices}</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span> {t.hero.n8nNodes}</p>
              </div>
            </div>

            <div className="absolute -right-10 top-1/4 glass p-4 rounded-xl border border-white/10 animate-float">
              <Cpu className="w-6 h-6 text-primary mb-2" />
              <p className="text-[10px] font-mono text-slate-500 uppercase">{t.hero.architecture}</p>
              <p className="text-xs font-bold text-white tracking-widest">{t.hero.ecosystems}</p>
            </div>

            <div className="absolute -left-10 bottom-1/4 glass p-4 rounded-xl border border-white/10 animate-float animation-delay-2000">
              <Monitor className="w-6 h-6 text-violet-500 mb-2" />
              <p className="text-[10px] font-mono text-slate-500 uppercase">{t.hero.focus}</p>
              <p className="text-xs font-bold text-white tracking-widest">{t.hero.performance}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group animate-pulse" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-[10px] font-mono text-slate-500 tracking-[0.5em] group-hover:text-primary transition-colors">{t.hero.scrollHint}</span>
        <ChevronDown className="w-5 h-5 text-slate-700 group-hover:text-primary" />
      </div>
    </section>
  );
};

export default Hero;