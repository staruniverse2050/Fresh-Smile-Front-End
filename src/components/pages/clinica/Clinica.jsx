import React from "react";
import './Clinica.css'


export const Clinica = () => {
  return (
    <>
     <div className="container_banner">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_home">
          <h1>¡Bienvenido a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton">Agendar Cita</button>
            <button className="boton">Buscar Clinica</button>
          </div>
        </div>
      </div>
    </>
  );
};