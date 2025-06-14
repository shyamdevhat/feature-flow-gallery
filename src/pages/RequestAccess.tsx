
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AccessRequestForm from "@/components/AccessRequestForm";
import AccessBenefits from "@/components/AccessBenefits";

const RequestAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request Access to Our
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Applications
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get exclusive access to our cutting-edge AI and Generative AI applications.
            Fill out the form below and we'll review your request.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              Access Request Form
            </CardTitle>
            <CardDescription className="text-white/60">
              Please provide the following information to request access to our applications.
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
