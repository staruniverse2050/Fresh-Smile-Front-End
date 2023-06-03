import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TableAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('URL_DE_TU_API'); // Reemplaza 'URL_DE_TU_API' con la URL de tu API real
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al obtener los datos',
        text: 'Hubo un problema al obtener los datos de la API',
      });
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Eliminar cita',
      text: '¿Estás seguro que deseas eliminar esta cita?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`URL_DE_TU_API/${id}`); // Reemplaza 'URL_DE_TU_API' con la URL de tu API real
          fetchData();
          Swal.fire({
            icon: 'success',
            title: 'Cita eliminada',
            text: 'La cita de tu agenda se ha eliminado correctamente',
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error al eliminar la cita',
            text: 'Hubo un problema al eliminar la cita',
          });
        }
      }
    });
  };

  return (
    <div className="table-structure">
      <h1 className="structure-title">Citas agendadas</h1>
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Tipo de cita:</th>
            <th>Nombre del Paciente:</th>
            <th>Fecha:</th>
            <th>Hora:</th>
            <th>Email:</th>
            <th>Acciones:</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.tipoCita}</td>
              <td>{item.nombrePaciente}</td>
              <td>{item.fecha}</td>
              <td>{item.hora}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Cancelar cita</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdmin;
