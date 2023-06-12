import React, { useState } from 'react';
import './perfiladministrador.css';

export const PerfilAdministrador = () => {
  const [Documento, setTipoDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Dirección, setdirección] = useState('');
  const [Especialidad, setEspecialidad] = useState('');
  const [Descripción, setDescripción] = useState('');
  const [Foto_perfil, setFoto_perfil] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setdContraseña] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');

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
    {/* <p className="perfil-info">Fecha de registro: 01/01/2023</p> */}
    <button className="editar-boton">Editar</button>
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
                type="Documento"
                value={Documento}
                onChange={(e) => setTipoDocumento(e.target.value)}
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
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Telefono:</td>
            <td className="perfil-valor">
              <input
                type="Telefono"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Dirección:</td>
            <td className="perfil-valor">
              <input
                type="Dirección"
                value={Dirección}
                onChange={(e) => setdirección(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Especialidad:</td>
            <td className="perfil-valor">
              <input
                type="Especialidad"
                value={Especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Descripción:</td>
            <td className="perfil-valor">
              <input
                type="Descripción"
                value={Descripción}
                onChange={(e) => setDescripción(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Foto de perfil:</td>
            <td className="perfil-valor">
              <input
                type="Foto_perfil"
                value={Foto_perfil}
                onChange={(e) =>  setFoto_perfil(e.target.value)}
              />
            </td>
          </tr>
          
          <tr>
            <td className="perfil-descripcion">Correo:</td>
            <td className="perfil-valor">
              <input
                type="Correo"
                value={Correo}
                onChange={(e) =>  setCorreo(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td className="perfil-descripcion">Contraseña:</td>
            <td className="perfil-valor">
              <input
                type="Contraseña"
                value={Contraseña}
                onChange={(e) =>  setdContraseña(e.target.value)}
              />
            </td>
          </tr>
          
          
          <tr>
            <td className="perfil-descripcion">Fecha de registro:</td>
            <td className="perfil-valor">
              <input
                type="text"
                value={fechaRegistro}
                onChange={(e) => setFechaRegistro(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
