import React from "react";
import "./nosotros.css";
// import { Footer } from "../../layouts/footer/Footer";


export const Nosotros = () => {
  return (
    <>
      
      <div className="container_banner">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_home">
          <h1>¡Sobre Nosotros!</h1>
         
        </div>
      </div>


      <div className="post-nosotros">
  <img className="" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852217/Fresh_Smile_Cmills/nosotros_ax9xkz.jpg" alt="" /> 
  <div className="post-nts">
  <h2 className="post-title">Nosotros</h2>
    <p>Nuestros consultorios son un lugar donde los profesionales de la salud dental brindan una amplia gama de servicios de
       atención dental a los pacientes. Estos servicios pueden incluir desde limpiezas dentales regulares hasta tratamientos de 
       ortodoncia y cirugías dentales, además nuestros asistentes dentales ayudan al odontólogo y al higienista dental en el
       tratamiento de los pacientes y se encargan de tareas administrativas en el consultorio.
      </p>     
  </div>

   {/* Chat WhatsAPP */}
   <div class="space-wpp">
        <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información." class="float" target="_blank ">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>


  <div className="icon-container">
  <img className="icon-container" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852199/Fresh_Smile_Cmills/cohete_tzkzcz.png" alt="" /> 
  <span className="text">Misión</span>
  <span className="subtext">La misión de nuestro consultorio odontológico </span>
  <span className="subtext">ser proporcionar una atención dental  </span>
  <span className="subtext">de alta calidad y personalizada a los pacientes  </span>
  <span className="subtext">promoviendo la salud oral y mejorando </span>
  <span className="subtext">la salud de nuestros pacientes </span>

</div>

<div className="icon-container">
  <img className="icon-container" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852194/Fresh_Smile_Cmills/ojo_zeqrkh.png" alt="" /> 
  <span className="text">Visión</span>
  <span className="subtext">Ser reconocidos como el consultorio  </span>
  <span className="subtext">odontológico líder en nuestra  </span>
  <span className="subtext">comunidad, brindando una atención </span>


</div>



<div className="icon-container">
  <img className="icon-container" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852194/Fresh_Smile_Cmills/ojo_zeqrkh.png" alt="" /> 
  <span className="text">Valores</span>
 
  <span className="subtext">Profesionalismo: ofrecer servicios </span>
  <span className="subtext"> odontológicos de alta calidad basados  </span>
  <span className="subtext">en conocimientos científicos </span>

</div>


</div>

{/* <Footer /> */}
      
    </>
  );
};
