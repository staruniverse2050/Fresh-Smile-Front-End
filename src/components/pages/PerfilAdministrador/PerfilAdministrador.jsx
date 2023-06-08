import React, { useState } from 'react';
import "./perfiladministrador.css";

export const PerfilAdministrador = () => {
  const [nombre, setNombre] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [identificación, setidentificación] = useState("");
  const [TipoDocumento, setTipoDocumento] = useState("");
  const [Telefono, setTefono] = useState("");
  const [Dirección, setTDirección] = useState("");
  const [Especialidad, setEspecialidad] = useState("");
  const [Descripción, setDescripción] = useState("");
  const [Fotoperfil, setFoto_perfil] = useState("");
  const [Correo, setTCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [Registro, setFecha_Registro] = useState("");

  return (
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
        {/* <div className="banner-principal">
          <h1 className="titulo-banner">¡Bienvenido A Tu Perfil!</h1>
        </div>
      */}
    
    <div className="tabla-perfilad">
      <table className="perfil-tablaad">
        <tbody>
        <tr>
            <td>Identifición:</td>
            <td>
              <input
                type="text"
                value={identificación}
                onChange={(e) => setidentificación(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>
          <tr>
            <td>Tipo de documento:</td>
            <td>
              <input
                type="text"
                value={TipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>


          <tr>
            <td>Nombre:</td>
            <td>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>
         


          <tr>
            <td>Telefono:</td>
            <td>
              <input
                type="text"
                value={Telefono}
                onChange={(e) => setTefono(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>
          <tr>
         </tr>

         
         <tr>
            <td>Dirección:</td>
            <td>
              <input
                type="text"
                value={Dirección}
                onChange={(e) => setTDirección(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>
        
          <tr>
            <td>Especialidad:</td>
            <td>
              <input
                type="text"
                value={Especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>

          <tr>
            <td>Descripción:</td>
            <td>
              <input
                type="text"
                value={Descripción}
                onChange={(e) => setDescripción(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>

         

          <tr>
            <td>Foto de perfil:</td>
            <td>
              <input
                type="text"
                value={Fotoperfil}
                onChange={(e) => setFoto_perfil(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>

          <tr>
            <td>Correo:</td>
            <td>
              <input
                type="text"
                value={Correo}
                onChange={(e) => setTCorreo(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>

          <tr>
            <td>Contraseña:</td>
            <td>
              <input
                type="text"
                value={Contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>

          <tr>
            <td>Fecha de registro:</td>
            <td>
              <input
                type="text"
                value={fechaRegistro}
                onChange={(e) => setFechaRegistro(e.target.value)}
                className="perfil-input"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};