import { useState, useEffect } from 'react'
import axios from 'axios'
import { Notes } from './components/Notes'
import './App.css'

function App () {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const { data } = response
        setNotes(data)
      })
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAdToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', noteToAdToState)
      .then(response => {
        const { data } = response
        setNotes(prevNotes => prevNotes.concat(data))
      })

    // setNotes([...notes, noteToAdToState])
    setNewNote([...notes, noteToAdToState])
  }

  return (
    <>
      <h2>Notas</h2>
      <ul>
        {
          notes
            .map(note => (
              <Notes key={note.id} body={note.body} title={note.title} />
            ))
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} style={{ marginRight: '15px', padding: '10px' }} />
        <button>Crear nota</button>
      </form>
    </>
  )
}

export default App
