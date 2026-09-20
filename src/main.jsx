import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'
import personalInfo from './data/profile.json'

if (personalInfo.pageTitle) {
  document.title = personalInfo.pageTitle
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
