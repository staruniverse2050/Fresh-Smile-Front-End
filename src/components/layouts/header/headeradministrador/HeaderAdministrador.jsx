import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./HeaderAdministrador.css";

export const HeaderAdministrador = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const location = useLocation();
  useEffect(() => {
    generateAvatar();
  }, []);

  const generateAvatar = () => {
    const apiUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;
    setAvatarUrl(apiUrl);
  };
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }


  const handleLogoutClick = () => {
    logout();
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    // Lógica adicional si es necesario
  };

  const logout = () => {
    // Eliminar la información de inicio de sesión del almacenamiento local
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("rol");

    // Redireccionar al usuario a la página de registro
    history.push("/Inicio");
  };
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };


  return (
    <header className="Header_Header">
      <div className="menu">
        <Link to="/Inicio" onClick={handleLogoClick}>
          <img
            className="logo"
            src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/logo_xxmptj.png"
            alt=""
          />
        </Link>
        <h1>
          <span>Fresh </span> Smile<span> Cmills</span>
        </h1>
        <ul>
          <div className="toggle-menu">
            <img
              onClick={toggleDropdown}
              className="icon-hamburguer"
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684259567/Fresh_Smile_Cmills/lista_pxmv7v.png"
              alt=""
            />
            {isOpen && (
              <div className="container3">
                <ul>
                  <li>
                    <NavLink
                      className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Agenda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Procedimientos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Mis valoraciones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Disponibilidad
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="container2">
            <ul>
              <li>
                <NavLink className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                  to="/Inicio" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink className={`links ${isActiveRoute('/Nosotros') ? 'active' : ''}`}
                  to="/Nosotros" activeClassName="active">
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink className={`links ${isActiveRoute('/Agendar') ? 'active' : ''}`}
                  to="/Agendar" activeClassName="active">
                  Agenda
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`links ${isActiveRoute('/Procedimientos') ? 'active' : ''}`}
                  to="/Procedimientos"
                  activeClassName="active"
                >
                  Procedimientos
                </NavLink>
              </li>
              <li>
                <NavLink className={`links ${isActiveRoute('/DoctorCard') ? 'active' : ''}`}
                  to="/DoctorCard" activeClassName="active">
                  Especialistas
                </NavLink>
              </li>
              <li>
                <NavLink className={`links ${isActiveRoute('/Especialista') ? 'active' : ''}`}
                  to="/Especialista" activeClassName="active">
                  Disponibilidad
                </NavLink>
              </li>
              <li>
                <NavLink className={`links ${isActiveRoute('/Contacto') ? 'active' : ''}`}
                  to="/Contacto" activeClassName="active">
                  Mis valoraciones
                </NavLink>
              </li>
            </ul>
          </div>
        </ul>
        <div className="icono-inicio-wrapper">
          <div className="dropdown-wrapper" onClick={toggleDropdown}>
            <div className="icon-container">
              {avatarUrl ? (
                <img className="icono-inicio" src={avatarUrl} alt="Avatar" />
              ) : (
                <img
                  className="icono-inicio"
                  src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png"
                  alt=""
                />
              )}
            </div>
            {isOpen && (
              <nav className="dropdown">
                <ul>
                  <li>
                    <Link className="dropdown-link" to="/Inicio" onClick={handleLogoutClick}>
                      Cerrar sesión
                    </Link>
                  </li>
                  {isAuthenticated && (
                    <li>
                      <NavLink className="dropdown-link" to="/Perfil">
                        Ver perfil
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
