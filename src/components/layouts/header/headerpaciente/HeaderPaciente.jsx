import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../headerpaciente/HeaderPaciente.css";


export const HeaderPaciente  = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [logoImage, setLogoImage] = useState(
    "https://res.cloudinary.com/dexfjrgyw/image/upload/v1684535602/Fresh_Smile_Cmills/acceso_o3o3dp.png"
  );

  useEffect(() => {
    if (isAuthenticated) {
      setLogoImage(user.picture);
    } else {
      setLogoImage(
        "https://res.cloudinary.com/dexfjrgyw/image/upload/v1684535602/Fresh_Smile_Cmills/acceso_o3o3dp.png"
      );
    }
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
                 <ul>
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
    <Link className="links" to="/Login">
                   Agenda cita
                 </Link>
    </li>
    <li>
      <Link className="links" to="/Procedimientos">
        Procedimientos
      </Link>
    </li>
    <li>
        <Link className="links" to="/DoctorCard">
          Nuestros especialistas
        </Link>
    </li>
    <li>
      <Link className="links" to="/Procedimientos">
        Mi ranking
      </Link>
    </li>
    <li>
      <Link className="links" to="/Procedimientos">
        Mis citas
      </Link>
    </li>
    <li>
      <Link className="links" to="/Contacto">
        Contacto
      </Link>
    </li>
    {/* <li>
      <Link className="links" to="/Cita">
        Mis citas
      </Link>
    </li> */}
  </ul>
</div>
            )}
          </div>
          <div className="container2">
          <ul>
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
    <Link className="links" to="/Login">
                   Agenda cita
                 </Link>
    </li>
    <li>
      <Link className="links" to="/Procedimientos">
        Procedimientos
      </Link>
    </li>
    <li>
      <Link className="links" to="/Procedimientos">
        Mis citas
      </Link>
    </li>
    <li>
      <Link className="links" to="/Procedimientos">
        Mi ranking
      </Link>
    </li>
    <li>
        <Link className="links" to="/DoctorCard">
          Nuestros especialistas
        </Link>
    </li>
    <li>
      <Link className="links" to="/Contacto">
        Contacto
      </Link>
    </li>
    {/* <li>
      <Link className="links" to="/Cita">
        Mis citas
      </Link>
    </li> */}
  </ul>
</div>
        </ul>
        <div className="icono-inicio-wrapper">
          {isAuthenticated && (
            <div className="dropdown-wrapper" onClick={toggleDropdown}>
              <div className="icon-container">
                <img className="icono-inicio" src={user.picture} alt="" />
              </div>
              {isOpen && (
                <div className="dropdown">
                  <ul>
                    <li>
                      <button className="dropdown-button" onClick={handleLogout}>
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          {!isAuthenticated && (
            <img
              className="icono-inicio"
              src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png"
              alt="Inicio"
              onClick={handleLogin}
            />
          )}
        </div>
      </div>
    </header>
  );
};
