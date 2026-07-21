import { createClient } from '@supabase/supabase-js';

// Create React App exposes env vars prefixed with REACT_APP_
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Fallback warning instead of hard crash — so the site still loads
// even if .env is not set up yet
if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase env variables not found. ' +
    'Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to your .env file.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);
