import React from "react";
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      {/* <div className="container_banner">
        <img className="" src="./public/banner.jpg" alt="" />
        <div className="container_home">
          <h1>¡Bienvenidos a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton">Agendar Cita</button>
            <button className="boton">Buscar Clinica</button>
          </div>
        </div>
      </div> */}

      {/* --------------------container title blog--------------------- */}

      <div className="container-titleB">
        <h2>Blog</h2>
      </div>

      {/* -------------------cards hover------------------------- */}

      <div className="cards-blog">
        <div className="posteo-blog">
          <img className="image-card" src="./public/cards4.jpg" alt="" />
        </div>
        <div className="posteo-blog">
          <img
            className="image-card"
            src="./public/IMPLANTES-DENTALES.jpg" alt=""/>
        </div>
        <div className="posteo-blog">
          <img
            className="image-card"
            src="./public/cards5.jpg" alt=""/>
        </div>
      </div>

      {/* <!-- -------------search------------------ --> */}

      <form className="buscador-blog">
        <div class="search-option" id="searchform">
          <input type="text" name="buscador" id="search" placeholder="Buscar..."/>
        </div>
      </form>

      {/* ---------------------cards--------------------------------- */}

      <div className="left-blog">
        {/* <div className="recent-post1"> */}
          <div className="recent-single-post1">
            <div className="post1-img">
              <img src="./public/consultorio1.jpg" alt="Ortodoncia_Brackets" />
            </div>
            <div className="pst-content">
              <h4>DENTIX</h4>
              <p>
               Dentix es una empresa española de servicios dentales fundada en 2010
               por Ángel Lorenzo. Es una empresa familiar cuyo modelo de negocio se 
               basa en clínicas propias, no en acuerdos de franquicia.<br>
               </br>
               Sede central: Calle de la Ribera del Loira, 56, 28042; 
               Madrid, Comunidad de Madrid, España
               </p>
              <a href="#" className="button">
                Leer más
              </a>
            </div>
          </div>
        </div>
      <div className="left-blog">
        {/* <div className="recent-post1"> */}
          <div className="recent-single-post1">
            <div className="post1-img">
              <img src="./public/consultorio2.jpg" alt="Ortodoncia_Brackets" />
            </div>
            <div className="pst-content">
              <h4>ODONTOESTETIC</h4>
              <p>
              Odontoestetic es una clínica privada prestadora de servicios de salud oral,
               con mas de 15 años de experiencia, especializada en áreas de educación, 
               promoción y prevención de salud bucal, rehabilitación oral, endodoncia, 
               periodoncia, ortodoncia y estética dental.<br>
               </br>
               Sede central: Carrera 12 #1A Norte, Armenia 630004
              </p>
              <a href="#" className="button">
                Leer más
              </a>
            </div>
          </div>
        </div>

      <div className="left-blog">
        {/* <div className="recent-post12"> */}
          <div className="recent-single-post1">
            <div className="post1-img">
              <img src="./public/consultorio4.jpg" alt="Ortodoncia_Brackets" />
            </div>
            <div className="pst-content">
              <h4>PRODENTALES</h4>
              <p>
              El Dr.Oscar Zapata ofrece odontología general y especializada 
              para pacientes de todas las edades. Sus servicios abarcan la 
              prevención, el diagnóstico y el tratamiento de condiciones 
              especiales o enfermedades que afectan a los dientes.<br>
              </br>
               Sede central: Cl 3 N 12-05 Armenia - Quindío, Colombia
              </p>
              <a href="#" className="button">
                Leer más
              </a>
            </div>
          </div>
        </div>

      {/* <!-- -------link contact wpp------- --> */}

      <div class="space-wpp">
        <a
          href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información."
          class="float"
          target="_blank "
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>

      {/* -------------------container title enjoy blog----------------------------------- */}

      <div className="container-titleB1">
        <h2>Disfruta de nuestro blog</h2>
      </div>

      {/* -----------------------post--------------------------------------- */}

      <div className="container-post">
        <div className="post1-img1">
          <a href="#">
            <img src="./public/cards6.jpg" alt="clinica_4" />
          </a>
        </div>
        <div className="post1-img1">
          <a href="#">
            <img src="./public/cards6.jpg" alt="clinica_5" />
          </a>
        </div>
        <div className="post1-img1">
          <a href="#">
            <img src="./public/cards6.jpg" alt="clinica_6" />
          </a>
        </div>
        <div className="post1-img1">
          <a href="#">
            <img src="./public/cards6.jpg" alt="clinica_7" />
          </a>
        </div>
        <div className="post1-img1">
          <a href="#">
            <img src="./public/cards6.jpg" alt="clinica_8" />
          </a>
        </div>
        <div className="post1-img1">
          <a href="#">
            <img src="./public/cards6.jpg" alt="clinica_9" />
          </a>
        </div>
      </div>

      {/* ----------------------------------footer-------------------------------------- */}

      {/* <footer>
        <div className="footer-area">
          <div className="container1">
            <div className="footer-contacts">
              <div classname="icono">
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Dirección:</span>Cra 21a, calle 9na #099
                </p>
              </div>
              <div classname="icono">
                <p>
                  <i class="fa-solid fa-envelope-open-text"></i>
                  <span>Email:</span>freshsmilecmills@gmail.com
                </p>
              </div>
            </div>

            <div class="footer-head">
              <h4>Contáctanos:</h4>
              <div className="flicker-img">
                <a href="#">
                  <img src="./public/logo.png" rel="icon" alt="logo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};
