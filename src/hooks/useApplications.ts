
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Application } from "@/types/applications";

const fetchApplications = async (): Promise<Application[]> => {
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data as Application[];
};

export const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });
};
