import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    };

    return (
        <span ref={ref} className={className}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

export default AnimatedCounter;
