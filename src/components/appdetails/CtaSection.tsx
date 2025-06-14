
import React from "react";
import { Play, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { Application } from "@/types/applications";

interface CtaSectionProps {
  app: Application;
}

const CtaSection: React.FC<CtaSectionProps> = ({ app }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
        <p className="text-white/70 mb-6">
          Experience the power of {app.title} and transform your workflow today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => navigate(`/app/${app.id}/demo`)}
            className={`bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} hover:opacity-90 text-white`}
          >
            <Play className="w-5 h-5 mr-2" />
            Launch Application
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/request-access')}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Request Access
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Github className="w-5 h-5 mr-2" />
            View Source Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
