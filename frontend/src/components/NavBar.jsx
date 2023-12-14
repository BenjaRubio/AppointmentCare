// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const NavBar = () => {
  return (
    <nav className="navbar"> 
      <ul className="menu">
        <li className="menu-link"><Link to="/">Inicio</Link></li>
        <li className="menu-link"><Link to="/login">Iniciar Sesión</Link></li>
        <li className="menu-link"><Link to="/register">Registrarse</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
