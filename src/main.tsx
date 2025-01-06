import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/roboto/400.css'; // Light
import '@fontsource/roboto/500.css'; // Medium
import '@fontsource/roboto/700.css'; // Bold


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
