import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Github, CheckCircle, Zap, Database, Code, Globe, Smartphone, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Application } from "@/types/applications";

// Utility to get the icon component from the string name
const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Shield,
  Zap,
  Database,
  Code,
};

const fetchApplicationById = async (id: string) => {
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data as Application | null;
};

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the application data by id
  const { data: app, isLoading, error } = useQuery({
    queryKey: ['application', id],
    queryFn: () => fetchApplicationById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <span className="text-white/80 text-lg">Loading application details…</span>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Application Not Found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  // Use the correct icon component if available, else Globe as fallback
  const Icon = app.icon && iconMap[app.icon] ? iconMap[app.icon] : Globe;

  // Demo testimonials preserved for UI
  const demoTestimonials = [
    {
      name: "Chris Anderson",
      role: "Senior Developer",
      rating: 5,
      comment: "This app's AI completion doubles my coding speed."
    },
    {
      name: "Rachel Green",
      role: "Software Engineer",
      rating: 5,
      comment: "Real-time collaboration features are game-changing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Showcase
          </Button>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate(`/app/${app.id}/demo`)}
              className={`bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} hover:opacity-90 text-white`}
            >
              <Play className="w-4 h-4 mr-2" />
              Launch App
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${app.gradient ?? 'from-blue-500 to-cyan-500'} text-white mb-6`}>
            <Icon className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {app.title}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {app.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {(app.tech ?? []).map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-white/10 text-white/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Image */}
        {app.image_url && (
        <div className="mb-16">
          <img 
            src={app.image_url} 
            alt={app.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Objective */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{/* objective not present in DB type, static for now */}Goal: Deliver value with this application.</p>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{/* architecture not present in DB type, static */}Check docs for more details on architecture.</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(app.features ?? []).map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'}`}></div>
                  {feature}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Getting Started - static for now */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                <Code className="w-4 h-4 text-white" />
              </div>
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                  1
                </div>
                <p className="text-white/70">Connect your account to get started.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Section, static */}
        {demoTestimonials.length > 0 && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient ?? 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                  <Star className="w-4 h-4 text-white" />
                </div>
                User Testimonials
              </CardTitle>
              <CardDescription className="text-white/60">
                Real feedback from users who are already using {app.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoTestimonials.map((testimonial, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/70 mb-3 italic">"{testimonial.comment}"</p>
                    <div className="text-sm">
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
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
      </div>
    </div>
  );
};

export default AppDetails;
