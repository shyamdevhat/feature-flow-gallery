
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, GripVertical } from "lucide-react";
import { useFeatures } from "@/hooks/useFeatures";
import { icons } from "lucide-react";

const FeaturesManager = () => {
  const { data: features, isLoading, error } = useFeatures();

  if (isLoading) {
    return <div className="text-center py-8">Loading features...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading features</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Features Management</h2>
          <p className="text-muted-foreground">Manage platform features and capabilities</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Feature
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Features ({(features || []).length})</CardTitle>
          <CardDescription>
            View and manage all platform features displayed on the homepage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Icon</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Sort Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(features || []).map((feature) => {
                const LucideIcon = icons[feature.icon as keyof typeof icons] || icons.Rocket;
                return (
                  <TableRow key={feature.id}>
                    <TableCell>
                      <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
                    </TableCell>
                    <TableCell>
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <LucideIcon className="w-4 h-4" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{feature.title}</TableCell>
                    <TableCell className="max-w-md truncate">{feature.description}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{feature.sort_order}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesManager;
