import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ranking.css";

const Ranking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("URL_DE_LA_API");
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos desde la API:", error);
      }
    };

    fetchData();
  }, []);

  const calculateStars = (valoracion) => {
    const roundedValoracion = Math.round(valoracion);
    return "⭐".repeat(roundedValoracion);
  };

  const sortedData = data
    .sort((a, b) => b.valoracion - a.valoracion)
    .slice(0, 5);

  return (
    <div className="ranking-container">
      <h2 className="title-rang">Ranking</h2>
      <hr></hr>
      <table className="ranking-table">
        <thead>
          <tr>
            <th className="table-heading">Puesto</th>
            <th className="table-heading">Nombre</th>
            <th className="table-heading">Valoración</th>
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
                      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685893707/corona_ysuxhw.png"
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
