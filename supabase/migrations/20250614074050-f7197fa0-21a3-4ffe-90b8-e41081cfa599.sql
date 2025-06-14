
-- Insert an image diagram
INSERT INTO public.app_attachments (application_id, file_name, file_url, file_type)
VALUES 
('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'architecture-diagram.png', 'https://placehold.co/800x500/png?text=Diagram', 'image/png');

-- Insert a video file
INSERT INTO public.app_attachments (application_id, file_name, file_url, file_type)
VALUES 
('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'demo-architecture.mp4', 'https://www.w3schools.com/html/mov_bbb.mp4', 'video/mp4');

-- Insert a PDF document
INSERT INTO public.app_attachments (application_id, file_name, file_url, file_type)
VALUES 
('cbfee6e5-bfcd-45df-b505-dc1244b8ee66', 'system-flow.pdf', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'application/pdf');
