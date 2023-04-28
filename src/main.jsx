import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./assets/css/contacto.css";
// import "./assets/css/nivo-slider-theme.css";
// import "./assets/css/responsive.css";
import "./assets/css/style.css";




import { BrowserRouter as Router } from "react-router-dom";
import Clinica from "./components/pages/clinica/Clinica";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Clinica />
    </Router>
  </React.StrictMode>
);
