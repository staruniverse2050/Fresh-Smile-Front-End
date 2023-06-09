import React, { useState } from "react";
import "./perfilusuario.css";

export const PerfilUsuario = () => {

  const [Identificación, setIdentificación] = useState("");
  const [TipoDocumento, setTipoDocumento] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Dirección, setdirección] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setdContraseña] = useState("");
  const [Estado, setEstado] = useState("");
  const [FechaRegistro, setFechaRegistro] = useState("");
  

  const handleIdentificaciónChange = (event) => {
    setIdentificación(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleTipoDocumentoChange = (event) => {
    setTipoDocumento(event.target.value);
  };
 
  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleDirecciónChange = (event) => {
    setdirección(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setdContraseña(event.target.value);
  };

  const handleFechaRegistroChange = (event) => {
    setFechaRegistro(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  




  return (
    <>
      <div className="container-usuario">
        <div className="tarjeta-perfil">
          <img
            className="image-perfilUsuario"
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686197632/usuario_fitvn6.png"
            alt="Inicio"
          />
          <h2 className="perfil-titulo">Mi Perfil</h2>
          <p className="perfil-info">Nombre: John Doe</p>
          <p className="perfil-info">Email: johndoe@example.com</p>
          <p className="perfil-info">Fecha de registro: 01/01/2023</p>
        </div>
        <div className="banner-principal">
          <h1 className="titulo-banner">¡Bienvenido A Tu Perfil!</h1>
        </div>
      </div>

      <table className="perfil-table">
        <tbody>

          <tr>
            <td>Identificación:</td>
            <td>
              <input
                type="text"
                value={Identificación}
                onChange={handleIdentificaciónChange}
                className="input-field"
              />
            </td>
          </tr>

          
          <tr>
            <td>Tipo de documento:</td>
            <td>
              <input
                type="text"
                value={TipoDocumento}
                onChange={handleTipoDocumentoChange}
                className="input-field"
              />
            </td>
          </tr>

          <tr>
            <td>Nombre:</td>
            <td>
              <input
                type="text"
                value={Nombre}
                onChange={handleNombreChange}
                className="input-field"
              />
            </td>
          </tr>
        
          <tr>
            <td>Telefono:</td>
            <td>
              <input
                type="text"
                value={Telefono}
                onChange={handleTelefonoChange}
                className="input-field"
              />
            </td>
          </tr>

          <tr>
            <td>Dirección:</td>
            <td>
              <input
                type="text"
                value={Dirección}
                onChange={handleDirecciónChange}
                className="input-field"
              />
            </td>
          </tr>


          <tr>
            <td>Correo:</td>
            <td>
              <input
                type="text"
                value={Correo}
                onChange={handleCorreoChange}
                className="input-field"
              />
            </td>
          </tr>

        <tr>
            <td>Contraseña:</td>
            <td>
              <input
                type="text"
                value={Contraseña}
                onChange={handleContraseñaChange}
                className="input-field"
              />
            </td>
          </tr>

          <tr>
            <td>Estado:</td>
            <td>
              <input
                type="text"
                value={Estado}
                onChange={handleEstadoChange}
                className="input-field"
              />
            </td>
          </tr>

          <tr>
            <td>Fecha Registro:</td>
            <td>
              <input
                type="text"
                value={FechaRegistro}
                onChange={handleFechaRegistroChange}
                className="input-field"
              />
            </td>
          </tr>



        </tbody>
      </table>

    </>
  );
};