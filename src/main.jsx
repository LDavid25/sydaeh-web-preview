import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Header  from './header';
import Principal from './Principal';
import  Nosotros  from './nosotros';
import  Servicios  from './servicios';
import  Productos  from './productos';
import  Footer  from './footer';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);