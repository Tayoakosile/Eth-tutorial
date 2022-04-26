import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const supabase = createClient(
  "https://fysnaflpdzdqkrjxbpml.supabase.co",
  `${process.env.NEXT_PUBLIC_DB_KEY}`
);

export default supabase;
