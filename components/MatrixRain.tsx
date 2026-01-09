import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
    opacity?: number;
    speed?: number;
    density?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
    opacity = 0.15,
    speed = 1,
    density = 40
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = 500; // Top portion
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Characters (binary)
        const chars = '01';
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);

        // Array to track y position of each column
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random positions above canvas
        }

        // Drawing function
        const draw = () => {
            // Semi-transparent dark to create fade trail effect
            ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Cyan/green color for Matrix effect
            ctx.fillStyle = '#0ea5e9';
            ctx.font = `${fontSize}px "JetBrains Mono", "Courier New", monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = chars[Math.floor(Math.random() * chars.length)];

                // Draw character
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                if (y > 0) {
                    ctx.fillText(char, x, y);
                }

                // Reset drop to top with random delay
                if (drops[i] * fontSize > canvas.height) {
                    if (Math.random() > 0.98) {
                        drops[i] = 0;
                    }
                }

                // Move drop down
                drops[i] += speed * 0.3;
            }
        };

        // Animation loop
        const interval = setInterval(draw, 60);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [opacity, speed, density]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-[500px] pointer-events-none"
            style={{ opacity: opacity }}
        />
    );
};

export default MatrixRain;
