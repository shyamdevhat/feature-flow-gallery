
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Glowing sphere for the "AI Globe"
function SpinningGlobe() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (mesh.current) {
      // Slow Y rotation
      mesh.current.rotation.y += 0.003;
      // Gentle rocking motion
      mesh.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.05;
    }
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial
        color="#17e3bf"
        emissive="#a08bfa"
        emissiveIntensity={0.35}
        roughness={0.3}
        metalness={0.5}
        wireframe={false}
      />
    </mesh>
  );
}

// Simulated "neural connections" arcs
function NetworkArcs() {
  // Generate a set of connections between random points on the globe
  const arcs = Array.from({ length: 30 }).map((_, i) => {
    // Random longitude/latitude for ends (in radians)
    const phi = Math.random() * Math.PI;
    const theta1 = Math.random() * 2 * Math.PI;
    const theta2 = Math.random() * 2 * Math.PI;
    // Convert to 3D points on sphere
    const r = 1.8 + 0.04;
    const p1 = [
      r * Math.sin(phi) * Math.cos(theta1),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta1)
    ];
    const p2 = [
      r * Math.sin(phi) * Math.cos(theta2),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta2)
    ];
    // Control point a bit above the surface for nice arc
    const mid = [
      (p1[0] + p2[0]) / 2 * 1.04,
      (p1[1] + p2[1]) / 2 * 1.12,
      (p1[2] + p2[2]) / 2 * 1.04
    ];

    // Time-varying color for slight animation effect
    const color = new THREE.Color(`hsl(${190 + i * 4}, 80%, 60%)`);
    return (
      <group key={i}>
        <mesh>
          <tubeGeometry args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(...p1),
              new THREE.Vector3(...mid),
              new THREE.Vector3(...p2)
            ]),
            16, // tubular segments
            0.012, // radius
            8, // radial segments
            false
          ]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.44} transparent opacity={0.85}/>
        </mesh>
      </group>
    );
  });
  return <>{arcs}</>;
}

export default function AIGlobe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 48 }}>
        <ambientLight intensity={0.42} />
        <directionalLight position={[4, 4, 8]} intensity={1.2} color={'#fff6fa'} />
        <Suspense fallback={null}>
          <SpinningGlobe />
          <NetworkArcs />
        </Suspense>
      </Canvas>
    </div>
  );
}
