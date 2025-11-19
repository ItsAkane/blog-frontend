import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routerProvider from './router.js'
import './index.css'
import App from './App.jsx'
import router from './router.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <routerProvider router={router}/>
  </StrictMode>,
)
