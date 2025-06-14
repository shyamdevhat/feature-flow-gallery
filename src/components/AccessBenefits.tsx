
import React from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAccessBenefits } from "@/hooks/useAccessBenefits";

// Only allowed icons should be added here for dynamic display
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle,
  // Add other allowed icons here as needed
};

const AccessBenefits = () => {
  const { data: benefits, isLoading, error } = useAccessBenefits();

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      {isLoading && (
        <div className="col-span-3 text-center text-white/60">Loading benefits...</div>
      )}
      {error && (
        <div className="col-span-3 text-center text-red-500">Failed to load benefits.</div>
      )}
      {(benefits ?? []).map((benefit, index) => {
        const LucideIcon = iconMap[benefit.icon] ?? CheckCircle;
        return (
          <Card
            key={benefit.id}
            className="bg-white/5 backdrop-blur-sm border-white/10 text-center animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardContent className="pt-6">
              <LucideIcon className={`w-12 h-12 mx-auto mb-4 ${benefit.icon_color ?? "text-cyan-400"}`} />
              <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/60 text-sm">{benefit.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default AccessBenefits;
