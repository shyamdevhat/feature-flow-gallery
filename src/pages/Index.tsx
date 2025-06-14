
import React from 'react';
import Hero from '../components/Hero';
import AppShowcase from '../components/AppShowcase';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen apple-hero-gradient">
      <Hero />
      <div className="apple-section">
        <AppShowcase />
      </div>
      <div className="apple-section">
        <FeaturesSection />
      </div>
      <div className="apple-section bg-white/80 dark:bg-black/20">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
