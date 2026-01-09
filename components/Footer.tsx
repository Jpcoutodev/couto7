import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-2">
              <img
                src="assets/logo.png"
                alt="Couto7 Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-xl font-bold font-mono tracking-tighter text-white">
                Couto<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">7</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm text-center md:text-left">
              {t.footer.tagline}
            </p>
            <p className="text-slate-600 text-xs mt-1">© {currentYear} João Paulo do Couto. {t.footer.rights}</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-do-couto-740b50a5/" target="_blank" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">LinkedIn</a>
            <a href="https://github.com/Jpcoutodev" target="_blank" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;