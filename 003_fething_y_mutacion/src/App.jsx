import { useState } from 'react'
import './App.css'
import { Notes } from './components/Notes'

function App (props) {
  // eslint-disable-next-line react/prop-types
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAdToState = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
      message: 'a message'
    }

    setNotes([...notes, noteToAdToState])
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
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </>
  )
}

export default App
