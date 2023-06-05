import React, { useState, useEffect } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export const Login = ({ setRol }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalType, setModalType] = useState("success");
  const navigate = useNavigate();


  useEffect(() => {
    if (modalType === "success") {
      setTimeout(() => {
        setModalText("");
        setModalType("");
      }, 5000);
    }
  }, [modalType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let url;
      if (role === "paciente") {
        url = "https://freshsmile.azurewebsites.net/FreshSmile/loginPaciente";
      } else if (role === "administrador") {
        url = "https://freshsmile.azurewebsites.net/FreshSmile/loginAdministrador";
      } else {
        throw new Error("Rol no válido");
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          correo: email,
          contraseña: password,
        }),
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.text();
        setModalText(data);
        setModalType("success");
        setRol(role); // Actualizar el rol en el componente App
        navigate("/Inicio"); // Redirigir al usuario a la página de Inicio
         // Guardar el correo en el almacenamiento local
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("rol", role);
      } else {
        throw new Error("Correo o contraseña incorrectos");
      }
    } catch (error) {
      setModalText(error.message);
      setModalType("error");
    }
  };

  useEffect(() => {
    if (modalType === "error") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: modalText,
        customClass: {
          confirmButton: "custom-swal-button", // Clase CSS personalizada para el botón
        },
        buttonsStyling: false, // Desactivar estilos de botón predeterminados de SweetAlert
      });
    }
  }, [modalType]);

  return (
     
    <div className="login-container">
    <div className="left-login">
      <img src="https://i.pinimg.com/736x/a4/8c/b2/a48cb248e8b5886a8843daf3dbb1fa15.jpg" alt="Imagen de inicio de sesión" className="login-image" />
    </div>
    <div className="right-login">
      <h1 className="login-title">Iniciar Sesión</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Correo:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <label className="login-label">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <label className="login-label">
          Rol:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="login-select"
          >
            <option value="">Seleccione un rol</option>
            <option value="paciente">Paciente</option>
            <option value="administrador">Administrador</option>
          </select>
        </label>
        <br />
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  </div>
  );
};

export default Login;