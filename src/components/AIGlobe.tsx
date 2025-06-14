
import React, { useRef, useEffect } from "react";

// Full-parent animated particles background (fills the Hero section only)
const PARTICLE_COUNT = 34;
const PARTICLE_COLORS = [
  "#93f6f1", "#adadfd", "#e2e0fb", "#84f1e9",
  "#17e3bf", "#a08bfa", "#82f0c2", "#8ee7e1"
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  r: number;
  baseR: number;
  color: string;
  t: number;
  alpha: number;
};

function createParticles(canvasWidth: number, canvasHeight: number): Particle[] {
  const arr: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const baseR = random(9, 22);
    const x = random(0, canvasWidth);
    const y = random(0, canvasHeight);
    arr.push({
      x,
      y,
      baseX: x,
      baseY: y,
      vx: random(-0.24, 0.24),
      vy: random(-0.24, 0.24),
      r: baseR,
      baseR,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      t: random(0, Math.PI * 2),
      alpha: random(0.44, 0.88),
    });
  }
  return arr;
}

export default function AIGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[] | null>(null);
  const animationFrame = useRef<number | null>(null);

  // Resize canvas and particles on its parent container resize
  useEffect(() => {
    function resizeCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      // Use parent node's dimensions
      const parent = canvas.parentElement;
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      canvas.width = parentRect.width * dpr;
      canvas.height = parentRect.height * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      // Re-create particles to fill current area
      particles.current = createParticles(canvas.width, canvas.height);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Animate particles in morphing orbits and random walks
  useEffect(() => {
    function animate() {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const dpr = window.devicePixelRatio || 1;
      // Use parent node's dimensions for resizing
      const parent = canvas.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const desiredWidth = parentRect.width * dpr;
        const desiredHeight = parentRect.height * dpr;
        if (canvas.width !== desiredWidth || canvas.height !== desiredHeight) {
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          particles.current = createParticles(desiredWidth, desiredHeight);
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!particles.current) {
        particles.current = createParticles(canvas.width, canvas.height);
      }

      const now = Date.now();
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];

        p.t += 0.010 + 0.003 * Math.sin(now * 0.00023 + i * 0.38);
        p.x += p.vx + Math.cos(p.t + i) * 0.13;
        p.y += p.vy + Math.sin(p.t + i) * 0.19;

        // Bounce off edges in the section area
        if (p.x < p.r * 0.7) {
          p.x = p.r * 0.7;
          p.vx = Math.abs(p.vx);
        }
        if (p.y < p.r * 0.7) {
          p.y = p.r * 0.7;
          p.vy = Math.abs(p.vy);
        }
        if (p.x > canvas.width - p.r * 0.7) {
          p.x = canvas.width - p.r * 0.7;
          p.vx = -Math.abs(p.vx);
        }
        if (p.y > canvas.height - p.r * 0.7) {
          p.y = canvas.height - p.r * 0.7;
          p.vy = -Math.abs(p.vy);
        }

        // Morph radius & alpha
        p.r = p.baseR * (0.82 + 0.19 * Math.sin(now * 0.0007 + i * 0.9));
        p.alpha = 0.6 + 0.24 * Math.sin(now * 0.0016 + i * 0.8);

        // Draw shadow glow
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha * 0.4);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 12, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.filter = `blur(16px)`;
        ctx.fill();
        ctx.restore();

        // Draw main particle
        ctx.save();
        ctx.globalAlpha = Math.max(0.07, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.globalCompositeOperation = "lighter";
        ctx.fill();
        ctx.restore();
      }

      // Small morphing, spiky 'intelligent aura' shape at random intervals for generative effect
      // Anchors are spread within the section
      if (canvas.width > 300 && canvas.height > 200) {
        for (let k = 0; k < 2; k++) {
          const cx = canvas.width * (0.27 + 0.32 * k + 0.06 * Math.sin(now * 0.0008 + k));
          const cy = canvas.height * (0.37 + 0.33 * k + 0.04 * Math.cos(now * 0.001 + 2 * k));
          const baseR = 76 + 22 * Math.sin(now * 0.0012 + k * 3);
          ctx.save();
          ctx.globalAlpha = 0.075;
          ctx.beginPath();
          for (let i = 0; i <= 16; i++) {
            const angle = (i / 16) * 2 * Math.PI;
            const morph =
              Math.sin(now * 0.00068 + i * 2 + k * 10) * 18 +
              Math.cos(now * 0.00032 + i * 2.1 + k * 6.3) * 13;
            const r = baseR + morph;
            ctx.lineTo(
              cx + Math.cos(angle) * r,
              cy + Math.sin(angle) * r
            );
          }
          ctx.closePath();
          ctx.fillStyle = k === 0 ? "#16ffe9" : "#a08bfa";
          ctx.filter = "blur(12px)";
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrame.current = requestAnimationFrame(animate);
    }

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  // Canvas covers all of parent only (absolutely positioned, not fixed)
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 select-none"
      aria-hidden="true"
      style={{
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        className="w-full h-full"
      />
    </div>
  );
}
