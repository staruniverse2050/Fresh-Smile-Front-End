import React, { useState } from "react";
import "./agendacita.css";

export const AgendaCita = () => {
  const [fechaCita, setFechaCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  const [tipoCita, setTipoCita] = useState('');
  const [estado, setEstado] = useState('');
  const [sede, setSede] = useState('');
  const [costo, setCosto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor

    // Reiniciar los campos del formulario
    setFechaCita('');
    setHoraCita('');
    setTipoCita('');
    setEstado('');
    setSede('');
    setCosto('');
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
                <label htmlFor="disease">Fecha de la cita</label>
                <div className="input-container">
                  <input type="date" value={fechaCita} onChange={(e) => setFechaCita(e.target.value)} required
                  />
                </div>
                <div className="schedule-input">
                  <label htmlFor="disease">Hora de la cita</label>
                  <div className="input-container">
                    <input type="time" value={horaCita} onChange={(e) => setHoraCita(e.target.value)} required
                    />
                  </div>
                  <div className="schedule-input">
                    <div className="input-container">
                      <input type="text" value={tipoCita} onChange={(e) => setTipoCita(e.target.value)} required
                      />
                      <span
                        onClick={() => document.getElementById("tipoCita").focus()}
                      >
                        Tipo de cita
                      </span>
                    </div>
                    <div className="schedule-input">
                      <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required
                      />
                      <span
                        onClick={() => document.getElementById("estadoCita").focus()}
                      >
                        Estado
                      </span>
                    </div>
                    <div className="schedule-option">
                      <div className="input-container">
                        <select value={sede} onChange={(e) => setSede(e.target.value)}>
                          <option value="">Seleccione una sede</option>
                          <option value="Sede Principal">Sede Principal</option>
                          <option value="Sede Secundaria">Sede Secundaria</option>
                          <option value="Sede Terciaria">Sede Terciaria</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-input">
                    <input type="number" step="0.001" value={costo} onChange={(e) => setCosto(e.target.value)} required
                    />
                    <span
                      onClick={() => document.getElementById("costoCita").focus()}
                    >
                      Costo
                    </span>
                  </div>
                </div>
                <div className="schedule-input">
                  <button type="submit">Agendar Cita</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};
export default AgendaCita;
