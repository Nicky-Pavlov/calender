export default function EventItem({ event, onDelete }) {
  return (
    <div className="event">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
      <button className="event-delete-button" type="button" onClick={() => onDelete(event.id)}>Delete</button>
    </div>
  );
}                                                   