import React from 'react';

export const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="src\header\img\sydaeh-logo.png" alt="Logo" className="h-10" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-blue-700">Nosotros</a>
            <a href="#" className="text-blue-700">Servicios</a>
            <a href="#" className="text-blue-700">Productos</a>
            <a href="#" className="text-blue-700">Contacto</a>
            <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-md">FAQ</a>
          </nav>
          <button className="md:hidden text-blue-700">Menú movil</button>
        </div>
      </header>
    );
}