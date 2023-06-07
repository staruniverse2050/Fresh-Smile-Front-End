import React from "react";
import "./nosotros.css";
import { Footer } from "../../layouts/footer/Footer";


export const Nosotros = () => {
  return (
    <>

      <div className="container_banner1A">
      <div className="barra-nost1">
  <h2>Sobre Nosotros</h2>
</div>
      </div>

      <div className="container-usN">
        <div className="post-nosotrosN">
          <img className="" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852193/Fresh_Smile_Cmills/imagen15.jpg_gg3f9o.jpg" alt="" />
          <div className="post-ntsP">
            <p className="text-us">
              Nuestro equipo de profesionales altamente capacitados y especializados trabaja de la mano con cada paciente para diseñar un plan de tratamiento
              individualizado, teniendo en cuenta sus necesidades y objetivos específicos. Utilizamos las últimas tecnologías y técnicas en ortodoncia para
              garantizar resultados óptimos y duraderos.</p>

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

      <div className="icon-containerA">
  <div className="icon-rowB">
    <div>
      <img className="icon-imgCM" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852199/Fresh_Smile_Cmills/cohete_tzkzcz.png" />
    </div>
    <div>
      <h2 className="icon-textD">Misión</h2>
      <p className="icon-subtextE">
        La misión de nuestro consultorio odontológico es proporcionar una atención dental de alta calidad y personalizada a los pacientes, promoviendo la salud oral y mejorando la salud de nuestros pacientes.
      </p>
    </div>
  </div>
  <div className="icon-rowB">
    <img className="icon-imgCM1" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852194/Fresh_Smile_Cmills/ojo_zeqrkh.png" />
    <div>
      <h2 className="icon-textDM">Visión</h2>
      <p className="icon-subtextEM">
        Ser reconocidos como el consultorio odontológico líder en nuestra comunidad, brindando una atención al cliente.
      </p>
    </div>
  </div>
  <div className="icon-rowB">
    <img className="icon-imgC" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852200/Fresh_Smile_Cmills/diamante_nyvce1.png" />
    <div>
      <h2 className="icon-textDM">Valores</h2>
      <p className="icon-subtextEM">
       Ofrecer servicios odontológicos de alta calidad basados en conocimientos científicos.
      </p>
    </div>
  </div>
  
</div>
<div className="specialist-container">
      <div className="specialist-card">
        <img className="specialist-image" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685325361/cuidado-dental_wmiath.png" />
        <h3 className="specialist-name">Karen Sanchez</h3>
        <p className="specialist-description">Con más de 10 años de experiencia en el campo de la odontología, Karen Sanchez es una profesional altamente capacitada y apasionada por brindar atención dental de calidad.</p>
      </div>
      <div className="specialist-card2">
        <img className="specialist-image" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685325361/dentista_1_rr7agx.png" />
        <h3 className="specialist-name">Juan González</h3>
        <p className="specialist-description">Juan González es un destacado especialista en odontología con una sólida experiencia de más de 15 años en el campo. Se distingue por su enfoque integral y su dedicación para brindar una atención dental de calidad a sus pacientes. </p>
      </div>
     
      <div className="specialist-card3">
        <img className="specialist-image" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685326579/dentista_4_wa8js1.png" />
        <h3 className="specialist-name">María Rodríguez</h3>
        <p className="specialist-description">María Rodríguez es una odontóloga altamente capacitada y comprometida con la salud bucal de sus pacientes. Con más de 10 años de experiencia en el campo de la odontología restauradora, se especializa en tratamientos de rehabilitación oral y prótesis dentales.</p>
      </div>
      <div className="specialist-card4">
        <img className="specialist-image" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685326579/dentista_3_tdg21p.png" />
        <h3 className="specialist-name">Alejandro López</h3>
        <p className="specialist-description">Alejandro López es un reconocido ortodoncista con una pasión por crear sonrisas perfectas. Con una formación sólida y más de 15 años de experiencia en ortodoncia, Alejandro se dedica a corregir problemas de maloclusión y alineación dental. </p>
      </div>
     
    </div>


      <Footer />

    </>
  );
};