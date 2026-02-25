import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const EVENTS_STORAGE_KEY = 'calendarEvents'

function loadEvents() {
    try {
        const savedEvents = localStorage.getItem(EVENTS_STORAGE_KEY)

        if (!savedEvents) {
            return []
        }

        const parsedEvents = JSON.parse(savedEvents)
        return Array.isArray(parsedEvents) ? parsedEvents : []
    } catch {
        return []
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