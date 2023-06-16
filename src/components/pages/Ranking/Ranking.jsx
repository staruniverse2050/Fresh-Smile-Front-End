import React, { useEffect, useState } from "react";
import "./Ranking.css";

const Ranking = () => {
  const data = [
    {
      id: 1,
      nombre: "Juan David Lopez Montoya",
      valoracion: 4.7,
      foto: "../src/img/descarga - copia.jpg",
    },
    { id: 2, nombre: "María", valoracion: 3.8, foto: "ruta_de_la_foto" },
    { id: 3, nombre: "Pedro", valoracion: 4.2, foto: "ruta_de_la_foto" },
    { id: 4, nombre: "Laura", valoracion: 4.5, foto: "ruta_de_la_foto" },
    { id: 5, nombre: "Carlos", valoracion: 3.9, foto: "ruta_de_la_foto" },
  ];

  const calculateStars = (valoracion) => {
    const roundedValoracion = Math.round(valoracion);
    return "⭐".repeat(roundedValoracion);
  };

  const sortedData = data
    .sort((a, b) => b.valoracion - a.valoracion)
    .slice(0, 5);

  return (
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
  );
};

export default Ranking;