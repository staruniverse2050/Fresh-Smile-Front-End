import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./HeaderPaciente.css";

export const HeaderPaciente = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState(""); // Estado para almacenar el nombre de la persona
  const location = useLocation();

  useEffect(() => {
    generateAvatar();
  }, []);
  const generateAvatar = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No se encontró el userId en el localStorage");
      // Manejar el caso en el que no se encuentre el userId, por ejemplo, redirigir al usuario a una página de inicio de sesión
      return;
    }

    fetch(`https://freshsmile.azurewebsites.net/FreshSmile/BuscarPacientes/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const fullName = data.nombre_completo;
        const names = fullName.split(" "); // Dividir la cadena en partes separadas por espacios
        const firstName = names[0]; // Obtener el primer nombre
        const lastName = names.length > 1 ? names[1] : ""; // Obtener el primer apellido (si está disponible)

        setName(`${firstName} ${lastName}`); // Establecer el nombre en el formato deseado

        const avatarStyle = "set4";
        const size = 600;
        const apiUrl = `https://robohash.org/${encodeURIComponent(firstName)}?set=${avatarStyle}&size=${size}x${size}`;

        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al obtener el avatar");
            }
            return response.blob();
          })
          .then((blob) => {
            const avatarUrl = URL.createObjectURL(blob);
            setAvatarUrl(avatarUrl);
          })
          .catch((error) => {
            console.error("Error al obtener el avatar:", error);
          });
      })
      .catch((error) => {
        console.error("Error al obtener los datos del paciente:", error);
        // Manejar el error de forma adecuada, por ejemplo, mostrar una notificación de error al usuario
      });
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
      <div className="menu-paciente">
        <Link to="/Inicio" onClick={handleLogoClick}>
          <img
            className="logo"
            src="https://res.cloudinary.com/smilecmills/image/upload/v1683852212/Fresh_Smile_Cmills/logo_brh9rw.png"
            alt=""
          />
        </Link>
        <h1 className="h1-paciente">
          <span>Fresh </span> Smile<span> Cmills</span>
        </h1>
        <ul>
          <div className="toggle-menu">
            <img
              onClick={toggleDropdown}
              className="icon-hamburguer"
              src="https://res.cloudinary.com/smilecmills/image/upload/v1684259567/Fresh_Smile_Cmills/lista_pxmv7v.png"
              alt=""
            />
            {isOpen && (
              <div className="container3">
                <ul>
                  <li>
                    <NavLink
                      className={`links2 ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links2 ${isActiveRoute('/Agendar') ? 'active' : ''}`}
                      to="/Agendar"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Agendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links2 ${isActiveRoute('/Procedimientos') ? 'active' : ''}`}
                      to="/Procedimientos"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Procedimientos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links2 ${isActiveRoute('/Tuscitaspaciente') ? 'active' : ''}`}
                      to="/Tuscitaspaciente"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Citas
                    </NavLink>
                  </li>
                  {isAuthenticated && (
                    <>
                      <li>
                        <NavLink
                          className={`links2 ${isActiveRoute('/MiRanking') ? 'active' : ''}`}
                          to="/Ranking"
                          activeClassName="active"
                          onClick={toggleDropdown}
                        >
                          Ranking
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={`links2 ${isActiveRoute('/Especialistas') ? 'active' : ''}`}
                          to="/Especialistas"
                          activeClassName="active"
                          onClick={toggleDropdown}
                        >
                          Especialistas
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink
                      className={`links2 ${isActiveRoute('/Contacto') ? 'active' : ''}`}
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
          <div className="container2-paciente">
            <ul>
              <li>
                <NavLink className={`links ${isActiveRoute('/Inicio') ? 'active' : ''}`}
                  to="/Inicio" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              {/* <li>
                <NavLink className={`links ${isActiveRoute('/Nosotros') ? 'active' : ''}`}
                  to="/Nosotros" activeClassName="active">
                  Nosotros
                </NavLink>
              </li> */}
              <li>
                <NavLink className={`links ${isActiveRoute('/Agendar') ? 'active' : ''}`}
                  to="/Agendar" activeClassName="active">
                  Agendar
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
                    <NavLink className="links" to="/Tuscitaspaciente" activeClassName="active">
                      Citas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="links" to="/MiRanking" activeClassName="active">
                      Ranking
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
            <p className="Bienvenida-paciente">Hola, {name.split(' ')[0]} {name.split(' ')[1]}</p>

          </div>
        </ul>
        <div className="icono-inicio-wrapper">
          <div className="dropdown-wrapper" onClick={toggleDropdown}>
            <div className="icon-container">
              {avatarUrl ? (
                <div>
                  <img className="icono-inicio" src={avatarUrl} alt="Avatar" />
                </div>
              ) : (
                <img
                  className="icono-inicio"
                  src="https://res.cloudinary.com/smilecmills/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png"
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
                      <NavLink className="dropdown-link" to="/Perfilpaciente">
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