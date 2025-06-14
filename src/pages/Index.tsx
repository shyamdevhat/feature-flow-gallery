
import React from 'react';
import Hero from '../components/Hero';
import AppShowcase from '../components/AppShowcase';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="apple-section">
        <AppShowcase />
      </div>
      <div className="apple-section">
        <FeaturesSection />
      </div>
      <div className="apple-section bg-white/90 dark:bg-[#232529]/50">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
