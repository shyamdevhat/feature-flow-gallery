
-- Add a column for "Getting Started" markdown content to applications
ALTER TABLE public.applications
  ADD COLUMN getting_started_markdown text;
