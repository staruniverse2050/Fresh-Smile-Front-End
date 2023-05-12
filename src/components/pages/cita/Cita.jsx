import React from "react";
import "./Cita.css";

export const Cita = () => {
  return (
    <div className="patient-profile">
    <div className="profile-header">
      <h2>Perfil del Paciente</h2>
    </div>
    <div className="profile-info">
      <div className="profile-picture">
        {/* Imagen de perfil */}
      </div>
      <div className="profile-details">
        <h3>{`${paciente.nombres_paciente} ${paciente.apellidos_paciente}`}</h3>
        <p>{`Documento: ${paciente.tipo_documento_paciente} - ${paciente.numero_documento_paciente}`}</p>
        <p>{`Dirección: ${paciente.direccion_paciente}`}</p>
        <p>{`Teléfono: ${paciente.telefono_paciente}`}</p>
        <p>{`Email: ${paciente.correo_paciente}`}</p>
      </div>
    </div>
      <div className="medical-history">
        <h3>Historia Médica</h3>
        <ul>
          <li>
            <span>Enfermedades Previas:</span>
            <span>Enfermedad A, Enfermedad B</span>
          </li>
          <li>
            <span>Alergias:</span>
            <span>Alergia A, Alergia B</span>
          </li>
          <li>
            <span>Medicamentos:</span>
            <span>Medicamento A, Medicamento B</span>
          </li>
        </ul>
      </div>
      <div className="appointments">
        <h3>Citas</h3>
        <ul>
          <li>
            <span>Fecha:</span>
            <span>DD/MM/AAAA</span>
          </li>
          <li>
            <span>Hora:</span>
            <span>HH:MM</span>
          </li>
          <li>
            <span>Odontólogo:</span>
            <span>Dr. Nombre del Odontólogo</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

