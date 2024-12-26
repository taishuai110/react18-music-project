// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'

import 'normalize.css'
import '@/assets/css/tailwindcss/index.css'
import '@/assets/css/public/index.less'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App></App>
  // </StrictMode>
)
