import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/cormorant'
import '@fontsource-variable/cormorant/wght-italic.css'
import '@fontsource/cinzel/600.css'
import './styles/global.css'
import App from './App'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container #root was not found in index.html')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
