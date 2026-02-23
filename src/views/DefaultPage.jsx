
import { useEffect, useState } from 'react'
import EventList from '../components/EventList'
import calenderPic from '../assets/calender_pic.jpg'

const SEARCH_STORAGE_KEY = 'eventSearchTerm'

// Static event data shown in the calendar list.
const events = [

  { id: 1, title: "Meeting", date : "2024-06-01", description: "Team meeting to discuss project progress."}, 
  { id: 2, title: "Conference", date : "2024-06-15", description: "Annual tech conference with industry leaders."},  
  { id: 3, title: "Workshop", date : "2024-06-20", description: "Hands-on workshop on new software tools."},  
  { id: 4, title: "Webinar", date : "2024-06-25", description: "Online webinar on digital marketing strategies."},
  { id: 5, title: "Birthday Party", date : "2024-06-30", description: "Celebrating John's 30th birthday with friends and family."}

]

// Returns events that match the current search query.
function filterEventsByQuery(sortedEvents, searchTerm) {
 const query = searchTerm.toLowerCase()

 return sortedEvents.filter((event) => {
  return (
   event.title.toLowerCase().includes(query) ||
   event.description.toLowerCase().includes(query)
  )
 })
}

 function DefaultPage() {
 // Load saved search text on first render.
 const [searchTerm, setSearchTerm] = useState(
  () => localStorage.getItem(SEARCH_STORAGE_KEY) ?? ''
 )

 // Keep search text saved between page refreshes.
 useEffect(() => {
  localStorage.setItem(SEARCH_STORAGE_KEY, searchTerm)
 }, [searchTerm])

 // Sort events by date from earliest to latest.
 const sortedEvents = [...events].sort((a, b) =>
  a.date.localeCompare(b.date, 'en', { sensitivity: 'base' })
 )

 // Show only events matching the current search term.
 const filteredEvents = filterEventsByQuery(sortedEvents, searchTerm)

 function handleSearchChange(event) {
  setSearchTerm(event.target.value)
 }

 return (
  <div>
    <input
     className="event-search"
     type="text"
     placeholder="Search events"
     value={searchTerm}
     onChange={handleSearchChange}
    />
    <EventList events={filteredEvents} />

  </div>
 )
}

export default DefaultPage