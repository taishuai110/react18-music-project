import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'
import '@/assets/css/tailwindcss/index.css'
import '@/assets/css/public/index.less'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
