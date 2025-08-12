
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4"
export const supabase = createClient("https://lhubynidwlzpsdqrpavs.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxodWJ5bmlkd2x6cHNkcXJwYXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMTA2MjAsImV4cCI6MjA3MDU4NjYyMH0.KXCgqZ4-IQJoVc9SAUyI189BBxAcW5maxkUdHG7bmeM", {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
})
