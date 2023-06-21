import React, { useEffect, useRef, useState } from 'react';
import './DoctorCard.css';
import userDefault from "../../../../public/user.webp";
import { ComentarioComponent } from "./ComentarioComponent";
import axios from 'axios';
import Swal from 'sweetalert2';

export const DoctorCard = ({ valoracion, votos, comentarios, data, ratingId }) => {
  const [userId, setUserId] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentsCant, setCantComments] = useState(1);
  const [actualComments, setActualComments] = useState(comentarios);
  const [actualVotos, setActualVotos] = useState(votos);
  const [actualValoration, setActualValoration] = useState(valoracion);
  const commentInput = useRef(null);
  const commentButton = useRef(null);

  const handleVote = (e) => {
    if(actualVotos.map(elem => elem.userId).includes(userId)){
      Swal.fire({
        title : 'Usted ya votó en este especialista',
        icon : 'error',
        showCloseButton : true
      });
      return;
    }
    Swal.fire({
      title: 'Quiere votar por este especialista?',
      text : `Su voto: ${e.target.value}`,
      showDenyButton: true,
      confirmButtonText: 'Votar',
      denyButtonText: `No votar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const headers = {
          Authorization : `Bearer ${localStorage.getItem('accessToken')}`
        };
        console.log(headers);
        axios.patch(`https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/añadirVoto/${ratingId}?vote=${e.target.value}`,null,{
          headers : headers
        }).then(res => {
          Swal.fire({
            icon : 'success',
            title : 'Su voto fue registrado correctamente',
            showCloseButton : true
          });
          setActualVotos(res.data.votos);
          setActualValoration(res.data.valoracion);
        })
        .catch(err => {
          Swal.fire({
            icon : 'error',
            title : 'Hubo un error, intentelo más tarde',
            showCloseButton : true
          });
        })
      }
    })
  }

  const handleComment = (e) => {
    e.preventDefault();
     const data = {
      Comentario : commentInput.current.value
     };
     commentInput.current.disabled = true;
     commentButton.current.disabled = true;
    const headers = {
      Authorization : `Bearer ${localStorage.getItem('accessToken')}`
    };
    axios.patch(`https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/comentar/${ratingId}`,data,{
      headers : headers
    }).then(res => {
      setActualComments(res.data.comentarios);
      Swal.fire({
        title : "Especialista comentado correctamente",
        icon : 'success'
      })
      setIsCommenting(false);
    }).catch(err => { 
      console.log(err);
    })
  }

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
  },[])

  return (
    <div className="doctor-card">
      <section className='doctor-section1'>
        <div className='div-picture-rating'>
          <img src={data.foto_perfil || userDefault} onError={(e) => e.target.src = userDefault} alt={name} />
          <div className="doctor-rating">
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  value={value}
                  onClick={handleVote}
                  className={`star ${value <= (actualValoration) ? 'selected' : ''}`}
                >
                  {value % 1 === 0.5 ? '★½' : '★'}
                </button>
              ))}
            </div>
            <div>
              <p>{actualVotos.length} votos</p>
              {
                actualVotos.map(elem => elem.userId).includes(userId) &&
                <p className='vote-advise'>Usted ya votó en este especialista</p>
              }
            </div>
          </div>
        </div>
        <div className='div2-details'>
          <div className="doctor-details">
            <h2>{data.nombre_completo}</h2>
            <p>Especialidad: <span>{data.especialidad}</span></p>
            <p>Correo electronico: <a href={`mailto:${data.correo}`} className='span-email'>{data.correo}</a></p>
            <p>Descripcion: <span >{data.descripcion || 'El especialista no tiene una descripción registrada'}</span></p>
          </div>
        </div>
      </section>
      <section className='doctor-section2'>
        <div className='div1-coment'>
          <h3>Comentarios: </h3>
          { !actualComments.map(elem => elem.userId).includes(userId) ?
            <button onClick={(e) => setIsCommenting(!isCommenting)}>Comentar</button>
            :
            <span>Usted ya comentó acá</span>
           }
        </div>
        {isCommenting && 
          <form className='comment-form' onSubmit={handleComment}>
            <label>Ingresa tu comentario</label>
            <textarea ref={commentInput} name='Comentario' type='text' />
            <button type='submit'>Comentar</button>
          </form>}
        {
          actualComments.length > 0 ?
          actualComments.map((coment,i) => 
          i < commentsCant && <ComentarioComponent key={i} comentario={coment.comentario} />)
          :
          <p>El especialista no tiene comentarios aún</p>
        }
        <div className='comments-buttons'>
          { commentsCant > 1 && <button className='btn-comm' onClick={(e) => setCantComments(commentsCant - 2)}>Ver menos</button> }
          { actualComments.length >= commentsCant && <button className='btn-comm alwaysend' onClick={(e) => setCantComments(commentsCant + 2)}>Ver mas</button> }
        </div>
      </section>
    </div>
  );
};
