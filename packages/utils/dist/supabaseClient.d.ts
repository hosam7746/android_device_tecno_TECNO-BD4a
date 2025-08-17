export declare function getBrowserSupabaseClient(): import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export type SupabaseClient = ReturnType<typeof getBrowserSupabaseClient>;
export default getBrowserSupabaseClient;
