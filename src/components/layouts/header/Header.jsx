import React  from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css'

export const Header = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header>
      <div className="menu">
        <a href="#home"><img className="logo" src="./public/logo.png" alt="" /></a>
        <h1>
          <span>Fresh</span>Smile<span>Cmills</span>
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
        <div onClick={() => loginWithRedirect()}>
          <img className="icono-inicio" src="/icono_inicio.png" alt="" />
        </div>
        <Link to="/Clinica">
          <a href="#clinica">
            <img className="icono-mapa" src="/icono_map.png" alt="" />
          </a>
        </Link>

      </div>

      {/* <div id="icon-menu">
      <img src="./public/menu2.png" alt="" />
      </div> */}
    </header>
  );
};
