import React from "react";
import "./nosotros.css";


export const Nosotros = () => {
  return (
    <>
      
      <div className="container_banner">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_homer">
          <h1>¡Bienvenido a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton">Agendar Cita</button>
            <button className="boton">Buscar Clinica</button>
          </div>
        </div>
      </div>

      <div className="post-nosotros">
  <img className="" src="./public/nosotros.jpg" alt="" /> 
  <div className="post-nts">
  <h2 className="post-title">Nosotros</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dui eu nibh malesuada, id lobortis purus rhoncus. 
      Integer eu bibendum ipsum. Nullam vitae tincidunt massa. Praesent eget sem quis nisi lobortis facilisis quis ut mauris.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dui eu nibh malesuada, id lobortis purus rhoncus. Integer eu bibendum ipsum. Nullam vitae tincidunt massa. 
      Praesent eget sem quis nisi lobortis facilisis quis ut mauris.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dui eu nibh malesuada, id lobortis purus rhoncus. 
      Integer eu bibendum ipsum. Nullam vitae tincidunt massa. Praesent eget sem quis nisi lobortis facilisis quis ut mauris.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dui eu nibh malesuada, id lobortis purus rhoncus. Integer eu bibendum ipsum. Nullam vitae tincidunt massa. 
      Praesent eget sem quis nisi lobortis facilisis quis ut mauris.
      </p>     
  </div>

  <div className="icon-container">
  <img className="icon-container" src="./public/diamante.png" alt="" /> 
  <span className="text">Valores</span>
  <span className="subtext">Aquí puedes agregar tu texto adicional</span>
</div>

<div className="icon-container">
  <img className="icon-container" src="./public/diamante.png" alt="" /> 
  <span className="text">Valores</span>
  <span className="subtext">Aquí puedes agregar tu texto adicional</span>
</div>



<div className="icon-container">
  <img className="icon-container" src="./public/diamante.png" alt="" /> 
  <span className="text">Valores</span>
  <span className="subtext">Aquí puedes agregar tu texto adicional</span>
</div>


</div>

  
      
    </>
  );
};
