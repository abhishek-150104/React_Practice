import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp from './Comp.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp/>
    <App /> 
  </StrictMode>,
  // App() will also work
)
