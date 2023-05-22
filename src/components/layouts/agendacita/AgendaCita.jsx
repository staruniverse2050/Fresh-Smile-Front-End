// import React from "react";
import React, { useState } from "react";
import "./agendacita.css";

export const AgendaCita = () => {
  const [disease1, setDisease1] = useState("");
  const [disease2, setDisease2] = useState("");
  const [allergy1, setAllergy1] = useState("");
  const [allergy2, setAllergy2] = useState("");
  const [medicine1, setMedicine1] = useState("");
  const [medicine2, setMedicine2] = useState("");
  const [total, setTotal] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor

    // Reiniciar los campos del formulario
    setDisease1("");
    setDisease2("");
    setAllergy1("");
    setAllergy2("");
    setMedicine1("");
    setMedicine2("");
    setTotal("");
    setDate("");
  };

  return (
    <>
      <div className="schedule-banner">
        <div className="contenedor1-box">
          <div className="schedule-title">
            <h2>Agenda aquí tu cita</h2>
            <p>Llena este formulario para agendar tu cita</p>
          </div>
          <div className="schedule-box1">
            <form onSubmit={handleSubmit}>
              <div className="schedule-input">
                <label htmlFor="disease">Enfermedades Previas:</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="disease1"
                    value={disease1}
                    onChange={(e) => setDisease1(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => document.getElementById("disease1").focus()}
                  >
                    Enfermedad A
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    id="disease2"
                    value={disease2}
                    onChange={(e) => setDisease2(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => document.getElementById("disease2").focus()}
                  >
                    Enfermedad B
                  </span>
                </div>
              </div>
              <div className="schedule-input">
                <label htmlFor="allergy">Alergias:</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="allergy1"
                    value={allergy1}
                    onChange={(e) => setAllergy1(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => document.getElementById("allergy1").focus()}
                  >
                    Alergia A
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    id="allergy2"
                    value={allergy2}
                    onChange={(e) => setAllergy2(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => document.getElementById("allergy2").focus()}
                  >
                    Alergia B
                  </span>
                </div>
              </div>
              <div className="schedule-input">
                <label htmlFor="medicine">Medicamentos:</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="medicine1"
                    value={medicine1}
                    onChange={(e) => setMedicine1(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => document.getElementById("medicine1").focus()}
                  >
                    Medicina A
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    id="medicine2"
                    value={medicine2}
                    onChange={(e) => setMedicine2(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => document.getElementById("medicine2").focus()}
                  >
                    Medicina B
                  </span>
                </div>
              </div>
              {/* <div className='schedule-input'>
              <label htmlFor="email">Total valor:</label>
              <input type="number" id="total" value={total} onChange={(e) => setTotal(e.target.value)} required/>
              <span>Valor</span>
            </div> */}
              <div className="schedule-input">
                <label htmlFor="date">Fecha y Hora:</label>
                <input
                  type="datetime-local"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="schedule-input">
                <button type="submit">Agendar Cita</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
