
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Zap, List, RefreshCw } from "lucide-react";
import { AppRoadmapItem, useAppRoadmap } from "@/hooks/useAppRoadmap";

const statusMap: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  planned: {
    icon: <Clock className="w-4 h-4" />,
    color: "bg-yellow-500 text-white",
    label: "Planned",
  },
  in_progress: {
    icon: <RefreshCw className="w-4 h-4 animate-spin-slow" />,
    color: "bg-blue-500 text-white",
    label: "In Progress",
  },
  done: {
    icon: <CheckCircle className="w-4 h-4" />,
    color: "bg-green-500 text-white",
    label: "Done",
  },
};

interface AppRoadmapProps {
  applicationId: string;
  gradient?: string | null;
}

const AppRoadmap: React.FC<AppRoadmapProps> = ({ applicationId, gradient }) => {
  const { data: items, isLoading, error } = useAppRoadmap(applicationId);

  if (isLoading) {
    return (
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <List className="w-5 h-5" />
            Roadmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/60">Loading roadmap…</p>
        </CardContent>
      </Card>
    );
  }

  if (error || !items || items.length === 0) {
    return null;
  }

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <List className="w-5 h-5" />
          Roadmap
        </CardTitle>
        <CardDescription className="text-white/60">
          What’s planned and coming soon for this application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => {
            const status = statusMap[item.status] || statusMap["planned"];
            return (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${status.color}`}
                >
                  {status.icon}
                  <span className="ml-2">{status.label}</span>
                </span>
                <div className="flex-1">
                  <p className="text-white font-medium">{item.title}</p>
                  {item.description && (
                    <p className="text-white/60 text-sm mt-1 leading-snug">{item.description}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AppRoadmap;
