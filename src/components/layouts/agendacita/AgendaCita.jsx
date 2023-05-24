import React, { useState } from "react";
import "./agendacita.css";

export const AgendaCita = () => {
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [nombresPaciente, setNombresPaciente] = useState('');
  const [telefonoPaciente, setTelefonoPaciente] = useState('');
  const [correoPaciente, setCorreoPaciente] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [tipoCita, setTipoCita] = useState('');
  const [sede, setSede] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor

    // Reiniciar los campos del formulario
    setTipoDocumento('');
    setNumeroDocumento('');
    setNombresPaciente('');
    setTelefonoPaciente('');
    setCorreoPaciente('');
    setFechaNacimiento('');
    setDisponibilidad('');
    setTipoCita('');
    setSede('');
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
                <div className="input-container">
                  <input
                    type="text"
                    value={tipoDocumento}
                    onChange={(e) => setTipoDocumento(e.target.value)}
                    required
                  />
                  <span onClick={() => document.getElementById("tipoDocumento").focus()}>
                    Tipo de documento:
                  </span>
                </div>
              </div>
              <div className="schedule-input">
                <input
                  type="number"
                  value={numeroDocumento}
                  onChange={(e) => setNumeroDocumento(e.target.value)}
                  required
                />
                <span onClick={() => document.getElementById("numeroDocumento").focus()}>
                  Numero de documento:
                </span>
              </div>
              <div className="schedule-input">
                <div className="input-container">
                  <input
                    type="text"
                    value={nombresPaciente}
                    onChange={(e) => setNombresPaciente(e.target.value)}
                    required
                  />
                  <span onClick={() => document.getElementById("nombresPaciente").focus()}>
                    Nombres Completos:
                  </span>
                </div>
              </div>
              <div className="schedule-input">
                <div className="input-container">
                  <input
                    type="number"
                    value={telefonoPaciente}
                    onChange={(e) => setTelefonoPaciente(e.target.value)}
                    required
                  />
                  <span onClick={() => document.getElementById("telefonoPaciente").focus()}>
                    Telefono:
                  </span>
                </div>
              </div>
              <div className="schedule-input">
                <div className="input-container">
                  <input
                    type="text"
                    value={correoPaciente}
                    onChange={(e) => setCorreoPaciente(e.target.value)}
                    required
                  />
                  <span onClick={() => document.getElementById("correoPaciente").focus()}>
                    Correo electronico:
                  </span>
                </div>
                <div className="schedule-input">
                <label htmlFor="history">Fecha de nacimiento:</label>
                  <div className="input-container">
                  <input 
                  type="date" 
                  value={fechaNacimiento} 
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                  />
                  </div>
                </div>
                <div className="schedule-input">
                <label htmlFor="history">Disponibilidad:</label>
                <div className="input-container">
                <input
            type="datetime-local"
            id="date"
            value={disponibilidad}
            onChange={(e) => setDate(e.target.value)}
            required
          />
                </div>
                </div>
              <div className="schedule-input">
                <div className="input-container">
                  <input
                    type="text"
                    value={tipoCita}
                    onChange={(e) => setTipoCita(e.target.value)}
                    required
                  />
                  <span onClick={() => document.getElementById("tipoCita").focus()}>
                    Tipo de cita:
                  </span>
                </div>
              </div>
              </div>
              <div className="schedule-option">
                <div className="input-container">
                  <select value={sede} onChange={(e) => setSede(e.target.value)}>
                    <option value="">Seleccione una sede</option>
                    <option value="Sede Principal">Sede Armenia</option>
                    <option value="Sede Secundaria">Sede Tebaida</option>
                    <option value="Sede Terciaria">Sede Circasia</option>
                  </select>
                </div>
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

export default AgendaCita;
