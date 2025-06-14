
import React from 'react';
import { Brain } from 'lucide-react';

const BrainPatternBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large brain icons with different positions and animations */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-5">
        <Brain className="w-full h-full text-primary animate-float" />
      </div>
      <div className="absolute top-1/3 right-20 w-24 h-24 opacity-5">
        <Brain className="w-full h-full text-accent animate-float-delayed" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 opacity-5">
        <Brain className="w-full h-full text-secondary animate-float-reverse" />
      </div>
      
      {/* Brain synaptic patterns */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
        {/* Synaptic pathways */}
        <defs>
          <radialGradient id="synapseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(129, 140, 248, 0.3)" />
            <stop offset="100%" stopColor="rgba(129, 140, 248, 0.1)" />
          </radialGradient>
        </defs>
        
        {/* Curved neural pathways */}
        <path
          d="M50 100 Q 150 50 250 100 T 350 150"
          stroke="rgba(129, 140, 248, 0.2)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <path
          d="M100 200 Q 200 150 300 200 T 400 250"
          stroke="rgba(168, 85, 247, 0.2)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '3s', animationDelay: '1s' }}
        />
        <path
          d="M0 300 Q 100 250 200 300 T 300 350"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
        />
        
        {/* Synaptic nodes */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle
            key={i}
            cx={50 + i * 45}
            cy={100 + Math.sin(i) * 50}
            r="3"
            fill="url(#synapseGradient)"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BrainPatternBackground;
