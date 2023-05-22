import React, { useState } from 'react';
import "./historiaclinica.css";

const HistoriaClinica = () => {
  const [fechaVisita, setFechaVisita] = useState('');
  const [problema, setProblema] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [proximaCita, setProximaCita] = useState('');
  const [notas, setNotas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para guardar el historial de citas, por ejemplo, enviar los datos al servidor o guardarlos en una base de datos

    // Reiniciar los campos del formulario
    setFechaVisita('');
    setProblema('');
    setTratamiento('');
    setMedicamentos('');
    setProximaCita('');
    setNotas('');
  };

  return (
    <>
    <div className="history-banner">
        <div className="history-box">
          <div className="history-title">
            <h2>Historial Clinica</h2>
            <p>Llena este formulario para brindarte una mayor
               seguridad y una salud oral impecable.
            </p>
          </div>
          <div className="history-box1">
            <form onSubmit={handleSubmit}>
              <div className="history-input">
              <label htmlFor="history">Fecha de la visita</label>
                <div className="history-container">
                <input type="date" value={fechaVisita} onChange={(e) => setFechaVisita(e.target.value)} required
                />
                </div>
              <div className="history-input">
                <div className="history-container">
                <textarea value={problema} onChange={(e) => setProblema(e.target.value)} required 
                />
                 <span
                    onClick={() => document.getElementById("problema").focus()}
                  >
                  Problema
                  </span>
                </div>
              <div className="history-input">
                <div className="history-container">
                <textarea value={tratamiento} onChange={(e) => setTratamiento(e.target.value)} required 
                />
                  <span
                    onClick={() => document.getElementById("tratamiento").focus()}
                  >
                  Tratamiento
                  </span>
                </div>
              <div className="history-input">
              <textarea value={medicamentos} onChange={(e) => setMedicamentos(e.target.value)} required
                />
                <span
                onClick={() => document.getElementById("medicamentos").focus()}
                >
                  Medicamentos:
                </span>
              </div>
              <div className="history-input">
              <label htmlFor="history">Proxima cita</label>
                <div className="history-container">
                <input type="date" value={proximaCita} onChange={(e) => setProximaCita(e.target.value)} required
                />
                </div>
                <div className="history-input">
                <textarea value={notas} onChange={(e) => setNotas(e.target.value)} required
                />
                <span
                onClick={() => document.getElementById("notas").focus()}
                >
                  Notas:
                </span>
              </div>
</div>
</div>
      <button type="submit">Guardar historial</button>
      </div>
      </div>
      </form>
      </div>
        </div>
      </div>
      </>
  );
};

export default HistoriaClinica;

