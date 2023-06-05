

import React, { useEffect, useState } from "react";
import "./Ranking.css";
import { Footer } from "../../layouts/footer/Footer";

export const Ranking = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Realiza la llamada a tu API y obtén los datos en formato JSON
      const response = await fetch("/FreshSmile/Especialistas/"); // Reemplaza "URL_DE_LA_API" por la URL de tu API que devuelve los datos del ranking
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateStars = (valoracion) => {
    const roundedValoracion = Math.round(valoracion);
    return "⭐".repeat(roundedValoracion);
  };

  const sortedData = data
    .sort((a, b) => b.valoracion - a.valoracion)
    .slice(0, 5);

  return (
    <>
    <div className="ranking-container">
      <h2>Ranking</h2>
      <h1>Fresh Smile Cmills</h1>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Nombre</th>
            <th>Valoración</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={item.id} className={index === 0 ? "first-place" : ""}>
              <td className="position">
                <span>{index + 1}</span>
                <div className="profile-pic-container">
                  <img
                    src={item.foto}
                    alt="Foto de perfil"
                    className="profile-pic"
                  />
                  {index === 0 && (
                    <img
                      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685893707/corona_ysuxhw.png" // Reemplaza "ruta_de_la_corona" por la ruta de tu imagen de corona
                      alt="Corona"
                      className="crown-icon"
                    />
                  )}
                </div>
              </td>
              <td className="name">{item.nombre}</td>
              <td className="stars">{calculateStars(item.valoracion)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <Footer />
    </>
  );
};


export default Ranking;