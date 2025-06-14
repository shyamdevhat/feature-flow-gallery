
import React from "react";
import Hero from "../components/Hero";
import AppShowcase from "../components/AppShowcase";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background transition-colors duration-500">
      <Hero />
      <div className="bg-background transition-colors duration-500">
        <AppShowcase />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
