import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="container_banner">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_home">
          <h1>¡Bienvenidos a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton">Agendar Cita</button>
            <button className="boton">Buscar Clinica</button>
          </div>
        </div>
      </div>


      <div className="barra">
        <h2>Conoce Nuestros Procedimientos</h2>
      </div>

      <div className="container-procedimientos">
        <div className="procedimientos">
          <img src="./public/diseñosonrisa.jpg" alt="sede 1" />
          <button> 
            <Link to="/Nosotros"><a class="links" href="#nosotros">Diseño de sonrisa</a>
              </Link></button>
        </div>

        <div className="procedimientos">
          <img src="./public/blanqueamiento.jpg" alt="sede 2" />
          <button>
          <Link to="/Nosotros"><a class="links" href="#nosotros">Blanqueamiento</a>
              </Link></button>
        </div>

        <div className="procedimientos">
          <img src="./public/implantes.jpg" alt="sede 3" />
          <button>
          <Link to="/Nosotros"><a class="links" href="#nosotros">Implantes</a>
              </Link></button>
        </div>
      </div>
      {/* Chat WhatsAPP */}
      <div class="space-wpp">
        <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información." class="float" target="_blank ">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>


      <div className="barra-2">
        <h2>Nuestro Blog</h2>
        {/* <p>Contenido del contenedor...</p> */}
      </div>
      <div class="container-wrapper">
        <div className="container-blog">
          <img src="./public/consultorio2.jpg" alt="" />
          <div className="content">
            <h2>Odontoestetic</h2>
            <p className="p-blog">
              Odontoestetic es una clínica privada prestadora de servicios de salud oral, con mas de 15 años de experiencia.
            </p>
            <button className="btn-blog">
            <Link to="/Blog"><a class="links" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
        <hr></hr><hr></hr>
        <div className="container-blog">
          <img src="./public/Dentix.png" alt="" />
          <div className="content">
            <h2>Dentix</h2>
            <p className="p-blog">
              Dentix es una empresa española de servicios dentales fundada en 2010 por Ángel Lorenzo. Es una empresa familiar cuyo modelo de negocio se basa en clínicas propias, no en acuerdos de franquicia.            </p>
              <button className="btn-blog">
            <Link to="/Blog"><a class="links" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
        {/* <hr></hr> */}<hr></hr>
        <div className="container-blog">
          <img src="./public/consultorio3.jpg" alt="" />
          <div className="content">
            <h2>Centro Medico Integral</h2>
            <p className="p-blog">
              Centro Medico Integral es un establecimiento de atención médica que ofrece una amplia gama de servicios para atender las necesidades de salud de sus pacientes.
            </p>
            <button className="btn-blog">
            <Link to="/Blog"><a class="links" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
        <hr></hr><hr></hr>
        <div className="container-blog">
          <img src="./public/consultorio2.jpg" alt="" />
          <div className="content">
            <h2>Prodentales</h2>
            <p className="p-blog">
              El Dr.Oscar Zapata ofrece odontología general y especializada para pacientes de todas las edades. Sus servicios abarcan la prevención, el diagnóstico y el tratamiento de condiciones especiales o enfermedades que afectan a los dientes.
            </p>
            <button className="btn-blog">
            <Link to="/Blog"><a class="links" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
      </div>


      <div className="barra">
        <h2>¿Quienes Somos?</h2>
      </div>

      <div class="container-wrapper-2">
      <div className="container-contacto">
          <img src="./public/nosotros.jpg" alt="" />
          <div className="content-contacto">
            {/* <h2>Prodentales</h2> */}
            <p className="p-contacto">Nosotros somos una clínica de ortodoncia dedicada a brindar soluciones de alta calidad para la salud dental de nuestros pacientes. Nos especializamos en la corrección de problemas dentales y maxilofaciales, utilizando las últimas tecnologías y técnicas de ortodoncia para lograr los mejores resultados posibles.</p>
            <button className="btn-contacto">
            <Link to="/Nosotros"><a class="links" href="#nosotros">Leer más</a>
              </Link></button>
          </div>
        </div>
        </div>

    

      {/* <hr></hr> */}
      <div className="barra-2">
        <h2>Clinica Fresh Smile Cmills</h2>
        {/* <p>Contenido del contenedor...</p> */}
      </div>

      <div className="container-sedes">
        <div className="sedes-div">
          <img src="./public/sede1.png" alt="sede 1" />
          <h1>Sede Armenia</h1>
          <button>
            <Link to="/Clinica"><a class="links" href="#clinica">Ingresar</a>
              </Link></button>
        </div>

        <div className="sedes-div">
          <img src="./public/sede2.png" alt="sede 2" />
          <h1>Sede Tebaida</h1>
          <button>
            <Link to="/Clinica"><a class="links" href="#clinica">Ingresar</a>
              </Link></button>
        </div>

        <div className="sedes-div">
          <img src="./public/sede3.png" alt="sede 3" />
          <h1>Sede Circasia</h1>
          <button>
            <Link to="/Clinica"><a class="links" href="#clinica">Ingresar</a>
              </Link></button>
        </div>
      </div>

      {/* <div className="barra-3">
        <h2>Conoce nuestros procedimientos</h2>
        <p>Contenido del contenedor...</p>
      </div> */}





    </>
  );
};
