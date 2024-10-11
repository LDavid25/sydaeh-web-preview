import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Inicio } from './inicio'
import { Header } from './header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Inicio />
  </StrictMode>,
)
