
import React, { useEffect, useRef } from "react";

// Animated particle field for "AI intelligence" background
const WIDTH = 420;
const HEIGHT = 420;
const PARTICLE_COUNT = 26;
const PALETTE = [
  "#93f6f1", "#adadfd", "#e2e0fb", "#84f1e9",
  "#17e3bf", "#a08bfa", "#82f0c2", "#8ee7e1"
];

// Utility for animation frame
function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Particle = {
  x: number;
  y: number;
  r: number;
  baseR: number;
  color: string;
  t: number;
  speed: number;
  orbitR: number;
  orbitAngle: number;
  alpha: number;
};

function createParticles(): Particle[] {
  const arr: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const color = PALETTE[i % PALETTE.length];
    const baseR = random(8, 19);
    const t = random(0, Math.PI * 2);
    const orbitR = random(54, 170);
    const orbitAngle = random(0, Math.PI * 2);
    arr.push({
      x: WIDTH / 2,
      y: HEIGHT / 2,
      r: baseR,
      baseR,
      color,
      t,
      speed: random(0.006, 0.022),
      orbitR,
      orbitAngle,
      alpha: random(0.48, 0.94),
    });
  }
  return arr;
}

export default function AIGlobe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const particles = useRef<Particle[]>(createParticles());

  // Animate particles in morphing orbits and scales
  useEffect(() => {
    let frame: number;
    const animate = () => {
      const now = Date.now();
      const svg = svgRef.current;
      if (svg) {
        particles.current.forEach((p, i) => {
          // Orbit update
          p.orbitAngle += p.speed * (1.05 + Math.sin(now * 0.00038 + i) * 0.23);
          const m = 0.85 + Math.sin(now * 0.00038 + i * 0.6) * 0.17;
          p.x = WIDTH / 2 + Math.cos(p.orbitAngle) * p.orbitR * m;
          p.y = HEIGHT / 2 + Math.sin(p.orbitAngle) * p.orbitR * m;

          // Morph radius
          p.r = p.baseR * (0.85 + Math.cos(now * 0.001 + i * 0.9) * 0.21);

          // Morph alpha
          p.alpha = 0.6 + Math.sin(now * 0.0009 + i * 0.8) * 0.19;

          // Apply to SVG element
          const el = svg.getElementById(`ai-particle-${i}`);
          if (el) {
            el.setAttribute("cx", p.x.toString());
            el.setAttribute("cy", p.y.toString());
            el.setAttribute("r", p.r.toString());
            el.setAttribute("fill-opacity", p.alpha.toString());
          }
        });
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Extra: central glowing "intelligent core" (looks like a bright data source)
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
      <svg
        ref={svgRef}
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{
          maxWidth: "96vw",
          maxHeight: "60vw",
          filter: "drop-shadow(0 0 35px #15ffe6b7)",
        }}
        className="block"
      >
        {/* Central glowing orb: GenAI "core" */}
        <radialGradient id="aicore" cx="50%" cy="50%" r="58%">
          <stop offset="0%" stopColor="#17e3bf" stopOpacity="1" />
          <stop offset="41%" stopColor="#a08bfa" stopOpacity="0.48" />
          <stop offset="100%" stopColor="#060616" stopOpacity="0.23" />
        </radialGradient>
        <circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2}
          r={65}
          fill="url(#aicore)"
          opacity={0.82}
        />
        {/* Animated swirling morphing particles */}
        {particles.current.map((p, i) => (
          <circle
            id={`ai-particle-${i}`}
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={p.color}
            fillOpacity={p.alpha}
            style={{
              mixBlendMode: "screen",
              filter: `blur(${2 + (i % 3)}px) drop-shadow(0 0 26px ${p.color})`
            }}
          />
        ))}
        {/* Extra shimmer highlight above core */}
        <ellipse
          cx={WIDTH / 2}
          cy={HEIGHT / 2 - 27}
          rx={37}
          ry={8}
          fill="#fff"
          filter="blur(6px)"
          opacity={0.17}
        />
      </svg>
    </div>
  );
}
