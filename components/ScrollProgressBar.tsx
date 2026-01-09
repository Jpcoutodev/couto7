import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-slate-900/50">
            <div
                className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;
