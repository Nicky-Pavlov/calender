import { Link } from 'react-router-dom'

function addDaySuffix(day) {
  if (day % 100 >= 11 && day % 100 <= 13) {
    return `${day}th`
  }

  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}

function formatEventDate(value) {
  if (!value) {
    return ''
  }

  const parsed = new Date(`${value}T00:00:00`)

  if (Number.isNaN(parsed.getTime())) {
    return value
  }

  const day = addDaySuffix(parsed.getDate())
  const month = parsed.toLocaleString('en-GB', { month: 'long' })
  const year = parsed.getFullYear()

  return `${day} ${month} ${year}`
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