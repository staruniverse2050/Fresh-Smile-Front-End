import React, { useEffect, useState } from 'react';
import './tables.css';
import swal from 'sweetalert';
import 'sweetalert2/src/sweetalert2.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TableAdmin = () => {
  const [data, setData] = useState([]);
  const [especialistas, setEspecialistas] = useState({});
  const [procedimientos, setProcedimientos] = useState({});
  const userId = localStorage.getItem('userId');
  const [isEditing, setIsEditing] = useState(false);
  const [citaEditando, setCitaEditando] = useState(null);
  const navigate = useNavigate();
  const [campoEditando, setCampoEditando] = useState(null);
  const [citasProgramadas, setCitasProgramadas] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCancelarEdicion = () => {
    setIsEditing(false);
    setCitaEditando(null);
  };

  const EstadoCitaEnum = {
    REALIZADA: 'Realizada',
    PROGRAMADA: 'Programada',
    CANCELADA: 'Cancelada',
    AUSENCIA: 'Ausencia',
  };

  useEffect(() => {
    fetch('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarCitas')
      .then(response => response.json())
      .then(data => {
        // Filtrar las citas por el id_paciente que coincida con userId
        const citasUsuario = data.filter(cita => cita.id_especialista === parseInt(userId));
        
        // Ordenar las citas por mes y día
        const citasOrdenadas = sortCitas(citasUsuario);

        setData(citasOrdenadas);
        // Obtener una lista de identificaciones de especialistas únicos en las citas
        const especialistasIds = [...new Set(citasUsuario.map(cita => cita.id_especialista))];

        // Realizar una solicitud para obtener los nombres de los especialistas
        Promise.all(
          especialistasIds.map(id =>
            fetch(`https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/BuscarEspecialista/${id}`)
              .then(response => response.json())
          )
        )
          .then(especialistasData => {
            // Crear un objeto con las identificaciones de los especialistas como clave y sus nombres como valor
            const especialistasMap = {};
            especialistasData.forEach(especialista => {
              especialistasMap[especialista.identificacion_especialista] = especialista.nombre_completo;
            });
            setEspecialistas(especialistasMap);
          })
          .catch(error => console.error(error));

        // Obtener una lista de identificaciones de procedimientos únicos en las citas
        const procedimientosIds = [...new Set(citasUsuario.map(cita => cita.id_procedimiento))];

        fetch('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos')
          .then(response => response.json())
          .then(procedimientosData => {
            // Filtrar los procedimientos por los ids coincidentes
            const procedimientosFiltrados = procedimientosData.filter(procedimiento =>
              procedimientosIds.includes(procedimiento.identificacion_procedimientos)
            );

            // Crear un objeto con las identificaciones de los procedimientos como clave, 
            // sus nombres y costos como valores
            const procedimientosMap = {};
            procedimientosFiltrados.forEach(procedimiento => {
              procedimientosMap[procedimiento.identificacion_procedimientos] = {
                nombre: procedimiento.nombre,
                costo: procedimiento.costo
              };
            });
            setProcedimientos(procedimientosMap);
          })
      })
      .catch(error => console.error(error));
  }, [userId]);

  const sortCitas = (citas) => {
    citas.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      if (fechaA.getMonth() === fechaB.getMonth()) {
        return fechaA.getDate() - fechaB.getDate();
      }
      return fechaA.getMonth() - fechaB.getMonth();
    });
    return citas;
  };
  const formatFechaCreacion = (fecha) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString(undefined, options);
  };

  const handleEditarCita = async (citaEditada) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const currentDate = new Date();
      const fechaCita = new Date(citaEditada.fecha);
      const horaCita = new Date(`${citaEditada.fecha}T${citaEditada.hora}`);
  
      if (fechaCita > currentDate) {
        swal('Error', 'No puedes cambiar la fecha de una cita que aún no ha llegado', 'error');
        return;
      }
      if (
        citaEditada.estado_cita === EstadoCitaEnum.PROGRAMADA &&
        isFechaPasada // Verificar si la fecha de la cita ha pasado
      ) {
        // Mostrar una alerta con botón de cancelar
        swal({
          title: 'Error',
          text: 'No puedes establecer el estado como "Programada" si la fecha de la cita ya ha pasado',
          icon: 'error',
          buttons: {
            cancel: {
              text: 'Cancelar',
              value: null,
              visible: true,
              closeModal: true,
            },
          },
        }).then((value) => {
          if (value === null) {
            // El usuario ha cancelado, no se realiza ningún cambio
            setIsEditing(false);
            setCitaEditando(null);
          }
        });

        return;
      }
      const estadoCitaActual = citaEditada.estado_cita;

      if (estadoCitaActual !== EstadoCitaEnum.REALIZADA && estadoCitaActual !== EstadoCitaEnum.AUSENCIA) {
        citaEditada.estado_cita = EstadoCitaEnum.REALIZADA; // Establecer el estado como "Realizada"
      }
      const response = await axios.put(
        `https://freshsmile.azurewebsites.net/FreshSmile/ModificarCita/${citaEditada.identificacion_citas}`,
        citaEditada,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setIsEditing(false);
        setCitaEditando(null);
        swal('Cita actualizada', 'La cita ha sido actualizada correctamente', 'success');
      } else {
        swal('Error', 'Hubo un problema al actualizar la cita', 'error');
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setShowError(true);
      swal('Error', 'Hubo un problema al actualizar la cita', 'error');
    }
    
    
  };
  const actualizarEstadoCita = () => {
    const currentDate = new Date();
    setCurrentDateTime(new Date());

    const citasActualizadas = data.map(cita => {
      const fechaCita = new Date(cita.fecha);
      const horaCita = new Date(`${cita.fecha}T${cita.hora}`);
  
      // Verificar si ha pasado un día completo después de la fecha y hora programadas
      if (
        cita.estado_cita !== EstadoCitaEnum.REALIZADA &&
        currentDate > fechaCita &&
        currentDate.getTime() - fechaCita.getTime() >= 24 * 60 * 60 * 1000 &&
        currentDate > horaCita
      ) {
        return {
          ...cita,
          estado_cita: EstadoCitaEnum.AUSENCIA
        };
      }
  
      return cita;
    });
  
    setData(citasActualizadas);
  };
  
  useEffect(() => {
    // Llamar a la función actualizarEstadoCita cada vez que se renderice el componente
    actualizarEstadoCita();
  }, [userId]);

  const getEstadoCita = (cita) => {
    const currentDate = currentDateTime;
    const fechaCita = new Date(cita.fecha);
    const horaCita = new Date(`${cita.fecha}T${cita.hora}`);
  
    if (currentDate > fechaCita && currentDate.getDate() - fechaCita.getDate() === 1) {
      if (cita.estado_cita === EstadoCitaEnum.AUSENCIA || cita.estado_cita === EstadoCitaEnum.REALIZADA) {
        return cita.estado_cita;
      } else {
        return EstadoCitaEnum.AUSENCIA;
      }
    }
  
    if (currentDate >= horaCita && currentDate.getHours() < 17 && cita.estado_cita === EstadoCitaEnum.PROGRAMADA) {
      return EstadoCitaEnum.PROGRAMADA;
    }
  
    return cita.estado_cita;
  };
  

  const handleEditCitaClick = (cita) => {
    setIsEditing(true);
    setCitaEditando(cita.identificacion_citas);
  };

  const handleGuardarCitaClick = async (cita) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const currentDate = new Date();
      const fechaCita = new Date(cita.fecha);
      const horaCita = new Date(`${cita.fecha}T${cita.hora}`);
  
      if (fechaCita > currentDate) {
        swal('Error', 'No puedes cambiar la fecha de una cita que aún no ha llegado', 'error');
        return;
      }
      if (
        cita.estado_cita === EstadoCitaEnum.PROGRAMADA &&
        isFechaPasada // Verificar si la fecha de la cita ha pasado
      ) {
        // Mostrar una alerta con botón de cancelar
        swal({
          title: 'Error',
          text: 'No puedes establecer el estado como "Programada" si la fecha de la cita ya ha pasado',
          icon: 'error',
          buttons: {
            cancel: {
              text: 'Cancelar',
              value: null,
              visible: true,
              closeModal: true,
            },
          },
        }).then((value) => {
          if (value === null) {
            // El usuario ha cancelado, no se realiza ningún cambio
            setIsEditing(false);
            setCitaEditando(null);
          }
        });

        return;
      }
      const estadoCitaActual = cita.estado_cita;

      if (estadoCitaActual !== EstadoCitaEnum.REALIZADA && estadoCitaActual !== EstadoCitaEnum.AUSENCIA) {
        cita.estado_cita = EstadoCitaEnum.REALIZADA; // Establecer el estado como "Realizada"
      }
      const response = await axios.put(
        `https://freshsmile.azurewebsites.net/FreshSmile/ModificarCita/${cita.identificacion_citas}`,
        cita,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setIsEditing(false);
        setCitaEditando(null);
        swal('Cita actualizada', 'La cita ha sido actualizada correctamente', 'success');
      } else {
        swal('Error', 'Hubo un problema al actualizar la cita', 'error');
      }
    } catch (error) {
      console.error(error);
      swal('Error', 'Hubo un problema al actualizar la cita', 'error');
    }
  };
  useEffect(() => {
    if (showError) {
      window.location.reload();
    }
  }, [showError]);
  
  
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Identificación de la cita</th>
            <th>Número de Documento</th>
            <th>Nombre del Paciente</th>
            <th>Tipo de Documento Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Especialista</th>
            <th>Identificacion Paciente</th>
            <th>Motivo</th>
            <th>Fecha de Creacion</th>
            <th>Estado</th>
            <th>Valor cita</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.identificacion_citas}</td>
              <td>{item.numero_documento}</td>
              <td>{item.nombre_completo}</td>
              <td>{item.tipo_documento}</td>
              <td>{item.fecha}</td>
              <td>{item.hora}</td>
              <td>{especialistas[item.id_especialista]}</td>
              <td>{item.id_paciente}</td>
              <td>{procedimientos[item.id_procedimiento]?.nombre}</td>
              <td>{formatFechaCreacion(item.fecha_de_creacion)}</td>
              <td>
                {isEditing && citaEditando === item.identificacion_citas ? (
                  campoEditando === 'estado_cita' ? (
                    <input
                      type="text"
                      value={item.estado_cita}
                      onChange={(e) => {
                        const newState = [...data];
                        newState[index].estado_cita = e.target.value;
                        setData(newState);
                      }}
                    />
                  ) : (
                    getEstadoCita(item)
                  )
                ) : (
                  getEstadoCita(item)
                )}
              </td>
              <td>{procedimientos[item.id_procedimiento]?.costo?.toFixed(3)}</td>
              <td>
                {item.estado_cita && !isEditing && !error ? (
                  <button
                    className="botonEdit"
                    onClick={() => {
                      setIsEditing(true);
                      setCampoEditando('estado_cita');
                      setCitaEditando(item.identificacion_citas);
                    }}
                  >
                    Editar
                  </button>
                ) : (
                  <div>
                    <button
                      className="botonEdit"
                      onClick={() => {
                        handleGuardarCitaClick(item);
                      }}
                    >
                      Guardar
                    </button>
                    <button
                      className="botonCancel"
                      onClick={() => {
                        handleCancelarEdicion();
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdmin;
