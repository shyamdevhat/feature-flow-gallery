
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, GripVertical, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { useApplications } from "@/hooks/useApplications";
import { useAppRoadmap } from "@/hooks/useAppRoadmap";

const statusMap: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  planned: {
    icon: <Clock className="w-4 h-4" />,
    color: "bg-yellow-500 text-white",
    label: "Planned",
  },
  in_progress: {
    icon: <RefreshCw className="w-4 h-4" />,
    color: "bg-blue-500 text-white",
    label: "In Progress",
  },
  done: {
    icon: <CheckCircle className="w-4 h-4" />,
    color: "bg-green-500 text-white",
    label: "Done",
  },
};

const RoadmapManager = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data: appsData } = useApplications(1, 100); // Get all apps for dropdown
  const apps = appsData?.data || [];
  
  const { data: roadmapData, isLoading, error } = useAppRoadmap(
    selectedAppId || undefined, 
    statusFilter, 
    currentPage, 
    10
  );

  const roadmapItems = roadmapData?.items || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Roadmap Management</h2>
          <p className="text-muted-foreground">Manage application roadmaps and feature plans</p>
        </div>
        <Button className="flex items-center gap-2" disabled={!selectedAppId}>
          <Plus className="w-4 h-4" />
          Add Roadmap Item
        </Button>
      </div>

      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Select Application</label>
          <Select value={selectedAppId} onValueChange={setSelectedAppId}>
            <SelectTrigger>
              <SelectValue placeholder="Choose an application..." />
            </SelectTrigger>
            <SelectContent>
              {apps.map((app) => (
                <SelectItem key={app.id} value={app.id}>
                  {app.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-48">
          <label className="text-sm font-medium mb-2 block">Filter by Status</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="planned">Planned</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Roadmap Items ({roadmapData?.totalCount || 0})
          </CardTitle>
          <CardDescription>
            {selectedAppId 
              ? `Manage roadmap items for ${apps.find(app => app.id === selectedAppId)?.title || 'selected application'}`
              : "Select an application to view and manage its roadmap items"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!selectedAppId ? (
            <div className="text-center py-8 text-muted-foreground">
              Please select an application to view its roadmap items
            </div>
          ) : isLoading ? (
            <div className="text-center py-8">Loading roadmap items...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">Error loading roadmap items</div>
          ) : roadmapItems.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No roadmap items found for this application
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Sort Order</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roadmapItems.map((item) => {
                  const status = statusMap[item.status] || statusMap["planned"];
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
                      </TableCell>
                      <TableCell>
                        <Badge className={status.color}>
                          {status.icon}
                          <span className="ml-1">{status.label}</span>
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell className="max-w-md truncate">
                        {item.description || "No description"}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.sort_order}</Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(item.created_at || '').toLocaleDateString()}
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadmapManager;
