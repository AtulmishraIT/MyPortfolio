import React from 'react'
import ReactDOM from 'react-dom/client' // Use 'react-dom/client' for React 18
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css' // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root')) // Create a root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)