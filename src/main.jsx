import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Inicio } from './inicio'
import { Header } from './header'
import { Nosotros } from './nosotros'
import { Servicios } from './servicios'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Servicios />
  </StrictMode>,
)
