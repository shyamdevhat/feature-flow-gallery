import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AccessRequestForm from "@/components/AccessRequestForm";
import AccessBenefits from "@/components/AccessBenefits";
import CompositeBackground from "@/components/backgrounds/CompositeBackground";

const RequestAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent transition-colors duration-500 relative">
      <CompositeBackground variant="brain" />
      
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request Access to our
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {" "}GenAI Applications
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Exclusive access to cutting-edge Generative AI applications from Software Center of Excellence.<br/>
            This advanced technology is powered by the Architecture &amp; Advanced Technology workstream in collaboration with Agile, DevOps, and Test Automation teams.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              GenAI Access Request
            </CardTitle>
            <CardDescription className="text-white/60">
              Please provide the following information to request access to internal GenAI solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccessRequestForm />
          </CardContent>
        </Card>

        <AccessBenefits />
      </div>
    </div>
  );
};

export default RequestAccess;
