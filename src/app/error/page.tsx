import Link from "next/link";

export default function ErrorPage({ searchParams }) {
    const { type } = searchParams;
    const knownErrors = ["login-failed", "magic-link"];
    return (
        <div style={{ textAlign: "center"}}>
            <h1>Oops!</h1>
            {type === "login-failed" && (
                <strong>Login was not successful, sorry</strong>
            )}
            {type === "magic-link" && (
                <strong>Could not send a magic link. Maybe the email adress was wrong?</strong>
            )}
            {!knownErrors.includes(type) && (
                <strong>Something went wrong. Please try again or contact support</strong>
            )}
            <br /><br />
            <Link href="/" role="button">
                Go back.
            </Link>
        </div>
    );
}