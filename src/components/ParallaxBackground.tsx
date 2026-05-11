"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  layer: number;
  dx: number;
  dy: number;
}

export function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = window.innerWidth;
      const h = window.innerHeight;
      const area = w * h;

      // Layer 0: Slow grid points
      const gridCount = Math.floor(area / 25000);
      for (let i = 0; i < gridCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.05 + 0.02,
          opacity: Math.random() * 0.15 + 0.05,
          layer: 0,
          dx: 0,
          dy: 0,
        });
      }

      // Layer 1: Medium red particles
      const mediumCount = Math.floor(area / 15000);
      for (let i = 0; i < mediumCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.15 + 0.08,
          opacity: Math.random() * 0.3 + 0.1,
          layer: 1,
          dx: 0,
          dy: 0,
        });
      }

      // Layer 2: Fast accent particles (fewer, larger)
      const fastCount = Math.floor(area / 50000);
      for (let i = 0; i < fastCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 3 + 2,
          speed: Math.random() * 0.3 + 0.2,
          opacity: Math.random() * 0.25 + 0.1,
          layer: 2,
          dx: 0,
          dy: 0,
        });
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    resize();

    let animationFrameId: number;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Process particles by layer
      const byLayer: Particle[][] = [[], [], []];
      particles.forEach((p) => {
        byLayer[p.layer].push(p);
      });

      // Calculate global mouse parallax offsets for each layer
      // We want to shift the background in the opposite direction of the mouse
      const mouseShiftX = (mouseX / w - 0.5);
      const mouseShiftY = (mouseY / h - 0.5);

      // Draw connections for layer 0 (grid feel)
      // Connections need to account for the same mouse shift to stay aligned
      const l0ShiftX = mouseShiftX * 20;
      const l0ShiftY = mouseShiftY * 20;
      
      const drawConnections = (layerParticles: Particle[], maxDist: number, opacity: number, layerX: number, layerY: number) => {
        ctx.strokeStyle = `rgba(230, 0, 0, ${opacity})`;
        ctx.lineWidth = 0.5;

        for (let i = 0; i < layerParticles.length; i++) {
          for (let j = i + 1; j < layerParticles.length; j++) {
            const a = layerParticles[i];
            const b = layerParticles[j];
            
            // Calculate current y positions including scroll
            const ay = (a.y - scrollY * a.speed) % (h + 100);
            const by = (b.y - scrollY * b.speed) % (h + 100);
            const finalAy = ay < -50 ? ay + h + 100 : ay;
            const finalBy = by < -50 ? by + h + 100 : by;

            const dx = a.x - b.x;
            const dy = finalAy - finalBy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const lineOpacity = opacity * (1 - dist / maxDist);
              ctx.strokeStyle = `rgba(230, 0, 0, ${lineOpacity})`;
              ctx.beginPath();
              ctx.moveTo(a.x - layerX, finalAy - layerY);
              ctx.lineTo(b.x - layerX, finalBy - layerY);
              ctx.stroke();
            }
          }
        }
      };

      drawConnections(byLayer[0], 80, 0.08, l0ShiftX, l0ShiftY);

      // Draw all particles
      particles.forEach((p) => {
        // Parallax offset based on scroll
        const parallaxY = (p.y - scrollY * p.speed) % (h + 100);
        const scrollYPos = parallaxY < -50 ? parallaxY + h + 100 : parallaxY;

        // Mouse Parallax Offset (different intensity per layer)
        // Layer 0: Subtle (20px), Layer 1: Medium (40px), Layer 2: High (70px)
        const intensities = [20, 40, 70];
        const mX = mouseShiftX * intensities[p.layer];
        const mY = mouseShiftY * intensities[p.layer];

        const finalX = p.x - mX;
        const finalY = scrollYPos - mY;

        let color: string;
        if (p.layer === 0) {
          color = `rgba(230, 0, 0, ${p.opacity})`;
        } else if (p.layer === 1) {
          color = `rgba(230, 0, 0, ${p.opacity})`;
        } else {
          color = `rgba(229, 226, 225, ${p.opacity})`; // #e5e2e1 accent
        }

        ctx.beginPath();
        ctx.arc(finalX, finalY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        background: "transparent",
        opacity: 0.6,
      }}
    />
  );
}
