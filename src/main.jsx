import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6nepdnum14mdikvz.us.auth0.com"
      clientId="rlK68f9yOGhatreJ2bnMLT8WWEJC0vdr"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
