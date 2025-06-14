
import React from 'react';
import { Rocket, Users, Zap, Shield, Globe, Code2 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Optimized performance with React's latest features and efficient MongoDB queries."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Real-time collaboration features built for modern teams and workflows."
  },
  {
    icon: Zap,
    title: "AI Powered",
    description: "Intelligent automation and insights powered by machine learning algorithms."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with end-to-end encryption and data protection."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Built for scale with distributed architecture and global CDN support."
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Comprehensive APIs, documentation, and tools for seamless integration."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Our Platform
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built with cutting-edge technologies and designed for the future of web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
