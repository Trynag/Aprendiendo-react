import { useState, useEffect } from 'react'
import { Notes } from './components/Notes'
import { getAllNotes } from './services/notes/getAllNotes'

import './App.css'
import { createNote } from './services/notes/createNote'

function App () {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    getAllNotes()
      .then(notes => {
        setNotes(notes)
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

    createNote(noteToAdToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
      })

    setNewNote('')
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
