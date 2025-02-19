import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
    message: 'a message',
    categories: ['sport', 'live']
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
    message: 'a message'
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
    message: 'a message'

  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App notes={notes} />
  </StrictMode>
)
