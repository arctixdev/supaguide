import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
    const { supabase, response } = getSupabaseReqResClient({ request, });
    console.log("supabase", supabase);
    return response.value;
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};