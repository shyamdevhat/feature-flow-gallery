
-- Create a table to store application showcase data
CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech TEXT[],                  -- List of technologies
  features TEXT[],              -- List of key features
  icon TEXT,                    -- (optional) Lucide icon name or custom icon name
  gradient TEXT,                -- Tailwind gradient string (from-* to-*)
  image_url TEXT,               -- Public image URL
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Make the table visible to everyone (no RLS for public app gallery right now)
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Policy: allow anyone to SELECT
CREATE POLICY "Public app gallery: anyone can read" ON public.applications
  FOR SELECT
  USING (true);

-- Policy: only admins (to be defined later) can insert, update or delete.
-- For now, for demonstration, allow everyone to insert/update/delete (you may restrict this later)
CREATE POLICY "Everyone can insert" ON public.applications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Everyone can update" ON public.applications
  FOR UPDATE
  USING (true);

CREATE POLICY "Everyone can delete" ON public.applications
  FOR DELETE
  USING (true);

-- Insert 6 initial showcase apps matching your hardcoded UI
INSERT INTO public.applications (
  title, description, tech, features, icon, gradient, image_url
) VALUES
  (
    'TaskFlow Pro',
    'Advanced project management with AI-powered insights and real-time collaboration.',
    ARRAY['React', 'Python', 'MongoDB'],
    ARRAY['AI Analytics', 'Real-time Sync', 'Team Collaboration'],
    'Zap',
    'from-blue-500 to-cyan-500',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
  ),
  (
    'DataViz Studio',
    'Interactive data visualization platform with machine learning capabilities.',
    ARRAY['React', 'Python', 'MongoDB'],
    ARRAY['ML Integration', 'Custom Charts', 'Export Tools'],
    'Database',
    'from-purple-500 to-pink-500',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
  ),
  (
    'SecureConnect',
    'Next-generation secure communication platform with end-to-end encryption.',
    ARRAY['React', 'Python', 'MongoDB'],
    ARRAY['E2E Encryption', 'Video Calls', 'File Sharing'],
    'Shield',
    'from-green-500 to-teal-500',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop'
  ),
  (
    'CloudDeploy',
    'Automated deployment and scaling solution for modern web applications.',
    ARRAY['React', 'Python', 'MongoDB'],
    ARRAY['Auto Scaling', 'CI/CD Pipeline', 'Monitoring'],
    'Globe',
    'from-orange-500 to-red-500',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop'
  ),
  (
    'MobileFirst',
    'Cross-platform mobile development framework with native performance.',
    ARRAY['React', 'Python', 'MongoDB'],
    ARRAY['Native Performance', 'Cross Platform', 'Hot Reload'],
    'Smartphone',
    'from-indigo-500 to-purple-500',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
  ),
  (
    'CodeStudio',
    'Collaborative IDE with AI code completion and real-time pair programming.',
    ARRAY['React', 'Python', 'MongoDB'],
    ARRAY['AI Completion', 'Live Collaboration', 'Multi-language'],
    'Code',
    'from-pink-500 to-rose-500',
    'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop'
  );
