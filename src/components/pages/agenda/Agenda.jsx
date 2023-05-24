import React from "react";
// import "./Cita.css"

export const Agenda = () => { 
  return (
    <>
     <div className="header">
        <h3>Fresh Smile Cmills</h3>
      </div>
      <div className="agenda-container">
        <h1>Citas pendientes</h1>
        <h2>Has accedido como </h2>
      </div>
      <div className="table-product">
        <table>
          <tr>
            <th scope="col">Tipo de documento:</th>
            <th scope="col">Numero de documento:</th>
            <th scope="col">Nombres Completos:</th>
            <th scope="col">Telefono:</th>
            <th scope="col">Correo electronico:</th>
            <th scope="col">Fecha de nacimiento:</th>
            <th scope="col">Disponibilidad:</th>
            <th scope="col">Tipo de cita:</th>
            <th scope="col">Sede seleccionada:</th>
            {/* <th scope="col">Editar</th> */}
            <th scope="col">Opcion</th>
          </tr>
          <tbody>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="timeregis"></td>
              <td className="modify">
                <a name="edit" id="" className="bfix" href="fix.php" role="button">Editar</a>
              </td>
              {/* <td className="delete">
                <a
                  name="id"
                  id=""
                  className="bdelete"
                  href="main/delete.php"
                  role="button"
                >
                  Cancelar
                </a>
              </td> */}
            </tr>
          </tbody>
        </table>
        {/* <br />
        <a name="" id="" className="Addlist" style={{ float: "right" }} href="addlist.php" role="button">Agregar cita
        </a>
        <br /> */}
      </div>
    </>
  );
};
export default Agenda;

