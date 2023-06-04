import React, { useState } from "react";
import "./agendacita.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";


const tiposDocumento = [
  "Cédula de ciudadanía",
  "Tarjeta de identidad",
  "Cédula de extranjería",
  "Pasaporte",
];

const AgendaCita = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [tipoCita, setTipoCita] = useState("");
  const [selectedHour, setSelectedHour] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Función para filtrar las fechas disponibles
  const filterDates = (date) => {
    // Aquí debes implementar tu lógica para determinar si la fecha está disponible o no
    // Puedes usar una lista de fechas disponibles o una API para verificar la disponibilidad
    const availableDates = [
      new Date(2023, 6, 4),
      new Date(2023, 6, 5),
      new Date(2023, 6, 6),
    ];

    // Retorna true si la fecha está en la lista de fechas disponibles
    return availableDates.some((availableDate) =>
      isSameDay(date, availableDate)
    );
  };

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
      selectedHour,
      selectedDate,
    };

    // Realizar la solicitud POST al backend
    axios
      .post("URL_DE_TU_API", data)
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
        setSelectedHour(null);
        setSelectedDate(null);
      })
      .catch((error) => {
        // Manejar el error si la solicitud no se completa correctamente
        console.error(error);
      });
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="man-container">
      <img
        src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685471545/5498914_qaxqmq.png"
        alt="Hombre"
        className="man-image"
      />
      <div className="agenda-form-container">
        <h2>Agenda tu cita</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento:</label>
            <select
              id="tipoDocumento"
              className="select"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            >
              <option value="">Seleccione un tipo de documento</option>
              {tiposDocumento.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de documento:</label>
            <input
              type="text"
              id="numeroDocumento"
              className="form-input"
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
              className="form-input"
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
              className="form-input"
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
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoCita">Tipo de cita:</label>
            <select
              id="tipoCita"
              value={tipoCita}
              className="select"
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
            <label>Fecha disponible:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="datepicker"
              required
              filterDate={filterDates}
              locale={es}
              open={calendarOpen} // Estado para controlar si el calendario está abierto o cerrado
              onClickOutside={() => setCalendarOpen(false)} // Cierra el calendario al hacer clic fuera de él
              onFocus={() => setCalendarOpen(true)} // Abre el calendario al hacer foco en él
            />


          </div>
          <div className="form-group">
            <label>Horas disponibles:</label>
            <div className="hour-grid">
              <button
                className={`hour-button ${selectedHour === "9:00 AM" ? "selected" : ""
                  }`}
                onClick={() => handleHourSelect("9:00 AM")}
              >
                9:00 AM
              </button>
              <button
                className={`hour-button ${selectedHour === "10:00 AM" ? "selected" : ""
                  }`}
                onClick={() => handleHourSelect("10:00 AM")}
              >
                10:00 AM
              </button>
              <button
                className={`hour-button ${selectedHour === "11:00 AM" ? "selected" : ""
                  }`}
                onClick={() => handleHourSelect("11:00 AM")}
              >
                11:00 AM
              </button>
              {/* Agrega más botones de hora según tu necesidad */}
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="Agendar">
              Agendar cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgendaCita;
