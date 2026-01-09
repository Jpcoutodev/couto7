import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: t.nav.about, href: '#hero' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg shadow-primary/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src="assets/logo.png"
            alt="Couto7 Logo"
            className="h-10 w-auto object-contain group-hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.5)] transition-all duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="text-2xl font-bold font-mono tracking-tighter text-white">
            Couto<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">7</span>
          </span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <LanguageSelector />
          <a
            href="#contact"
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:border-violet-500/50"
          >
            {t.nav.talkBtn}
          </a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <LanguageSelector />
        </div>
      )}
    </nav>
  );
};

export default Navbar;