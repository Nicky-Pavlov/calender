export default function EventItem({ event }) {
  return (
    <div className="event">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}                                                   