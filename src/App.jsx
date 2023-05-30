import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "./components/layouts/header/Header";
import { HeaderPaciente } from "./components/layouts/header/headerpaciente/HeaderPaciente";
import { Home } from "./components/pages/home/Home";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import  AgendaCita  from "./components/layouts/agendacita/AgendaCita";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import OdontologiasArmenia from './components/pages/mapaArmenia/OdontologiasArmenia';
import { DoctorCard } from "./components/pages/Especialistas/DoctorCard";
import Contacto from "./components/pages/contacto/Contacto";
import Chatbot from './components/layouts/chatbot/Chatbot'; // Corrección aquí

function App() {
  const { isAuthenticated } = useAuth0();

  const isPaciente = isAuthenticated; // Cambiar esto según la lógica de autenticación de pacientes

  return (
    <>
      {isPaciente ? <HeaderPaciente /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Mapa" element={<OdontologiasArmenia />} />
        <Route path="/Agendar" element={<AgendaCita />} />
        <Route path="/Especialistas" element={<DoctorCard />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      {/* <AgendaCita /> */}
      <Chatbot />
    </>
  );
}

export default App;
