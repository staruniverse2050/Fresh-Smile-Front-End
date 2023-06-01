import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layouts/header/Header";
import { HeaderPaciente } from "./components/layouts/header/headerpaciente/HeaderPaciente";
import { HeaderAdministrador } from "./components/layouts/header/headeradministrador/HeaderAdministrador"; // Importa el componente HeaderAdministrador
import { Home } from "./components/pages/home/Home";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import AgendaCita from "./components/layouts/agendacita/AgendaCita";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import OdontologiasArmenia from './components/pages/mapaArmenia/OdontologiasArmenia';
import { DoctorCard } from "./components/pages/Especialistas/DoctorCard";
import Contacto from "./components/pages/contacto/Contacto";
import Chatbot from './components/layouts/chatbot/Chatbot';
import RegistroFormulario from "./components/layouts/Register/RegistroFormulario";
import Login from "./components/layouts/Login/Login"; // Importa el componente Login

function App() {
  const [rol, setRol] = useState(""); // Estado para almacenar el rol actual del usuario

  return (
    <>
      {rol === "administrador" ? (
        <HeaderAdministrador />
      ) : (
        <HeaderPaciente />
      )}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Mapa" element={<OdontologiasArmenia />} />
        <Route path="/Agendar" element={<AgendaCita />} />
        <Route path="/Especialistas" element={<DoctorCard />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Registro" element={<RegistroFormulario />} />
        <Route path="/Login" element={<Login setRol={setRol} />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
