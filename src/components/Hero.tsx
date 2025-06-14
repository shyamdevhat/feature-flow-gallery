
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// New: Mosaic animated SVG background component
const MosaicBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    viewBox="0 0 1440 620"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {/* Row 1 */}
    <rect x="0" y="0" width="180" height="180" fill="url(#m1)" opacity="0.6">
      <animate attributeName="y" values="0;8;0" dur="7s" repeatCount="indefinite" />
    </rect>
    <rect x="180" y="0" width="180" height="180" fill="url(#m2)" opacity="0.7">
      <animate attributeName="y" values="0;-12;0" dur="9s" repeatCount="indefinite" />
    </rect>
    <rect x="360" y="0" width="180" height="180" fill="url(#m3)" opacity="0.7">
      <animate attributeName="y" values="0;18;0" dur="8s" repeatCount="indefinite" />
    </rect>
    <rect x="540" y="0" width="180" height="180" fill="url(#m4)" opacity="0.5">
      <animate attributeName="y" values="0;14;0" dur="10s" repeatCount="indefinite" />
    </rect>
    <rect x="720" y="0" width="340" height="180" fill="url(#m5)" opacity="0.52">
      <animate attributeName="y" values="0;-8;0" dur="7.5s" repeatCount="indefinite" />
    </rect>
    {/* Row 2 */}
    <rect x="90" y="140" width="230" height="200" fill="url(#m2)" opacity="0.5">
      <animate attributeName="y" values="140;170;140" dur="11s" repeatCount="indefinite" />
    </rect>
    <rect x="350" y="186" width="186" height="168" fill="url(#m1)" opacity="0.5">
      <animate attributeName="x" values="350;373;350" dur="7.5s" repeatCount="indefinite" />
    </rect>
    <rect x="680" y="210" width="240" height="150" fill="url(#m3)" opacity="0.6">
      <animate attributeName="x" values="680;658;680" dur="9.2s" repeatCount="indefinite" />
    </rect>
    <rect x="990" y="170" width="370" height="150" fill="url(#m4)" opacity="0.55">
      <animate attributeName="y" values="170;190;170" dur="8s" repeatCount="indefinite" />
    </rect>
    {/* Row 3 - dots/tiles accent near bottom */}
    <circle cx="220" cy="535" r="40" fill="url(#m5)" opacity="0.35">
      <animate attributeName="r" values="40;55;40" dur="11s" repeatCount="indefinite" />
    </circle>
    <rect x="380" y="480" width="80" height="80" rx="18" fill="url(#m2)" opacity="0.37">
      <animate attributeName="y" values="480;507;480" dur="7.2s" repeatCount="indefinite" />
    </rect>
    <rect x="650" y="470" width="120" height="120" rx="34" fill="url(#m1)" opacity="0.27">
      <animate attributeName="x" values="650;670;650" dur="9.7s" repeatCount="indefinite" />
    </rect>
    <circle cx="850" cy="510" r="36" fill="url(#m4)" opacity="0.28">
      <animate attributeName="r" values="36;48;36" dur="8.8s" repeatCount="indefinite" />
    </circle>
    <rect x="1100" y="490" width="84" height="55" rx="12" fill="url(#m3)" opacity="0.30">
      <animate attributeName="x" values="1100;1130;1100" dur="7.9s" repeatCount="indefinite" />
    </rect>
    <defs>
      {/* Define branded color blends for gradients */}
      <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#51c7fa" /> {/* accent */}
        <stop offset="1" stopColor="#2f338f" /> {/* secondary */}
      </linearGradient>
      <linearGradient id="m2" x1="0" y1="1" x2="1" y2="0">
        <stop stopColor="#4481eb" /> {/* primary */}
        <stop offset="1" stopColor="#51c7fa" />
      </linearGradient>
      <linearGradient id="m3" x1="1" y1="1" x2="0" y2="0">
        <stop stopColor="#2f338f" />
        <stop offset="1" stopColor="#51c7fa" />
      </linearGradient>
      <linearGradient id="m4" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#4f8cff" />
        <stop offset="1" stopColor="#51c7fa" />
      </linearGradient>
      <linearGradient id="m5" x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#a259c6" />
        <stop offset="1" stopColor="#51c7fa" />
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
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
    >
      {/* Animated mosaic SVG background (blends with brand accent colors) */}
      <MosaicBackground />

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
