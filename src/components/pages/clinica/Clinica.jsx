import React from "react";
import './Clinica.css'
import { Footer } from "../../layouts/footer/Footer";

export const Clinica = () => {
  return (
    <>

<div className="barra">
        <h2>¿Quienes Somos?</h2>
      </div>

    
      <h2 className="Sedes">Nuestras sedes</h2>


      <div className="container-sedes">
      <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852205/Fresh_Smile_Cmills/SedeArmenia_idugit.png" alt="sede2" />
  <h2>Nuestra sede en Armenia:</h2>
  
  <ul>
    <li><strong>Dirección:</strong> Calle 6 #16A/54 Edificio Torre Valparaiso</li>
    <li><strong>Horario:</strong> Lunes a Viernes de 9am a 6pm</li>
    <li><strong>Teléfono:</strong> 3103594986</li>
  </ul>
  <button className="botton-sede">Agendar tu Cita</button>
</div>

<div className="container-sedes">
      <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852205/Fresh_Smile_Cmills/SedeArmenia_idugit.png" alt="sede2" />
  <h2>Nuestra sede en Génova</h2>
 
  <ul>
    <li><strong>Dirección:</strong> Carrera 11 #26A-04</li>
    <li><strong>Horario:</strong> Lunes a Viernes de 9am a 6pm</li>
    <li><strong>Teléfono:</strong> +3188950833</li>
  </ul>
  <button className="botton-sede">Agendar tu Cita</button>
</div>

<div className="container-sedes">
      <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852197/Fresh_Smile_Cmills/sedeNeiva_fuo2wn.jpg" alt="sede2" />
  <h2>Nuestra sede en Tebaida</h2>
 
  <ul>
    <li><strong>Dirección:</strong> Calle 12 CR 5 #4/93</li>
    <li><strong>Horario:</strong> Lunes a Viernes de 9am a 6pm</li>
    <li><strong>Teléfono:</strong> +3188950833</li>
  </ul>
  <button className="botton-sede">Agendar tu Cita</button>
</div>
      <Footer />
      
    </>

  );
};