
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useApplications } from "@/hooks/useApplications";
import { useNavigate } from "react-router-dom";

const ApplicationsManager = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useApplications(currentPage, 10);

  const apps = data?.data || [];
  const totalApps = data?.total || 0;

  if (isLoading) {
    return <div className="text-center py-8">Loading applications...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading applications</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Applications Management</h2>
          <p className="text-muted-foreground">Manage your AI applications portfolio</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Application
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Applications ({totalApps})</CardTitle>
          <CardDescription>
            View and manage all AI applications in your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Technologies</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apps.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{app.description}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {(app.tech || []).slice(0, 2).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {(app.tech || []).length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{(app.tech || []).length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(app.created_at || '').toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/app/${app.id}`)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationsManager;
