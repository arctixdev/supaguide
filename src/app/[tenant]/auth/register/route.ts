import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { sendOTPLink } from "@/utils/sendOTPLink";
import { buildUrl } from "@/utils/url-helpers";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const { tenant } = params;

    const isNonEmptyString = (str) => typeof str === "string" && str.length > 0;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(password) || !emailRegex.test(email)) {
        return NextResponse.redirect(buildUrl("/error", tenant, request), 302);
    }

    const [, emailHost] = email.split("@");
    
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase
        .from("tenants")
        .select("*")
        .eq("domain", emailHost)
        .single();
    
    const safeEmailString = encodeURIComponent(email);
    if (error || !data) {
        return NextResponse.redirect(buildUrl(`/error?type=register_email_mismatch&email=${safeEmailString}`, tenant, request), 302);
    }

    // Create user
    const { data: userData, error: userError } = await supabase.auth.admin.createUser({ email, password, app_metadata: { tenants: [tenant] } });
    
    if (userError) {
        const userExists = userError.message.includes("already been registered");
        if (userExists) {
        return NextResponse.redirect(
            buildUrl(
            `/error?type=register_mail_exists&email=${safeEmailString}`,
            tenant,
            request,
            ),
            302,
        );
        } else {
        return NextResponse.redirect(
            buildUrl("/error?type=register_unknown", tenant, request),
            302,
        );
        }
    }

    const { data: serviceUser } = await supabase
        .from("service_users")
        .insert({
        full_name: name,
        supabase_user: userData.user.id,
        })
        .select()
        .single();

    const { error: tpError } = await supabase
        .from("tenant_permissions")
        .insert({
        tenant,
        service_user: serviceUser?.id,
        });

    if (tpError) {
        await supabase.auth.admin.deleteUser(userData.user.id);
        return NextResponse.redirect(buildUrl("/error", tenant, request), 302);
    }

    console.log(await sendOTPLink(email, "signup", tenant, request));

    return NextResponse.redirect(
        buildUrl(`/registration-success?email=${safeEmailString}`, tenant, request),
        302,
    );
}