import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { urlPath } from "@/utils/url-helpers";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");
  const isRecovery = searchParams.get("type") === "recovery";

  const supabase = getSupabaseCookiesUtilClient();

  const { tenant } = params;

  let verifyType = "magiclink";
  if (isRecovery) verifyType = "recovery";

  const { error } = await supabase.auth.verifyOtp({
    type: verifyType as "magiclink" | "recovery",
    token_hash: hashed_token,
  });

  if (error) {
    return NextResponse.redirect(
      new URL(urlPath("/error?type=invalid_magiclink", tenant), request.url),
    );
  } else {
    if (isRecovery) {
      return NextResponse.redirect(
        new URL(urlPath("/tickets/change-password", tenant), request.url),
      );
    } else {
      return NextResponse.redirect(new URL(urlPath("/tickets", tenant), request.url));
    }
  }
}