import React, { useState, useEffect } from "react";
import "./nosotros.css";
import { Footer } from "../../layouts/footer/Footer";


export const Nosotros = () => {
  const [especialistas, setEspecialistas] = useState([]);

  useEffect(() => {
    const fetchEspecialistas = async () => {
      try {
        const response = await fetch(
          "https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarEspecialista"
        );
        const data = await response.json();
        const filteredEspecialistas = data.filter(
          (_, index) => index === 2 || index === 4 || index === 5 || index === 8
        );
        setEspecialistas(filteredEspecialistas);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchEspecialistas();
  }, []);
  
  return (
    <>
     <div className="container_pronotr">
                <div className="container_nosotr">
                    <h1> Conoce Sobre Nosotros</h1>
                    
                </div>
            </div>

            <div className="barra-procedimientos">
                <h2>Nos caracterizamos por ser un consultorio de alta responsabilidad</h2>
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
  {especialistas.map((especialista, index) => (
        <div className="specialist-card"  key={index}>
          <img className="specialist-image"
          src={especialista.foto_perfil}
          alt={`Imagen ${index + 1}`} />
        <h3 className="specialist-name">{especialista.nombre_completo}</h3>
        <p className="specialist-description">{especialista.descripcion}</p>
        </div>
      ))}
    </div>
      <Footer />

    </>
  );
};