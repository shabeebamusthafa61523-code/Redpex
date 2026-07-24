import React, { useEffect, useRef } from 'react';

export default function HeroCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isDark = theme === 'dark';

    // Particle setup
    const particleCount = Math.min(70, Math.floor(width / 22));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        color: isDark 
          ? (Math.random() > 0.4 ? '#be1e2d' : Math.random() > 0.5 ? '#ff4d4d' : '#f59e0b')
          : (Math.random() > 0.4 ? '#be1e2d' : Math.random() > 0.5 ? '#d97706' : '#e63946'),
        opacity: isDark ? (Math.random() * 0.6 + 0.2) : (Math.random() * 0.5 + 0.15),
        speedY: -(Math.random() * 1.1 + 0.3),
        speedX: (Math.random() - 0.5) * 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial background highlight matching light/dark mode
      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.4,
        50,
        width / 2,
        height * 0.4,
        Math.max(width, height) * 0.65
      );

      if (isDark) {
        gradient.addColorStop(0, 'rgba(190, 30, 45, 0.15)');
        gradient.addColorStop(0.5, 'rgba(10, 13, 20, 0.6)');
        gradient.addColorStop(1, 'rgba(10, 13, 20, 0.95)');
      } else {
        gradient.addColorStop(0, 'rgba(190, 30, 45, 0.08)');
        gradient.addColorStop(0.5, 'rgba(250, 248, 245, 0.7)');
        gradient.addColorStop(1, 'rgba(250, 248, 245, 0.95)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Embers
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(angle) * p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0 || p.x > width) {
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.opacity));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.radius * 3;
        ctx.fill();
        ctx.restore();
      });

      angle += 0.03;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}
