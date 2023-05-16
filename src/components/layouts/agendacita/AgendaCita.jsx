// import React from "react";
import React, { useState } from 'react';
import "./agendacita.css";

export const AgendaCita = () => {

  const [disease, setDisease] = useState('');
  const [allergy, setAllergy] = useState('');
  const [medicine, setMedicine] = useState('');
  const [total, setTotal] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor

    // Reiniciar los campos del formulario
    setDisease('');
    setAllergy('');
    setMedicine('');
    setTotal('');
    setDate('');
  };

  return(
    <>
    <div className="schedule-banner">
<div className="schedule-title">
  <h2>Agenda aqui tu cita</h2>
  </div>
<div className='schedule-box1'>
      <form onSubmit={handleSubmit}>
        <div className='schedule-input'>
          <label htmlFor="disease">Enfermedades Previas:</label>
          <input type="text" id="disease" value={disease} onChange={(e) => setDisease(e.target.value)} required/>
          <span>Enfermedad A</span>
          <input type="text" id="disease" value={disease} onChange={(e) => setDisease(e.target.value)} required/>
          <span>Enfermedad B</span>
        </div>
        <div className='schedule-input'>
          <label htmlFor="allergy">Alergias:</label>
          <input type="text" id="allergy" value={allergy} onChange={(e) => setAllergy(e.target.value)} required/>
          <span>Alergia A</span>
          <input type="text" id="allergy" value={allergy} onChange={(e) => setAllergy(e.target.value)} required/>
          <span>Alergia B</span>
        </div>
        <div className='schedule-input'>
          <label htmlFor="medicine">Medicamentos:</label>
          <input type="text" id="medicine" value={medicine} onChange={(e) => setMedicine(e.target.value)} required/>
          <span>Medicina A</span>
          <input type="text" id="medicine" value={medicine} onChange={(e) => setMedicine(e.target.value)} required/>
          <span>Medicina B</span>
        </div>
        <div className='schedule-input'>
          <label htmlFor="email">Total valor:</label>
          <input type="number" id="total" value={total} onChange={(e) => setTotal(e.target.value)} required/>
          <span>Valor</span>
        </div>
        <div className='schedule-input'>
          <label htmlFor="date">Fecha y Hora:</label>
          <input type="datetime-local" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className='schedule-input'>
        <button type="submit">Agendar Cita</button>
        </div>
      </form>
    </div>
    </div>





{/* <div className="schedule-form">
  <form>
    <div className="schedule-input">
    <h4>Enfermedades Previas:</h4>
    <input type="text" required />
    <span>Enfermedad A</span>
    <input type="text" required />
    <span>Enfermedad B</span>


    </div>
  </form>

</div> */}
    </>
  )
} 