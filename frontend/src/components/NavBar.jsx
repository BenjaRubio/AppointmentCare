// NavigationBar.js
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import {logout } from '../services/user.service';
import Button from '@mui/material/Button';
import { getUser } from '../services/user.service';

const NavBar = () => {

  const [user, setUser] = useState(null);

  const handleLogout = () => {
    logout();
    setUser(null);
  }

  useEffect(() => {
    const userJSON = window.localStorage.getItem("appointmentCareUserData");
    if (userJSON) {
      setUser(JSON.parse(userJSON));
    } else {
      setUser(null);
    }
  }, []);


  return (
    <nav className="navbar"> 
      <ul className="menu">
        <li className="menu-link"><Link to="/">Inicio</Link></li>
        <li className="menu-link"><Link to="/login">Iniciar Sesión</Link></li>
        <li className="menu-link"><Link to="/register">Registrarse</Link></li>
        <li className="menu-link"><button color="black" onClick={handleLogout}>Cerrar Sesión</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
