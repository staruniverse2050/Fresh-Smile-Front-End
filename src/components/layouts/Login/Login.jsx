import React, { useState, useEffect } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setRol }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const especialistasResponse = await axios.get(
        "https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarEspecialista"
      );
      const pacientesResponse = await axios.get(
        "https://freshsmile.azurewebsites.net/FreshSmile/ConsultarPacientes"
      );

      const especialistas = especialistasResponse.data;
      const pacientes = pacientesResponse.data;

      const matchedEspecialista = especialistas.find(
        (especialista) => especialista.correo === email
      );
      const matchedPaciente = pacientes.find(
        (paciente) => paciente.correo === email
      );

      let url;
      let rol;

      if (matchedEspecialista) {
        url = "https://freshsmile.azurewebsites.net/login/especialista";
        rol = "especialista";
      } else if (matchedPaciente) {
        url = "https://freshsmile.azurewebsites.net/login/paciente";
        rol = "paciente";
      } else {
        throw new Error("Correo no válido");
      }

      const response = await axios.post(url, { email, password });

      setLoading(false);

      if (response.status === 200) {
        const { id, token } = response.data;
        setModalText(response.data.message);
        setModalType("success");
        setRol(rol);
        navigate("/Inicio");
        localStorage.setItem("accessToken", token);
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userId", id);
      } else {
        const errorData = response.data;
        throw new Error(errorData.message);
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
          confirmButton: "custom-swal-button",
        },
      });
    }
  }, [modalType]);

  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686637348/Fresh_Smile_Cmills/img-login_q7bhdc.png"
        alt="Imagen de inicio de sesión"
        className="login-image"
      />
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
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
