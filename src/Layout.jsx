import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const EVENTS_STORAGE_KEY = 'calendarEvents'

const initialEvents = [
  { id: 1, title: "Meeting", date : "2024-06-01", description: "Team meeting to discuss project progress."}, 
  { id: 2, title: "Conference", date : "2024-06-15", description: "Annual tech conference with industry leaders."},  
  { id: 3, title: "Workshop", date : "2024-06-20", description: "Hands-on workshop on new software tools."},  
  { id: 4, title: "Webinar", date : "2024-06-25", description: "Online webinar on digital marketing strategies."},
  { id: 5, title: "Birthday Party", date : "2024-06-30", description: "Celebrating John's 30th birthday with friends and family."}
]

function loadEvents() {
    try {
        const savedEvents = localStorage.getItem(EVENTS_STORAGE_KEY)

        if (!savedEvents) {
            return initialEvents
        }

        const parsedEvents = JSON.parse(savedEvents)
        return Array.isArray(parsedEvents) ? parsedEvents : initialEvents
    } catch {
        return initialEvents
    }
}

function Layout() {
    const [events, setEvents] = useState(loadEvents)

    const deleteEvent = (eventId) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId))
    }

    useEffect(() => {
        localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events))
    }, [events])

    return (
        <>
            <Header />
                <main>
                     <Outlet context={{ events, setEvents, deleteEvent }} />
                </main>
            <Footer />
        </>
    )
}

export default Layout;