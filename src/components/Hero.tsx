
import React from 'react';
import { Brain, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="apple-hero-background relative">
      {/* Frosted glass Apple-style card for the Hero content */}
      <div className="apple-card max-w-3xl w-full sm:mx-auto py-16 px-6 md:px-10 flex flex-col items-center text-center mt-24 md:mt-36 shadow-2xl border-0">
        <div className="flex justify-center mb-5">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/10">
            <Sparkles className="w-4 h-4" />
            Welcome to the Future of GenAI
          </div>
        </div>

        <h1 className="text-[2.6rem] md:text-5xl font-bold leading-tight mb-5 tracking-tight text-foreground" style={{letterSpacing: "-2px"}}>
          GenAI Application Showcase
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8 tracking-tight">
          Discover AI-powered solutions crafted with the finest <span className="font-bold text-primary">Apple-inspired design</span>. Explore, learn, and be inspired by next-level GenAI experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-2 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="apple-btn apple-btn-primary"
          >
            <Brain className="w-5 h-5 mr-2" />
            Explore Applications
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            onClick={() => navigate('/request-access')}
            className="apple-btn apple-btn-ghost"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Request Access
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
