import { NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { urlPath } from "@/utils/url-helpers";

export async function POST(request, { params }) {
    const formData = await request.formData();
    const supabase = getSupabaseCookiesUtilClient();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { tenant } = params;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    const userData = data?.user;

    if (error || !userData || !userData.app_metadata?.tenants?.includes(tenant)) {
        supabase.auth.signOut();
        return NextResponse.redirect(
            new URL(urlPath("/error?type=login-failed", tenant), request.url),
            { status: 302 },
        );
    }

    return NextResponse.redirect(
        new URL(urlPath("/tickets", tenant), request.url),
        { status: 302 },
    );
}
