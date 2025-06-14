
-- Create a table for application-specific roadmap items
CREATE TABLE public.app_roadmap_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'planned', -- planned | in_progress | done
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Index for efficient querying by application
CREATE INDEX idx_app_roadmap_application_id ON public.app_roadmap_items (application_id);

-- (Optional) Enable Row Level Security if you plan on making this multi-tenant/protected in the future
-- ALTER TABLE public.app_roadmap_items ENABLE ROW LEVEL SECURITY;
