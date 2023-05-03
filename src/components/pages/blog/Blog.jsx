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
<div class="footer-area">
    <div class="container">

    <div class="address">
  <div class="container">
    <div class="footer-content">
      <div class="address-info">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
      <p><span>Direccion</span></p><p className="dateT"><span>cra21a, calle 9na #099</span></p>
</div>
</div>

  <div class="email">
    <div class="container">
      <div class="footer-content">
      <div class="email-info">
        <i class="fa-solid fa-envelope"></i>
        <p><span>E-mail</span></p><p className="dateT"><span>freshsmile@gmail.com</span></p>
      </div>
    </div>
    </div>
  </div>

  <div class="phone">
    <div class="container">
      <div class="footer-content">
      <div class="phone-info">
        <i class="fa-solid fa-phone-volume"></i>
        <p><span>Contactanos</span></p><p className="dateT"><span>3204415807</span></p>
      </div>
    </div>
    </div>
  </div>

  </div>
</div>
</div>
</div>

</footer>

    </>
  );
};
