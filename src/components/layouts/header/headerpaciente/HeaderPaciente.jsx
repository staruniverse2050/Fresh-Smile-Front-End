import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header.css";

export const HeaderPaciente  = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="Header_Header">
      <div className="menu">
        <a href="#home">
          <img
            className="logo"
            src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/logo_xxmptj.png"
            alt=""
          />
        </a>
        <h1>
          <span>Fresh </span> Smile<span> Cmills</span>
        </h1>
        <ul>
          <div className="toggle-menu">
            <img
              onClick={toggleMenu}
              className="icon-hamburguer"
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684259567/Fresh_Smile_Cmills/lista_pxmv7v.png"
            />
            {isOpen && (
              <div className="container3">
                <li>
                  <Link className="links2" to="/Home">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link className="links2" to="/Nosotros">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link className="links2" to="/Procedimientos">
                    Procedimientos
                  </Link>
                </li>
                <li>
                  <Link className="links2" to="/Clinica">
                    Sedes
                  </Link>
                </li>
                <li>
                  <Link className="links2" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="links2" to="/Contacto">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link className="links2" to="/Cita">
                    Mis citas
                  </Link>
                </li>
              </div>
            )}
          </div>
          <div className="container2">
            <li>
              <Link className="links" to="/Home">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="links" to="/Nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="links" to="/Procedimientos">
                Procedimientos
              </Link>
            </li>
            <li>
              <Link className="links" to="/Clinica">
                Sedes
              </Link>
            </li>
            <li>
              <Link className="links" to="/Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="links" to="/Contacto">
                Contacto
              </Link>
            </li>
            <li>
              <Link className="links" to="/Cita">
                Mis citas
              </Link>
            </li>
          </div>
        </ul>
        <div className="icono-inicio-wrapper">
          <Link to="/Login">
            <img
              className="icono-inicio"
              src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png"
              alt="Inicio"
            />
          </Link>
        </div>

      </div>
    </header>
  );
};
