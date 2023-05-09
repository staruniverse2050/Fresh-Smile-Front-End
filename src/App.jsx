import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Header } from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import { Login } from "./components/layouts/Login/Login";
import { Register } from "./components/layouts/Register/Register";
import { Blog } from "./components/pages/blog/Blog";
import Contacto from "./components/pages/contacto/Contacto";
import {Clinica} from "./components/pages/clinica/Clinica";
import {Informacion1} from "./components/pages/procedimientos/Informacion1/Informacion1"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Procedimientos" element={<Procedimientos />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/Register/Register" element={<Register />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Clinica" element={<Clinica />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Informacion1" element={<Informacion1 />} /> 
      </Routes>
    </>
  );
}

export default App;