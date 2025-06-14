
import React, { useEffect, useRef } from "react";

// Dynamic, animated SVG-based data/AI network visual
const NODE_COUNT = 18;
const WIDTH = 400;
const HEIGHT = 400;
const RADIUS = 160;

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Util to generate deterministic pseudo-random position for a network node
function getNodePositions(count: number) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + randomBetween(-0.15, 0.15);
    const radial = RADIUS + randomBetween(-22, 22);
    const x = WIDTH / 2 + Math.cos(angle) * radial;
    const y = HEIGHT / 2 + Math.sin(angle) * radial;
    positions.push({ x, y });
  }
  return positions;
}

const nodePositions = getNodePositions(NODE_COUNT);

function getConnections(count: number, maxLinks = 3) {
  // Each node connects to 1-3 other random nodes
  const connections: { from: number; to: number }[] = [];
  for (let i = 0; i < count; i++) {
    const targets: Set<number> = new Set();
    const nLinks = Math.floor(randomBetween(1, maxLinks + 1));
    while (targets.size < nLinks) {
      let t = Math.floor(Math.random() * count);
      if (t !== i) targets.add(t);
    }
    for (let to of targets) connections.push({ from: i, to });
  }
  return connections;
}

const connections = getConnections(NODE_COUNT);

const colors = [
  "#93f6f1", "#adadfd", "#e2e0fb", "#84f1e9",
  "#17e3bf", "#a08bfa", "#82f0c2", "#8ee7e1"
];

const PARTICLES = 24;
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function AIGlobe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const particles = useRef<{ angle: number; radius: number; speed: number; color: string }[]>([]);

  // Initialize particles (just once)
  useEffect(() => {
    const p: typeof particles.current = [];
    for (let i = 0; i < PARTICLES; i++) {
      p.push({
        angle: randomBetween(0, Math.PI * 2),
        radius: randomBetween(50, 170),
        speed: randomBetween(0.008, 0.027),
        color: randomColor()
      });
    }
    particles.current = p;
  }, []);

  // Animate: move particle positions on circular orbits
  useEffect(() => {
    let frame: number;
    const animate = () => {
      const svg = svgRef.current;
      if (svg) {
        for (let i = 0; i < PARTICLES; i++) {
          const pt = particles.current[i];
          pt.angle += pt.speed * (0.8 + Math.sin(Date.now() / 4500 + i) * 0.3);
          const x = WIDTH / 2 + Math.cos(pt.angle) * pt.radius;
          const y = HEIGHT / 2 + Math.sin(pt.angle) * pt.radius;
          const el = svg.getElementById(`net-particle-${i}`);
          if (el) {
            el.setAttribute("cx", x.toString());
            el.setAttribute("cy", y.toString());
          }
        }
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Animate: shimmer node alpha
  useEffect(() => {
    let frame: number;
    const animate = () => {
      const svg = svgRef.current;
      if (svg) {
        nodePositions.forEach((pos, i) => {
          const node = svg.getElementById(`ai-node-${i}`);
          if (node) {
            const alpha = 0.62 + Math.sin(Date.now() * 0.0008 + i) * 0.28;
            node.setAttribute("fill-opacity", alpha.toString());
          }
        });
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Styling for the SVG & central orb glow
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
      <svg
        ref={svgRef}
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{
          maxWidth: "95vw",
          maxHeight: "55vw",
          filter: "drop-shadow(0 0 36px #15ffe6cf)"
        }}
        className="block"
      >
        {/* Big central glowing orb */}
        <radialGradient id="orbgrad" cx="50%" cy="50%" r="50%">
          <stop offset="12%" stopColor="#17e3bf" stopOpacity="0.85" />
          <stop offset="82%" stopColor="#a08bfa" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#1a1745" stopOpacity="0.11" />
        </radialGradient>
        <circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2}
          r={85}
          fill="url(#orbgrad)"
          opacity={0.92}
        />
        {/* Animated orbiting particles */}
        {particles.current.map((pt, i) => (
          <circle
            id={`net-particle-${i}`}
            key={`particle-${i}`}
            cx={WIDTH / 2 + Math.cos(pt.angle) * pt.radius}
            cy={HEIGHT / 2 + Math.sin(pt.angle) * pt.radius}
            r={randomBetween(3, 7)}
            fill={pt.color}
            fillOpacity="0.75"
            style={{ mixBlendMode: "screen" }}
          />
        ))}
        {/* Network connections (lines) */}
        {connections.map(({ from, to }, i) => (
          <line
            key={`conn-${from}-${to}-${i}`}
            x1={nodePositions[from].x}
            y1={nodePositions[from].y}
            x2={nodePositions[to].x}
            y2={nodePositions[to].y}
            stroke={colors[(from + to) % colors.length]}
            strokeWidth={randomBetween(1.25, 2.5)}
            strokeOpacity="0.22"
          />
        ))}
        {/* Network nodes */}
        {nodePositions.map((pos, i) => (
          <circle
            key={`node-${i}`}
            id={`ai-node-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={randomBetween(5, 11)}
            fill={colors[i % colors.length]}
            fillOpacity="0.73"
            style={{
              filter: `blur(0.5px) drop-shadow(0 0 7px ${colors[i % colors.length]}) mix-blend-mode: lighten`
            }}
          />
        ))}
        {/* Extra top-layer glowy highlight */}
        <ellipse
          cx={WIDTH / 2}
          cy={HEIGHT / 2 - 25}
          rx={43}
          ry={11}
          fill="#fff"
          filter="blur(12px)"
          opacity={0.15}
        />
      </svg>
    </div>
  );
}

