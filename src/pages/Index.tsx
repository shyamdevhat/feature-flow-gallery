
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AppShowcase from '../components/AppShowcase';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent transition-colors duration-500">
      <NavBar />
      <Hero />
      <AppShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
