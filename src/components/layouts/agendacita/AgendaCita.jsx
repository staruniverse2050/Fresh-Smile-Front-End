import React, { useState } from "react";
import "./agendacita.css";
import axios from "axios";


const AgendaCita = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [tipoCita, setTipoCita] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Crear el objeto de datos a enviar al backend
    const data = {
      tipoDocumento,
      numeroDocumento,
      nombre,
      telefono,
      email,
      tipoCita,
      selectedHour
    };
  
    // Realizar la solicitud POST al backend
    axios.post("URL_DE_TU_API", data)
      .then((response) => {
        // Manejar la respuesta del backend si es necesario
        console.log(response.data);
        // Restablecer los campos del formulario después de enviar los datos
        setTipoDocumento("");
        setNumeroDocumento("");
        setNombre("");
        setTelefono("");
        setEmail("");
        setTipoCita("");
        setSelectedHour("");
      })
      .catch((error) => {
        // Manejar el error si la solicitud no se completa correctamente
        console.error(error);
      });
  };
  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  return (
    <div className="man-container">
      <img src="https://cdn-icons-png.flaticon.com/512/5498/5498914.png" alt="Hombre" className="man-image" />
      <div className="agenda-form-container">
        <h2>Agenda tu cita</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento:</label>
            <input
              type="text"
              id="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de documento:</label>
            <input
              type="text"
              id="numeroDocumento"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoCita">Tipo de cita:</label>
            <select
              id="tipoCita"
              value={tipoCita}
              onChange={(e) => setTipoCita(e.target.value)}
              required
            >
              <option value="">Seleccione un tipo de cita</option>
              <option value="Consulta">Consulta</option>
              <option value="Control">Control</option>
              <option value="Emergencia">Emergencia</option>
            </select>
          </div>
          <div className="form-group">
            <label>Horas disponibles:</label>
            <div className="hour-grid">
              <button
                className={`hour-button ${selectedHour === "9:00 AM" ? "selected" : ""}`}
                onClick={() => handleHourSelect("9:00 AM")}
              >
                9:00 AM
              </button>
              <button
                className={`hour-button ${selectedHour === "10:00 AM" ? "selected" : ""}`}
                onClick={() => handleHourSelect("10:00 AM")}
              >
                10:00 AM
              </button>
              <button
                className={`hour-button ${selectedHour === "11:00 AM" ? "selected" : ""}`}
                onClick={() => handleHourSelect("11:00 AM")}
              >
                11:00 AM
              </button>
              {/* Agrega más botones de hora según tu necesidad */}
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Agendar cita</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgendaCita;
