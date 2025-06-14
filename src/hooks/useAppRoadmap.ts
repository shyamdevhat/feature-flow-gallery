
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

// Fetch all roadmap items for a given application_id, sorted by sort_order
const fetchAppRoadmap = async (application_id: string): Promise<AppRoadmapItem[]> => {
  const { data, error } = await supabase
    .from("app_roadmap_items")
    .select("*")
    .eq("application_id", application_id)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data as AppRoadmapItem[];
};

export const useAppRoadmap = (application_id?: string) => {
  return useQuery({
    queryKey: ["app_roadmap", application_id],
    queryFn: () => fetchAppRoadmap(application_id!),
    enabled: !!application_id,
  });
};
