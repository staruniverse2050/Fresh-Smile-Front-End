import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css'

export const Header = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const [logoImage, setLogoImage] = useState("https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png");

  useEffect(() => {
    if (isAuthenticated) {
      setLogoImage(user.picture);
    } else {
      setLogoImage("https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png");
    }
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <header>
      <div className="menu">
        <a href="#home"><img className="logo" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/logo_xxmptj.png" alt="" /></a>
        <h1>
          <span>Fresh</span>Smile<span>Cmills</span>
        </h1>
        <ul>
          <div className="container2">
            <li>
              <Link to="/Home">
                <a className="links" href="#home">Inicio</a>
              </Link>
            </li>
            <li>
              <Link to="/Nosotros">
                <a className="links" href="#about">Nosotros</a>
              </Link>
            </li>
            <li>
              <Link to="/Procedimientos">
                <a className="links" href="/#">Procedimientos</a>
              </Link>
            </li>
            <li>
              <Link to="/Clinica">
                <a className="links" href="/#">Sedes</a>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <a className="links" href="/#">Blog</a>
              </Link>
            </li>
            <li>
              <Link to="/Contacto">
                <a className="links" href="/#">Contacto</a>
              </Link>
            </li>
          </div>
        </ul>
        <div className="icono-inicio-wrapper">
          {isAuthenticated && (
            <div className="dropdown-wrapper" onClick={toggleDropdown}>
              <img className="icono-inicio" src={user.picture} alt="" />
              {showDropdown && (
                <div className="dropdown">
                  <ul>
                    <li>
                      <a className="dropdown-button" href="#" onClick={handleLogout}>
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {!isAuthenticated && (
            <img className="icono-inicio" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png" alt="Inicio" onClick={handleLogin} />
          )}
        </div>

        <Link to="/Clinica">
          <a href="#clinica">
            <img className="icono-mapa" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_map_ttjewf.png" alt="" />
          </a>
        </Link>
      </div>
    </header>
  );
};
