
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface AppRoadmapItem {
  id: string;
  application_id: string;
  title: string;
  description: string | null;
  status: string;
  sort_order: number;
  created_at: string | null;
  updated_at: string | null;
}

interface FetchAppRoadmapParams {
  application_id: string;
  status?: string;
  page?: number;
  limit?: number;
}

// Fetch roadmap items with pagination and filtering
const fetchAppRoadmap = async ({ 
  application_id, 
  status, 
  page = 1, 
  limit = 10 
}: FetchAppRoadmapParams): Promise<{ items: AppRoadmapItem[]; totalCount: number }> => {
  let query = supabase
    .from("app_roadmap_items")
    .select("*", { count: "exact" })
    .eq("application_id", application_id)
    .order("sort_order", { ascending: true });

  if (status && status !== "all") {
    query = query.eq("status", status);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await query.range(from, to);

  if (error) throw error;
  
  return {
    items: data as AppRoadmapItem[],
    totalCount: count || 0
  };
};

export const useAppRoadmap = (
  application_id?: string, 
  status?: string, 
  page: number = 1, 
  limit: number = 10
) => {
  return useQuery({
    queryKey: ["app_roadmap", application_id, status, page, limit],
    queryFn: () => fetchAppRoadmap({ 
      application_id: application_id!, 
      status, 
      page, 
      limit 
    }),
    enabled: !!application_id,
  });
};
