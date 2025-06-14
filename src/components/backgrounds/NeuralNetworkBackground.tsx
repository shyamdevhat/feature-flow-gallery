
import React from 'react';

const NeuralNetworkBackground = () => {
  // Generate random positions for nodes
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    delay: Math.random() * 3
  }));

  // Generate connections between nearby nodes
  const connections = nodes.flatMap((node, i) => 
    nodes.slice(i + 1).filter(otherNode => {
      const distance = Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      );
      return distance < 25;
    }).map(otherNode => ({
      from: node,
      to: otherNode,
      opacity: Math.random() * 0.3 + 0.1
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Neural network connections */}
        {connections.map((connection, i) => (
          <line
            key={i}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="rgba(129, 140, 248, 0.3)"
            strokeWidth="0.1"
            className="animate-pulse"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Neural network nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size / 10}
            fill="rgba(129, 140, 248, 0.6)"
            className="animate-pulse"
            style={{
              animationDelay: `${node.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetworkBackground;
