
import React from 'react';
import { Code, Database, Globe, Smartphone, Zap, Shield } from 'lucide-react';
import AppCard from './AppCard';

const apps = [
  {
    id: 1,
    title: "TaskFlow Pro",
    description: "Advanced project management with AI-powered insights and real-time collaboration.",
    tech: ["React", "Python", "MongoDB"],
    features: ["AI Analytics", "Real-time Sync", "Team Collaboration"],
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "DataViz Studio",
    description: "Interactive data visualization platform with machine learning capabilities.",
    tech: ["React", "Python", "MongoDB"],
    features: ["ML Integration", "Custom Charts", "Export Tools"],
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "SecureConnect",
    description: "Next-generation secure communication platform with end-to-end encryption.",
    tech: ["React", "Python", "MongoDB"],
    features: ["E2E Encryption", "Video Calls", "File Sharing"],
    icon: Shield,
    gradient: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "CloudDeploy",
    description: "Automated deployment and scaling solution for modern web applications.",
    tech: ["React", "Python", "MongoDB"],
    features: ["Auto Scaling", "CI/CD Pipeline", "Monitoring"],
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "MobileFirst",
    description: "Cross-platform mobile development framework with native performance.",
    tech: ["React", "Python", "MongoDB"],
    features: ["Native Performance", "Cross Platform", "Hot Reload"],
    icon: Smartphone,
    gradient: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "CodeStudio",
    description: "Collaborative IDE with AI code completion and real-time pair programming.",
    tech: ["React", "Python", "MongoDB"],
    features: ["AI Completion", "Live Collaboration", "Multi-language"],
    icon: Code,
    gradient: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop"
  }
];

const AppShowcase = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Application
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Portfolio
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Each application represents innovation, crafted with modern technologies 
            and designed for exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
