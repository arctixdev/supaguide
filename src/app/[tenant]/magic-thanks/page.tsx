import { urlPath } from "@/utils/url-helpers"
import Link from "next/link"

export default function MagicLinkThanks({ params }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Check your inbox!</h1>
            Thanks! You should recieve a link to login in a few seconds. You can close this page now.
            <br /><br />
            <Link role="button" href={urlPath("/", params.tenant)}>
                Go back.
            </Link>
        </div>
    )
}