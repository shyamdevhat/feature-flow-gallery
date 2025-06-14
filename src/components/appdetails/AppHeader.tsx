

import React from "react";
import { ArrowLeft, Play, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { Application } from "@/types/applications";

interface AppHeaderProps {
  app: Application;
}

const AppHeader: React.FC<AppHeaderProps> = ({ app }) => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to GenAI Showcase
        </Button>
        <div className="flex gap-4">
          <Button 
            onClick={() => navigate(`/app/${app.id}/demo`)}
            className={`bg-gradient-to-r ${app.gradient ?? 'from-primary to-accent'} hover:opacity-90 text-white`}
          >
            <Play className="w-4 h-4 mr-2" />
            Launch Solution
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

