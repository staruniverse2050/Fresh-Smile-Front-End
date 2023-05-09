import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import './Login.css';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {/* Header sin barra */}
          <button className="LoginButton"onClick={() => loginWithRedirect()}>
            Iniciar Sesion
          </button>
    </>
  );
};
