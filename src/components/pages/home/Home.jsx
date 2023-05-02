import React from "react";
import './home.css'

export const Home = () => {
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
      <div className="container-sedes">
        <img src="./public/sede3.png" alt="sede 1" />
        <h1>Título del contenedor</h1>
        <button>Texto del botón</button>
      </div>

      <div className="container-sedes">
        <img src="./public/sede3.png" alt="sede 2" />
        <h1>Título del contenedor</h1>
        <button>Texto del botón</button>
      </div>

      <div className="container-sedes">
        <img src="./public/sede3.png" alt="sede 3" />
        <h1>Título del contenedor</h1>
        <button>Texto del botón</button>
      </div>
    </>
  );
};
