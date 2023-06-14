import React, { useState, useEffect } from "react";
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
  const [procedimientos, setProcedimientos] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la ventana modal
  const [fieldsDisabled, setFieldsDisabled] = useState(false); // Estado para controlar si los campos están bloqueados o no

  useEffect(() => {
    setShowModal(true); // Abrir la ventana modal al cargar el componente
  }, []);

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener los procedimientos
    axios
      .get("https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos")
      .then((response) => {
        // Guardar los procedimientos en el estado
        setProcedimientos(response.data);
      })
      .catch((error) => {
        // Manejar el error en caso de que la solicitud falle
        console.error("Error al obtener los procedimientos:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto de datos a enviar al backend
    const data = {
      identificacion_citas: numeroDocumento,
      numero_documento: numeroDocumento,
      nombre_completo: nombre,
      tipo_documento: tipoDocumento,
      fecha: selectedDate,
      hora: selectedHour,
      estado_cita: "Confirmada",
    };

    // Verificar si la opción seleccionada es "BotonParaOtraPersona"
    if (!fieldsDisabled) {
      // Realizar la solicitud POST al backend
      axios
        .post("https://freshsmile.azurewebsites.net/FreshSmile/CrearCita", data)
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
          // Mostrar una alerta de cita creada con éxito
          alert("Cita creada con éxito");
        })
        .catch((error) => {
          // Manejar el error si la solicitud no se completa correctamente
          console.error(error);
        });
    }
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

  const filterDates = () => {
    // Aquí debes implementar tu lógica para determinar si la fecha está disponible o no
    // Puedes usar una lista de fechas disponibles o una API para verificar la disponibilidad
    const availableDates = [new Date(2023, 6, 4), new Date(2023, 6, 5), new Date(2023, 6, 6)];

    // Retorna true si la fecha está en la lista de fechas disponibles
    return availableDates;
  };

  const handleModalButtonClick = (forMe) => {
    setShowModal(false); // Cerrar la ventana modal al hacer clic en un botón
    // Realizar acciones según el botón seleccionado (para mí o para otra persona)
    if (forMe) {
      // Aquí puedes establecer los valores predeterminados para tu propia cita
      // utilizando los datos del usuario actual o algún valor por defecto
      setTipoDocumento(""); // Limpiar los campos para evitar valores incorrectos
      setNumeroDocumento("");
      setNombre("");
      setFieldsDisabled(true); // Bloquear los campos
    } else {
      // Realizar acciones para permitir al usuario ingresar los datos de otra persona
      setFieldsDisabled(false); // Desbloquear los campos
    }
  };

  return (
    <div className="container">
      <h1>Agenda tu cita</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipoDocumento">Tipo de documento</label>
          <select
            id="tipoDocumento"
            className="form-control"
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
            disabled={fieldsDisabled}
            required
          >
            <option value="">Selecciona un tipo de documento</option>
            {tiposDocumento.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numeroDocumento">Número de documento</label>
          <input
            type="text"
            id="numeroDocumento"
            className="form-control"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            disabled={fieldsDisabled}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={fieldsDisabled}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoCita">Tipo de cita</label>
          <select
            id="tipoCita"
            className="form-control"
            value={tipoCita}
            onChange={(e) => setTipoCita(e.target.value)}
            required
          >
            <option value="">Selecciona un tipo de cita</option>
            {procedimientos.map((procedimiento) => (
              <option key={procedimiento.Id} value={procedimiento.Id}>
                {procedimiento.Nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <br />
          <DatePicker
            id="fecha"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            locale={es}
            required
            disabled={fieldsDisabled}
            customInput={
              <input
                type="text"
                className="form-control"
                readOnly={true}
                style={{ background: "white" }}
              />
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora</label>
          <br />
          <input
            type="time"
            id="hora"
            className="form-control"
            value={selectedHour}
            onChange={(e) => setSelectedHour(e.target.value)}
            required
            disabled={fieldsDisabled}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Agendar cita
          </button>
        </div>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>¿Deseas agendar la cita para ti?</h2>
            <button
              className="btn btn-primary"
              onClick={() => handleModalButtonClick(true)}
            >
              Sí, para mí
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleModalButtonClick(false)}
            >
              No, para otra persona
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaCita;