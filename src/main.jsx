import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mojhdurd1n5u861q.us.auth0.com"
      clientId="2y0xVdZqSipRDcKCy2e2kIPazhI86hB3"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
