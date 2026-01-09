import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    speed?: number;
    className?: string;
    cursorClassName?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = 50,
    className = '',
    cursorClassName = ''
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        setDisplayedText('');

        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                // Keep cursor blinking after typing is done
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    // Blink cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className={className}>
            {displayedText}
            <span className={`${cursorClassName} ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                |
            </span>
        </span>
    );
};

export default TypewriterText;
