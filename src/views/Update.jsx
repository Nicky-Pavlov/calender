import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

export default function Update() {
    const { id } = useParams()
    const { events, setEvents } = useOutletContext()
    const navigate = useNavigate()
    const eventId = Number(id)
    const currentEvent = events.find((event) => event.id === eventId)

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (!currentEvent) {
            return
        }

        setTitle(currentEvent.title ?? '')
        setDate(currentEvent.date ?? '')
        setDescription(currentEvent.description ?? '')
    }, [currentEvent])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!title || !date) {
            alert('Please fill in at least title and date')
            return
        }

        setEvents((prevEvents) =>
            prevEvents.map((item) =>
                item.id === eventId
                    ? { ...item, title, date, description }
                    : item
            )
        )

        navigate('/')
    }

    if (!currentEvent) {
        return (
            <div>
                <h1 className="event-title">Event not found</h1>
                <button type="button" onClick={() => navigate('/')}>Back to events</button>
            </div>
        )
    }

    return (
        <div>
            <h1 className="event-title">Update event</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Event title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <textarea
                    placeholder="Event description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}