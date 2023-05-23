import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";
import { Home } from "./components/pages/home/Home";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import { Register } from "./components/layouts/Register/Register";
import { Login } from "./components/layouts/Login/Login";
import { AgendaCita } from "./components/layouts/agendacita/AgendaCita";
import { HistoriaClinica } from "./components/layouts/historiaclinica/HistoriaClinica";
import { Blog } from "./components/pages/blog/Blog";
import Contacto from "./components/pages/contacto/Contacto";
import { Clinica } from "./components/pages/clinica/Clinica";
import { Cita } from "./components/pages/cita/Cita";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [paciente, setPaciente] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetch("tu-api-url/pacientes/1") // Reemplaza "tu-api-url" con la URL de tu API y el ID del paciente adecuado
        .then(response => response.json())
        .then(data => {
          setPaciente(data);
          setIsLoading(false);
        })
        .catch(error => console.error(error));
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Register" element={<Register />} /> {/* Corregido */}
        <Route path="/Login" element={<Login />} /> {/* Corregido */}
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Clinica" element={<Clinica />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/AgendaCita" element={<AgendaCita />} />
        <Route path="/HistoriaClinica" element={<HistoriaClinica />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Cita" element={<Cita />} />
      </Routes>
    </>
  );
}

export default App;
