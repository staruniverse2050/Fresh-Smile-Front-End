import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./perfilusuario.css";

export const PerfilUsuario = () => {
  const [Documento, setTipoDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [estado, setEstado] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [paciente, setPaciente] = useState({});
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [identificacionPaciente, setIdentificacionPaciente] = useState('');


  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://freshsmile.azurewebsites.net/FreshSmile/BuscarPacientes/${userId}`
        );
        setPaciente(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      setTipoDocumento(paciente.tipo_documento);
      setNombre(paciente.nombre_completo);
      setTelefono(paciente.telefono);
      setDireccion(paciente.direccion);
      setCorreo(paciente.correo);
      setContraseña(paciente.contraseña);
      setFechaRegistro(paciente.fecha_registro);
      setEstado(paciente.estado);
      setIdentificacionPaciente(paciente.identificacion_paciente);
    }
  }, [loading, paciente]);
  

  const formattedFechaRegistro = moment(fechaRegistro).format(
    "DD/MM/YYYY HH:mm:ss"
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSaveButtonClick = async () => {
    try {
      const datosPaciente = {
        tipo_documento: Documento,
        identificacion_paciente:identificacionPaciente,
        nombre_completo: nombre,
        telefono: Telefono,
        direccion: Direccion,
        correo: Correo,
        contraseña: Contraseña,
      };

      const accessToken = localStorage.getItem("accessToken"); // Obtén el token de acceso almacenado en el localStorage

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      await axios.put(
        "https://freshsmile.azurewebsites.net/FreshSmile/ModificarPacientes",
        datosPaciente,
        config
      );

      setEditMode(false);
      setLoading(true);
      alert("Datos modificados con éxito");
    } catch (error) {
      console.error(error.response);
      // Realiza cualquier otra acción de manejo de errores necesaria
    }
  };

  return (
    <>
      <div className="container-usuario">
        <div className="tarjeta-perfilU">
          <img
            className="image-perfilUsuario"
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686197632/usuario_fitvn6.png"
            alt="Inicio"
          />
          <h2 className="perfil-titulo">Mi Perfil</h2>
          <p className="perfil-info">freshSmileCmills</p>
          <p className="perfil-info">Revisa tu perfil</p>
          {editMode ? (
            <button className="guardar-boton" onClick={handleSaveButtonClick}>
              Guardar
            </button>
          ) : (
            <button className="editar-boton" onClick={() => setEditMode(true)}>
              Editar
            </button>
          )}
        </div>
        <div className="banner-principalAd">
          <h1 className="titulo-banner">¡Bienvenido A Tu Perfil!</h1>
        </div>
      </div>

      <table className="perfil-tabla">
        <tbody>
          <tr>
            <td className="perfil-descripcion">Tipo de documento:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={Documento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                disabled
              />
            </td>
          </tr>
          <tr>
            <td className="perfil-descripcion">
              Identificación:
            </td>
            <td className="perfil-valor">
              <input
                type="text"
                value={identificacionPaciente}
                onChange={(e) => setIdentificacionPaciente(e.target.value)}
                disabled={!editMode}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Nombre:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                disabled={!editMode}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Teléfono:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
                disabled={!editMode}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Dirección:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={Direccion}
                onChange={(e) => setDireccion(e.target.value)}
                disabled={!editMode}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Correo:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={Correo}
                onChange={(e) => setCorreo(e.target.value)}
                disabled={!editMode}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Contraseña:</td>
            <td className="perfil-valor">
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={Contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  disabled={!editMode}
                />
                <i
                  className={`password-toggle-icon ${
                    showPassword ? "fa fa-eye-slash" : "fa fa-eye"
                  }`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </td>
          </tr>
          <tr>
            <td className="perfil-descripcion">Fecha de registro:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={formattedFechaRegistro}
                onChange={(e) => setFechaRegistro(e.target.value)}
                disabled
              />
            </td>
          </tr>
          <tr>
            <td className="perfil-descripcion">Estado:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                disabled
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};