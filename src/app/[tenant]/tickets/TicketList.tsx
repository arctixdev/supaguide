import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { TICKET_STATUS } from "@/utils/constants";
import { urlPath } from "@/utils/url-helpers";
import Link from "next/link";

export async function TicketList({ tenant, searchParams }) {
  const supabase = getSupabaseCookiesUtilClient();

  let page = 1;

  if (
    Number.isInteger(Number(searchParams.page)) &&
    Number(searchParams.page) > 1
  ) {
    page = Number(searchParams.page);
  }

  const startingPoint = (page - 1) * 6;

  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .range(startingPoint, startingPoint + 5)
    .order("state", { ascending: true })
    .order("created_at", { ascending: false })
    .eq("tenant", tenant);

  const { count, error: countError } = await supabase
    .from("tickets")
    .select("*", { count: "exact", head: true })
    .eq("tenant", tenant);

  const moreRows = count - page * 6 > 0;

  if (error || countError) {
    console.error(error || countError);
    return <div>An error occurred while fetching the tickets</div>;
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {page > 1 && (
          <Link
            role="button"
            href={{ query: { page: page - 1, r: Math.random() } }}
          >
            Previous page
          </Link>
        )}
        {moreRows && (
          <Link
            role="button"
            href={{ query: { page: page + 1, r: Math.random() } }}
          >
            Next page
          </Link>
        )}
      </div>
    </>
  );
}
