import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    pulseSpeed: number;
    pulsePhase: number;
}

interface FloatingParticlesProps {
    count?: number;
    opacity?: number;
    color?: string;
    maxSize?: number;
    speed?: number;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
    count = 50,
    opacity = 0.3,
    color = '14, 165, 233', // cyan RGB
    maxSize = 3,
    speed = 0.5
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < count; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * maxSize + 1,
                    speedX: (Math.random() - 0.5) * speed,
                    speedY: (Math.random() - 0.5) * speed,
                    opacity: Math.random() * 0.5 + 0.3,
                    pulseSpeed: Math.random() * 0.02 + 0.01,
                    pulsePhase: Math.random() * Math.PI * 2
                });
            }
        };
        initParticles();

        // Animation loop
        let time = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.016;

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Pulsing opacity
                const pulse = Math.sin(time * particle.pulseSpeed * 60 + particle.pulsePhase) * 0.3 + 0.7;
                const currentOpacity = particle.opacity * pulse;

                // Draw particle with glow
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 3
                );
                gradient.addColorStop(0, `rgba(${color}, ${currentOpacity})`);
                gradient.addColorStop(0.5, `rgba(${color}, ${currentOpacity * 0.3})`);
                gradient.addColorStop(1, `rgba(${color}, 0)`);

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Draw core
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`;
                ctx.fill();

                // Draw connections to nearby particles
                particlesRef.current.forEach((other, otherIndex) => {
                    if (index === otherIndex) return;
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const lineOpacity = (1 - distance / 150) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(${color}, ${lineOpacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [count, color, maxSize, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity }}
        />
    );
};

export default FloatingParticles;
