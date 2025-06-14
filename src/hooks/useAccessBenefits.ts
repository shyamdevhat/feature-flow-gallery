
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { AccessBenefit } from "@/types/accessBenefit";

const fetchAccessBenefits = async (): Promise<AccessBenefit[]> => {
  const { data, error } = await supabase
    .from("access_benefits")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as AccessBenefit[];
};

export const useAccessBenefits = () => {
  return useQuery({
    queryKey: ["access_benefits"],
    queryFn: fetchAccessBenefits,
  });
};
