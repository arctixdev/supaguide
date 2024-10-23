import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { urlPath } from "@/utils/url-helpers";
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }) {
  const supabase = getSupabaseCookiesUtilClient();
  
  await supabase.auth.signOut();

  return NextResponse.redirect(new URL(urlPath("/", params.tenant), request.url));
}