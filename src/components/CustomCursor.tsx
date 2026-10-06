import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, .interactive-card');
      const projectCard = target.closest('[data-cursor-text]');

      if (projectCard) {
        setIsHovered(true);
        setCursorText(projectCard.getAttribute('data-cursor-text') || 'VIEW PROJECT →');
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Smooth lerp animation for cursor trailing dot
  useEffect(() => {
    if (!isVisible) return;
    let animId: number;

    const loop = () => {
      setPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22
        };
      });
      animId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animId);
  }, [targetPos, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Small Precision Cursor Center Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${targetPos.x - 4}px, ${targetPos.y - 4}px, 0) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Trailing Outer Ring / Spotlight Field */}
      <div
        className={`fixed rounded-full border transition-all duration-300 ease-out flex items-center justify-center font-mono text-[10px] font-semibold tracking-wider ${
          cursorText
            ? 'px-3 py-1.5 rounded-xl bg-cyan-500/20 border-cyan-400/60 text-cyan-200 backdrop-blur-sm shadow-lg shadow-cyan-500/20'
            : isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-cyan-500/10 border-cyan-400/40 shadow-md shadow-cyan-500/10'
            : 'w-8 h-8 -ml-4 -mt-4 bg-transparent border-slate-400/20'
        }`}
        style={{
          transform: cursorText
            ? `translate3d(${pos.x + 12}px, ${pos.y + 12}px, 0)`
            : `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        {cursorText}
      </div>
    </div>
  );
};
