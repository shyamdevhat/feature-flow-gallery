
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Feature } from "@/types/feature";

const fetchFeatures = async (): Promise<Feature[]> => {
  const { data, error } = await supabase
    .from("features")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Feature[];
};

export const useFeatures = () => {
  return useQuery({
    queryKey: ["features"],
    queryFn: fetchFeatures,
  });
};
