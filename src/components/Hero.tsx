import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CompositeBackground from './backgrounds/CompositeBackground';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background with AI elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent transition-colors duration-500">
        <CompositeBackground variant="all" />
        
        {/* Enhanced floating accent clouds */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-reverse"></div>
        
        {/* AI-themed geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="text-sm text-white/80">
            GenAI Solutions · Neural Networks · Advanced AI
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          <span className="block mb-2 text-xl md:text-2xl font-semibold text-accent tracking-wide">
            GenAI Application Showcase
          </span>
          Explore AI-Powered Solutions
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in">
          Discover innovative <span className="font-bold text-accent">GenAI applications</span> built for modern businesses. 
          Explore cutting-edge solutions, try demos, and find the perfect AI tools for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/request-access')}
            className="border-white/30 text-white hover:bg-white/10 hover:border-accent px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Request Access
          </Button>
        </div>
        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/roadmap')}
            className="text-white/60 hover:text-accent hover:bg-accent/10"
          >
            View Roadmap
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/feedback')}
            className="text-white/60 hover:text-accent hover:bg-accent/10"
          >
            Share Feedback
          </Button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
