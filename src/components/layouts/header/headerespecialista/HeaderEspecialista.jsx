import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import axios from 'axios';
import withReactContent from "sweetalert2-react-content";
import "../headerespecialista/HeaderEspecilista.css";

export const HeaderEspecialista = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState("");
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    generateAvatar();
  }, []);

  const generateAvatar = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No se encontró el userId en el localStorage");
      return;
    }

    fetch(
      `https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/BuscarEspecialista/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const fullName = data.nombre_completo;
        const names = fullName.split(" ");
        const firstName = names[0];
        const lastName = names.length > 1 ? names[1] : "";

        setName(`${firstName} ${lastName}`);

        const avatarStyle = "set4";
        const size = 600;
        const apiUrl = `https://robohash.org/${encodeURIComponent(
          firstName
        )}?set=${avatarStyle}&size=${size}x${size}`;

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
      });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("rol");

    navigate("/Inicio");
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  const handleAgregarProcedimiento = () => {
    Swal.fire({
      title: "Agregar nuevo procedimiento",
      text: "¿Deseas agregar un nuevo procedimiento?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        mostrarFormulario();
      }
    });
  };

  const mostrarFormulario = () => {
    const MySwal = withReactContent(Swal);
  
    MySwal.fire({
      title: "Nuevo procedimiento",
      html: (
        <div>
          <form id="formulario-procedimiento">
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" className="input-text" />
            </div>
            <div>
              <label className="label-bold" htmlFor="descripcion">
                Descripción:
              </label>
              <textarea id="descripcion" rows="4" className="textarea"></textarea>
            </div>
            <div>
              <label htmlFor="costo">Costo:</label>
              <input
                type="text"
                id="costo"
                className="input-number"
                inputmode="numeric"
                pattern="[0-9]*"
              />
            </div>
  
            <div>
              <label className="label-bold" htmlFor="imagen">
                Imagen:
              </label>
              <input type="file" id="imagen" className="file-input" />
            </div>
          </form>
        </div>
      ),
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const userId = localStorage.getItem("userId");
        const accessToken = localStorage.getItem("accessToken");
        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const costo = document.getElementById("costo").value;
        const foto = document.getElementById("imagen").files[0];
  
        const formData = new FormData();
        formData.append("identificacion_especialistas", userId);
        formData.append("foto", null);
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("costo", costo);
  
        // Realizar la solicitud POST a la API
        axios
          .post(
            "https://freshsmile.azurewebsites.net/FreshSmile/CrearProcedimiento",
            formData,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
            console.log("Procedimiento creado:", response.data);
  
            // Mostrar la alerta de SweetAlert
            Swal.fire({
              icon: "success",
              title: "Procedimiento creado",
              text: "El procedimiento ha sido creado exitosamente.",
            });
  
            // Reiniciar los campos del formulario
            document.getElementById("nombre").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("costo").value = "";
            document.getElementById("imagen").value = "";
          })
          .catch((error) => {
            console.error("Error al crear el procedimiento:", error);
          });
      },
    });
  };
  
  
 
  return (
    <header className="Header_Header">
      <div className="menu-especialista">
        <Link to="/Inicio" onClick={handleLogoClick}>
          <img
            className="logo-especialista"
            src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/logo_xxmptj.png"
            alt=""
          />
        </Link>
        <h1 className="h1-especialista">
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
                      className={`links ${
                        isActiveRoute("/Inicio") ? "active" : ""
                      }`}
                      to="/Inicio"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${
                        isActiveRoute("/Nosotros") ? "active" : ""
                      }`}
                      to="/Nosotros"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${
                        isActiveRoute("/AgendaCita") ? "active" : ""
                      }`}
                      to="/AgendaCita"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Agenda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${
                        isActiveRoute("/Procedimientos") ? "active" : ""
                      }`}
                      to="/Procedimientos"
                      activeClassName="active"
                      onClick={handleAgregarProcedimiento}
                    >
                      Procedimientos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`links ${
                        isActiveRoute("/DoctorCard") ? "active" : ""
                      }`}
                      to="/DoctorCard"
                      activeClassName="active"
                      onClick={toggleDropdown}
                    >
                      Valoraciones
                    </NavLink>
                  </li>
                  {isAuthenticated && (
                    <>
                      <li>
                        <NavLink
                          className={`links ${
                            isActiveRoute("/Ranking") ? "active" : ""
                          }`}
                          to="/Ranking"
                          activeClassName="active"
                          onClick={toggleDropdown}
                        >
                          Valoraciones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={`links ${
                            isActiveRoute("/MisCitas") ? "active" : ""
                          }`}
                          to="/MisCitas"
                          activeClassName="active"
                          onClick={toggleDropdown}
                        >
                          Agenda
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink
                      className={`links ${
                        isActiveRoute("/Contacto") ? "active" : ""
                      }`}
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
          <div className="container2-especialita">
            <ul>
              <li>
                <NavLink
                  className={`links ${
                    isActiveRoute("/Inicio") ? "active" : ""
                  }`}
                  to="/Inicio"
                  activeClassName="active"
                >
                  Inicio
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className={`links ${
                    isActiveRoute("/Nosotros") ? "active" : ""
                  }`}
                  to="/Nosotros"
                  activeClassName="active"
                >
                  Nosotros
                </NavLink>
              </li> */}

              <li>
                <NavLink
                  className="links"
                  to="/Procedimientos"
                  activeClassName="active"
                  onClick={handleAgregarProcedimiento}
                >
                  Procedimientos
                </NavLink>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <NavLink
                      className="links"
                      to="/Tuscitasespecialista"
                      activeClassName="active"
                    >
                      Agenda
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink
                  className="links"
                  to="/Especialistas"
                  activeClassName="active"
                >
                  Valoraciones
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="links"
                  to="/Contacto"
                  activeClassName="active"
                >
                  Contacto
                </NavLink>
              </li> */}
            </ul>
            <p className="Bienvenida">
              Hola, {name.split(" ")[0]} {name.split(" ")[1]}
            </p>
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
                  src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825569/Fresh_Smile_Cmills/icono_inicio_enxtjd.png"
                  alt=""
                />
              )}
            </div>
            {isOpen && (
              <nav className="dropdown">
                <ul>
                  <li>
                    <Link
                      className="dropdown-link"
                      to="/Inicio"
                      onClick={handleLogoutClick}
                    >
                      Cerrar sesión
                    </Link>
                  </li>
                  {isAuthenticated && (
                    <li>
                      <NavLink
                        className="dropdown-link"
                        to="/Perfilespecialista"
                      >
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
