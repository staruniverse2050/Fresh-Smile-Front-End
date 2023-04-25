import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./assets/css/contacto.css";
// import "./assets/css/nivo-slider-theme.css";
// import "./assets/css/responsive.css";
import "./assets/css/style.css";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
