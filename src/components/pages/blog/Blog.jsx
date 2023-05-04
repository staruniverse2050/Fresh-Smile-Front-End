import React from "react";
import './Blog.css'

export const Blog = () => {
  return (
<>
<div className="header-banner">
  <div className="container-banner">
  <h1 className="container-title">En este blog te brindaremos informacion sobre nuestras clinicas</h1>
  <div className="header-btn">
  <a href="#"><button className="date-btn">Agenda tu cita</button></a>
</div>
</div>
</div>

<div>
<div className="post-container">
        <div className="post">
          <img
            className="post-image"
            src="./public/cards4.jpg"
            alt=""
          />
          <div className="post-hover">
            <h2 className="post-hover-title">Hover</h2>
          </div>
        </div>
        <div className="post">
          <img
            className="post-image"
            src="./public/IMPLANTES-DENTALES.jpg"
            alt=""
          />
          <div className="post-hover">
            <h2 className="post-hover-title">Hover</h2>
          </div>
        </div>
        <div className="post">
          <img
            className="post-image"
            src="./public/instagram1.jpg"
            alt=""
          />
          <div className="post-hover">
            <h2 className="post-hover-title">Hover</h2>
          </div>
        </div>
      </div>
      </div>     


      <div className="left-blog">
  <div className="recent-post">

    <div className="recent-single-post">
      <div className="post-img">
             <img src="./public/cards6.jpg" alt="Ortodoncia_Brackets"/>
      </div>
      <div className="pst-content">
        <h4>Ortodoncia Con Brackects</h4>
        <p>Los tratamientos de ortodoncia están enfocados
         a la corrección de la mordida, consiguiendo que 
         los dientes encajen a la perfección. Con una dentadura 
         nivelada y alineada la sonrisa
         no solo resulta más armónica, sino que disfrutarás
         de una correcta distribución de las cargas masticatorias.</p>
        <a href="#" className="button">Leer más</a>
      </div>
    </div>
    </div>
    </div>

    <div className="left-blog">
  <div className="recent-post">

    <div className="recent-single-post">
      <div className="post-img">
             <img src="./public/cards6.jpg" alt="Ortodoncia_Brackets"/>
      </div>
      <div className="pst-content">
        <h4>BLANQUEAMIENTO DENTAL</h4>
        <p>El blanqueamiento dental es un tratamiento que se aplica a los dientes que han cambiado de color, 
          siendo uno de los tratamiento estéticos más conservadores con el tejido dentario. 
          Con este tratamiento se consigue cambiar el tono del color de los dientes, dejando estos más blancos, 
          luminosos y devolviendo el brillo natural del esmalte dental.</p>
        <a href="#" className="button">Leer más</a>
      </div>
    </div>
    </div>
    </div>

    <div className="left-blog">
  <div className="recent-post">

    <div className="recent-single-post">
      <div className="post-img">
             <img src="./public/cards6.jpg" alt="Ortodoncia_Brackets"/>
      </div>
      <div className="pst-content">
        <h4>CARILLAS DENTALES</h4>
        <p>Las carillas dentales son unas finas láminas de porcelana o composite que se adhieren 
          a la cara visible del diente para mejorar su aspecto estético. Debido a su finalidad estética,
           estas láminas se colocan en la cara vestibular de los dientes frontales, por ser los más visibles 
           cuando sonreímos.</p>
        <a href="#" className="button">Leer más</a>
      </div>
    </div>
    </div>
    </div>

<footer>
<div className="footer-area">
    <div className="container">
    <div className="footer-contacts">
      <div classname="icono">
   <p><i className="fa-solid fa-location-dot"></i><span>Dirección:</span>Cra 21a, calle 9na #099</p>
   </div>
   <div classname="icono">
    <p><i class="fa-thin fa-envelope-open-text"></i><span>Email:</span>freshsmile@gmail.com</p>                    
                  </div>
           </div>
     
                  <div class="footer-head">
                  <h4>Contáctanos:</h4>
                  <div className="flicker-img">
                    <a href="#"><img src="./public/logo.png" rel="icon" alt="logo"></img></a>
                    </div>
                    </div>
                    </div>
                    </div>
                    
</footer>

    </>
  );
};
