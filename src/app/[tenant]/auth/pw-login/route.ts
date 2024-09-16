import { NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

export async function POST(request) {
    const formData = await request.formData();
    const supabase = getSupabaseCookiesUtilClient();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    const userData = data?.user;

    if (error || !userData) {
        return NextResponse.redirect(new URL("/error?type=login-failed", request.url), { status: 302 });
    }

    return NextResponse.redirect(new URL("/tickets", request.url), { status: 302 });
}