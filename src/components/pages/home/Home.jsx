import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="container_banner">
        {/* <img className="" src="./public/banner.jpg" alt="" /> */}
        <div className="container_home">
          <h1>¡Bienvenido a la clinica Fresh Smile Cmills!</h1>
          <div className="container-btn">
            <button className="boton">Agendar Cita</button>
            <button className="boton">Buscar Clinica</button>
          </div>
        </div>
      </div>

      <div className="container-procedimientos">
        <div className="procedimientos">
          <img src="./public/diseñosonrisa.jpg" alt="sede 1" />
          <button>Diseño de sonrisa</button>
        </div>

        <div className="procedimientos">
          <img src="./public/blanqueamiento.jpg" alt="sede 2" />
          <button>Blanqueamiento</button>
        </div>

        <div className="procedimientos">
          <img src="./public/implantes.jpg" alt="sede 3" />
          <button>Implantes</button>
        </div>
      </div>
      <div class="container-wrapper">
        <div className="container-blog">
          <img src="./public/implantes.jpg" alt="" />
          <div className="content">
            <h2>Título</h2>
            <p className="p-blog">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              laborum dignissimos voluptate laboriosam voluptatum a, ipsum
              alias. Dolor mollitia placeat et tenetur beatae repudiandae iusto
              ipsam ullam, dolorum suscipit autem?
            </p>
            <button className="btn-blog">Leer más</button>
          </div>
        </div>
        <hr></hr>
        <div className="container-blog">
          <img src="./public/implantes.jpg" alt="" />
          <div className="content">
            <h2>Título</h2>
            <p className="p-blog">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae dolores beatae harum, cumque doloremque vel incidunt,
              quod earum quia odio, voluptate consequatur placeat magni sunt
              officia! Dignissimos dolorum accusamus molestias!
            </p>
            <button className="btn-blog">Leer más</button>
          </div>
        </div>
        <div className="container-blog">
          <img src="./public/implantes.jpg" alt="" />
          <div className="content">
            <h2>Título</h2>
            <p className="p-blog">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae dolores beatae harum, cumque doloremque vel incidunt,
              quod earum quia odio, voluptate consequatur placeat magni sunt
              officia! Dignissimos dolorum accusamus molestias!
            </p>
            <button className="btn-blog">Leer más</button>
          </div>
        </div>
        <hr></hr>
        <div className="container-blog">
          <img src="./public/implantes.jpg" alt="" />
          <div className="content">
            <h2>Título</h2>
            <p className="p-blog">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae dolores beatae harum, cumque doloremque vel incidunt,
              quod earum quia odio, voluptate consequatur placeat magni sunt
              officia! Dignissimos dolorum accusamus molestias!
            </p>
            <button className="btn-blog">Leer más</button>
          </div>
        </div>
      </div>
      <div className="barra">
        <h2>Procedimientos</h2>
        {/* <p>Contenido del contenedor...</p> */}
      </div>

      <div className="container-sedes">
        <div className="sedes">
          <img src="./public/sede1.png" alt="sede 1" />
          <h1>Sede Armenia</h1>
          <button>Ingresar</button>
        </div>

        <div className="sedes">
          <img src="./public/sede2.png" alt="sede 2" />
          <h1>Sede Tebaida</h1>
          <button>Ingresar</button>
        </div>

        <div className="sedes">
          <img src="./public/sede3.png" alt="sede 3" />
          <h1>Sede Circasia</h1>
          <button>Ingresar</button>
        </div>
      </div>
    </>
  );
};
