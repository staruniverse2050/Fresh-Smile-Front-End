import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ranking.css";
import userDefault from "../../../../public/user.webp";

const Ranking = () => {
  const [especialistasData, setEspecialistasData] = useState([]);
  const [especialistasVC, setEspecialistasVC] = useState([]);

  const fetchEspecialistasData = async () => {
      try {
        const response = await axios.get("https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarEspecialista");
        setEspecialistasData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos desde la API:", error);
      }
    };

    const fetchEspecialistasVC = async () => {
      try {
        const response = await axios.get("https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarRating");
        setEspecialistasVC(response.data.sort((a, b) => b.valoracion - a.valoracion)
        .slice(0, 5));
      } catch (error) {
        console.error("Error al obtener los datos desde la API:", error);
      }
    };

  useEffect(() => {
    fetchEspecialistasVC();
    fetchEspecialistasData();
  }, []);

  const calculateStars = (valoracion) => {
    const roundedValoracion = Math.round(valoracion);
    return "⭐".repeat(roundedValoracion);
  };

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
          {especialistasData.length > 0 && especialistasVC.length > 0 && especialistasVC.map((item, index) => (
            <tr key={item.id} className={index === 0 ? "first-place" : ""}>
              <td className="position">
                <span>{index + 1}</span>
                <div className="profile-pic-container">
                  <img
                    src={item.foto || userDefault}
                    alt="Foto de perfil"
                    className="profile-pic"
                  />
                  {index === 0 && (
                    <img
                      src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-crown-vector-png-image_7263860.png"
                      alt="Corona"
                      className="crown-icon"
                    />
                  )}
                </div>
              </td>
              <td className="name">{especialistasData.find(elem => elem.identificacion_especialista == item.identificacion_especialista).nombre_completo}</td>
              <td className="stars">{calculateStars(item.valoracion)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
