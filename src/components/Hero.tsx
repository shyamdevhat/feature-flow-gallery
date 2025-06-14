
import React from 'react';
import { ChevronDown, Sparkles, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float-reverse"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/40 rounded-full animate-pulse blur-sm" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-emerald-500/40 rounded-full animate-pulse blur-sm" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500/40 rounded-full animate-pulse blur-sm" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-cyan-500/40 rounded-full animate-pulse blur-sm" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Modern line patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" />
          <path d="M0,25 Q50,0 100,25" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <path d="M0,75 Q50,100 100,75" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 animate-fade-in">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            GenAI Solutions · Neural Networks · Advanced AI
          </span>
          <Zap className="w-5 h-5 text-emerald-500" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block mb-4 text-2xl md:text-3xl font-bold text-gradient">
            GenAI Application Showcase
          </span>
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Explore AI-Powered
          </span>
          <br />
          <span className="text-gradient">
            Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in font-medium">
          Discover innovative <span className="text-gradient font-bold">GenAI applications</span> built for modern businesses. 
          Explore cutting-edge solutions, try demos, and find the perfect AI tools for your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-8">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="gradient-primary hover:shadow-2xl hover:shadow-blue-500/25 text-white border-0 px-10 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <Brain className="w-5 h-5 mr-2" />
            Explore Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/request-access')}
            className="glass-effect border-2 border-white/30 text-gray-700 hover:bg-white/20 hover:border-blue-300/50 px-10 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Request Access
          </Button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/roadmap')}
            className="text-gray-500 hover:text-blue-600 hover:bg-blue-500/10 rounded-xl font-semibold"
          >
            View Roadmap
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/feedback')}
            className="text-gray-500 hover:text-emerald-600 hover:bg-emerald-500/10 rounded-xl font-semibold"
          >
            Share Feedback
          </Button>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-effect rounded-full p-3">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
