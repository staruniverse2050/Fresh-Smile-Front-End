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

{/* --------------------container title blog--------------------- */}

<div className="container-titleB">
        <h2>Blog</h2>
      </div>

{/* -------------------cards hover------------------------- */}

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


      {/* <!-- -------------search------------------ --> */}

<form>
<div class="search-option" id="searchform">
<input type="text" name="buscador" id="search" placeholder="Buscar..."/>
</div>
</form>

{/* ---------------------cards--------------------------------- */}

      <div className="left-blog">
  <div className="recent-post">

    <div className="recent-single-post">
      <div className="post-img">
             <img src="./public/dental.png" alt="Ortodoncia_Brackets"/>
      </div>
      <div className="pst-content">
        <h4>Clinica 1</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Impedit quos suscipit temporibus accusamus, harum alias nemo, 
          ab labore beatae eaque error tempore omnis ex totam fugit asperiores 
          deserunt explicabo accusantium.</p>
        <a href="#" className="button">Leer más</a>
      </div>
    </div>
    </div>
    </div>

    <div className="left-blog">
  <div className="recent-post">

    <div className="recent-single-post">
      <div className="post-img">
             <img src="./public/dental.png" alt="Ortodoncia_Brackets"/>
      </div>
      <div className="pst-content">
        <h4>Clinica 2</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Impedit quos suscipit temporibus accusamus, harum alias nemo, 
          ab labore beatae eaque error tempore omnis ex totam fugit asperiores 
          deserunt explicabo accusantium.</p>
        <a href="#" className="button">Leer más</a>
      </div>
    </div>
    </div>
    </div>

    <div className="left-blog">
  <div className="recent-post">

    <div className="recent-single-post">
      <div className="post-img">
             <img src="./public/dental.png" alt="Ortodoncia_Brackets"/>
      </div>
      <div className="pst-content">
        <h4>Clinica 3</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Impedit quos suscipit temporibus accusamus, harum alias nemo, 
          ab labore beatae eaque error tempore omnis ex totam fugit asperiores 
          deserunt explicabo accusantium.</p>
        <a href="#" className="button">Leer más</a>
      </div>
    </div>
    </div>
    </div>


    {/* <!-- -------link contact wpp------- --> */}

<div class="space-wpp">
    <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información." class="float" target="_blank ">
      <i class="fa fa-whatsapp my-float"></i>
      </a>
  </div>

{/* -------------------container title enjoy blog----------------------------------- */}

    <div className="container-titleB1">
        <h2>Disfruta de nuestro blog</h2>
      </div>

{/* -----------------------post--------------------------------------- */}

     <div className="container-post">
      <div className="post-img">
      <a href="#"><img src="./public/cards6.jpg" alt="clinica_4"/></a>
      </div>
      <div className="post-img">
      <a href="#"><img src="./public/cards6.jpg" alt="clinica_5"/></a>
      </div>
      <div className="post-img">
      <a href="#"><img src="./public/cards6.jpg" alt="clinica_6"/></a>
      </div>
       <div className="post-img">
      <a href="#"><img src="./public/cards6.jpg" alt="clinica_7"/></a>
      </div>
      <div className="post-img">
      <a href="#"><img src="./public/cards6.jpg" alt="clinica_8"/></a>
      </div>
      <div className="post-img">
      <a href="#"><img src="./public/cards6.jpg" alt="clinica_9"/></a>
      </div>
</div>

{/* ----------------------------------footer-------------------------------------- */}

<footer>
<div className="footer-area">
    <div className="container">
    <div className="footer-contacts">
      <div classname="icono">
   <p><i className="fa-solid fa-location-dot"></i><span>Dirección:</span>Cra 21a, calle 9na #099</p>
   </div>
   <div classname="icono">
    <p><i class="fa-solid fa-envelope-open-text"></i><span>Email:</span>freshsmilecmills@gmail.com</p>                    
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
