
-- Insert several new applications for pagination/playground
INSERT INTO public.applications (
  title, description, tech, features, icon, gradient, image_url
) VALUES
  (
    'HealthTrack',
    'Comprehensive fitness and health tracking app with personalized insights.',
    ARRAY['React Native', 'Node.js', 'PostgreSQL'],
    ARRAY['Heart Rate Monitor', 'Habit Builder', 'Activity History'],
    'Shield',
    'from-green-400 to-blue-400',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop'
  ),
  (
    'ShopRadar',
    'Smart shopping assistant to track prices and deals for your favorite products.',
    ARRAY['Vue', 'Firebase', 'Cloud Functions'],
    ARRAY['Price Alerts', 'Wishlist Sync', 'Store Comparison'],
    'Zap',
    'from-yellow-400 to-orange-400',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop'
  ),
  (
    'EduNext',
    'Next-gen e-learning platform with interactive courses and instant feedback.',
    ARRAY['Angular', 'Django', 'Redis'],
    ARRAY['Interactive Quizzes', 'Progress Tracker', 'Peer Reviews'],
    'Database',
    'from-blue-600 to-purple-600',
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=600&fit=crop'
  ),
  (
    'EventHero',
    'Plan and manage events seamlessly, from invites to analytics.',
    ARRAY['Svelte', 'Go', 'Supabase'],
    ARRAY['RSVP Integration', 'Automatic Reminders', 'Live Stats'],
    'Globe',
    'from-indigo-500 to-green-400',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop'
  ),
  (
    'MoneyMates',
    'Collaborative expense tracker for groups and housemates.',
    ARRAY['React', 'Express', 'MongoDB'],
    ARRAY['Shared Bills', 'Expense Categories', 'Notifications'],
    'Code',
    'from-teal-400 to-purple-700',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
  ),
  (
    'RecipeRocket',
    'AI-powered meal planner and recipe suggester tailored to your tastes.',
    ARRAY['React', 'FastAPI', 'Neo4j'],
    ARRAY['Ingredient Scanner', 'Smart Planner', 'Share Recipes'],
    'Smartphone',
    'from-pink-400 to-yellow-500',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop'
  ),
  (
    'TravelMap',
    'Visualize your journeys and share experiences on a global map.',
    ARRAY['Next.js', 'Supabase', 'Leaflet'],
    ARRAY['Map Pins', 'Photo Albums', 'Travel Stats'],
    'Globe',
    'from-purple-400 to-blue-900',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop'
  );
