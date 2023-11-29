import { createClient } from '@supabase/supabase-js';

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const client = {
  auth: supabase.auth,
  user: supabase.auth.getUser(),
};
