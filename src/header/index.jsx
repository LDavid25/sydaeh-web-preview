import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Para los íconos de Bootstrap

export const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/">
          <img src="src/header/img/sydaeh-logo.png" alt="Logo" className="h-10" />
        </a>

        {/* Navbar for larger screens */}
        <nav className="fs-5 d-none d-md-flex space-x-20">
          <Link to="/nosotros" className="c-azul">Nosotros</Link>
          <Link to="/servicios" className="c-azul">Servicios</Link>
          <Link to="/productos" className="c-azul">Productos</Link>
          <a href="#contacto" className="c-azul">Contacto</a>
          <Link to="/faq" className="bg-cyan text-white px-4 py-2 rounded-md">FAQ</Link>
        </nav>

        {/* Button for mobile (collapsible menu with hamburger icon) */}
        <button className="navbar-toggler d-md-none c-azul" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
          <img width="32" height="32" src="https://img.icons8.com/windows/32/menu--v5.png" alt="menu--v5" />
        </button>

        {/* Offcanvas menu for mobile */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileMenuLabel">
              <img src="src/assets/img/isotipo-sydaeh.png" alt="Logo" className="h-10" />
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body font-bold">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link c-azul" to="/nosotros" data-bs-dismiss="offcanvas">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link c-azul" to="/servicios" data-bs-dismiss="offcanvas">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link c-azul" to="/productos" data-bs-dismiss="offcanvas">Productos</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link c-azul" href="#contacto" >Contacto</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link bg-blue-700 text-white px-4 py-2 rounded-md" to="/faq" data-bs-dismiss="offcanvas">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
