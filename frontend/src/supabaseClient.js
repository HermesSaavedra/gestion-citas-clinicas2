import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tidbzjoxhnvbebduwnpd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZGJ6am94aG52YmViZHV3bnBkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDE2Mjc2MywiZXhwIjoyMDU1NzM4NzYzfQ.gOBHCd8rDezQViWK1AFDBma4wjv93LS0yjVk-GXbiNU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
