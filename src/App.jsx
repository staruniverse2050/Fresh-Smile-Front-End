import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Header } from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import {Clinica} from "./components/pages/clinica/Clinica";
import { Blog } from "./components/pages/blog/Blog";
import Contacto from './components/pages/contacto/Contacto';



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/Home" element={<Home />}> /</Route>
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Clinica" element={<Clinica />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;