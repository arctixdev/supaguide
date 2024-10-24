"use client";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { urlPath } from "@/utils/url-helpers";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function CreateTicket({ params }) {
  const supabase = getSupabaseBrowserClient();
  const ticketTitleRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const ticketDescriptionRef = useRef(null);
  const router = useRouter();

  return (
    <article>
      <h3>Create a new ticket</h3>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = ticketTitleRef.current.value;
          const description = ticketDescriptionRef.current.value;
          if (title.trim().length > 4 && description.trim().length > 9) {
            setIsLoading(true);

            supabase
              .from("tickets")
              .insert([
                {
                  title: title,
                  description: description,
                  tenant: params.tenant,
                  created_by: 1,
                  author_name: "John Doe",
                },
              ])
              .select()
              .single()
              .then(({ error, data }) => {
                if (error) {
                  alert("An error occurred while creating the ticket");
                  setIsLoading(false);
                  console.error(error);
                } else {
                  setIsLoading(false);
                  router.push(
                    urlPath("/tickets/details/" + data.id, params.tenant)
                  );
                }
              });

            setIsLoading(false);
          } else {
            alert(
              "Title should be at least 5 characters long and description should be at least 10 characters"
            );
          }
        }}
      >
        <input
          ref={ticketTitleRef}
          disabled={isLoading}
          placeholder="Add a title"
        />
        <textarea
          ref={ticketDescriptionRef}
          disabled={isLoading}
          placeholder="Add a comment"
        />
        <button type="submit" disabled={isLoading}>
          Create ticket now
        </button>
      </form>
    </article>
  );
}
