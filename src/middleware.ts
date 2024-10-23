import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";
import { NextRequest, NextResponse } from 'next/server'
 
export async function middleware(request: NextRequest) {
  const { supabase, response } = getSupabaseReqResClient({ request, });
  const session = await supabase.auth.getUser();
  const requestedPath = request.nextUrl.pathname;
  const sessionUser = session?.data?.user;

  const [tenant, ...restOfPath] = requestedPath.substring(1).split("/");
  if (!/[a-z0-9-_]+/.test(tenant)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }
  const applicationPath = "/" + restOfPath.join("/");

  if (applicationPath.startsWith("/tickets")) {
    if (!sessionUser) {
      return NextResponse.redirect(new URL(`/${tenant}/`, request.url));
    } 
    else if (!sessionUser.app_metadata?.tenants.includes(tenant)) {
      return NextResponse.rewrite(new URL('/not-found', request.url));
    } 
  }
  else if (applicationPath === "/" && sessionUser?.app_metadata?.tenants.includes(tenant)) {
    return NextResponse.redirect(new URL(`/${tenant}/tickets`, request.url));
  }

  return response.value;
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};