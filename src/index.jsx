import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('allowance-calculator')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
