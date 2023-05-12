import React from "react";
import "./nosotros.css";
import { Footer } from "../../layouts/footer/Footer";


export const Nosotros = () => {
  return (
    <>
      
      <div className="container_banner1">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_home1">
          <h1>¡Sobre Nosotros!</h1>
         
        </div>
      </div>

<div className="container-us">
      <div className="post-nosotros">
  <img className="" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852193/Fresh_Smile_Cmills/imagen15.jpg_gg3f9o.jpg" alt="" /> 
  <div className="post-nts">
  <h2 className="post-title">Nosotros</h2> 
    <p className="text-us">
    Nuestro equipo de profesionales altamente capacitados y especializados trabaja de la mano con cada paciente para diseñar un plan de tratamiento 
    individualizado, teniendo en cuenta sus necesidades y objetivos específicos. Utilizamos las últimas tecnologías y técnicas en ortodoncia para 
    garantizar resultados óptimos y duraderos.</p> 
    <p className="text-us">
    En Fresh Smile Cmills, nos enorgullece ofrecer un ambiente acogedor y amigable, donde nuestros pacientes se sientan cómodos y confiados durante 
    todo su proceso de tratamiento. Nuestro objetivo es crear una experiencia positiva y satisfactoria para cada persona que nos visita, brindando 
    atención personalizada y cuidado de calidad en cada etapa del camino.</p>
    <p className="text-us">
    Además de nuestros servicios de ortodoncia, también brindamos asesoramiento y educación integral sobre higiene oral, para que nuestros pacientes 
    puedan mantener una sonrisa saludable a largo plazo. Creemos en la importancia de la prevención y el cuidado continuo para lograr y preservar 
    una salud bucal óptima.</p>
    <p className="text-us">
    Si estás buscando una clínica de ortodoncia comprometida con la excelencia, la innovación y el bienestar de sus pacientes, Fresh Smile Cmills 
    es tu mejor elección. Permítenos ayudarte a transformar tu sonrisa y mejorar tu calidad de vida. ¡Contáctanos hoy mismo y descubre el poder 
    de una sonrisa radiante con Fresh Smile Cmills!</p>
  </div>
  </div>
  </div>

   {/* Chat WhatsAPP */}
   <div class="space-wpp">
        <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información." class="float" target="_blank ">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>

      <div className="icon-containe">
  <div className="icon-row">
    <img className="icon-img" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852199/Fresh_Smile_Cmills/cohete_tzkzcz.png"/>
    <div>
      <h2 className="icon-text">Misión</h2>
      <p className="icon-subtext">
      La misión de nuestro consultorio odontológico es proporcionar una atención dental de alta calidad y personalizada a los pacientes
      promoviendo la salud oral y mejorando la salud de nuestros pacientes</p>
    </div>
  </div>
  <div className="icon-row">
    <img className="icon-img" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852194/Fresh_Smile_Cmills/ojo_zeqrkh.png"/>
    <div>
      <h2 className="icon-text">Visión</h2>
      <p className="icon-subtext">
      Ser reconocidos como el consultorio odontológico líder en nuestra comunidad, brindando una atención</p>
    </div>
    </div>
    <div className="icon-row">
    <img className="icon-img" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852200/Fresh_Smile_Cmills/diamante_nyvce1.png"/>
    <div>
      <h2 className="icon-text">Valores</h2>
      <p className="icon-subtext">
      Profesionalismo: ofrecer servicios odontológicos de alta calidad basados en conocimientos científicos</p>
    </div>
    </div>





  {/* <div className="icon-containe">
  <img className="icon-containe" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825567/Fresh_Smile_Cmills/cohete_wdjrsc.png" alt="" /> 
  <span className="text">Misión</span>
  <span className="subtext">La misión de nuestro consultorio odontológico </span>
  <span className="subtext">ser proporcionar una atención dental  </span>
  <span className="subtext">de alta calidad y personalizada a los pacientes  </span>
  <span className="subtext">promoviendo la salud oral y mejorando </span>
  <span className="subtext">la salud de nuestros pacientes </span>

</div>

<div className="icon-containe">
  <img className="icon-containe" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/ojo_imak5s.png" alt="" /> 
  <span className="text">Visión</span>
  <span className="subtext">Ser reconocidos como el consultorio  </span>
  <span className="subtext">odontológico líder en nuestra  </span>
  <span className="subtext">comunidad, brindando una atención </span>


</div>
</div>


<div className="icon-containe">
  <img className="icon-containe" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825575/Fresh_Smile_Cmills/ojo_imak5s.png" alt="" /> 
  <span className="text">Valores</span>
 
  <span className="subtext">Profesionalismo: ofrecer servicios </span>
  <span className="subtext"> odontológicos de alta calidad basados  </span>
  <span className="subtext">en conocimientos científicos </span>

</div> */}
</div>



<Footer />
      
    </>
  );
};
