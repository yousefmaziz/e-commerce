import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/encode-sans-expanded';
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)