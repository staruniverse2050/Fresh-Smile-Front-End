import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    const passwordParam = searchParams.get('password');
    if (emailParam && passwordParam) {
      setEmail(emailParam);
      setPassword(passwordParam);
    }
  }, [location.search]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
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
        <img className="iconoInicio" src="./public/agregar-usuario.png" alt="imagen de persona" />
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
            Iniciar Sesion
          </button>
        </section>
        <p className="LoginP">
          ¿Aun no eres miembro?{' '}
          <Link to="/Register" className="LoginA">
            Registrate
          </Link>
        </p>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
