
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These environment variables are provided by Lovable/Supabase integration, but fallback to hardcoded values if not present
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
  ?? "https://mhbparfqqibumswhrzdv.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
  ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYnBhcmZxcWlidW1zd2hyemR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4ODMzMDMsImV4cCI6MjA2NTQ1OTMwM30.MhdQ1EdMCZ1EpYe9JmHQtSuIvmaLjf9dOUP3eExmlZU";

// Throw helpful error if neither env var nor fallback is provided (should never happen)
function throwIfMissing(key: string, value: string | undefined) {
  if (!value || value === "undefined") {
    throw new Error(
      `Supabase environment variable ${key} is missing. Please connect your Lovable project to Supabase via the green button at the top right of the editor, and reload.`
    );
  }
}

throwIfMissing("VITE_SUPABASE_URL", supabaseUrl);
throwIfMissing("VITE_SUPABASE_ANON_KEY", supabaseAnonKey);

export const supabase: SupabaseClient = createClient(supabaseUrl!, supabaseAnonKey!);
