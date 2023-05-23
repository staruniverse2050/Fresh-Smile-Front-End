import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Register } from '../Register/Register';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
      // Aquí puedes realizar acciones adicionales, como guardar el token de acceso en el estado o redireccionar a otra página
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      setError('Por favor, complete todos los campos.');
    } else {
      handleLogin();
    }
  };

  return (
    <>
      {/* Header sin barra */}
      <div className="LoginHeader">
      <img className="iconoInicio" src={require('./agregar-usuario.png')} alt="imagen de persona" />

      </div>
      <div className="Login">
        {showRegister ? (
          // Formulario de registro
          <Register handleLogin={() => setShowRegister(false)} />
        ) : (
          // Formulario de inicio de sesión
          <section className="LoginForm">
            {/* Resto del código del formulario de inicio de sesión */}
          </section>
        )}
        <p className="LoginP">
          ¿Aun no eres miembro?{' '}
          <a href="#" className="LoginA" onClick={() => setShowRegister(true)}>
            Registrate
          </a>
        </p>
        {error && <p>{error}</p>}
      </div>
    </>
  );
  
};
