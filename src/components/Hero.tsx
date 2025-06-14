
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
      {/* Updated animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#172238] via-[#274060] to-[#1a2635]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.07%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#35beb7]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#64748b]/10 to-transparent" style={{ animationDelay: '1s' }}></div>
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
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#35beb7]/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#3f72af]/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#50b3c7]/30 rounded-full animate-float-reverse"></div>
      </div>
      {/* Floating accent clouds */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#274060] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-[#35beb7] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-40 w-72 h-72 bg-[#506680] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-reverse"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#35beb7] animate-spin-slow" />
          <span className="text-sm text-white/80">Software COE · Architecture &amp; Advanced Technology</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          <span className="block mb-2 text-xl md:text-2xl font-semibold text-white/90 tracking-wide">Carrier Global · Internal AI Solutions</span>
          Driving Innovation Across All Business Units
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in">
          Explore pioneering, AI-driven applications crafted by the Architecture & Advanced Technology team within the Software COE.
          Empowering <span className="font-bold text-[#35beb7]">DevOps</span>, <span className="font-bold text-[#50b3c7]">Agile</span>, <span className="font-bold text-[#3f72af]">Test Automation</span>,
          and more—accelerating transformation for all business units at Carrier.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="bg-gradient-to-r from-[#35beb7] to-[#274060] hover:from-[#50b3c7] hover:to-[#3f72af] text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore AI Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/request-access')}
            className="border-white/30 text-white hover:bg-white/10 hover:border-[#35beb7] px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
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
            className="text-white/60 hover:text-[#35beb7] hover:bg-[#114864]/10"
          >
            View Roadmap
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/feedback')}
            className="text-white/60 hover:text-[#35beb7] hover:bg-[#114864]/10"
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

