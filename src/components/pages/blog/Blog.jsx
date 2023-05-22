import React from "react";
import "./Blog.css";
import { Footer } from "../../layouts/footer/Footer";

export const Blog = () => {
  return (
    <>


      {/* --------------------container title blog--------------------- */}

      <div className="container-titleB">
        <h2>Blog</h2>
      </div>

      {/* -------------------cards hover------------------------- */}

      <div className="cards-blogBC">
        <div className="posteo-blogBC1">
          <img className="image-cardBC2" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/cards4_r5phfs.jpg" alt="" />
        </div>

        <div className="posteo-blogBC1">
          <img
            className="image-cardBC2"
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/IMPLANTES-DENTALES_no3n0n.jpg" alt="" />
        </div>
        <div className="posteo-blogBC1">
          <img
            className="image-cardBC2"
            src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852203/Fresh_Smile_Cmills/cards5_zik6lu.jpg" alt="" />
        </div>
      </div>

      {/* <!-- -------------search------------------ --> */}

      <form className="buscador-blog">
        <div class="search-option" id="searchform">
          <input type="text" name="buscador" id="search" placeholder="Buscar..." />
        </div>
      </form>

      {/* ---------------------cards--------------------------------- */}

      <div className="left-blog">
        {/* <div className="recent-post1"> */}
        <div className="recent-single-post1">
          <div className="post1-img">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852201/Fresh_Smile_Cmills/consultorio1_iwcldu.jpg" alt="Ortodoncia_Brackets" />
          </div>
          <div className="pst-content">
            <h4>DENTIX</h4>
            <p>
              Dentix es una empresa española de servicios dentales fundada en 2010
              por Ángel Lorenzo. Es una empresa familiar cuyo modelo de negocio se
              basa en clínicas propias, no en acuerdos de franquicia.</p>
            <p className="pst-content">
              <span>Sede central:</span> Calle de la Ribera del Loira, 56, 28042;
              Madrid, Comunidad de Madrid, España.</p>
            <a href="#" className="button-blog">
              Leer más
            </a>
          </div>
        </div>
      </div>
      <div className="left-blog">
        <div className="recent-single-post1">
          <div className="post1-img">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852199/Fresh_Smile_Cmills/consultorio2_mrmmlm.jpg" alt="Ortodoncia_Brackets" />
          </div>
          <div className="pst-content">
            <h4>ODONTOESTETIC</h4>
            <p>
              Odontoestetic es una clínica privada prestadora de servicios de salud oral, con más de 15 años de experiencia, especializada
              en áreas de educación, promoción
              y prevención de salud bucal, rehabilitación oral, endodoncia, periodoncia, ortodoncia y estética dental.</p>
            <p className="pst-content">
              <span>Sede central:</span> Carrera 12 #1A Norte, Armenia 630004
            </p>
            <a href="#" className="button-blog">
              Leer más
            </a>
          </div>
        </div>
      </div>

      <div className="left-blog">
        <div className="recent-single-post1">
          <div className="post1-img">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852201/Fresh_Smile_Cmills/consultorio4_qrnlsd.jpg" alt="Ortodoncia_Brackets" />
          </div>
          <div className="pst-content">
            <h4>PRODENTALES</h4>
            <p>
              El Dr. Óscar Zapata ofrece odontología general y especializada para pacientes de todas las edades.
              Sus servicios abarcan la prevención,
              el diagnóstico y el tratamiento de condiciones especiales o enfermedades que afectan a los dientes.</p>
            <p className="pst-content">
              <span>Sede central:</span> Cl 3 N 12-05 Armenia - Quindío, Colombia
            </p>
            <a href="#" className="button-blog">
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
        <div className="post1-img">
          <a href="#">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852215/Fresh_Smile_Cmills/cards6_xf13bb.jpg" alt="clinica_4" />
          </a>
        </div>
        <div className="post1-img">
          <a href="#">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852215/Fresh_Smile_Cmills/cards6_xf13bb.jpg" alt="clinica_5" />
          </a>
        </div>
        <div className="post1-img">
          <a href="#">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852215/Fresh_Smile_Cmills/cards6_xf13bb.jpg" alt="clinica_6" />
          </a>
        </div>
        <div className="post1-img">
          <a href="#">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852215/Fresh_Smile_Cmills/cards6_xf13bb.jpg" alt="clinica_7" />
          </a>
        </div>
        <div className="post1-img">
          <a href="#">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852215/Fresh_Smile_Cmills/cards6_xf13bb.jpg" alt="clinica_8" />
          </a>
        </div>
        <div className="post1-img">
          <a href="#">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852215/Fresh_Smile_Cmills/cards6_xf13bb.jpg" alt="clinica_9" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
