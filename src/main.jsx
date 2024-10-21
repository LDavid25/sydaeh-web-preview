import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Inicio } from './inicio'
import { Header } from './header'
import { Nosotros } from './nosotros'
import { Servicios } from './servicios'
import { Productos } from './productos'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Productos />
  </StrictMode>,
)
