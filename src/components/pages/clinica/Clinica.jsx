import React from "react";
import './Clinica.css'


export const Clinica = () => {
  return (
    <>
 
      
        <h2 className="Sedes">nuestras sedes</h2>


      <div className="container-sedes">
        <img src="./public/armenia.jpg" alt="sede1" />
        <h1>armenia</h1>
        <h1>7:00am-12:30pm</h1>
        <h1>sede central</h1>
          <button className="botton-sede">Agendar tu Cita</button>
         </div>
      
      <div className="container-sedes">
        <img src="./public/tebaida.png" alt="sede2" />
        <h1>Tebaida</h1>
        <h1>7:00am-12:30pm</h1>
        <h1>sede central</h1>
          <button className="botton-sede">Agendar tu Cita</button>
         </div>
      
      <div className="container-sedes">
        <img src="./public/armenia.jpg" alt="sede3" />
        <h1>circasia</h1>
        <h1>7:00am-12:30pm</h1>
        <h1>sede central</h1>
         <button className="botton-sede">Agendar tu Cita</button>
          </div> 

 <div className="container-mapa">
  <div className="mapa">
  <img src="public/ubicación.jpg" alt="ubicacion" />
  </div>

  <div class="texto">
    <h2>¡Aquí encuentras la ubicación de nuestra sede principal en armenia!</h2>
  </div>

  </div>
  
    </>

  );
};