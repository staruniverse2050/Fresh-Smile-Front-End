import React, { useState } from 'react';
import './DoctorCard.css';

const defaultPhoto =
  'https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/cards4_r5phfs.jpg';

export const DoctorCard = ({ name, specialty, photo, valoracion, votos, comentarios }) => {


  return (
    <div className="doctor-card">
      <img src={photo} alt={name} />
      <div className="doctor-details">
        <h2>{name}</h2>
        <p>Especialidad: {specialty}</p>
      </div>
      <div className="doctor-rating">
        <h3>Valoración:</h3>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${value <= (valoracion) ? 'selected' : ''}`}
            >
              {value % 1 === 0.5 ? '★½' : '★'}
            </span>
          ))}
        </div>
        <p>{votos} votos</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};
