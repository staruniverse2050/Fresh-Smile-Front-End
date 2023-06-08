import React from "react";
import "./perfilusuario.css";
import { Footer } from "../../layouts/footer/Footer";

export const PerfilUsuario = () => {
  return (
    <>

      <div className="container-usuario">
        <div className="banner">
        <div className="tarjeta-perfil">
          <h2 className="perfil-titulo">Perfil de Usuario</h2>
          {/* <img
              className=""
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686197632/usuario_fitvn6.png"
              alt="Inicio"
            /> */}
          <p className="perfil-info">Nombre: John Doe</p>
          <p className="perfil-info">Email: johndoe@example.com</p>
          <p className="perfil-info">Fecha de registro: 01/01/2023</p>
        </div>
        {/* <div className="banner-2">

        </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};