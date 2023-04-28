import React from "react";
import './Blog.css'


export const handleClick = () => 
  console.log('El botón ha sido presionado');

export const Blog = () => {
  return (
<>
<div className="header-banner">
  <img className="banner-img" src="public/banner.jpg" alt="" />
<h1 class="title2">En este blog te brindaremos informacion sobre nuestras clinicas</h1>
<button className="btn" onClick={handleClick}>Agenda tu cita</button>
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
        
    </>
  );
};
