
import React from 'react';
import { Badge } from '@/components/ui/badge';
import type { Application } from '@/types/applications';
import { Globe, Smartphone, Shield, Zap, Database, Code } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Globe, Smartphone, Shield, Zap, Database, Code };

interface HeroSectionProps {
  app: Application;
}

const HeroSection: React.FC<HeroSectionProps> = ({ app }) => {
  const Icon = app.icon && iconMap[app.icon] ? iconMap[app.icon] : Globe;
  return (
    <div className="text-center mb-16">
      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${app.gradient ?? 'from-blue-500 to-cyan-500'} text-white mb-6`}>
        <Icon className="w-10 h-10" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{app.title}</h1>
      <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">{app.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {(app.tech ?? []).map((tech, i) => (
          <Badge key={i} variant="secondary" className="bg-white/10 text-white/80">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
