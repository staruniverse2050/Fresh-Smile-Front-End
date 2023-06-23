import React, { useState, useEffect } from "react";
import "./agendacita.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import Swal from 'sweetalert2';


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
  const [tipoCita, setTipoCita] = useState("");
  const [selectedHour, setSelectedHour] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [fieldsDisabled, setFieldsDisabled] = useState(false);
  const [actualCitas, setActualCitas] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [procedimientos, setProcedimientos] = useState([]);
  const [filteredCitas, setFilteredCitas] = useState([]);
  const [especialistas, setEspecialistas] = useState([]);
  const [citasAgendadas, setCitasAgendadas] = useState([]);
  const [noHayHorasDisponibles, setNoHayHorasDisponibles] = useState(false);



  useEffect(() => {
    axios.get('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos')
      .then(response => {
        const procedimientos = response.data;

        // Guardar los procedimientos en el estado del componente
        setEspecialistas(procedimientos);
      })
      .catch(error => {
        console.error('Error al obtener los procedimientos:', error);
      });
  }, []);




  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');
    // Obtener la hora actual
    const currentHour = new Date().getHours();

    // Obtener la hora seleccionada
    const selectedTime = selectedHour.split(":");
    const selectedHourValue = parseInt(selectedTime[0]);

    // Verificar si la hora seleccionada ya ha pasado
    if (selectedHourValue < currentHour) {
      Swal.fire({
        icon: 'error',
        title: 'Hora inválida',
        text: 'No puedes agendar una cita para una hora pasada.',
      });
      return;
    }

    const currentDateWithoutTime = new Date();
    currentDateWithoutTime.setHours(0, 0, 0, 0);

    if (citasAgendadas.length >= 2) {
      Swal.fire({
        icon: 'error',
        title: 'No puedes agendar más citas',
        text: 'Ya has agendado el máximo de citas permitidas.',
      });
      return;
    }


    if (selectedDate < currentDateWithoutTime) {
      Swal.fire({
        icon: 'error',
        title: 'Fecha inválida',
        text: 'No puedes agendar una cita en una fecha pasada.',
      });
      return;
    }
    // Obtener el procedimiento seleccionado
    const selectedProcedimiento = procedimientos.find((procedimiento) => procedimiento.nombre === tipoCita);

    // Obtener el identificador y el identificacion_especialistas del procedimiento seleccionado
    const identificacionProcedimiento = selectedProcedimiento ? selectedProcedimiento.identificacion_procedimientos : '';
    const identificacionEspecialistas = selectedProcedimiento ? selectedProcedimiento.identificacion_especialistas : '';

    // Obtener los valores del formulario
    const formData = {
      numero_documento: numeroDocumento,
      nombre_completo: nombre,
      tipo_documento: tipoDocumento,
      fecha: selectedDate,
      hora: selectedHour,
      estado_cita: 'Programada',
      id_paciente: userId,
      id_procedimiento: identificacionProcedimiento,
      id_especialista: identificacionEspecialistas, // Agregar el identificacion_especialistas al objeto formData
    };

    // Realizar la solicitud POST a la API
    axios
      .post('https://freshsmile.azurewebsites.net/FreshSmile/CrearCita', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // Aquí puedes manejar la respuesta de la API después de crear la cita
        console.log('Cita creada:', response.data);

        // Mostrar la alerta de SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Cita Agendada',
          text: 'La cita ha sido agendada exitosamente.',
        });

        // Reiniciar los campos del formulario
        setTipoDocumento("");
        setNumeroDocumento("");
        setNombre("");
        setTipoCita("");
        setSelectedHour(null);
        setSelectedDate(new Date());
        setCitasAgendadas([...citasAgendadas, response.data]);
      })
      .catch((error) => {
        console.error('Error al crear la cita:', error);
      });

  };

  const isDateAvailable = (date) => {
    const selectedDateWithoutTime = new Date(date);
    selectedDateWithoutTime.setHours(0, 0, 0, 0); // Establecer la hora, minutos, segundos y milisegundos a cero

    return !unavailableDates.includes(selectedDateWithoutTime.toISOString().split("T")[0]);
  };

  // Genera una lista de fechas no disponibles de manera aleatoria o mediante una llamada al servidor
  useEffect(() => {
    const generateUnavailableDates = () => {
      // Replace this code with your logic to generate unavailable dates randomly or fetch them from the server
      const dates = [
        "2023-01-01", "2023-01-10", "2023-01-15", "2023-01-20", "2023-01-25",
        "2023-02-05", "2023-02-12", "2023-02-18", "2023-02-22", "2023-02-28",
        "2023-03-07", "2023-03-15", "2023-03-22", "2023-03-28", "2023-03-30",
        "2023-04-05", "2023-04-12", "2023-04-20", "2023-04-25", "2023-04-28",
        "2023-05-05", "2023-05-10", "2023-05-15", "2023-05-20", "2023-05-25",
        "2023-06-10", "2023-06-15", "2023-06-20",
        "2023-07-05", "2023-07-20", "2023-07-25", "2023-07-30",
        "2023-08-05", "2023-08-10", "2023-08-15", "2023-08-20", "2023-08-25",
        "2023-09-05", "2023-09-10", "2023-09-15", "2023-09-20", "2023-09-28",
        "2023-10-05", "2023-10-10", "2023-10-15", "2023-10-20", "2023-10-25",
        "2023-11-05", "2023-11-10", "2023-11-15", "2023-11-20", "2023-11-28",
        "2023-12-05", "2023-12-10", "2023-12-15", "2023-12-20", "2023-12-25"
      ];
      setUnavailableDates(dates);
    };

    generateUnavailableDates();
  }, []);

  // Función para filtrar las fechas y deshabilitar las no disponibles
  const filterDates = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return !unavailableDates.includes(formattedDate);
  };


  // Actualiza la fecha seleccionada
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const getCitas = () => {
    axios
      .get("https://freshsmile.azurewebsites.net/FreshSmile/ConsultarCitas")
      .then((res) => {
        const citas = res.data.map((cita) => {
          return { fecha: cita.fecha, hora: cita.hora };
        });
        setActualCitas(citas);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(filteredCitas);
  }, [filteredCitas]);

  useEffect(() => {
    const selectedDateString = selectedDate.toISOString().slice(0, 10);
    const filteredData = actualCitas.filter((cita) => cita.fecha === selectedDateString);
    const uniqueData = Array.from(new Set(filteredData.map((cita) => cita.hora)));
    setFilteredCitas(uniqueData);

    setNoHayHorasDisponibles(uniqueData.length === 0);
  }, [selectedDate, actualCitas]);


  useEffect(() => {
    console.log(actualCitas);
  }, [actualCitas]);

  useEffect(() => {
    setShowModal(true);
    getCitas();
  }, []);


  useEffect(() => {
    // Obtener el userId del localStorage
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No se encontró el userId en el localStorage");
      return;
    }

    // Realizar la solicitud HTTP para obtener los datos de la persona
    axios
      .get(`https://freshsmile.azurewebsites.net/FreshSmile/BuscarPacientes/${userId}`)
      .then((response) => {
        const data = response.data;

        // Establecer los valores en los campos del formulario
        setTipoDocumento(data.tipo_documento);
        setNumeroDocumento(data.identificacion_paciente);
        setNombre(data.nombre_completo);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la persona:", error);
      });
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



  const handleHourSelect = (hour) => {
    // Verificar si la hora seleccionada ya está ocupada
    const isHourAvailable = filteredCitas.every((cita) => cita !== hour);

    if (isHourAvailable) {
      setSelectedHour(hour);
    } else {
      alert("La hora seleccionada ya está ocupada. Por favor, elige otra hora.");
    }

  };

  const handleModalButtonClick = (forMe) => {
    setShowModal(false); // Cerrar la ventana modal al hacer clic en un botón
    // Realizar acciones según el botón seleccionado (para mí o para otra persona)
    if (forMe) {
      setFieldsDisabled(true); // Bloquear los campos
    } else {
      // Aquí puedes establecer los valores predeterminados para tu propia cita
      // utilizando los datos del usuario actual o algún valor por defecto
      setTipoDocumento(""); // Limpiar los campos para evitar valores incorrectos
      setNumeroDocumento("");
      setNombre("");
      // Realizar acciones para permitir al usuario ingresar los datos de otra persona
      setFieldsDisabled(false); // Desbloquear los campos
    }
  };

  const availableHours = ["08:30:00", "09:00:00", "09:30:00", "10:00:00", "10:30:00", "11:00:00", "14:30:00", "15:00:00", "15:30:00", "16:00:00", "17:00:00", "17:30:00"];


  return (
    <div className="man-container">
      <img
        src="https://res.cloudinary.com/smilecmills/image/upload/v1686448002/agendarcita_obeh4x.jpg"
        alt="Hombre"
        className="man-image"
      />
      <div className="agenda-form-container">
        <h2>Agenda tu cita</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento:</label>
            {fieldsDisabled ? (
              <input
                id="tipoDocumento"
                className="select"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                required
                disabled={fieldsDisabled}
              />
            ) : (
              <select
                id="tipoDocumento"
                className="select"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                required
                disabled={fieldsDisabled}
              >
                <option value="">Seleccione un tipo de documento</option>
                {tiposDocumento.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            )}
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
              disabled={fieldsDisabled} // Desactivar el campo si fieldsDisabled es true
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              className="form-input"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              disabled={fieldsDisabled} // Desactivar el campo si fieldsDisabled es true
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoCita">Tipo de cita:</label>
            <select
              id="tipoCita"
              value={tipoCita}
              className="select"
              required
              onChange={(e) => {
                setTipoCita(e.target.value);

                // Buscar el procedimiento seleccionado por su nombre
                const selectedProcedimiento = especialistas.find(procedimiento => procedimiento.nombre === e.target.value);

                if (selectedProcedimiento) {
                  const identificacionEspecialistas = selectedProcedimiento.identificacion_especialistas;

                  // Aquí puedes hacer lo que necesites con la identificación de especialistas
                  console.log(identificacionEspecialistas);
                }
              }}
            >
              <option value="">Seleccione un tipo de cita</option>
              {especialistas.map((procedimiento) => (
                <option key={procedimiento.id} value={procedimiento.nombre}>
                  {procedimiento.nombre}
                </option>
              ))}
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
              locale={es}
              open={calendarOpen}
              onClickOutside={() => setCalendarOpen(false)}
              onFocus={() => setCalendarOpen(true)}
              filterDate={filterDates} // Aplica el filtro de fechas
            />
          </div>
          <div className="form-group">
            <label>Horas disponibles:</label>
            {availableHours.length > 0 ? (
              <div className="hour-grid">
                {availableHours.map((hour) =>
                  filteredCitas.length > 0 && filteredCitas.includes(hour) ? null : (
                    <button
                      key={hour}
                      className={`hour-button ${selectedHour === hour ? "selected" : ""}`}
                      onClick={(event) => {
                        event.preventDefault(); // Evitar la recarga de la página
                        handleHourSelect(hour);
                      }}
                    >
                      {hour}
                    </button>
                  )
                )}
              </div>
            ) : (
              <p className="Mensaje">No hay horas disponibles.</p>
            )}
          </div>

          <div className="form-group">
            <button type="submit" className="Agendar">
              Agendar cita
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>¿Para quién es la cita?</h3>
            <button
              className="BotonParaMi"
              type="button"
              onClick={() => handleModalButtonClick(true)}
            >
              Para mí
            </button>
            <button
              className="BotonParaOtraPersona"
              type="button"
              onClick={() => handleModalButtonClick(false)}
            >
              Alguien más
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default AgendaCita;