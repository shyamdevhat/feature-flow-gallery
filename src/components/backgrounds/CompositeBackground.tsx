
import React from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';
import BrainPatternBackground from './BrainPatternBackground';
import ChatBotBackground from './ChatBotBackground';

interface CompositeBackgroundProps {
  variant?: 'neural' | 'brain' | 'chatbot' | 'all';
}

const CompositeBackground: React.FC<CompositeBackgroundProps> = ({ variant = 'all' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent"></div>
      
      {/* Conditional background layers */}
      {(variant === 'neural' || variant === 'all') && <NeuralNetworkBackground />}
      {(variant === 'brain' || variant === 'all') && <BrainPatternBackground />}
      {(variant === 'chatbot' || variant === 'all') && <ChatBotBackground />}
      
      {/* Additional ambient particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CompositeBackground;
