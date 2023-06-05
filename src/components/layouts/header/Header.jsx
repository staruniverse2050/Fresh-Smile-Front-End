import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <header className="Header_Header">
      <div className="menu">
        <Link to="/Inicio">
          <img
            className="logo"
            src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/logo_xxmptj.png"
            alt=""
          />
        </Link>
        <h1>
          <span>Fresh</span>Smile<span>Cmills</span>
        </h1>
        <ul>
          <div className="toggle-menu">
            <img
              onClick={toggleMenu}
              className="icon-hamburguer"
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684259567/Fresh_Smile_Cmills/lista_pxmv7v.png"
              alt=""
            />
            {isOpen && (
              <div className="container3">
                <ul>
                  <li>
                    <Link  className={`links2 ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                  to="/Inicio">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className={`links2 ${isActiveRoute('/Nosotros') ? 'active' : ''}`}
                  to="/Nosotros">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link className={`links2 ${isActiveRoute('/Agendar') ? 'active' : ''}`}
                  to="/Agendar">
                      Agenda tu cita
                    </Link>
                  </li>
                  <li>
                    <Link className={`links2 ${isActiveRoute('/Procedimientos') ? 'active' : ''}`}
                  to="/Procedimientos">
                      Procedimientos
                    </Link>
                  </li>
                  <li>
                    <Link className={`links2 ${isActiveRoute('/Contacto') ? 'active' : ''}`}
                  to="/Contacto">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="container2">
            <ul>
              <li>
                <Link
                  className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                  to="/Inicio"
                >
                  Inicio
                </Link>

              </li>
              <li>
                <Link className={`links ${isActiveRoute('/Nosotros') ? 'active' : ''}`}
                  to="/Nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className={`links ${isActiveRoute('/Agendar') ? 'active' : ''}`}
                  to="/Agendar">
                  Agenda cita
                </Link>
              </li>
              <li>
                <Link className={`links ${isActiveRoute('/Procedimientos') ? 'active' : ''}`}
                  to="/Procedimientos">
                  Procedimientos
                </Link>
              </li>
              <li>
                <Link className={`links ${isActiveRoute('/Contacto') ? 'active' : ''}`}
                  to="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </ul>
        <div className="icono-inicio-wrapper">
          <Link to="/Registro">
            <img
              className="icono-inicio"
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685122951/agregar-usuario_1_mjksdh.png"
              alt="Inicio"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
