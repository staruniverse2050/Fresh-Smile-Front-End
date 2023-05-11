import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Footer } from "../../layouts/footer/Footer";


export const Home = () => {
  return (
    <>
      <div className="container_banner">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_home">
          <h1>¡Bienvenidos a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton-home">
            <Link to="/login"><a class="linksinicio1" href="#login">Agendar Cita</a>
              </Link></button>
            <button className="boton-home">
            <Link to="/Clinica"><a class="linksinicio2" href="#clinica">Buscar Clinica</a>
              </Link></button>
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
            <Link to="/Nosotros"><a class="linksprocedimientos" href="#nosotros">Diseño de sonrisa</a>
              </Link></button>
        </div>

        <div className="procedimientos">
          <img src="./public/blanqueamiento.jpg" alt="sede 2" />
          <button>
          <Link to="/Nosotros"><a class="linksprocedimientos" href="#nosotros">Blanqueamiento</a>
              </Link></button>
        </div>

        <div className="procedimientos">
          <img src="./public/implantes.jpg" alt="sede 3" />
          <button>
          <Link to="/Nosotros"><a class="linksprocedimientos" href="#nosotros">Implantes</a>
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
            <Link to="/Blog"><a class="linksblog" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
        <div className="container-blog">
          <img src="./public/Dentix.png" alt="" />
          <div className="content">
            <h2>Dentix</h2>
            <p className="p-blog">
              Dentix es una empresa española de servicios dentales fundada en 2010 por Ángel Lorenzo. Es una empresa familiar cuyo modelo de negocio se basa en clínicas propias, no en acuerdos de franquicia.            </p>
              <button className="btn-blog">
            <Link to="/Blog"><a class="linksblog" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
        <div className="container-blog">
          <img src="./public/consultorio3.jpg" alt="" />
          <div className="content">
            <h2>Centro Medico Integral</h2>
            <p className="p-blog">
              Centro Medico Integral es un establecimiento de atención médica que ofrece una amplia gama de servicios para atender las necesidades de salud de sus pacientes.
            </p>
            <button className="btn-blog">
            <Link to="/Blog"><a class="linksblog" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
        <div className="container-blog">
          <img src="./public/consultorio2.jpg" alt="" />
          <div className="content">
            <h2>Prodentales</h2>
            <p className="p-blog">
              El Dr.Oscar Zapata ofrece odontología general y especializada para pacientes de todas las edades. Sus servicios abarcan la prevención, el diagnóstico y el tratamiento de condiciones especiales o enfermedades que afectan a los dientes.
            </p>
            <button className="btn-blog">
            <Link to="/Blog"><a class="linksblog" href="#blog">Leer más</a>
              </Link></button>
          </div>
        </div>
      </div>


      <div className="barra5">
  <h2>¿Quiénes Somos?</h2>
</div>

<div className="container-wrapper-2">
  <div className="container-contacto">
    <img src="./public/nosotros.jpg" alt="" />
    <div className="content-contacto">
      {/* <h2>Prodentales</h2> */}
      <p className="p-contacto">
Fresh Smile Cmills es una reconocida clínica de ortodoncia comprometida con ofrecer soluciones de alta calidad para la salud dental de nuestros pacientes. Con una amplia experiencia y conocimientos en el campo de la ortodoncia, nos hemos ganado la confianza de numerosos individuos y familias que buscan mejorar su sonrisa y salud bucal.</p>
<p className="p-contacto">
En Fresh Smile Cmills, comprendemos la importancia de una sonrisa hermosa y saludable, no solo en términos estéticos, sino también en cuanto a la función y el bienestar general de nuestros pacientes. Por ello, nos enfocamos en brindar tratamientos personalizados y eficientes para corregir una amplia variedad de problemas dentales y maxilofaciales.</p>


      <button className="btn-contacto">
        <Link to="/Nosotros"><a class="linkscontacto" href="#nosotros">Leer más</a></Link>
      </button>
    </div>
  </div>
</div>

    

      <div className="barra-2">
        <h2>Clinica Fresh Smile Cmills</h2>
        {/* <p>Contenido del contenedor...</p> */}
      </div>

      <div class="container-sedes-inicio">
  <div class="slick-carousel">
    <div class="sedes-div">
      <img src="./public/sede1.png" alt="sede 1" />
      <h1>Sede Armenia</h1>
      <button>
        <Link to="/Clinica"><a class="linkssede" href="#clinica">Ingresar</a></Link>
      </button>
    </div>

    <div class="sedes-div">
      <img src="./public/sede2.png" alt="sede 2" />
      <h1>Sede Tebaida</h1>
      <button>
        <Link to="/Clinica"><a class="linkssede" href="#clinica">Ingresar</a></Link>
      </button>
    </div>

    <div class="sedes-div">
      <img src="./public/sede3.png" alt="sede 3" />
      <h1>Sede Circasia</h1>
      <button>
        <Link to="/Clinica"><a class="linkssede" href="#clinica">Ingresar</a></Link>
      </button>
    </div>
  </div>
</div>


      {/* <div className="barra-3">
        <h2>Conoce nuestros procedimientos</h2>
        <p>Contenido del contenedor...</p>
      </div> */}

<Footer />


    </>
  );
};
