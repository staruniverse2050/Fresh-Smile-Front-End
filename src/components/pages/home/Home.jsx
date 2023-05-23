import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';
import { Footer } from "../../layouts/footer/Footer";
const myImage = new CloudinaryImage('sample', { cloudName: 'dfvxujvf8' }).resize(fill().width(100).height(150));


export const Home = () => {
  return (
    <>
      <div className="container_banner">
        <div className="container_home">
          <h1>¡Bienvenidos a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton-home">
              <Link to="/AgendaCita">
                <a class="linksinicio1" href="#login">
                  Agendar Cita
                </a>
              </Link>
            </button>
            <button className="boton-home">
              <Link to="/Clinica">
                <a class="linksinicio2" href="#clinica">
                  Buscar Clinica
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="barra">
        <h2>Conoce Nuestros Procedimientos</h2>
      </div>

      <div className="container-procedimientos-home">
        <div className="procedimientos">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852204/Fresh_Smile_Cmills/dise%C3%B1osonrisa_dqi0j5.jpg"
            alt="sede 1"
          />
          <button>
            <Link to="/Procedimientos">
              <a class="linksprocedimientos" href="#nosotros">
                Diseño de sonrisa
              </a>
            </Link>
          </button>
        </div>

        <div className="procedimientos">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852212/Fresh_Smile_Cmills/cards1_s5fs46.jpg"
            alt="sede 2"
          />
          <button>
            <Link to="/Procedimientos">
              <a class="linksprocedimientos" href="#nosotros">
                Blanqueamiento
              </a>
            </Link>
          </button>
        </div>

        <div className="procedimientos">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852210/Fresh_Smile_Cmills/implantes_keq38a.jpg"
            alt="sede 3"
          />
          <button>
            <Link to="/Procedimientos">
              <a class="linksprocedimientos" href="#nosotros">
                Implantes
              </a>
            </Link>
          </button>
        </div>
      </div>
      {/* Chat WhatsAPP */}
      <div class="space-wpp">
        <a
          href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información."
          class="float"
          target="_blank "
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>

      <div className="barra-2">
        <h2>Nuestro Blog</h2>
      </div>
      <div class="container-wrapper">
        <div className="container-blog">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852211/Fresh_Smile_Cmills/instagram6_ugslal.jpg"
            alt=""
          />
          <div className="content">
            <h2>Odontoestetic</h2>
            <p className="p-blog">
              Odontoestétic es una clínica privada prestadora de servicios de salud oral, con más de 15 años de experiencia
            </p>
            <button className="btn-blog">
              <Link to="/Blog">
                <a class="linksblog" href="#blog">
                  Leer más
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="container-blog">
          <img
            src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825568/Fresh_Smile_Cmills/Dentix_s5ncmf.png"
            alt=""
          />
          <div className="content">
            <h2>Dentix</h2>
            <p className="p-blog">
              Dentix es una empresa española de servicios dentales fundada en 2010 por Ángel Lorenzo. Es una empresa familiar
              cuyo modelo de negocio se basa en clínicas propias,
              no en acuerdos de franquicia{" "}
            </p>
            <button className="btn-blog">
              <Link to="/Blog">
                <a class="linksblog" href="#blog">
                  Leer más
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="container-blog">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852200/Fresh_Smile_Cmills/Dentix_i8ecsc.png"
            alt=""
          />
          <div className="content">
            <h2>Centro Medico Integral</h2>
            <p className="p-blog">
              Centro Medico Integral es un establecimiento de atención médica
              que ofrece una amplia gama de servicios para atender las
              necesidades de salud de sus pacientes.
            </p>
            <button className="btn-blog">
              <Link to="/Blog">
                <a class="linksblog" href="#blog">
                  Leer más
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="container-blog">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852199/Fresh_Smile_Cmills/consultorio2_mrmmlm.jpg"
            alt=""
          />
          <div className="content">
            <h2>Prodentales</h2>
            <p className="p-blog">
              El Dr. Óscar Zapata ofrece odontología general y especializada para pacientes de todas las edades. Sus servicios
              abarcan la prevención, el diagnóstico y el tratamiento de condiciones especiales o enfermedades que afectan a los dientes.
            </p>
            <button className="btn-blog">
              <Link to="/Blog">
                <a class="linksblog" href="#blog">
                  Leer más
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="barra5">
        <h2>¿Quiénes Somos?</h2>
      </div>

      <div className="container-wrapper-2">
        <div className="container-contacto">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852217/Fresh_Smile_Cmills/nosotros_ax9xkz.jpg"
            alt=""
          />
          <div className="content-contacto">
            <p className="p-contacto">
              Fresh Smile Cmills es una reconocida clínica de ortodoncia
              comprometida con ofrecer soluciones de alta calidad para la salud
              dental de nuestros pacientes. Con una amplia experiencia y
              conocimientos en el campo de la ortodoncia, nos hemos ganado la
              confianza de numerosos individuos y familias que buscan mejorar su
              sonrisa y salud bucal.
            </p>
            <p className="p-contacto">
              En Fresh Smile Cmills, comprendemos la importancia de una sonrisa
              hermosa y saludable, no solo en términos estéticos, sino también
              en cuanto a la función y el bienestar general de nuestros
              pacientes. Por ello, nos enfocamos en brindar tratamientos
              personalizados y eficientes para corregir una amplia variedad de
              problemas dentales y maxilofaciales.
            </p>

            <button className="btn-contacto">
              <Link to="/Nosotros">
                <a class="linkscontacto" href="#nosotros">
                  Leer más
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="barra-2">
        <h2>Clinica Fresh Smile Cmills</h2>
      </div>

      <div class="container-sedes-inicio">
        <div class="slick-carousel">
          <div class="sedes-div">
            <img
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852195/Fresh_Smile_Cmills/sede1_q0t5k5.png"
              alt="sede 1"
            />
            <h1>Sede Armenia</h1>
            <button>
              <Link to="/Clinica">
                <a class="linkssede" href="#clinica">
                  Ingresar
                </a>
              </Link>
            </button>
          </div>

          <div class="sedes-div">
            <img
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852195/Fresh_Smile_Cmills/sede2_toewpy.png"
              alt="sede 2"
            />
            <h1>Sede Tebaida</h1>
            <button>
              <Link to="/Clinica">
                <a class="linkssede" href="#clinica">
                  Ingresar
                </a>
              </Link>
            </button>
          </div>

          <div class="sedes-div">
            <img
              src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852196/Fresh_Smile_Cmills/sede3_sotuaw.png"
              alt="sede 3"
            />
            <h1>Sede Circasia</h1>
            <button>
              <Link to="/Clinica">
                <a class="linkssede" href="#clinica">
                  Ingresar
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
