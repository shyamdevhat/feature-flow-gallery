
import React from 'react';
import Hero from '../components/Hero';
import AppShowcase from '../components/AppShowcase';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import CompositeBackground from '../components/backgrounds/CompositeBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent transition-colors duration-500 relative">
      <CompositeBackground variant="all" />
      <div className="relative z-10">
        <Hero />
        <AppShowcase />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
