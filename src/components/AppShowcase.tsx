
import React, { useState } from "react";
import { Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react";
import AppCard from "./AppCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useApplications } from "@/hooks/useApplications";

const appIcons: Record<string, React.ElementType> = {
  Zap,
  Database,
  Shield,
  Globe,
  Smartphone,
  Code,
};

const APPS_PER_PAGE = 6;

const AppShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Use paginated hook
  const { data, isLoading, isError } = useApplications(currentPage, APPS_PER_PAGE);

  const apps = data?.data || [];
  const totalApps = data?.total || 0;
  const totalPages = Math.max(Math.ceil(totalApps / APPS_PER_PAGE), 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("app-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="app-showcase" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Application
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Portfolio
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Each application represents innovation, crafted with modern technologies 
            and designed for exceptional user experiences.
          </p>
        </div>

        {isLoading && (
          <div className="text-white text-center py-10">Loading applications...</div>
        )}
        {isError && (
          <div className="text-red-400 text-center py-10">
            Failed to load applications from the database.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {apps.map((app, index) => {
            const Icon = appIcons[app.icon] || Code;
            return (
              <AppCard
                key={app.id}
                app={{
                  ...app,
                  icon: Icon,
                  image: app.image_url,
                  gradient: app.gradient,
                  features: app.features,
                  tech: app.tech,
                }}
                index={index}
              />
            );
          })}
        </div>

        {/* Pagination */}
        {totalApps > APPS_PER_PAGE && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={`${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-white/10"
                    } text-white border-white/30`}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className={`cursor-pointer ${
                        currentPage === page
                          ? "bg-white/20 text-white border-white/50"
                          : "text-white/70 hover:bg-white/10 hover:text-white border-white/30"
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      currentPage < totalPages && handlePageChange(currentPage + 1)
                    }
                    className={`${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-white/10"
                    } text-white border-white/30`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppShowcase;
