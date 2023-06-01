import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css"; // Importa el archivo CSS específico para este componente

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      if (response.ok) {
        // Inicio de sesión exitoso
        const data = await response.text();
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: data,
        });
      } else {
        // Las credenciales son incorrectas
        throw new Error("Correo o contraseña incorrectos");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
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
    </div>
  );
};

export default Login;
