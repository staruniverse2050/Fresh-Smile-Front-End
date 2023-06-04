import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../headerpaciente/HeaderPaciente.css";

export const HeaderPaciente = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    generateAvatar();
  }, []);

  const generateAvatar = () => {
    const name = "John Doe"; // Puedes reemplazar esto con el nombre del usuario o alguna lógica para obtener el nombre
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
                      className="links"
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="links"
                      to="/Nosotros"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="links"
                      to="/Agendar"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Agenda cita
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="links"
                      to="/Procedimientos"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Procedimientos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="links"
                      to="/Especialistas"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Nuestros especialistas
                    </NavLink>
                  </li>
                  {isAuthenticated && (
                    <>
                      <li>
                        <NavLink
                          className="links"
                          to="/MiRanking"
                          activeClassName="active"
                          onClick={toggleDropdown}
                        >
                          Mi ranking
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="links"
                          to="/MisCitas"
                          activeClassName="active"
                          onClick={toggleDropdown}
                        >
                          Mis citas
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink
                      className="links"
                      to="/Contacto"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Contacto
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="container2">
            <ul>
              <li>
                <NavLink className="links" to="/Inicio" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Nosotros" activeClassName="active">
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Agendar" activeClassName="active">
                  Agenda cita
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/Procedimientos"
                  activeClassName="active"
                >
                  Procedimientos
                </NavLink>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <NavLink className="links" to="/MisCitas" activeClassName="active">
                      Mis citas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="links" to="/MiRanking" activeClassName="active">
                      Mi ranking
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink className="links" to="/Especialistas" activeClassName="active">
                  Especialistas
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Contacto" activeClassName="active">
                  Contacto
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