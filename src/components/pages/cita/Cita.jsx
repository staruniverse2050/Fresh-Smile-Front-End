import React from "react";
import "./Cita.css";

export const Cita = () => {
  return (
    <>
      <div className="header">
        <h3>Fresh Smile Cmills</h3>
      </div>
      <div className="container">
        <h1>Mis citas</h1>
        <h2>Has accedido como </h2>
      </div>
      <div className="table-product">
        <table>
          <tr>
            <th scope="col">Orden</th>
            <th scope="col">ID: Cita</th>
            <th scope="col">Nombre: Paciente</th>
            <th scope="col">Cantidades</th>
            <th scope="col">Fecha: Registro</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
          <tbody>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="timeregis"></td>
              <td className="modify">
                <a name="edit" id="" className="bfix" href="fix.php" role="button">Editar</a>
              </td>
              <td className="delete">
                <a name="id" id="" className="bdelete" href="main/delete.php" role="button">Eliminar</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <a name="" id="" className="Addlist" style={{ float: "right" }} href="addlist.php" role="button">Agregar cita
        </a>
        <br />
      </div>
    </>
  );
};

export default Cita;
    // <div className="patient-profile">
    // <div className="profile-header">
    //   <h2>Perfil del Paciente</h2>
    // </div>
    // <div className="profile-info">
    //   <div className="profile-picture">
    //   </div>
    //   <div className="profile-details">
    //     <h3>{`${paciente.nombres_paciente} ${paciente.apellidos_paciente}`}</h3>
    //     <p>{`Documento: ${paciente.tipo_documento_paciente} - ${paciente.numero_documento_paciente}`}</p>
    //     <p>{`Dirección: ${paciente.direccion_paciente}`}</p>
    //     <p>{`Teléfono: ${paciente.telefono_paciente}`}</p>
    //     <p>{`Email: ${paciente.correo_paciente}`}</p>
    //   </div>
    // </div>
    //   <div className="medical-history">
    //     <h3>Historia Médica</h3>
    //     <ul>
    //       <li>
    //         <span>Enfermedades Previas:</span>
    //         <span>Enfermedad A, Enfermedad B</span>
    //       </li>
    //       <li>
    //         <span>Alergias:</span>
    //         <span>Alergia A, Alergia B</span>
    //       </li>
    //       <li>
    //         <span>Medicamentos:</span>
    //         <span>Medicamento A, Medicamento B</span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="appointments">
    //     <h3>Citas</h3>
    //     <ul>
    //       <li>
    //         <span>Fecha:</span>
    //         <span>DD/MM/AAAA</span>
    //       </li>
    //       <li>
    //         <span>Hora:</span>
    //         <span>HH:MM</span>
    //       </li>
    //       <li>
    //         <span>Odontólogo:</span>
    //         <span>Dr. Nombre del Odontólogo</span>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

