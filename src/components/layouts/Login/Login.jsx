import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Login.css";
import Swal from 'sweetalert2';
import Lottie from "react-lottie";
import animationData from "./Aniki Hamster.json";

Modal.setAppElement("#root");

export const Login = ({ setRol }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalType, setModalType] = useState("success");

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    }
  }, [modalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let url;
      if (role === "paciente") {
        url = "https://backfresh.azurewebsites.net/FreshSmile/loginPaciente";
      } else if (role === "administrador") {
        url = "https://backfresh.azurewebsites.net/FreshSmile/loginAdministrador";
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
        setModalOpen(true);
        setRol(role); // Actualizar el rol en el componente App
      } else {
        throw new Error("Correo o contraseña incorrectos");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        customClass: {
          confirmButton: "custom-swal-button", // Clase CSS personalizada para el botón
        },
        buttonsStyling: false, // Desactivar estilos de botón predeterminados de SweetAlert
      });
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
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

      <Modal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          {modalType === "success" && (
            <>
              <h2>Te estamos redirigiendo al inicio</h2>
              <p>{modalText}</p>
              <Lottie options={lottieOptions} height={200} width={300} />
            </>
          )}
          {modalType === "error" && (
            <>
              <h2>Error</h2>
              <p>{modalText}</p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Login;
