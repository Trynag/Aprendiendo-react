import { useState } from 'react'
import './App.css'
import { Notes } from './components/Notes'

function App (props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

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

  const handleShowAll = () => {
    setShowAll(PrevState => !PrevState)
  }

  return (
    <>
      <h2>Notas</h2>
      <button onClick={handleShowAll}> {showAll ? 'Show only important' : 'Show all'} </button>
      <ul>
        {
          notes
            .filter(note => showAll ? true : note.important === true)
            .map(note => (
              <Notes key={note.id} content={note.content} categories={note.categories} message={note.message} />
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
