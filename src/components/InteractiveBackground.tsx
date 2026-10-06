import React, { useEffect, useRef } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  label?: string;
  type: 'core' | 'database' | 'cloud' | 'security' | 'api' | 'pipeline';
}

interface SignalPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

interface CodeFragment {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  text: string;
  alpha: number;
}

interface ForegroundParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    // Mouse coordinates with spring damping (lerp)
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0
    };

    let activeSectionId = 'hero';

    // Palette mapping for smooth environmental section lighting transitions
    const sectionColors: Record<string, { primary: [number, number, number]; secondary: [number, number, number] }> = {
      hero: { primary: [56, 189, 248], secondary: [2, 132, 199] },       // Electric Blue
      about: { primary: [59, 130, 246], secondary: [30, 58, 138] },      // Architectural Slate Navy
      skills: { primary: [6, 182, 212], secondary: [14, 116, 144] },     // Cyan Ecosystem Teal
      projects: { primary: [99, 102, 241], secondary: [56, 189, 248] },  // Interactive Indigo Network
      journey: { primary: [14, 165, 233], secondary: [29, 78, 216] },    // Sky Blue System
      education: { primary: [79, 70, 229], secondary: [14, 165, 233] },  // Violet Deep Slate
      github: { primary: [16, 185, 129], secondary: [6, 182, 212] },     // Git Branch Emerald
      contact: { primary: [56, 189, 248], secondary: [15, 23, 42] }      // Clean Dark Atmosphere
    };

    const currentPrimaryRGB = [56, 189, 248];
    const currentSecondaryRGB = [2, 132, 199];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Section Observer
    const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'education', 'github', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            activeSectionId = entry.target.id;
          }
        });
      },
      { threshold: [0.3, 0.6] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // PLANE 3: 3D Engineering Network Nodes
    const nodeLabels = ['Central Core', 'DB Cluster', 'Cloud Gateway', 'Security Vault', 'API Ingress', 'Data Pipeline', 'Cache Cluster', 'Auth Service'];
    const nodeCount = isMobile ? 16 : 32;
    const nodes: Node3D[] = [];
    const focalLength = 450;

    for (let i = 0; i < nodeCount; i++) {
      const baseX = (Math.random() - 0.5) * width * 1.3;
      const baseY = (Math.random() - 0.5) * height * 1.3;
      const baseZ = (Math.random() - 0.5) * 450;

      nodes.push({
        x: baseX,
        y: baseY,
        z: baseZ,
        baseX,
        baseY,
        baseZ,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 2,
        label: i < nodeLabels.length ? nodeLabels[i] : undefined,
        type: i === 0 ? 'core' : (['database', 'cloud', 'security', 'api', 'pipeline'][i % 5] as Node3D['type'])
      });
    }

    // Signal Packets
    const packets: SignalPacket[] = [];
    const maxPackets = isMobile ? 5 : 12;

    const createPacket = () => {
      if (nodes.length < 2) return;
      const fromNode = Math.floor(Math.random() * nodes.length);
      let toNode = Math.floor(Math.random() * nodes.length);
      while (toNode === fromNode) {
        toNode = Math.floor(Math.random() * nodes.length);
      }
      packets.push({
        fromNode,
        toNode,
        progress: 0,
        speed: Math.random() * 0.007 + 0.003
      });
    };

    for (let i = 0; i < maxPackets; i++) createPacket();

    // PLANE 2: Live Code Atmosphere Snippets
    const rawCodeSnippets = [
      'const project = "Lost & Found";',
      'SELECT * FROM projects WHERE status = "ACTIVE";',
      'public class SoftwareEngineer { ... }',
      'model.predict(features)',
      'db.query(sql, [params])',
      'async fetchUserData()',
      'git commit -m "feat: core architecture"'
    ];

    const codeFragments: CodeFragment[] = [];
    const fragCount = isMobile ? 3 : 7;
    for (let i = 0; i < fragCount; i++) {
      codeFragments.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 300 - 150,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        text: rawCodeSnippets[i % rawCodeSnippets.length],
        alpha: Math.random() * 0.18 + 0.08
      });
    }

    // PLANE 1: Foreground Subtle Particles
    const fgParticles: ForegroundParticle[] = [];
    const fgCount = isMobile ? 12 : 24;
    for (let i = 0; i < fgCount; i++) {
      fgParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.3 + 0.1
      });
    }

    // Main 60 FPS Render Loop
    const render = () => {
      // 1. Mouse Lerp
      mouse.vx = (mouse.targetX - mouse.x) * 0.04;
      mouse.vy = (mouse.targetY - mouse.y) * 0.04;
      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      // 2. Interpolate Palette
      const targetPalette = sectionColors[activeSectionId] || sectionColors.hero;
      for (let c = 0; c < 3; c++) {
        currentPrimaryRGB[c] += (targetPalette.primary[c] - currentPrimaryRGB[c]) * 0.025;
        currentSecondaryRGB[c] += (targetPalette.secondary[c] - currentSecondaryRGB[c]) * 0.025;
      }

      const pColor = `rgb(${Math.round(currentPrimaryRGB[0])}, ${Math.round(currentPrimaryRGB[1])}, ${Math.round(currentPrimaryRGB[2])})`;

      // PLANE 5: Atmospheric Background Base (#06080e)
      ctx.fillStyle = '#06080e';
      ctx.fillRect(0, 0, width, height);

      // Volumetric Ambient Lighting & Cursor Spotlight
      const ambientGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.55
      );
      ambientGlow.addColorStop(0, `rgba(${currentPrimaryRGB.join(',')}, 0.065)`);
      ambientGlow.addColorStop(0.5, `rgba(${currentSecondaryRGB.join(',')}, 0.03)`);
      ambientGlow.addColorStop(1, 'rgba(6, 8, 14, 0)');

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // PLANE 4: Technical Perspective Grid
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
      ctx.lineWidth = 0.5;

      const gridSpacing = 64;
      const mouseOffsetX = (mouse.x - width / 2) * 0.018;
      const mouseOffsetY = (mouse.y - height / 2) * 0.018;

      const gridStartY = (mouseOffsetY % gridSpacing) - gridSpacing;
      for (let y = gridStartY; y < height + gridSpacing; y += gridSpacing) {
        const fade = Math.sin((y / height) * Math.PI);
        ctx.strokeStyle = `rgba(255, 255, 255, ${(0.02 * fade).toFixed(4)})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const gridStartX = (mouseOffsetX % gridSpacing) - gridSpacing;
      for (let x = gridStartX; x < width + gridSpacing; x += gridSpacing) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.restore();

      // PLANE 3: 3D Engineering Network Mesh
      const projectedNodes: { px: number; py: number; scale: number; alpha: number; node: Node3D; index: number }[] = [];

      nodes.forEach((node, idx) => {
        node.baseX += node.vx;
        node.baseY += node.vy;
        node.baseZ += node.vz;

        const boundX = width * 0.65;
        const boundY = height * 0.65;
        if (Math.abs(node.baseX) > boundX) node.vx *= -1;
        if (Math.abs(node.baseY) > boundY) node.vy *= -1;
        if (Math.abs(node.baseZ) > 220) node.vz *= -1;

        // Cursor Force Field
        const screenCenterX = width / 2 + node.baseX;
        const screenCenterY = height / 2 + node.baseY;
        const dx = mouse.x - screenCenterX;
        const dy = mouse.y - screenCenterY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        let mouseRepulsionX = 0;
        let mouseRepulsionY = 0;
        if (distToMouse < 200) {
          const force = (200 - distToMouse) / 200;
          mouseRepulsionX = -(dx / distToMouse) * force * 18;
          mouseRepulsionY = -(dy / distToMouse) * force * 18;
        }

        const parallaxX = (mouse.x - width / 2) * 0.015 * (node.baseZ / 220);
        const parallaxY = (mouse.y - height / 2) * 0.015 * (node.baseZ / 220);

        node.x = node.baseX + mouseRepulsionX + parallaxX;
        node.y = node.baseY + mouseRepulsionY + parallaxY;
        node.z = node.baseZ;

        const scale = focalLength / (focalLength + node.z);
        const px = width / 2 + node.x * scale;
        const py = height / 2 + node.y * scale;
        const alpha = Math.max(0.1, Math.min(0.65, (node.z + 250) / 450));

        projectedNodes.push({ px, py, scale, alpha, node, index: idx });
      });

      // Connections between nearby nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.px - n2.px;
          const dy = n1.py - n2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isMobile ? 110 : 170;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.11 * Math.min(n1.alpha, n2.alpha);
            ctx.save();
            ctx.strokeStyle = `rgba(${currentPrimaryRGB.join(',')}, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.75 * Math.min(n1.scale, n2.scale);
            ctx.beginPath();
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Signal Data Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          createPacket();
          continue;
        }

        const n1 = projectedNodes[p.fromNode];
        const n2 = projectedNodes[p.toNode];
        if (!n1 || !n2) continue;

        const curX = n1.px + (n2.px - n1.px) * p.progress;
        const curY = n1.py + (n2.py - n1.py) * p.progress;

        ctx.save();
        ctx.fillStyle = pColor;
        ctx.shadowColor = pColor;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(curX, curY, 2 * Math.min(n1.scale, n2.scale), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw Nodes & Labels
      projectedNodes.forEach(({ px, py, scale, alpha, node }) => {
        ctx.save();
        ctx.fillStyle = `rgba(${currentPrimaryRGB.join(',')}, ${(alpha * 0.75).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(px, py, node.radius * scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, (node.radius * 0.45) * scale), 0, Math.PI * 2);
        ctx.fill();

        if (node.label && scale > 0.85 && alpha > 0.3) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(203, 213, 225, ${(alpha * 0.45).toFixed(2)})`;
          ctx.fillText(node.label, px + 7, py + 3);
        }
        ctx.restore();
      });

      // PLANE 2: Live Code Atmosphere Fragments
      ctx.font = '10px "JetBrains Mono", monospace';
      codeFragments.forEach((frag) => {
        frag.x += frag.vx;
        frag.y += frag.vy;

        if (frag.x < -100) frag.x = width + 100;
        if (frag.x > width + 100) frag.x = -100;
        if (frag.y < -50) frag.y = height + 50;
        if (frag.y > height + 50) frag.y = -50;

        const parallaxX = (mouse.x - width / 2) * 0.008;
        const parallaxY = (mouse.y - height / 2) * 0.008;

        ctx.save();
        ctx.fillStyle = `rgba(186, 230, 253, ${(frag.alpha * 0.6).toFixed(3)})`;
        ctx.fillText(frag.text, frag.x + parallaxX, frag.y + parallaxY);
        ctx.restore();
      });

      // PLANE 1: Foreground Floating Particles
      fgParticles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const parallaxX = (mouse.x - width / 2) * 0.025;
        const parallaxY = (mouse.y - height / 2) * 0.025;

        ctx.save();
        ctx.fillStyle = `rgba(224, 242, 254, ${(p.alpha * 0.7).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
