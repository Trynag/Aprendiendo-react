import { createRoot } from "react-dom/client"
import React from "react"

const root = createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <h1>Hola mundo</h1>
    </React.StrictMode>
)