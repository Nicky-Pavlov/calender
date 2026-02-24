import { useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

export default function Create() {
 const { addEvent } = useOutletContext()
 const navigate = useNavigate()
 const [title, setTitle] = useState('')
 const [date, setDate] = useState('')
 const [description, setDescription] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  
  if (!title || !date) {
   alert('Please fill in at least title and date')
   return
  }

  addEvent({ title, date, description })
  
  // Reset form
  setTitle('')
  setDate('')
  setDescription('')
  
  // Navigate back to home
  navigate('/')
 }

 return (
  <div> 
    <h1 className="event-title">Create event</h1>
    <form onSubmit={handleSubmit}>
     <input 
      type="text" 
      placeholder="Event title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
     />
     <input 
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
     />
     <textarea 
      placeholder="Event description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
     />
     <button type="submit">Create</button>
    </form>
  </div>
 )
}