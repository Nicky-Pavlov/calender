import { Link } from 'react-router-dom'

function formatEventDate(value) {
  if (!value) {
    return ''
  }

  const parsed = new Date(`${value}T00:00:00`)

  if (Number.isNaN(parsed.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parsed)
}

export default function EventItem({ event, onDelete }) {
  return (
    <div className="event">
      <h2>{event.title}</h2>
      <p>Date: {formatEventDate(event.date)}</p>
      <p>{event.description}</p>
      <div className="event-actions">
        <Link className="event-update-button" to={`/update/${event.id}`}>Update</Link>
        <button className="event-delete-button" type="button" onClick={() => onDelete(event.id)}>Delete</button>
      </div>
    </div>
  );
}                                                