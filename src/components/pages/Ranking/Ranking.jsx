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
      setEspecialistasVC(response.data.sort((a, b) => b.valoracion - a.valoracion).slice(0, 7));
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

  const getCrownIcon = (index) => {
    if (index === 0) {
      return "https://png.pngtree.com/png-clipart/20220206/original/pngtree-crown-vector-png-image_7263860.png";
    } else if (index === 1) {
      return "https://png.pngtree.com/png-clipart/20220206/original/pngtree-crown-vector-png-image_7263860.png"; // Reemplaza "bronze-crown-icon.png" con la ruta de tu ícono de bronce
    } else if (index === 2) {
      return "https://png.pngtree.com/png-clipart/20220206/original/pngtree-crown-vector-png-image_7263860.png"; // Reemplaza "silver-crown-icon.png" con la ruta de tu ícono de plata
    } else {
      return ""; // Si no es el primer, segundo o tercer lugar, no mostrar ningún ícono
    }
  };

  return (
    <div className="ranking-container">
      <h2 className="title-rang">Ranking</h2>
      <table className="ranking-table">
        <thead>
          <tr>
            <th className="table-heading">Puesto</th>
            <th className="table-heading">Nombre</th>
            <th className="table-heading">Valoración</th>
          </tr>
        </thead>
        <tbody>
          {especialistasData.length > 0 &&
            especialistasVC.length > 0 &&
            especialistasVC.map((item, index) => (
              <tr key={item.id} className={index === 0 ? "first-place" : ""}>
                <td className="position">
                  <span>{index + 1}</span>
                  <div className="profile-pic-container">
                    <img src={item.foto || userDefault} alt="Foto de perfil" className="profile-pic" />
                    {index < 3 && (
                      <img
                        src={getCrownIcon(index)}
                        alt="Corona"
                        className={`crown-icon crown-icon-${index + 1}`}
                      />
                    )}
                  </div>
                </td>
                <td className="name">{especialistasData.find((elem) => elem.identificacion_especialista === item.identificacion_especialista).nombre_completo}</td>
                <td className="stars">{calculateStars(item.valoracion)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
