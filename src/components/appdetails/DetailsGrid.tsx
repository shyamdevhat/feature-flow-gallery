
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Database } from "lucide-react";
import type { Application } from "@/types/applications";

interface DetailsGridProps {
  gradient: string | null | undefined;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ gradient }) => (
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
        <p className="text-white/70">Goal: Deliver value with this application.</p>
      </CardContent>
    </Card>

    {/* Architecture */}
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
            <Database className="w-4 h-4 text-white" />
          </div>
          Architecture
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">Check docs for more details on architecture.</p>
      </CardContent>
    </Card>
  </div>
);

export default DetailsGrid;
