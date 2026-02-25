import EventItem from './EventItem'

export default function EventList({ events, onDelete }) {  
    return (    
        <div>
            {events.map(event => (
                <EventItem key={event.id} event={event} onDelete={onDelete} />
            ))}
        </div>
    );
}