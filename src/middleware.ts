import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";
import { NextRequest, NextResponse } from 'next/server'
 
export async function middleware(request: NextRequest) {
  const { supabase, response } = getSupabaseReqResClient({ request, });
  const session = await supabase.auth.getUser();
  const requestedPath = request.nextUrl.pathname;
  const sessionUser = session?.data?.user;

  if (requestedPath.startsWith("/tickets") && !sessionUser) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (requestedPath === "/" && sessionUser) {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }

  return response.value;
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};