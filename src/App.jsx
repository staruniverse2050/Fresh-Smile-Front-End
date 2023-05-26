import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "./components/layouts/header/Header";
import { HeaderPaciente } from "./components/layouts/header/headerpaciente/HeaderPaciente";
import { Home } from "./components/pages/home/Home";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import {Agenda} from "./components/pages/agendacita/Agenda";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import {DoctorCard} from "./components/pages/Especialistas/DoctorCard";
import Contacto from "./components/pages/contacto/Contacto";

function App() {
  const { isAuthenticated } = useAuth0();

  const isPaciente = isAuthenticated; // Cambiar esto según la lógica de autenticación de pacientes

  return (
    <>
      {isPaciente ? <HeaderPaciente /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/DoctorCard" element={<DoctorCard />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
