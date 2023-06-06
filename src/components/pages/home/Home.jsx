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
            <Link to="/Mapa">
  <a className="linksinicio2" href="#clinica">
    Buscar Clínica
  </a>
</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="barra-2">
  <h2>Nuestros procedimientos</h2>
</div>
<div className="container-wrapper">
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685124831/ortodoncista_tlq9k3.png"
      alt=""
    />
    <div className="content">
      <h2>Ortodoncia</h2>
      <button className="btn-blog">
        <Link to="/Procedimientos">
          <a className="linksblog" href="#Procedimientos">
            Leer más
          </a>
        </Link>
      </button>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125116/cepillo-de-dientes_1_d1q7ii.png"
      alt=""
    />
    <div className="content">
      <h2>Limpieza dental</h2>
      <button className="btn-blog">
        <Link to="/Procedimientos">
          <a className="linksblog" href="#Procedimientos">
            Leer más
          </a>
        </Link>
      </button>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125346/endodoncia_n5itxb.png"
      alt=""
    />
    <div className="content">
      <h2>Endodoncia</h2>
      <button className="btn-blog">
        <Link to="/Procedimientos">
          <a className="linksblog" href="#procedimientos">
            Leer más
          </a>
        </Link>
      </button>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125180/extraccion_jn5wxt.png"
      alt=""
    />
    <div className="content">
      <h2>Extracción dental</h2>
      <button className="btn-blog">
      <Link to="/Procedimientos">
      <a className="linksblog" href="#extraccion-dental">
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

      

      <Footer />
    </>
  );
};
