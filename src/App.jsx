import React, { useState } from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { Header } from "./components/layouts/header/Header";
import { HeaderPaciente } from "./components/layouts/header/headerpaciente/HeaderPaciente";
import { HeaderAdministrador } from "./components/layouts/header/headeradministrador/HeaderAdministrador";
import { Home } from "./components/pages/home/Home";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import AgendaCita from "./components/layouts/agendacita/AgendaCita";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import OdontologiasArmenia from "./components/pages/mapaArmenia/OdontologiasArmenia";
import { DoctorCard } from "./components/pages/Especialistas/DoctorCard";
import Contacto from "./components/pages/contacto/Contacto";
import Chatbot from "./components/layouts/chatbot/Chatbot";
import RegistroFormulario from "./components/layouts/Register/RegistroFormulario";
import Login from "./components/layouts/Login/Login";
import TableUsuario from "./components/pages/tablas/TableUsuario";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");
  const [headerComponent, setHeaderComponent] = useState(<Header />);

  const setRol = (rol) => {
    if (rol === "administrador") {
      setHeaderComponent(<HeaderAdministrador />);
      setIsAuthenticated(true);
      setRedirectTo("/"); // Redirigir a la página de inicio

    } else if (rol === "paciente") {
      setHeaderComponent(<HeaderPaciente />);
      setIsAuthenticated(true);
      setRedirectTo("/"); // Redirigir a la página de inicio
    } else {
      setHeaderComponent(<Header />);
      setIsAuthenticated(false);
    }
  };

  const handleRedirect = (path) => {
    setRedirectTo(path);
  };

  return (
    <>
      {redirectTo && <Navigate to={redirectTo} />}
      {headerComponent}
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login setRol={setRol} />} />
        )}
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Mapa" element={<OdontologiasArmenia />} />
        <Route path="/Agendar" element={<AgendaCita />} />
        <Route path="/Especialistas" element={<DoctorCard />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Registro" element={<RegistroFormulario />} />
        <Route path="/Login" element={<Login setRol={setRol} />} />
        <Route path="/TableUsuario" element={<TableUsuario />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
