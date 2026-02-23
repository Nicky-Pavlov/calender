import EventItem from './EventItem'

export default function EventList({ events }) {  
    return (    
        <div>
            {events.map(event => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
}