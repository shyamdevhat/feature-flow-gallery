
-- 1. Features Table
CREATE TABLE public.features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

INSERT INTO public.features (icon, title, description, sort_order) VALUES
('Rocket', 'Lightning Fast', 'Optimized performance with React''s latest features and efficient MongoDB queries.', 1),
('Users', 'Collaborative', 'Real-time collaboration features built for modern teams and workflows.', 2),
('Zap', 'AI Powered', 'Intelligent automation and insights powered by machine learning algorithms.', 3),
('Shield', 'Secure by Default', 'Enterprise-grade security with end-to-end encryption and data protection.', 4),
('Globe', 'Global Scale', 'Built for scale with distributed architecture and global CDN support.', 5),
('Code2', 'Developer First', 'Comprehensive APIs, documentation, and tools for seamless integration.', 6);

-- 2. Testimonials Table
CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  rating INTEGER NOT NULL,
  message TEXT NOT NULL,
  avatar_url TEXT,
  sort_order INTEGER DEFAULT 0
);

INSERT INTO public.testimonials (name, role, company, rating, message, avatar_url, sort_order) VALUES
('Sarah Chen', 'AI Research Director', 'TechCorp Inc.', 5, 'The AI applications showcase incredible innovation. TaskFlow Pro has transformed our project management workflow, increasing productivity by 45%.', 'https://images.unsplash.com/photo-1494790108755-2616b612b3be?w=100&h=100&fit=crop&crop=face', 1),
('Marcus Rodriguez', 'Engineering Manager', 'DataSoft Solutions', 5, 'DataViz Studio''s machine learning integration is phenomenal. We can now visualize complex datasets and generate insights in real-time.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', 2),
('Emily Watson', 'CTO', 'SecureNet Corp', 5, 'SecureConnect has revolutionized our internal communications. The end-to-end encryption gives us complete confidence in our data security.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', 3),
('David Kim', 'DevOps Lead', 'CloudTech Innovations', 5, 'CloudDeploy has simplified our deployment process dramatically. What used to take hours now takes minutes with zero downtime.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', 4),
('Lisa Thompson', 'Product Manager', 'Mobile Dynamics', 5, 'MobileFirst framework allowed us to launch our app on both iOS and Android simultaneously. The native performance is outstanding.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face', 5),
('Alex Johnson', 'Senior Developer', 'CodeCraft Studios', 5, 'CodeStudio''s AI completion feature has doubled my coding speed. The collaborative features make pair programming seamless.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', 6);

-- 3. Access Benefits Table
CREATE TABLE public.access_benefits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_color TEXT DEFAULT 'text-cyan-400',
  sort_order INTEGER DEFAULT 0
);

INSERT INTO public.access_benefits (icon, title, description, icon_color, sort_order) VALUES
('CheckCircle', 'Fast Review', 'We review all requests within 24 hours', 'text-cyan-400', 1),
('Shield', 'Secure Access', 'Enterprise-grade security for all users', 'text-cyan-400', 2),
('Zap', 'Full Support', 'Dedicated support team for approved users', 'text-cyan-400', 3);

-- Enable Row Level Security
ALTER TABLE public.features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.access_benefits ENABLE ROW LEVEL SECURITY;

-- Public can read everything
CREATE POLICY "Public can see all features" ON public.features
  FOR SELECT
  USING (true);

CREATE POLICY "Public can see all testimonials" ON public.testimonials
  FOR SELECT
  USING (true);

CREATE POLICY "Public can see all access benefits" ON public.access_benefits
  FOR SELECT
  USING (true);

-- (For now) anyone can insert/update/delete everything (demo/dev)
CREATE POLICY "Temp insert all features" ON public.features
  FOR INSERT
  WITH CHECK (true);
CREATE POLICY "Temp update all features" ON public.features
  FOR UPDATE
  USING (true);
CREATE POLICY "Temp delete all features" ON public.features
  FOR DELETE
  USING (true);

CREATE POLICY "Temp insert all testimonials" ON public.testimonials
  FOR INSERT
  WITH CHECK (true);
CREATE POLICY "Temp update all testimonials" ON public.testimonials
  FOR UPDATE
  USING (true);
CREATE POLICY "Temp delete all testimonials" ON public.testimonials
  FOR DELETE
  USING (true);

CREATE POLICY "Temp insert all access_benefits" ON public.access_benefits
  FOR INSERT
  WITH CHECK (true);
CREATE POLICY "Temp update all access_benefits" ON public.access_benefits
  FOR UPDATE
  USING (true);
CREATE POLICY "Temp delete all access_benefits" ON public.access_benefits
  FOR DELETE
  USING (true);
