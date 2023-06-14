import React, { useEffect, useState } from 'react';
import './tables.css';
import swal from 'sweetalert';
import 'sweetalert2/src/sweetalert2.scss';

const TableUsuario = () => {
  const [data, setData] = useState([]);
  const [especialistas, setEspecialistas] = useState({});
  const [procedimientos, setProcedimientos] = useState({});
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetch('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarCitas')
      .then(response => response.json())
      .then(data => {
        // Filtrar las citas por el id_paciente que coincida con userId
        const citasUsuario = data.filter(cita => cita.id_paciente === parseInt(userId));
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

        // Realizar una solicitud para obtener los procedimientos
        fetch('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos')
          .then(response => response.json())
          .then(procedimientosData => {
            // Filtrar los procedimientos por los ids coincidentes
            const procedimientosFiltrados = procedimientosData.filter(procedimiento =>
              procedimientosIds.includes(procedimiento.identificacion_procedimientos)
            );

            // Crear un objeto con las identificaciones de los procedimientos como clave y sus nombres como valor
            const procedimientosMap = {};
            procedimientosFiltrados.forEach(procedimiento => {
              procedimientosMap[procedimiento.identificacion_procedimientos] = procedimiento.nombre;
            });
            setProcedimientos(procedimientosMap);
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }, [userId]);

  const formatFechaCreacion = (fecha) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString(undefined, options);
  };

  const cancelarCita = (idCita) => {
    const accessToken = localStorage.getItem('accessToken');
  
    fetch(`https://freshsmile.azurewebsites.net/FreshSmile/CancelarCita/${idCita}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        // Verificar si la cancelación fue exitosa y mostrar una alerta correspondiente
        if (data.success) {
          swal('Cita cancelada', 'La cita ha sido cancelada exitosamente', 'success');
  
          // Actualizar los datos en la tabla después de la cancelación de la cita
          fetchData(); // Vuelve a obtener los datos de las citas
        } else {
          swal('Error', 'No se pudo cancelar la cita', 'error');
        }
      })
      .catch(error => {
        console.error(error);
        swal('Error', 'Ocurrió un error al cancelar la cita', 'error');
      });
  };
  
  

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Identificación de la cita</th>
            <th>Número de Documento</th>
            <th>Nombre Completo</th>
            <th>Tipo de Documento</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Especialista</th>
            <th>Identificacion Paciente</th>
            <th>Motivo</th>
            <th>Fecha de Creacion</th>
            <th>Estado</th>
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
              <td>{procedimientos[item.id_procedimiento]}</td>
              <td>{formatFechaCreacion(item.fecha_de_creacion)}</td>
              <td>{item.estado}</td>
              <td>
                {item.estado === 'Agendada' && (
                  <button className="delete-button" onClick={() => cancelarCita(item.identificacion_citas)}>
                    <i className="fas fa-trash"></i>
                  </button>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default TableUsuario;

