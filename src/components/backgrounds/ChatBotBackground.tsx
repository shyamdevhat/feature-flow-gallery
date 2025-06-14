
import React from 'react';
import { Bot, MessageCircle, Zap } from 'lucide-react';

const ChatBotBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating chatbot elements */}
      <div className="absolute top-20 right-10 w-16 h-16 opacity-10">
        <Bot className="w-full h-full text-accent animate-float" />
      </div>
      <div className="absolute top-2/3 left-16 w-12 h-12 opacity-10">
        <MessageCircle className="w-full h-full text-primary animate-float-delayed" />
      </div>
      <div className="absolute bottom-32 right-1/4 w-14 h-14 opacity-10">
        <Zap className="w-full h-full text-secondary animate-float-reverse" />
      </div>
      
      {/* Chat bubble patterns */}
      <div className="absolute top-1/4 left-1/3">
        <div className="relative">
          {/* Animated chat bubbles */}
          <div className="w-32 h-8 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-24 h-6 bg-accent/5 rounded-full mt-2 ml-4 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="w-28 h-7 bg-secondary/5 rounded-full mt-2 ml-2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/3">
        <div className="relative">
          <div className="w-20 h-6 bg-accent/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-28 h-8 bg-primary/5 rounded-full mt-2 ml-2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-16 h-5 bg-secondary/5 rounded-full mt-2 ml-6 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
      </div>
      
      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Flowing data streams */}
        <defs>
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(129, 140, 248, 0)" />
            <stop offset="50%" stopColor="rgba(129, 140, 248, 0.3)" />
            <stop offset="100%" stopColor="rgba(129, 140, 248, 0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal data streams */}
        <rect x="0" y="20" width="100" height="1" fill="url(#dataFlow)" className="animate-pulse" style={{ animationDuration: '3s' }} />
        <rect x="0" y="50" width="100" height="1" fill="url(#dataFlow)" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <rect x="0" y="80" width="100" height="1" fill="url(#dataFlow)" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Binary code rain effect */}
        {Array.from({ length: 10 }, (_, i) => (
          <text
            key={i}
            x={i * 10 + 5}
            y="30"
            fontSize="2"
            fill="rgba(129, 140, 248, 0.1)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default ChatBotBackground;
