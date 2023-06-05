import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layouts/header/Header";
import { HeaderPaciente } from "./components/layouts/header/headerpaciente/HeaderPaciente";
import { HeaderAdministrador } from "./components/layouts/header/headeradministrador/HeaderAdministrador";
import { Home } from "./components/pages/home/Home";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import AgendaCita from "./components/layouts/agendacita/AgendaCita";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import OdontologiasArmenia from "./components/pages/mapaArmenia/OdontologiasArmenia";
import { Ranking } from "./components/pages/Ranking/Ranking";
import { DoctorCard } from "./components/pages/Especialistas/DoctorCard";
import Contacto from "./components/pages/contacto/Contacto";
import Chatbot from "./components/layouts/chatbot/Chatbot";
import RegistroFormulario from "./components/layouts/Register/RegistroFormulario";
import Login from "./components/layouts/Login/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");
  const [headerComponent, setHeaderComponent] = useState(<Header />);

  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar la página
    const loggedIn = localStorage.getItem("loggedIn");
    const rol = localStorage.getItem("rol");

    if (loggedIn) {
      // Establecer el rol en el estado de la aplicación
      // Esto es opcional, puedes usar el valor de "rol" donde sea necesario
      setRol(rol);

      // Actualizar el estado de autenticación
      setIsAuthenticated(true);

      // Actualizar el componente de encabezado
      setHeaderComponent(
        rol === "administrador" ? (
          <HeaderAdministrador />
        ) : (
          <HeaderPaciente isAuthenticated={true} />
        )
      );
    } else {
      // Redireccionar al usuario a la página de inicio sin autenticación
      setRedirectTo("/Inicio");
    }
  }, []); // No hay dependencias, solo se ejecuta una vez al cargar la página

  const setRol = (rol) => {
    if (rol === "administrador") {
      setHeaderComponent(<HeaderAdministrador />);
      setIsAuthenticated(true);
      setRedirectTo("/Inicio"); // Redirigir a la página de inicio
    } else if (rol === "paciente") {
      setHeaderComponent(<HeaderPaciente isAuthenticated={true} />);
      setIsAuthenticated(true);
      setRedirectTo("/Inicio"); // Redirigir a la página de inicio
    } else {
      setHeaderComponent(<Header />);
      setIsAuthenticated(false);
    }
  };

  const handleLogout = () => {
    // Eliminar la información de inicio de sesión del almacenamiento local
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("rol");

    // Actualizar el estado de autenticación
    setIsAuthenticated(false);

    // Redireccionar al usuario a la página de inicio sin autenticación
    setRedirectTo("/Inicio");
  };

  return (
    <>
      {headerComponent}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Mapa" element={<OdontologiasArmenia />} />
        <Route path="/Agendar" element={<AgendaCita />} />
        <Route path="/Ranking" element={<Ranking/>} />
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
