"use client";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { FORM_TYPES } from "./formTypes";
import { urlPath } from "@/utils/url-helpers";

export const Login = ({ formType = "pw-login", tenant, tenantName }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const isPasswordRecovery = formType === FORM_TYPES.PASSWORD_RECOVERY;
  const isPasswordLogin = formType === FORM_TYPES.PASSWORD_LOGIN;
  const isMagicLinkLogin = formType === FORM_TYPES.MAGIC_LINK;

  const formAction = isPasswordLogin
    ? urlPath(`/auth/pw-login`, tenant)
    : urlPath(`/auth/magic-link`, tenant);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        if (session.user.app_metadata.tenants?.includes(tenant)) {
          router.push(urlPath("/tickets", tenant));
        } else {
          supabase.auth.signOut();
          alert("You do not have access to this tenant");
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <form
        method="POST"
        action={formAction}
        onSubmit={(event) => {
          isPasswordLogin && event.preventDefault();

          if (isPasswordLogin) {
            supabase.auth
              .signInWithPassword({
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value,
              })
              .then((result) => {
                !result.data?.user && alert("Could not sign in"); // new version

                /** old version:
              if (result.data?.user) {
                router.push("/tickets");
              } else {
                alert("Could not sign in");
              }
              */
              });
          }
        }}
      >
        {isPasswordRecovery && (
          <input type="hidden" name="type" value="recovery" />
        )}

        <article style={{ maxWidth: "480px", margin: "auto" }}>
          <header>
            {isPasswordRecovery && <strong>Request new password</strong>}
            {!isPasswordRecovery && <strong>Login</strong>}
            <div style={{ display: "block", fontSize: "0.7em" }}>
              {tenantName}
            </div>
          </header>

          <fieldset>
            <label htmlFor="email">
              Email{" "}
              <input
                ref={emailInputRef}
                type="email"
                id="email"
                name="email"
                required
              />
            </label>

            {isPasswordLogin && (
              <label htmlFor="password" style={{ marginTop: "20px" }}>
                Password{" "}
                <input
                  ref={passwordInputRef}
                  type="password"
                  id="password"
                  name="password"
                />
              </label>
            )}
          </fieldset>

          <button type="submit">
            {isPasswordLogin && "Sign in with Password"}
            {isPasswordRecovery && "Request new password"}
            {isMagicLinkLogin && "Sign in with Magic Link"}
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: "6px",
              marginBottom: "20px",
            }}
          >
            {!isPasswordLogin && (
              <Link
                role="button"
                className="contrast"
                href={{
                  pathname: urlPath("/", tenant),
                  query: { magicLink: "no" },
                }}
              >
                Go to Password Login
              </Link>
            )}
            {!isMagicLinkLogin && (
              <Link
                role="button"
                className="contrast"
                href={{
                  pathname: urlPath("/", tenant),
                  query: { magicLink: "yes" },
                }}
              >
                Go to Magic Link Login
              </Link>
            )}
          </div>

          {!isPasswordRecovery && (
            <Link
              href={{
                pathname: urlPath("/", tenant),
                query: { passwordRecovery: "yes" },
              }}
              style={{
                textAlign: "center",
                display: "block",
              }}
            >
              Go to Password Recovery
            </Link>
          )}
          <Link
            href={urlPath("/register", tenant)}
            style={{
              textAlign: "center",
              display: "block",
              marginTop: "1em",
            }}
          >
            Create account
          </Link>
        </article>
      </form>
      <div>
        <div>
          <h1>DEMO Login credentials</h1>
          <p>
            <strong>Email:</strong>
            <br />
            <strong>
              <code>test@{tenant}-tickets.arctix.dev</code>
            </strong>
          </p>
          <p>
            <strong>Password:</strong>
            <br />
            <strong>
              <code>supersecretpassword</code>
            </strong>
          </p>
        </div>
        <div>
          <h1>DEMO - links to other tenants</h1>
          <p>
            <Link href="https://hackclub-tickets.arctix.dev/">
              Go to Hack Club Tickets DEMO
            </Link>
          </p>
          <p>
            <Link href="https://testorg-tickets.arctix.dev/">
              Go to Test Org Tickets DEMO
            </Link>
          </p>
          <p>
            <Link href="https://awest-tickets.arctix.dev/">
              Go to Test Awest DEMO
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
