
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AnimatedBlobs = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    viewBox="0 0 1440 620"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <g filter="url(#blur)">
      <ellipse
        cx="370"
        cy="150"
        rx="280"
        ry="140"
        fill="url(#blob1)"
        fillOpacity="0.45"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 370 150" to="360 370 150" dur="15s" repeatCount="indefinite" />
      </ellipse>
      <ellipse
        cx="1120"
        cy="240"
        rx="270"
        ry="130"
        fill="url(#blob2)"
        fillOpacity="0.60"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 1120 240" to="360 1120 240" dur="18s" repeatCount="indefinite" />
      </ellipse>
      <ellipse
        cx="800"
        cy="470"
        rx="220"
        ry="100"
        fill="url(#blob3)"
        fillOpacity="0.45"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 800 470" to="360 800 470" dur="22s" repeatCount="indefinite" />
      </ellipse>
    </g>
    <defs>
      <filter id="blur" x="-100" y="-100" width="1640" height="820" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="60" result="blur"/>
      </filter>
      <linearGradient id="blob1" x1="0" y1="0" x2="600" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4481eb"/>
        <stop offset="1" stopColor="#04befe"/>
      </linearGradient>
      <linearGradient id="blob2" x1="0" y1="0" x2="600" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a259c6"/>
        <stop offset="1" stopColor="#4f8cff"/>
      </linearGradient>
      <linearGradient id="blob3" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6e8efb"/>
        <stop offset="1" stopColor="#a777e3"/>
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
      style={{
        background: 'linear-gradient(120deg, #131b37 0%, #2f338f 60%, #51c7fa 100%)'
      }}
    >
      {/* Animated SVG background blobs */}
      <AnimatedBlobs />
      {/* Foreground content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 shadow-md">
          <span className="text-sm text-white/90 font-medium">
            Software COE · GenAI
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          GenAI Solutions Repository
        </h1>
        <p className="text-lg text-white/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A curated collection of generative AI applications developed by the Software Center of Excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="bg-white/90 text-[#1e2447] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 shadow hover:scale-105"
          >
            Explore Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/request-access')}
            className="border-white text-white bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Request Access
          </Button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;

