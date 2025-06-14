
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Application } from "@/types/applications";

/**
 * Fetch paginated applications and total count from Supabase.
 * @param page 1-based page number
 * @param limit number of items per page
 */
const fetchApplications = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ data: Application[]; total: number }> => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  // Fetch the page of items
  const { data, error, count } = await supabase
    .from("applications")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: true })
    .range(from, to);

  if (error) throw error;

  return {
    data: data as Application[],
    total: count ?? 0,
  };
};

/**
 * useApplications returns paginated apps and total count
 */
export const useApplications = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["applications", page, limit],
    queryFn: () => fetchApplications({ page, limit }),
    staleTime: 250, // keeps data fresh for 0.25s to smooth UI
  });
};
