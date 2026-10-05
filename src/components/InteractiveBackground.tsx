import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with target interpolation for ultra-smooth movement
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Developer Code & Tech Symbols for abstract background floating layer
    const symbols = [
      '{ }', '</>', '=>', '0101', 'async', 'SQL', 'import', '[ ]',
      'const', 'void', 'git', 'API', 'db.query()', 'return', 'fn()'
    ];

    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      symbol: string;
      alpha: number;
      layer: number; // 1 to 3 for depth parallax
    }

    const numParticles = Math.min(Math.floor(width / 35), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 11 + 10,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        alpha: Math.random() * 0.25 + 0.08,
        layer: Math.floor(Math.random() * 3) + 1,
      });
    }

    // Main render loop
    const render = () => {
      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient mouse light glow
      const ambientGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.45
      );
      ambientGlow.addColorStop(0, 'rgba(14, 165, 233, 0.07)'); // Subtle cyan glow
      ambientGlow.addColorStop(0.5, 'rgba(30, 58, 138, 0.03)'); // Deep blue transition
      ambientGlow.addColorStop(1, 'rgba(6, 8, 15, 0)');

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Perspective grid shift calculation based on mouse offset from center
      const offsetX = (mouse.x - width / 2) * 0.015;
      const offsetY = (mouse.y - height / 2) * 0.015;

      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 0.5;

      const gridSize = 48;
      const startX = (offsetX % gridSize) - gridSize;
      const startY = (offsetY % gridSize) - gridSize;

      for (let x = startX; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = startY; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Render node connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.save();
            ctx.strokeStyle = `rgba(56, 189, 248, ${((1 - dist / 130) * 0.08).toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // 4. Draw floating particles & symbols with depth parallax
      ctx.font = '11px "JetBrains Mono", "Fira Code", monospace';

      particles.forEach((p) => {
        // Move particle slowly
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap edges
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        // Parallax offset according to layer depth
        const parallaxX = (mouse.x - width / 2) * (p.layer * 0.008);
        const parallaxY = (mouse.y - height / 2) * (p.layer * 0.008);

        const renderX = p.x + parallaxX;
        const renderY = p.y + parallaxY;

        ctx.save();
        ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha})`;

        // Draw small glowing dot or code text
        if (p.layer === 1) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillText(p.symbol, renderX, renderY);
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Soft Vignette Depth Overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
    </div>
  );
};
