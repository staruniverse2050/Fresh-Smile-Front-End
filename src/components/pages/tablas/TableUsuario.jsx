import React, { useEffect, useState } from 'react';
import "./tables.css";
import swal from 'sweetalert';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://freshsmile.azurewebsites.net/FreshSmile/paciente'); // Reemplaza 'URL_DE_TU_API' con la URL de tu API real
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`URL_DE_TU_API/${id}`); // Reemplaza 'URL_DE_TU_API' con la URL de tu API real
      fetchData();
    } catch (error) {
swal({
  title: "Eliminar cita",
  text: "¿Esta seguro que deseas eliminar esta cita?",
  icon: "warning",
  buttons: ["No", "Si"]
}).then(respuesta=>{
  if(respuesta){
    swal({
    text: "Tu cita se ha eliminado correctamente",
    icon: "success"})
  }
});
      console.error(error);
    }
  };

  return (
    <>
    <div className="table-structure">
    <h1 className="structure-title">Mis citas</h1>
    <table>
      <thead>
        <tr>
          <th>ID:</th>
          <th>Tipo de cita:</th>
          <th>Nombre del doctor:</th>
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
            <td>{item.nombreDoctor}</td>
            <td>{item.fecha}</td>
            <td>{item.hora}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Eliminar cita</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default App;
