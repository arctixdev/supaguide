import { urlPath } from "@/utils/url-helpers";
import Link from "next/link";

export default function ErrorPage({ searchParams, params }) {
    const { type } = searchParams;
    const knownErrors = ["login-failed", "magic-link", "invalid-magic-link"];
    return (
        <div style={{ textAlign: "center"}}>
            <h1>Oops!</h1>
            {type === "login-failed" && (
                <strong>Login was not successful, sorry</strong>
            )}
            {type === "magic-link" && (
                <strong>Could not send a magic link. Maybe the email adress was wrong?</strong>
            )}
            {type === "invalid-magic-link" && (
                <strong>That magic link is invalid. Maybe its expired?</strong>
            )}
            {!knownErrors.includes(type) && (
                <strong>Something went wrong. Please try again or contact support</strong>
            )}
            <br /><br />
            <Link href={urlPath("/", params.tenant)} role="button">
                Go back.
            </Link>
        </div>
    );
}