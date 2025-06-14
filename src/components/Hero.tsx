
import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AIGlobe from "./AIGlobe";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToShowcase = () => {
    document.getElementById("app-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-500">
      <AIGlobe />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-accent/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 mb-8 shadow-sm">
          Advance Technology &bull; GenAI Center of Excellence
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-xl">
          Transforming Business with
          <span className="block mt-2 text-4xl md:text-5xl font-black tracking-tight">
            Generative AI&nbsp;Applications
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-9 font-medium leading-relaxed max-w-2xl mx-auto">
          <span className="font-bold text-accent">COE</span> delivers <span className="font-semibold text-primary">cutting-edge GenAI</span> solutions to every business unit.<br />
          Advance Architecture &amp; Technology enables rapid innovation and intelligent automation for your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-7">
          <Button
            size="lg"
            onClick={scrollToShowcase}
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Explore GenAI Apps
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/request-access")}
            className="border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent"
          >
            Request Access
          </Button>
        </div>
        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/roadmap")}
            className="text-white/70 hover:text-accent hover:bg-accent/10"
          >
            Roadmap
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/feedback")}
            className="text-white/70 hover:text-accent hover:bg-accent/10"
          >
            Feedback
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-20">
        <ChevronDown className="w-8 h-8 text-white/40 drop-shadow" />
      </div>

      {/* Smoother floating backgrounds */}
      <div className="absolute top-10 left-0 w-96 h-72 bg-primary/20 rounded-full filter blur-2xl opacity-30" />
      <div className="absolute top-40 right-0 w-96 h-72 bg-accent/30 rounded-full filter blur-2xl opacity-25" />
      <div className="absolute bottom-32 left-1/4 w-80 h-64 bg-secondary/30 rounded-full filter blur-2xl opacity-30" />
    </section>
  );
};

export default Hero;
