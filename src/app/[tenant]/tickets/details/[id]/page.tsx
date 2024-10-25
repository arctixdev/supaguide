import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { TicketComments } from "./TicketComments";
import classes from "./TicketDetails.module.css";
import NotFound from "@/app/[tenant]/not-found";
import { TICKET_STATUS } from "@/utils/constants";

export default async function TicketDetailsPage({ params }) {
  const supabase = getSupabaseCookiesUtilClient();
  const id = Number(params.id);

  const { data: ticket, error } = await supabase.from("tickets").select("*").eq("id", id).single();

  if (error) {
    console.error(error);
    return <NotFound />;
  }

  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong>#{params.id}</strong> -{" "}
        <strong className={classes.ticketStatusGreen}>{TICKET_STATUS[ticket.status]}</strong>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>{ticket.author_name}</strong> at{" "}
          <time>
            {new Date(ticket.created_at).toLocaleString()}
          </time>
        </small>
        <h2>{ticket.title}</h2>
      </header>

      <section>{ticket.description}</section>

      <TicketComments />
    </article>
  );
}