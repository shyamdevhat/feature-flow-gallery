
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { CheckCircle, Clock, Zap, List, RefreshCw, Filter } from "lucide-react";
import { AppRoadmapItem, useAppRoadmap } from "@/hooks/useAppRoadmap";

const statusMap: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  planned: {
    icon: <Clock className="w-4 h-4" />,
    color: "bg-yellow-500 text-white",
    label: "Planned",
  },
  in_progress: {
    icon: <RefreshCw className="w-4 h-4 animate-spin-slow" />,
    color: "bg-blue-500 text-white",
    label: "In Progress",
  },
  done: {
    icon: <CheckCircle className="w-4 h-4" />,
    color: "bg-green-500 text-white",
    label: "Done",
  },
};

interface AppRoadmapProps {
  applicationId: string;
  gradient?: string | null;
}

const AppRoadmap: React.FC<AppRoadmapProps> = ({ applicationId, gradient }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const itemsPerPage = 5;

  const { data, isLoading, error } = useAppRoadmap(applicationId, statusFilter, currentPage, itemsPerPage);

  if (isLoading) {
    return (
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <List className="w-5 h-5" />
            Roadmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/60">Loading roadmap…</p>
        </CardContent>
      </Card>
    );
  }

  if (error || !data || data.items.length === 0) {
    return (
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <List className="w-5 h-5" />
            Roadmap
          </CardTitle>
          <CardDescription className="text-white/60">
            What's planned and coming soon for this application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white/60">No roadmap items found.</p>
        </CardContent>
      </Card>
    );
  }

  const totalPages = Math.ceil(data.totalCount / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <List className="w-5 h-5" />
          Roadmap
        </CardTitle>
        <CardDescription className="text-white/60">
          What's planned and coming soon for this application.
        </CardDescription>
        
        {/* Filter Section */}
        <div className="flex items-center gap-2 mt-4">
          <Filter className="w-4 h-4 text-white/60" />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-white/20">
              <SelectItem value="all" className="text-white hover:bg-white/10">All Status</SelectItem>
              <SelectItem value="planned" className="text-white hover:bg-white/10">Planned</SelectItem>
              <SelectItem value="in_progress" className="text-white hover:bg-white/10">In Progress</SelectItem>
              <SelectItem value="done" className="text-white hover:bg-white/10">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 mb-6">
          {data.items.map((item) => {
            const status = statusMap[item.status] || statusMap["planned"];
            return (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${status.color}`}
                >
                  {status.icon}
                  <span className="ml-2">{status.label}</span>
                </span>
                <div className="flex-1">
                  <p className="text-white font-medium">{item.title}</p>
                  {item.description && (
                    <p className="text-white/60 text-sm mt-1 leading-snug">{item.description}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="text-white hover:bg-white/10 cursor-pointer"
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className={`text-white hover:bg-white/10 cursor-pointer ${
                        currentPage === page ? 'bg-white/20' : ''
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="text-white hover:bg-white/10 cursor-pointer"
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Results summary */}
        <div className="text-center mt-4">
          <p className="text-white/60 text-sm">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, data.totalCount)} of {data.totalCount} items
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppRoadmap;
