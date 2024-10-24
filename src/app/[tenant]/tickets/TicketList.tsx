//

import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { TICKET_STATUS } from "@/utils/constants";
import { urlPath } from "@/utils/url-helpers";
import Link from "next/link";
import NotFound from "../not-found";

export async function TicketList({ tenant, searchParams }) {
  const supabase = getSupabaseCookiesUtilClient();

  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .limit(6)
    .eq("tenant", tenant);

  const { count, error: countError } = await supabase
    .from("tickets")
    .select("*", { count: "exact", head: true })
    .eq("tenant", tenant);

  const moreRows = count - tickets.length > 0;

  if (error || countError) {
    console.error(error || countError);
    return <NotFound />;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th></th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>
                <Link href={urlPath(`/tickets/details/${ticket.id}`, tenant)}>
                  {ticket.title}
                </Link>
              </td>
              <td>{TICKET_STATUS[ticket.state]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {moreRows && (
          <Link role="button" href={{ query: { page: 2 }}}>
            Next page
          </Link>
        )}
      </div>
    </>
  );
}
