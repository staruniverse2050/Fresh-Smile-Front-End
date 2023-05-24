import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const userData = {
      name,
      email,
      password,
    };

    fetch('your-api-url/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          // Registro exitoso
          navigate('/Login?registered=true');
        } else {
          // Error en el registro
          throw new Error('Error en el registro');
        }
      })
      .catch((error) => {
        setError('Error en el registro');
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Por favor, complete todos los campos.');
    } else if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
    } else if (!isValidEmail(email)) {
      setError('Por favor, ingrese un correo electrónico válido.');
    } else {
      handleRegister();
    }
  };

  const isValidEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      {/* Header sin barra */}
      <div className="RegisterHeader">
        {/* <img className="iconoRegistro" src="/agregar-usuario.png" alt="imagen de persona" /> */}
      </div>
      <div className="Register">
        <section className="RegisterForm">
          <input
            className="RegisterInput"
            type="text"
            placeholder="Ingrese su nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="RegisterInput"
            type="text"
            placeholder="Ingrese su correo"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="RegisterInput"
            type="password"
            placeholder="Ingrese su contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="RegisterInput"
            type="password"
            placeholder="Confirme su contraseña"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="RegisterButton" onClick={handleSubmit}>
            Registrarse
          </button>
        </section>
        <p className="RegisterP">
          ¿Ya eres miembro?{' '}
          <Link to="/Login" className="RegisterA">
            Inicia Sesión
          </Link>
        </p>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
