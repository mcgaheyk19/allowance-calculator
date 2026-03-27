import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const style = document.createElement('style')
style.textContent = `
  #allowance-calculator input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    cursor: pointer;
  }
  #allowance-calculator input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(166deg, #25B8E8 11.772%, #1E94CF 51.924%, #634AEF 92.075%);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(99,74,239,0.35);
    border: 3px solid #fff;
  }
  #allowance-calculator input[type="range"]::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(166deg, #25B8E8 11.772%, #1E94CF 51.924%, #634AEF 92.075%);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(99,74,239,0.35);
    border: 3px solid #fff;
  }
`
document.head.appendChild(style)

createRoot(document.getElementById('allowance-calculator')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
