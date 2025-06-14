import React from 'react';
import Hero from '../components/Hero';
import AppShowcase from '../components/AppShowcase';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#172238] via-[#274060] to-[#1a2635]">
      <Hero />
      <AppShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
