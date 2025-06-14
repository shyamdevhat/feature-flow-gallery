
-- 1. Create a public storage bucket for app attachments (images/docs)
insert into storage.buckets (id, name, public) values ('app-attachments', 'app-attachments', true);

-- 2. Table to link attachments to applications
CREATE TABLE public.app_attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Optional: Index for efficient retrieval by app id
CREATE INDEX idx_app_attachments_application_id ON public.app_attachments (application_id);
