
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import EventList from '../components/EventList'
import calenderPic from '../assets/calender_pic.jpg'

const SEARCH_STORAGE_KEY = 'eventSearchTerm'

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
 const { events } = useOutletContext()

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