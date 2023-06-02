import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                    <Link className="links2" to="/Inicio">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="links2" to="/Nosotros">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/Agendar">
                      Agenda tu cita
                    </Link>
                  </li>
                  <li>
                    <Link className="links2" to="/Procedimientos">
                      Procedimientos
                    </Link>
                  </li>
                  <li>
                    <Link className="links2" to="/Contacto">
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
                <Link className="links" to="/Inicio">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="links" to="/Nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="links" to="/Agendar">
                  Agenda cita
                </Link>
              </li>
              <li>
                <Link className="links" to="/Procedimientos">
                  Procedimientos
                </Link>
              </li>
              <li>
                <Link className="links" to="/Contacto">
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
