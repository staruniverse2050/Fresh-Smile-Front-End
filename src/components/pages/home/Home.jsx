import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { Footer } from "../../layouts/footer/Footer";
const myImage = new CloudinaryImage("sample", {
  cloudName: "dfvxujvf8",
}).resize(fill().width(100).height(150));

export const Home = () => {
  return (
    <>
      <div className="container_banner">
        <div className="container_home">
          <h1>¡Bienvenidos a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton-home">
              <a
                className="linksinicio2"
                href="https://www.google.com/search?rlz=1C1ALOY_esCO991CO991&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=APwXEdeISbLcVD7S1A3ujeXFkJTEClR6Mg:1686163849408&q=odont%C3%B3logos+armenia&rflfq=1&num=10&rllag=4532772,-75675916,1962&sa=X&ved=2ahUKEwi7qpvq6bH_AhXrjLAFHeWsCO0QjGp6BAgPEAE&biw=1920&bih=937&dpr=1#rlfi=hd:;si:;mv:[[4.567563,-75.6476871],[4.5190079,-75.6952613]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
              >
                Buscar Clínica
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="barra">
        <h2 className="">Nuestros Procedimientos</h2>
      </div>
      <div className="container-wrapper-Home">
        <div className="card-procedimientos-home">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684267038/Fresh_Smile_Cmills/pexels-karolina-grabowska-6627600_rr7web.jpg"
            alt="Título de la tarjeta 1"
            class="card-image-proce"
          />
          <button className="card-button">
            <Link to="/Procedimientos">
              <h2 className="card-title">Blanqueamiento Dental</h2>
            </Link>
          </button>
        </div>

        <div className="card-procedimientos-home">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852202/Fresh_Smile_Cmills/carillas_hbazmk.jpg"
            alt="Título de la tarjeta 2"
            class="card-image-proce"
          />
          <button className="card-button">
            <Link to="/Procedimientos">
              <h2 className="card-title">Diseño de Sonrisa</h2>
            </Link>
          </button>
        </div>

        <div className="card-procedimientos-home">
          <img
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852210/Fresh_Smile_Cmills/implantes_keq38a.jpg"
            alt="Título de la tarjeta 3"
            class="card-image-proce"
          />
          <button className="card-button">
            <Link to="/Procedimientos">
              <h2 className="card-title">Implante Dental</h2>
            </Link>
          </button>
        </div>

       </div>

      <div className="barra-2">
      <h2 className="">Nuestros Especialistas</h2>
      </div>

      <div class="container-nosotros-home">
        <div className="card-nosotros-home">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686505008/doctora1_ng31ar.jpg" alt="Imagen 1" />
          <h3 className="card-title-nosotros">Karen Sanchez</h3>
        </div>
        <div className="card-nosotros-home">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686505071/doctor4_qet252.jpg" alt="Imagen 2" />
          <h3 className="card-title-nosotros">Juan González</h3>
        </div>
        <div className="card-nosotros-home">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1686505033/doctora3_x4tvyn.jpg" alt="Imagen 3" />
          <h3 className="card-title-nosotros">María Rodríguez</h3>
        </div>
      </div>
      
      <div className="barra-2">
      <h2 className="">Sobre Nosotros</h2>
      </div>
      {/* <h2 className="title-barra">¿Quiénes Somos?</h2> */}
      <div className="container-nosotros-home2">
        <div className="image-nosotros">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852217/Fresh_Smile_Cmills/nosotros_ax9xkz.jpg" alt="Imagen" />
        </div>
        <div className="content-nosotros">
          {/* <h2>¿Quiénes Somos?</h2> */}
          <p>Fresh Smile Cmills es una reconocida clínica de ortodoncia
              comprometida con ofrecer soluciones de alta calidad para la salud
              dental de nuestros pacientes. Con una amplia experiencia y
              conocimientos en el campo de la ortodoncia, nos hemos ganado la
              confianza de numerosos individuos y familias que buscan mejorar su
              sonrisa y salud bucal.</p>
            <p>Comprendemos la importancia de una sonrisa
              hermosa y saludable, no solo en términos estéticos, sino también
              en cuanto a la función y el bienestar general de nuestros
              pacientes. Por ello, nos enfocamos en brindar tratamientos
              personalizados y eficientes para corregir una amplia variedad de
              problemas dentales y maxilofaciales.</p>
          <button className="btn-nosotros-home">
          <Link to="/Nosotros">
          <a className="linksblog" href="#procedimientos">
          Conocer más
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

      <Footer />
    </>
  );
};