import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background for consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        {/* Subtle moving particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float-reverse"></div>
      </div>
      {/* Floating accent clouds */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-40 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-reverse"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="text-sm text-white/80">
            Carrier Global · AI Solutions Center of Excellence
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          <span className="block mb-2 text-xl md:text-2xl font-semibold text-primary tracking-wide">
            Software COE · Architecture &amp; Advanced Technology
          </span>
          Building AI-Driven Solutions Across All Carrier Business Units
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in">
          <span className="font-bold text-accent">Software COE</span> is an internal Carrier Global team pioneering AI-driven solutions
          that empower every business unit. Our <span className="font-semibold text-primary">Architecture &amp; Advanced Technology</span> workstream
          drives innovation together with <span className="font-semibold text-secondary">DevOps</span>, <span className="font-semibold text-accent">Agile</span>, and <span className="font-semibold text-primary">Test Automation</span>,
          creating value across products and operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore AI Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/request-access')}
            className="border-white/30 text-white hover:bg-white/10 hover:border-primary px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
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
            className="text-white/60 hover:text-primary hover:bg-primary/10"
          >
            View Roadmap
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/feedback')}
            className="text-white/60 hover:text-primary hover:bg-primary/10"
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
