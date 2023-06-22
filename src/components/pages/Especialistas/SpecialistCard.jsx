import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './SpecialistCard.css';

const SpecialistCards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(
          'https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarRating',
          { headers }
        );
        setData(response.data);
      } catch (error) {
        console.log('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const fetchAllPatientData = async () => {
    if (data) {
      try {
        const token = localStorage.getItem('accessToken');
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const updatedData = await Promise.all(
          data.map(async (especialista) => {
            const response = await axios.get(
              `https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/BuscarEspecialista/${especialista.identificacion_especialista}`,
              { headers }
            );
            const patientData = response.data;

            return {
              ...especialista,
              patientData,
            };
          })
        );

        setData(updatedData);
      } catch (error) {
        console.log('Error al obtener los datos del paciente:', error);
      }
    }
  };

  useEffect(() => {
    fetchAllPatientData();
  }, [data]);

  // Filtrar los especialistas por identificación para eliminar duplicados
  const filteredData = data ? data.filter((especialista, index, self) =>
    index === self.findIndex((e) => (
      e.identificacion_especialista === especialista.identificacion_especialista
    ))
  ) : null;

  // Función para renderizar las estrellas de valoración
  const renderRatingStars = (valoracion) => {
    const roundedValoracion = Math.round(valoracion); // Redondear la valoración al número entero más cercano
    const stars = [];

    for (let i = 0; i < roundedValoracion; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
    }

    return stars;
  };

  return (
    <div className="card-container">
      {filteredData ? (
        filteredData.map((especialista) => (
          <div key={especialista.id} className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faUser} className="icon-large" />
            </div>
            <p>Identificación del especialista: {especialista.identificacion_especialista}</p>
            {especialista.patientData && (
              <div>
                <p>Nombre del paciente: {especialista.patientData.nombre_completo}</p>
                <p>Correo del paciente: {especialista.patientData.correo}</p>
                <p>Especialidad: {especialista.patientData.especialidad}</p>
              </div>
            )}
            <p>Valoración: {renderRatingStars(especialista.valoracion)}</p>
            <p>Votos: {especialista.votos ? especialista.votos.length : 0}</p>
            <div className="comentarios">
              <p>Comentarios:</p>
              {especialista.comentarios && especialista.comentarios.length > 0 ? (
                especialista.comentarios.map((comentario, index) => (
                  <div key={index}>
                    <p>{comentario.userId}: {comentario.comentario}</p>
                  </div>
                ))
              ) : (
                <p>No hay comentarios.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SpecialistCards;
