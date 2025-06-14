
import React from "react";
import { CheckCircle, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: CheckCircle,
    title: "Fast Review",
    description: "We review all requests within 24 hours",
    iconColor: "text-cyan-400",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Enterprise-grade security for all users",
    iconColor: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Full Support",
    description: "Dedicated support team for approved users",
    iconColor: "text-cyan-400",
  },
];

const AccessBenefits = () => (
  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    {benefits.map((benefit, index) => (
      <Card
        key={index}
        className="bg-white/5 backdrop-blur-sm border-white/10 text-center animate-fade-in"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <CardContent className="pt-6">
          <benefit.icon className={`w-12 h-12 mx-auto mb-4 ${benefit.iconColor}`} />
          <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
          <p className="text-white/60 text-sm">{benefit.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default AccessBenefits;
