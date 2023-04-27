import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="menu">
      <a href="#home"><img className="logo" src="./public/logo.png" alt="" /></a>
        <h1> 
          <span>ORAL</span>PREMIUM
        </h1>
        <ul>

          
          <div className="container2">
            <li>
              <Link to="/Home">
                <a class="links" href="#home">Inicio</a>
              </Link>
            </li>
            <li>
              <Link to="/Nosotros">
                <a class="links" href="#about">Nosotros</a>
              </Link>
            </li>
            <li>
              <Link to="/Procedimientos">
                <a class="links" href="/#">Procedimientos</a>
              </Link>
            </li>
            <li>
              <Link to="/Clinica">
                <a class="links" href="/#">Sedes</a>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <a class="links" href="/#">Blog</a>
              </Link>
            </li>
            <li>
              <Link to="/Contacto">
                <a class="links" href="/#">Contacto</a>
              </Link>
            </li>
          </div>
        </ul>
        <a href="#home"><img className="icono-inicio" src="./public/icono_inicio.png" alt="" /></a>
        <a href="#home"><img className="icono-mapa" src="./public/icono_map.png" alt="" /></a>
      </div>
    </header>
  );
};
