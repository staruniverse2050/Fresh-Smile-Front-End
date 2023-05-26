import React, { useState } from 'react';
import './DoctorCard.css';

const defaultPhoto =
  'https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/cards4_r5phfs.jpg';

export const DoctorCard = ({ name, specialty, photo }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHoverRating(value);
  };

  const handleRatingLeave = () => {
    setHoverRating(0);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar la valoración y el comentario al servidor
    // y realizar cualquier lógica adicional
    console.log('Valoración:', rating);
    console.log('Comentario:', comment);
    setRating(0);
    setComment('');
  };

  return (
    <div className='doctor-card-container'>
    <div className="doctor-card">
      <img src={photo || defaultPhoto} alt={name} />
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
              className={`star ${value <= (hoverRating || rating) ? 'selected' : ''}`}
              onClick={() => handleRatingClick(value)}
              onMouseEnter={() => handleRatingHover(value)}
              onMouseLeave={handleRatingLeave}
            >
              {value % 1 === 0.5 ? '★½' : '★'}
            </span>
          ))}
        </div>
      </div>
      <div className="doctor-comments">
        <h3>Comentario:</h3>
        <textarea value={comment} onChange={handleCommentChange}></textarea>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
    <div className="doctor-card">
      <img src={photo || defaultPhoto} alt={name} />
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
              className={`star ${value <= (hoverRating || rating) ? 'selected' : ''}`}
              onClick={() => handleRatingClick(value)}
              onMouseEnter={() => handleRatingHover(value)}
              onMouseLeave={handleRatingLeave}
            >
              {value % 1 === 0.5 ? '★½' : '★'}
            </span>
          ))}
        </div>
      </div>
      <div className="doctor-comments">
        <h3>Comentario:</h3>
        <textarea value={comment} onChange={handleCommentChange}></textarea>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
    <div className="doctor-card">
      <img src={photo || defaultPhoto} alt={name} />
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
              className={`star ${value <= (hoverRating || rating) ? 'selected' : ''}`}
              onClick={() => handleRatingClick(value)}
              onMouseEnter={() => handleRatingHover(value)}
              onMouseLeave={handleRatingLeave}
            >
              {value % 1 === 0.5 ? '★½' : '★'}
            </span>
          ))}
        </div>
      </div>
      <div className="doctor-comments">
        <h3>Comentario:</h3>
        <textarea value={comment} onChange={handleCommentChange}></textarea>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
    <div className="doctor-card">
      <img src={photo || defaultPhoto} alt={name} />
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
              className={`star ${value <= (hoverRating || rating) ? 'selected' : ''}`}
              onClick={() => handleRatingClick(value)}
              onMouseEnter={() => handleRatingHover(value)}
              onMouseLeave={handleRatingLeave}
            >
              {value % 1 === 0.5 ? '★½' : '★'}
            </span>
          ))}
        </div>
      </div>
      <div className="doctor-comments">
        <h3>Comentario:</h3>
        <textarea value={comment} onChange={handleCommentChange}></textarea>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
    <div className="doctor-card">
      <img src={photo || defaultPhoto} alt={name} />
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
              className={`star ${value <= (hoverRating || rating) ? 'selected' : ''}`}
              onClick={() => handleRatingClick(value)}
              onMouseEnter={() => handleRatingHover(value)}
              onMouseLeave={handleRatingLeave}
            >
              {value % 1 === 0.5 ? '★½' : '★'}
            </span>
          ))}
        </div>
      </div>
      <div className="doctor-comments">
        <h3>Comentario:</h3>
        <textarea value={comment} onChange={handleCommentChange}></textarea>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  </div>
  
    
  );
};
