import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    const passwordParam = searchParams.get('password');
    if (emailParam && passwordParam) {
      setEmail(emailParam);
      setPassword(passwordParam);
    }
  }, [location.search]);

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);
    console.log('Entered Email:', email);
    console.log('Entered Password:', password);

    if (email === storedEmail && password === storedPassword) {
      // Inicio de sesión exitoso, redirigir al home
      navigate('/HeaderPaciente');
    } else {
      setError('No te has registrado. Por favor, regístrate primero.');
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
        {/* <img className="iconoInicio" src="./public/agregar-usuario.png" alt="imagen de persona" /> */}
      </div>
      <div className="Login">
        <section className="LoginForm">
          <input
            className="LoginInput"
            type="text"
            placeholder="Ingrese su correo"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="LoginInput"
            type="password"
            placeholder="Ingrese su contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="LoginButton" onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </section>
        <p className="LoginP">
          ¿Aún no eres miembro?{' '}
          <Link to="/Register" className="LoginA">
            Regístrate
          </Link>
        </p>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
