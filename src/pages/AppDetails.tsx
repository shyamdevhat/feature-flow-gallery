import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Github, CheckCircle, Zap, Database, Code, Globe, Smartphone, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Application } from "@/types/applications";
import AppHeader from '@/components/appdetails/AppHeader';
import HeroSection from '@/components/appdetails/HeroSection';
import MainImage from '@/components/appdetails/MainImage';
import DetailsGrid from '@/components/appdetails/DetailsGrid';
import Benefits from '@/components/appdetails/Benefits';
import GettingStarted from '@/components/appdetails/GettingStarted';
import Testimonials from '@/components/appdetails/Testimonials';
import CtaSection from '@/components/appdetails/CtaSection';

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
      <AppHeader app={app} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <HeroSection app={app} />
        <MainImage src={app.image_url!} alt={app.title} />
        <DetailsGrid gradient={app.gradient} />
        <Benefits features={app.features} gradient={app.gradient} />
        <GettingStarted gradient={app.gradient} />
        <Testimonials appTitle={app.title} />
        <CtaSection app={app} />
      </div>
    </div>
  );
};

export default AppDetails;
