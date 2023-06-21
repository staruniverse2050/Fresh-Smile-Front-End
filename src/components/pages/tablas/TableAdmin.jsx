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
  const [estadoCitaEditando, setEstadoCitaEditando] = useState('');
const [isEstadoCitaEditing, setIsEstadoCitaEditing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [citaEditando, setCitaEditando] = useState(null);
  const navigate = useNavigate();

  const EstadoCitaEnum = {
    REALIZADA: 'Realizada',
    PENDIENTE: 'Pendiente',
    CANCELADA: 'Cancelada',
    AUSENCIA: 'Ausencia',
  };
  
  useEffect(() => {
    fetch('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarCitas')
      .then(response => response.json())
      .then(data => {
        // Filtrar las citas por el id_paciente que coincida con userId
        const citasUsuario = data.filter(cita => cita.id_especialista === parseInt(userId));
        setData(citasUsuario);

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

  const formatFechaCreacion = (fecha) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString(undefined, options);
  };

  const handleEditarCita = async (citaEditada) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
  
      if (citaEditada.estado_cita === EstadoCitaEnum.AUSENCIA) {
        citaEditada.estado_cita = EstadoCitaEnum.REALIZADA; // Permitir cambiar de "Ausencia" a "Realizada"
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
        swal('Cita actualizada', 'La cita ha sido actualizada correctamente', 'success');
      } else {
        swal('Error', 'Hubo un problema al actualizar la cita', 'error');
      }
    } catch (error) {
      console.error(error);
      swal('Error', 'Hubo un problema al actualizar la cita', 'error');
    }
  };
  
  const actualizarEstadoCita = () => {
    const currentDate = new Date(); // Obtener la fecha actual
  
    // Filtrar las citas que necesitan ser actualizadas
    const citasActualizadas = data.map(cita => {
      const fechaCita = new Date(cita.fecha);
  
      // Verificar si ha pasado un día después de la fecha programada
      if (
        cita.estado_cita === EstadoCitaEnum.PROGRAMADA &&
        currentDate > fechaCita &&
        currentDate.getDate() - fechaCita.getDate() === 1
      ) {
        return {
          ...cita,
          estado_cita: EstadoCitaEnum.AUSENCIA
        };
      }
  
      return cita;
    });
  
    setData(citasActualizadas); // Actualizar el estado de las citas
  };
  

  useEffect(() => {
    // Llamar a la función actualizarEstadoCita cada vez que se renderice el componente
    actualizarEstadoCita();

    // Resto de tu código...
  }, [userId]);

  const getEstadoCita = (cita) => {
    const currentDate = new Date(); // Obtener la fecha actual
    const fechaCita = new Date(cita.fecha);
  
    // Verificar si ha pasado un día después de la fecha programada
    if (currentDate > fechaCita && currentDate.getDate() - fechaCita.getDate() === 1) {
      if (cita.estado_cita === EstadoCitaEnum.AUSENCIA) {
        return EstadoCitaEnum.AUSENCIA; // Permitir cambiar de "Ausencia" a "Realizada"
      } else {
        return EstadoCitaEnum.AUSENCIA;
      }
    }
  
    return cita.estado_cita;
  };
  

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
                )}
              </td>

              <td>{procedimientos[item.id_procedimiento]?.costo?.toFixed(3)}</td>
              <td>
                {item.estado_cita && !isEditing ? (
                  <button className="edit-button" onClick={() => { setIsEditing(true); setCitaEditando(item.identificacion_citas); }}>
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                ) : (
                  <>
                    {isEditing && citaEditando === item.identificacion_citas && (
                      <button className="edit-button" onClick={() => handleEditarCita(item)}>
                        Guardar
                      </button>
                    )}

                  </>
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
