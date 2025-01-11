import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import React from 'react'

const root = createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
