import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const initialEvents = [
  { id: 1, title: "Meeting", date : "2024-06-01", description: "Team meeting to discuss project progress."}, 
  { id: 2, title: "Conference", date : "2024-06-15", description: "Annual tech conference with industry leaders."},  
  { id: 3, title: "Workshop", date : "2024-06-20", description: "Hands-on workshop on new software tools."},  
  { id: 4, title: "Webinar", date : "2024-06-25", description: "Online webinar on digital marketing strategies."},
  { id: 5, title: "Birthday Party", date : "2024-06-30", description: "Celebrating John's 30th birthday with friends and family."}
]

function Layout() {
    const [events, setEvents] = useState(initialEvents)

    const addEvent = (newEvent) => {
        setEvents([...events, { id: Math.max(...events.map(e => e.id), 0) + 1, ...newEvent }])
    }

    return (
        <>
            <Header />
                <main>
                    <Outlet context={{ events, addEvent }} />
                </main>
            <Footer />
        </>
    )
}

export default Layout;