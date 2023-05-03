import React from "react";
import './Blog.css'

export const Blog = () => {
  return (
<>
<div className="header-banner">
  <div className="container-banner">
  <h1 className="container-title">En este blog te brindaremos informacion sobre nuestras clinicas</h1>
  <div className="header-btn">
  <button className="date-btn">Agenda tu cita</button>
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


<footer>
<div className="footer-area">
    <div className="container">
    <div className="footer-contacts">
    <i className="fa-solid fa-location-dot"></i><p className="adress-footer"><span  className="adress">Dirección:</span><span> Cra 21a, calle 9na #099</span></p>
                    <p className="email-footer"><span>Email:</span><span> freshsmile@gmail.com</span></p>                    
                  </div>

                  <div class="footer-head">
                  <h4>Contáctanos:</h4>
                  <h5>+57 3204415807</h5>
                  <div className="flicker-img">
                    <a href="#"><img src="./public/logo.png" alt="logo"></img></a>
                    </div>
                    </div>
                    </div>
                    </div>
</footer>

    </>
  );
};
