

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

interface BenefitsProps {
  features?: string[];
  gradient?: string | null;
}

const Benefits: React.FC<BenefitsProps> = ({ features, gradient }) => (
  <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
    <CardHeader>
      <CardTitle className="text-white flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient ?? 'from-primary to-accent'} flex items-center justify-center`}>
          <Zap className="w-4 h-4 text-white" />
        </div>
        GenAI Key Benefits
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(features ?? []).map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-white/70">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient ?? 'from-primary to-accent'}`}></div>
            {feature}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Benefits;

