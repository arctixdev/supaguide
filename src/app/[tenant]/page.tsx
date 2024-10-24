import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { Login } from "./Login";
import { FORM_TYPES } from "./formTypes";
import NotFound from "./not-found";

export default async function LoginPage({ searchParams, params }) {
  const wantsMagicLink = searchParams.magicLink === "yes";
  const wantsPasswordRecovery = searchParams.passwordRecovery === "yes";
  const supabaseAdmin = getSupabaseAdminClient();
  const { data, error } = await supabaseAdmin.from("tenants").select("*").eq("id", params.tenant).single();

  if (error) { return <NotFound /> }

  const { name: tenantName } = data;

  let formType = FORM_TYPES.PASSWORD_LOGIN;
  if (wantsMagicLink) {
    formType = FORM_TYPES.MAGIC_LINK;
  } else if (wantsPasswordRecovery) {
    formType = FORM_TYPES.PASSWORD_RECOVERY;
  }

  return <Login formType={formType} tenant={params.tenant} tenantName={tenantName} />;
}