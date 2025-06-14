
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
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* AI-themed floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/60 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/60 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400/60 rounded-full animate-float-reverse"></div>
      </div>
      
      {/* Enhanced floating elements with animation */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-reverse"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow" />
          <span className="text-sm text-white/80">Next-Gen AI & Generative AI Showcase</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Experience the
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {" "}Future{" "}
          </span>
          of AI Applications
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in">
          Discover cutting-edge AI and Generative AI applications built with React, Python, and MongoDB. 
          Interactive, intelligent, and designed for tomorrow's challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore AI Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/request-access')}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
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
            className="text-white/60 hover:text-white hover:bg-white/10"
          >
            View Roadmap
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/feedback')}
            className="text-white/60 hover:text-white hover:bg-white/10"
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
