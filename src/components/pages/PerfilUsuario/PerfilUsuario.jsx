import React from "react";
import "./perfilusuario.css";


export const PerfilUsuario = () => {
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
    </>
  );
};
