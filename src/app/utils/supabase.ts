import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export function getSupabaseConfigIssue(): string | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return "Thieu VITE_SUPABASE_URL hoac VITE_SUPABASE_ANON_KEY trong file .env";
  }

  if (!supabaseUrl.startsWith("https://") || !supabaseUrl.includes(".supabase.co")) {
    return "VITE_SUPABASE_URL khong hop le. Vi du dung: https://<project-ref>.supabase.co";
  }

  return null;
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
