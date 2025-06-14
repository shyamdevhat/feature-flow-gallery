import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface App {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  icon: React.ElementType;
  gradient: string;
  image: string;
}

interface AppCardProps {
  app: App;
  index: number;
}

const AppCard: React.FC<AppCardProps> = ({ app, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleViewDemo = () => {
    navigate(`/app/${app.id}`);
  };

  const handleExternalLink = () => {
    navigate(`/app/${app.id}/demo`);
  };

  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={app.image} 
          alt={app.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Icon */}
        <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-br ${app.gradient} text-white transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
          <app.icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300">
          {app.title}
        </h3>
        
        <p className="text-white/70 mb-4 line-clamp-2">
          {app.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tech.map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white/80 text-sm font-medium mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {app.features.map((feature, i) => (
              <li key={i} className="text-white/60 text-sm flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${app.gradient}`}></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            size="sm" 
            onClick={handleViewDemo}
            className={`bg-gradient-to-r ${app.gradient} hover:opacity-90 text-white border-0 flex-1 transition-all duration-300 hover:shadow-lg`}
          >
            View Details
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleExternalLink}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
