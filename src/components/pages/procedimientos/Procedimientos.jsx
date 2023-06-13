import React, { useState, useEffect } from "react";
import "./procedimientos.css";
import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";

export const Procedimientos = () => {
  const [procedimientos, setProcedimientos] = useState([]);

  useEffect(() => {
    const fetchProcedimientos = async () => {
      try {
        const response = await fetch(
          "https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos"
        );
        const data = await response.json();
        setProcedimientos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProcedimientos();
  }, []);

  return (
    <>
      <div className="container_proce">
        <div className="container_home1A">
          <h1>CONOCE UN POCO SOBRE NUESTROS PROCEDIMIENTOS</h1>
        </div>
      </div>
      <div className="barra-procedimientos">
        <h2>Te brindaremos lo mejor para tu salud</h2>
      </div>
      <div className="container-procedimientos">
        {/* Chat WhatsApp */}
        <div className="space-wpp">
          <a
            href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber más información."
            className="float"
            target="_blank"
          >
            <i className="fa fa-whatsapp my-float"></i>
          </a>
        </div>

        <div className="container-wrapper">
          {procedimientos.map((procedimiento) => (
            <div className="container-blog" key={procedimiento.id}>
              <img src={procedimiento.imagen} alt={procedimiento.nombre} />
              <div className="content">
                <h2>{procedimiento.nombre}</h2>
                <p className="p-blog">{procedimiento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
