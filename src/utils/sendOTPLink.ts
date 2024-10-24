import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { Resend } from 'resend';
import { buildUrl } from "./url-helpers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTPLink(email, type, tenant, request) {
  const supabaseAdmin = getSupabaseAdminClient();

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type,
    },
  );

  const user = linkData.user;

  if (error || !user.app_metadata?.tenants.includes(tenant)) {
    return false;
  }

  const { hashed_token } = linkData.properties;

  const constructedLink = buildUrl(
    `/auth/verify?hashed_token=${hashed_token}&type=${type}`,
    tenant,
    request,
  );

  let mailSubject = "";
  let initialSentence = "";
  let sentenceEnding = "";

  if (type === "signup") {
    mailSubject = "Activate your account";
    initialSentence = "Hi there, you successfully signed up!";
    sentenceEnding = "activate your account";
  } else if (type === "recovery") {
    mailSubject = "New password requested";
    initialSentence = "Hi there, you requested a password change!";
    sentenceEnding = "change it";
  } else {
    mailSubject = "Magic Link requested";
    initialSentence = "Hey, you requested a magic login link!";
    sentenceEnding = "log in";
  }

  await resend.emails.send({
    from: "Arctix <contact@arctix.dev>",
    to: email,
    subject: mailSubject,
    html: `
    <h1>${initialSentence}</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> to ${sentenceEnding}.</p>
    `,
  });

  return true;
}