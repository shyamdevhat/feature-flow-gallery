
import React from 'react';

export default function AIGlobe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <div className="relative w-96 h-96">
        {/* Main globe */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-60 animate-spin" 
             style={{ animationDuration: '20s' }}>
        </div>
        
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-200 via-blue-300 to-purple-400 opacity-40 animate-pulse">
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-300 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1"></div>
        </div>
        
        {/* Network lines effect */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-t from-transparent via-cyan-300 to-transparent transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
