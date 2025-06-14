
-- Add mock roadmap data for application id 'cbfee6e5-bfcd-45df-b505-dc1244b8ee66'
INSERT INTO public.app_roadmap_items (application_id, title, description, status, sort_order)
VALUES
  ('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'Project Initialization', 'Core architecture and basic layout setup.', 'done', 1),
  ('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'Authentication', 'Setup user login, registration and permissions.', 'done', 2),
  ('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'Gallery Feature', 'View and manage attachments like images, diagrams, and docs.', 'in_progress', 3),
  ('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'Live Collaboration', 'Enable multiple users to work on architecture together.', 'planned', 4),
  ('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'PDF/Document Export', 'One-click export of architecture details.', 'planned', 5);

-- (For the gallery feature, storage and metadata tables will be handled in the next step.)
