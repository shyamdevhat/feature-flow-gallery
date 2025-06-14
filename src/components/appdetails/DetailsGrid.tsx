import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Database } from "lucide-react";
import type { Application } from "@/types/applications";
import AppGallery from "@/components/appdetails/AppGallery";

interface DetailsGridProps {
  app: Application;
  gradient: string | null | undefined;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ app, gradient }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
    {/* Objective */}
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          Objective
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">{app.description}</p>
      </CardContent>
    </Card>

    {/* Architecture */}
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 flex flex-col min-h-[340px]">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
            <Database className="w-4 h-4 text-white" />
          </div>
          Architecture
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-white/70 mb-4">
          Explore architecture diagrams, images, and documents as uploaded by the admin.
        </p>
        {/* Only gallery, no upload option */}
        <AppGallery applicationId={app.id} gradient={gradient} hideUpload />
      </CardContent>
    </Card>
  </div>
);

export default DetailsGrid;
