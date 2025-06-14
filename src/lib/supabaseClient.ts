
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These environment variables are provided by Lovable/Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

function throwIfMissing(key: string, value: string | undefined) {
  if (!value || value === "undefined") {
    throw new Error(
      `Supabase environment variable ${key} is missing. ` +
      `Please connect your Lovable project to Supabase via the green button at the top right of the editor, and reload.`
    );
  }
}

// Only throw detailed error if not available
throwIfMissing("VITE_SUPABASE_URL", supabaseUrl);
throwIfMissing("VITE_SUPABASE_ANON_KEY", supabaseAnonKey);

export const supabase: SupabaseClient = createClient(supabaseUrl!, supabaseAnonKey!);

