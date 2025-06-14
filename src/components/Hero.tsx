
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 mb-8">
          <span className="text-sm text-black/80 font-medium">
            Software COE · GenAI
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          GenAI Solutions Repository
        </h1>
        <p className="text-lg text-black/70 mb-10">
          A curated collection of generative AI applications developed by the Software Center of Excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToShowcase}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            Explore Applications
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/request-access')}
            className="border-black text-black hover:bg-black/5 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Request Access
          </Button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-black/30" />
      </div>
    </section>
  );
};

export default Hero;

