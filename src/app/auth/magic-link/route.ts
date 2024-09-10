import { NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

export async function POST(request) {
    const formData = await request.formData();
    const supabase = getSupabaseCookiesUtilClient();
    const email = formData.get("email") as string;

    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            shouldCreateUser: false,
        },
    });

    if (error) {
        return NextResponse.redirect(new URL("/error?type=magic-link", request.url), { status: 302 });
    }

    const thanksUrl = new URL("/magic-thanks", request.url);
    return NextResponse.redirect(thanksUrl, { status: 302 });
}