
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface AppAttachment {
  id: string;
  application_id: string;
  file_name: string;
  file_url: string;
  file_type: string | null;
  uploaded_at: string | null;
}

// Fetch attachments for an app
const fetchAppAttachments = async (application_id: string): Promise<AppAttachment[]> => {
  const { data, error } = await supabase
    .from("app_attachments")
    .select("*")
    .eq("application_id", application_id)
    .order("uploaded_at", { ascending: false });
  if (error) throw error;
  return data as AppAttachment[];
};

// Upload attachment (file) to the bucket & DB
const uploadAttachment = async ({
  file,
  application_id,
}: {
  file: File;
  application_id: string;
}) => {
  // Upload file to storage
  const bucket = "app-attachments";
  const filePath = `${application_id}/${Date.now()}_${file.name}`;
  const { data: storageData, error: storageError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, { upsert: false });
  if (storageError) throw storageError;

  // Get public file URL
  const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filePath);

  // Insert metadata into DB
  const { data: dbData, error: dbError } = await supabase
    .from("app_attachments")
    .insert({
      application_id,
      file_name: file.name,
      file_url: urlData.publicUrl,
      file_type: file.type,
    })
    .select()
    .single();

  if (dbError) throw dbError;
  return dbData;
};

export const useAppAttachments = (application_id?: string) => {
  return useQuery({
    queryKey: ["app_attachments", application_id],
    queryFn: () => fetchAppAttachments(application_id!),
    enabled: !!application_id,
  });
};

export const useAttachmentUpload = (application_id?: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => uploadAttachment({ file, application_id: application_id! }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["app_attachments", application_id] });
    },
  });
};
