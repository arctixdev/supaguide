import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { urlPath } from "@/utils/url-helpers";

export async function POST(request, { params }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const supabaseAdmin = getSupabaseAdminClient();
  const type = formData.get("type") === "recovery" ? "recovery" : "magiclink";

  const { tenant } = params;

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type,
    },
  );

  const user = linkData?.user;
  if (error || !user.app_metadata?.tenants?.includes(tenant)) {
    return NextResponse.redirect(
      new URL(urlPath(`/error?type=${type}`, tenant), request.url),
      302,
    );
  }

  const { hashed_token } = linkData.properties;

  const constructedLink = new URL(urlPath(
    `/auth/verify?hashed_token=${hashed_token}&type=${type}`, tenant),
    request.url,
  );

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });

  const initialSentence =
    type === "recovery"
      ? "Hi there, you requested a password change!"
      : "Hi there, this is a custom magic link email!";
  const secondSentenceEnding = type === "recovery" ? "change it" : "log in";

  await transporter.sendMail({
    from: "Akademia <contact@akademia.cc>",
    to: email,
    subject: "Magic Link",
    html: `
    <h1>${initialSentence}</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> to ${secondSentenceEnding}.</p>
    `,
  });

  const thanksUrl = new URL(urlPath(`/magic-thanks?type=${type}`, tenant), request.url);
  return NextResponse.redirect(thanksUrl, 302);
}