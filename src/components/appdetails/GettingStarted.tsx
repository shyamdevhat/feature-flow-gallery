
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface GettingStartedProps {
  gradient?: string | null;
  markdown?: string;
}

const GettingStarted: React.FC<GettingStartedProps> = ({ gradient, markdown }) => (
  <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
    <CardHeader>
      <CardTitle className="text-white flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
          <Code className="w-4 h-4 text-white" />
        </div>
        Getting Started
      </CardTitle>
    </CardHeader>
    <CardContent>
      {markdown ? (
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
              1
            </div>
            <p className="text-white/70">Connect your account to get started.</p>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);

export default GettingStarted;
