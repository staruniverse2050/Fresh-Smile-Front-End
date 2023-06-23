import React, { useEffect, useState } from "react";
import axios from "axios";
import './procedimientos.css';
import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";
import Chatbot from "../../layouts/chatbot/Chatbot";

const Procedimientos = () => {
  const [procedimientos, setProcedimientos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos");
        setProcedimientos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
      {/* Chat WhatsAPP */}
      <div className="space-wpp">
        <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber más información." className="float" target="_blank">
          <i className="fa fa-whatsapp my-float"></i>
        </a>
      </div>
      <div className="contenedor-procedimientos">
        {procedimientos.map((procedimiento) => (
          <div className="card-procedimientos" key={procedimiento.nombre}>
            <img src={procedimiento.foto} alt="Imagen de la tarjeta" />
            <div className="contenido-procedimientos">
              <h2>{procedimiento.nombre}</h2>
              <p className="p-contenido-procedimientos">{procedimiento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <Chatbot />
      <Footer />
    </>
  );
};

export default Procedimientos;
