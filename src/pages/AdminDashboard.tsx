
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const [tab, setTab] = useState('apps');
  return (
    <div className="min-h-screen w-full bg-background text-foreground py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="apps">Applications</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            {/* Add more Tabs as needed */}
          </TabsList>
          <TabsContent value="apps">
            {/* TODO: Implement Applications management */}
            <p className="text-muted-foreground">Manage AI Applications here.</p>
          </TabsContent>
          <TabsContent value="roadmap">
            <p className="text-muted-foreground">Manage Roadmap items here.</p>
          </TabsContent>
          <TabsContent value="features">
            <p className="text-muted-foreground">Manage Features here.</p>
          </TabsContent>
          <TabsContent value="testimonials">
            <p className="text-muted-foreground">Manage Testimonials here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
