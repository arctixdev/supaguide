import classes from "./TicketDetails.module.css";

export default function TicketDetailsPage() {
  return (
    <article className={classes.ticketDetails} aria-busy="true">
      <strong>Loading ticket...</strong>
    </article>
  );
}
