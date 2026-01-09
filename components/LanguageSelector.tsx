import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

interface LanguageSelectorProps {
    className?: string;
}

const languages: { code: Language; label: string; fullName: string }[] = [
    { code: 'pt', label: 'PT', fullName: 'Português' },
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'es', label: 'ES', fullName: 'Español' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (langCode: Language) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(l => l.code === language);

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-lg transition-all duration-300"
            >
                <Globe className="w-4 h-4" />
                <span className="font-bold">{currentLanguage?.label}</span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute top-full right-0 mt-2 z-50 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-fade-in-down">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full px-4 py-2.5 text-left text-sm font-mono flex items-center gap-3 transition-all ${language === lang.code
                                        ? 'bg-primary/20 text-primary'
                                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className="font-bold w-6">{lang.label}</span>
                                <span className="text-xs opacity-60">{lang.fullName}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSelector;
