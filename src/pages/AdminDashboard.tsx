
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ApplicationsManager from "@/components/admin/ApplicationsManager";
import FeaturesManager from "@/components/admin/FeaturesManager";
import TestimonialsManager from "@/components/admin/TestimonialsManager";
import RoadmapManager from "@/components/admin/RoadmapManager";

const AdminDashboard = () => {
  const [tab, setTab] = useState('apps');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your GenAI platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="apps">Applications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          </TabsList>
          
          <TabsContent value="apps">
            <ApplicationsManager />
          </TabsContent>
          
          <TabsContent value="features">
            <FeaturesManager />
          </TabsContent>
          
          <TabsContent value="testimonials">
            <TestimonialsManager />
          </TabsContent>
          
          <TabsContent value="roadmap">
            <RoadmapManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
